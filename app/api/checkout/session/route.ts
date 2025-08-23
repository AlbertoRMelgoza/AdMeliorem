// temporary stub so production builds pass until Stripe is enabled
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    { error: "Checkout not configured yet. Please contact us to purchase." },
    { status: 501 }
  );
}
