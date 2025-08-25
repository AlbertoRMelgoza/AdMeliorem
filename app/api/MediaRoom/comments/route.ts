// Alias for comments (GET list, POST submit)
export { GET, POST } from "../../Newsfeed/comments/route";

import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function assertAuth(req: Request) {
  const token = process.env.NEWSFEED_ADMIN_TOKEN || "";
  const auth = req.headers.get("authorization") || "";
  if (!token || auth !== `Bearer ${token}`) throw new Error("Unauthorized");
}

export async function GET(req: Request) {
  try {
    assertAuth(req);
    const { rows } = await db(`
      SELECT id, title, link, name, body, created_at
      FROM news_comments
      WHERE approved = FALSE
      ORDER BY created_at DESC
      LIMIT 200
    `);
    return NextResponse.json({ pending: rows });
  } catch (e: any) {
    const msg = e?.message || String(e);
    return NextResponse.json({ error: msg }, { status: msg === "Unauthorized" ? 401 : 500 });
  }
}
