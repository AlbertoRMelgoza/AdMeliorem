import { NextResponse } from "next/server";
import Stripe from "stripe";

// Pick live if present (Production), else fall back to test key
const STRIPE_SECRET =
  process.env.STRIPE_SECRET_KEY_LIVE || process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET) {
  throw new Error("Missing Stripe secret key (STRIPE_SECRET_KEY[_LIVE])");
}

const stripe = new Stripe(STRIPE_SECRET, { apiVersion: "2024-06-20" });

export async function POST(req: Request) {
  try {
    const body = await req.json() as { items?: Array<{ name: string; price: number; quantity?: number }> };
    const items = body?.items ?? [];
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const line_items = items.map((it) => ({
      price_data: {
        currency: "aud",
        product_data: { name: it.name },
        unit_amount: Math.round((it.price ?? 0) * 100),
      },
      quantity: it.quantity ?? 1,
    }));

    const isProd = !!process.env.VERCEL_ENV && process.env.VERCEL_ENV === "production";
    const baseUrl = isProd ? "https://albertormelgoza.com" : "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["AU", "NZ", "US"] },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/products`,
      metadata: { site: "Ad Meliorem" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Server error" }, { status: 500 });
  }
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
