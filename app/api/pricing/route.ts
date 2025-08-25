import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Look in app/data first (your chosen location), then data/ as fallback
    const candidates = [
      path.join(process.cwd(), "app", "data", "pricing.json"),
      path.join(process.cwd(), "data", "pricing.json")
    ];

    let json: unknown = null;
    for (const p of candidates) {
      if (fs.existsSync(p)) {
        json = JSON.parse(fs.readFileSync(p, "utf8"));
        break;
      }
    }
    if (!json) throw new Error("pricing.json not found");
    if (!Array.isArray(json)) throw new Error("pricing.json must be a top-level array");

    return NextResponse.json(json, {
      headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=600" }
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
