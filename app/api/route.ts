import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "../../lib/stripe";
import { PRODUCTS } from "../../lib/products";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const agree = !!body?.agree;
    const items: Array<{ sku: string; qty: number }> = Array.isArray(body?.items) ? body.items : [];

    if (!agree) {
      return NextResponse.json({ error: "Terms must be accepted." }, { status: 400 });
    }
    if (!items.length) {
      return NextResponse.json({ error: "Basket is empty." }, { status: 400 });
    }

    // Build Stripe line_items from your PRODUCTS table
    const line_items = items
      .map(({ sku, qty }) => {
        const p: any = (PRODUCTS as any)[sku];
        if (!p || typeof p.unit_amount !== "number" || qty <= 0) return null;
        return {
          quantity: qty,
          price_data: {
            currency: "aud",
            unit_amount: p.unit_amount,
            product_data: {
              name: p.name || sku,
              description: p.description || undefined,
            },
          },
        };
      })
      .filter(Boolean) as any[];

    if (!line_items.length) {
      return NextResponse.json({ error: "No purchasable items." }, { status: 400 });
    }

    const origin = getOrigin();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      // collect billing details; tweak as needed:
      billing_address_collection: "auto",
      allow_promotion_codes: false,
      // You can pass metadata, e.g. selected SKUs:
      metadata: {
        items: JSON.stringify(items),
      },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Checkout failed." }, { status: 500 });
  }
}

function getOrigin() {
  const h = headers();
  const proto = h.get("x-forwarded-proto") || "https";
  const host = h.get("host")!;
  return `${proto}://${host}`;
}
