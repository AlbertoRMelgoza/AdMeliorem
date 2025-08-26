// app/api/_env/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    STRIPE_SECRET_KEY: !!process.env.STRIPE_SECRET_KEY,
    STRIPE_SECRET: !!process.env.STRIPE_SECRET,
    VERCEL_ENV: process.env.VERCEL_ENV || null
  });
}
