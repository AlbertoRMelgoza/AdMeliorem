// app/api/Newsfeed/metrics/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHash } from "crypto";
import { db } from "../../../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LinkIn = { link: string; title?: string };
const h = (s: string) => createHash("sha256").update(s).digest("hex").slice(0, 32);

async function ensureSchema() {
  await db(`
    CREATE TABLE IF NOT EXISTS news_metrics (
      link_hash   TEXT PRIMARY KEY,
      link        TEXT NOT NULL,
      title       TEXT NOT NULL,
      like_count  INTEGER NOT NULL DEFAULT 0,
      share_count INTEGER NOT NULL DEFAULT 0,
      first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

async function upsert(items: LinkIn[]) {
  for (const { link, title } of items) {
    await db(
      `INSERT INTO news_metrics (link_hash, link, title)
       VALUES ($1,$2,$3)
       ON CONFLICT (link_hash) DO NOTHING`,
      [h(link), link, title || link]
    );
  }
}

export async function POST(req: Request) {
  try {
    await ensureSchema();
    const body = await req.json();

    // Get counts for a list of links
    if (body.action === "get" && Array.isArray(body.links)) {
      const links: LinkIn[] = body.links.slice(0, 120);
      await upsert(links);
      const hashes = links.map((l) => h(l.link));
      if (!hashes.length) return NextResponse.json({ counts: {} });

      const rows = await db<{ link_hash: string; like_count: number; share_count: number }>(
        `SELECT link_hash, like_count, share_count
         FROM news_metrics
         WHERE link_hash = ANY($1)`,
        [hashes]
      );

      const byHash: Record<string, { like: number; share: number }> = {};
      rows.rows.forEach((r) => (byHash[r.link_hash] = { like: r.like_count, share: r.share_count }));

      const byLink: Record<string, { like: number; share: number }> = {};
      links.forEach((l) => (byLink[l.link] = byHash[h(l.link)] || { like: 0, share: 0 }));

      return NextResponse.json({ counts: byLink });
    }

    // Toggle like (one per visitor via cookie)
    if (body.action === "toggleLike" && body.link) {
      const link = String(body.link);
      const title = String(body.title || body.link);
      await upsert([{ link, title }]);

      const hash = h(link);
      const cookieName = `nf_like_${hash}`;
      const jar = cookies();
      const already = jar.get(cookieName);

      if (already) {
        await db(`UPDATE news_metrics SET like_count = GREATEST(like_count - 1, 0) WHERE link_hash = $1`, [hash]);
        const res = NextResponse.json({ ok: true, liked: false });
        res.cookies.set(cookieName, "", { path: "/", maxAge: 0 });
        return res;
      } else {
        await db(`UPDATE news_metrics SET like_count = like_count + 1 WHERE link_hash = $1`, [hash]);
        const res = NextResponse.json({ ok: true, liked: true });
        res.cookies.set(cookieName, "1", { path: "/", maxAge: 60 * 60 * 24 * 365 });
        return res;
      }
    }

    // Record a share
    if (body.action === "share" && body.link) {
      const link = String(body.link);
      const title = String(body.title || body.link);
      await upsert([{ link, title }]);
      await db(`UPDATE news_metrics SET share_count = share_count + 1 WHERE link_hash = $1`, [h(link)]);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || String(e) }, { status: 500 });
  }
}
