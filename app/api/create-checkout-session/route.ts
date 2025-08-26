// app/api/create-checkout-session/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const STRIPE_SECRET =
  process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET) {
  throw new Error("Missing Stripe secret key (STRIPE_SECRET_KEY[_LIVE])");
}

// 👇 use the version your SDK typings support
const stripe = new Stripe(STRIPE_SECRET, { apiVersion: "2023-10-16" });
// (Alternatively, you can omit apiVersion entirely)

type CheckoutItem =
  | { name: string; price: number; quantity?: number }           // ad-hoc
  | { priceId: string; quantity?: number; name?: string };       // Stripe Price

function getBaseUrl(req: Request) {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  if (host) return `${proto}://${host}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { items?: CheckoutItem[] };
    const items = Array.isArray(body?.items) ? body.items : [];
    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (it: any) => {
        if (it.priceId) {
          return {
            price: String(it.priceId),
            quantity: Number(it.quantity ?? 1),
          };
        }
        const unit = Math.round(Number(it.price ?? 0) * 100);
        return {
          price_data: {
            currency: "aud",
            product_data: { name: String(it.name ?? "Product") },
            unit_amount: unit,
          },
          quantity: Number(it.quantity ?? 1),
        };
      }
    );

    const baseUrl = getBaseUrl(req);

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
    console.error("checkout error", err);
    return NextResponse.json(
      { error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
