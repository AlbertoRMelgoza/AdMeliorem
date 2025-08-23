import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 30) || "missing";
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "ok" : "missing";
  return NextResponse.json({ supabaseUrl: url + "...", anonKey: anon });
}
