import { NextResponse } from "next/server";
import stripe from "../../lib/stripe"; // ← correct path + default import

// Minimal in-file product list (in cents). We'll expand after testing.
const PRODUCTS: Record<string, { name: string; unitAmount: number }> = {
  SHSARC_WORKSHOP: { name: "SHSARC™ Workshop (per participant)", unitAmount: 75000 }, // AUD 750
};

type Body = {
  termsAccepted: boolean;
  items: Array<{ sku: string; qty: number }>;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Body;

    if (!data?.termsAccepted) {
      return NextResponse.json({ error: "Terms must be accepted." }, { status: 400 });
    }

    if (!Array.isArray(data.items) || data.items.length === 0) {
      return NextResponse.json({ error: "No items." }, { status: 400 });
    }

    // Build stripe line items
    const line_items = data.items.map(({ sku, qty }) => {
      const p = PRODUCTS[sku];
      if (!p) throw new Error(`Unknown SKU: ${sku}`);
      if (!qty || qty < 1) throw new Error(`Invalid qty for ${sku}`);
      return {
        quantity: qty,
        price_data: {
          currency: "aud",
          unit_amount: p.unitAmount,
          product_data: { name: p.name },
        },
      };
    });

    const origin = new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?canceled=1`,
      billing_address_collection: "required",
      metadata: { site: "albertormelgoza.com" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("checkout error", err);
    return NextResponse.json({ error: err?.message || "Checkout failed" }, { status: 500 });
  }
}
