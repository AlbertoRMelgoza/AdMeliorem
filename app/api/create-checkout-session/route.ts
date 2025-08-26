import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type CartItem = { priceId: string; quantity?: number };

export async function POST(req: NextRequest) {
  const key =
    process.env.STRIPE_SECRET_KEY ??
    process.env.STRIPE_SECRET ??
    "";

  if (!key) {
    return NextResponse.json(
      { error: "Missing STRIPE_SECRET_KEY in Vercel project settings." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(key);

  try {
    const { items = [], customer_email } = (await req.json()) as {
      items: CartItem[];
      customer_email?: string;
    };

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    // ✅ Require Price IDs only
    for (const it of items) {
      if (!it?.priceId) {
        return NextResponse.json(
          { error: "Each item must include a Stripe priceId." },
          { status: 400 }
        );
      }
    }

    const line_items = items.map((it) => ({
      price: String(it.priceId),
      quantity: Math.max(1, Number(it.quantity ?? 1)),
    }));

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
