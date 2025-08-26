import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // use Node runtime (Stripe needs it)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!); // use account default API version

export async function POST(req: NextRequest) {
  try {
    const { items = [], customer_email } = await req.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const line_items = items.map((it: any) => {
      const unit_amount = Math.round(Number(it.price) * 100);
      if (!it?.name || !unit_amount || !it?.quantity) {
        throw new Error("Invalid item.");
      }
      return {
        price_data: {
          currency: "aud", // change if needed
          product_data: { name: it.name },
          unit_amount,
        },
        quantity: it.quantity,
      };
    });

    const origin =
      req.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      customer_email: customer_email || undefined,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      shipping_address_collection: { allowed_countries: ["AU", "NZ", "US"] },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
