import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // Stripe SDK needs Node runtime

type CartItem =
  | { priceId: string; quantity?: number } // preferred: Stripe Price ID
  | { name: string; price: number; quantity?: number }; // fallback: name + unit price (AUD)

export async function POST(req: NextRequest) {
  // Read key at runtime (works on Vercel Preview/Prod)
  const key =
    process.env.STRIPE_SECRET_KEY ??
    process.env.STRIPE_SECRET ?? // optional fallback var name
    "";

  if (!key) {
    return NextResponse.json(
      {
        error:
          "Server is missing STRIPE_SECRET_KEY. Add it in Vercel → Project → Settings → Environment Variables (Production + Preview) and redeploy.",
      },
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

    // Build line_items: prefer Stripe Price IDs if present
    const line_items = items.map((it) => {
      const qty = Math.max(1, Number((it as any).quantity ?? 1));

      if ("priceId" in it && it.priceId) {
        return { price: String(it.priceId), quantity: qty };
      }

      if ("name" in it && "price" in it) {
        const unit_amount = Math.round(Number(it.price) * 100);
        if (!it.name || !Number.isFinite(unit_amount) || unit_amount <= 0) {
          throw new Error("Invalid item payload (name/price).");
        }
        return {
          price_data: {
            currency: "aud",
            product_data: { name: it.name },
            unit_amount,
          },
          quantity: qty,
        };
      }

      throw new Error("Invalid cart item.");
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
      shipping_address_collection: { allowed_countries: ["AU", "NZ", "US"] }, // adjust if needed
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
