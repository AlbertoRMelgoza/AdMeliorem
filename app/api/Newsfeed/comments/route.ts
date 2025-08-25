// app/api/Newsfeed/comments/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { createHash } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const h = (s: string) => createHash("sha256").update(s).digest("hex").slice(0, 32);

async function ensureSchema() {
  await db(`
    CREATE TABLE IF NOT EXISTS news_comments (
      id BIGSERIAL PRIMARY KEY,
      link_hash TEXT NOT NULL,
      link TEXT NOT NULL,
      title TEXT NOT NULL,
      name TEXT,
      body TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      approved BOOLEAN NOT NULL DEFAULT FALSE
    );
  `);
}

export async function GET(req: Request) {
  try {
    await ensureSchema();
    const url = new URL(req.url);
    const link = url.searchParams.get("link");
    if (!link) return NextResponse.json({ comments: [] });

    const { rows } = await db(
      `SELECT id, name, body, created_at
       FROM news_comments
       WHERE link_hash = $1 AND approved = TRUE
       ORDER BY created_at DESC
       LIMIT 100`,
      [h(link)]
    );

    return NextResponse.json({
      comments: rows.map((r: any) => ({
        id: r.id,
        name: r.name || "Anonymous",
        body: r.body,
        created_at: r.created_at,
      })),
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || String(e) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await ensureSchema();
    const { link, title, name, body } = await req.json();
    if (!link || !body) {
      return NextResponse.json({ error: "Missing link/body" }, { status: 400 });
    }
    if (String(body).length > 2000) {
      return NextResponse.json({ error: "Comment too long" }, { status: 400 });
    }

    await db(
      `INSERT INTO news_comments (link_hash, link, title, name, body, approved)
       VALUES ($1,$2,$3,$4,$5,FALSE)`,
      [h(link), link, title || link, name || null, body]
    );

    return NextResponse.json({ ok: true, pending: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || String(e) }, { status: 500 });
  }
}
