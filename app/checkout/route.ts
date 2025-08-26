// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";
import { PRODUCTS, type SKU } from "@/app/lib/products";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  items: Array<{ sku: SKU; quantity: number }>;
  termsAccepted: boolean;
  customer_email?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    if (!body?.termsAccepted) {
      return NextResponse.json({ error: "Terms must be accepted." }, { status: 400 });
    }
    if (!Array.isArray(body.items) || !body.items.length) {
      return NextResponse.json({ error: "No items." }, { status: 400 });
    }

    const line_items = [];
    for (const { sku, quantity } of body.items) {
      if (!sku || typeof quantity !== "number" || quantity < 1) continue;
      const p = PRODUCTS[sku];
      if (!p) continue;
      line_items.push({
        quantity,
        price_data: {
          currency: p.currency,
          unit_amount: p.unit_amount,
          product_data: { name: p.name },
        },
      });
    }
    if (!line_items.length) {
      return NextResponse.json({ error: "No valid items." }, { status: 400 });
    }

    const origin = new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: body.customer_email,
      line_items,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      // Optional: require billing address collection
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Checkout failed" }, { status: 500 });
  }
}
