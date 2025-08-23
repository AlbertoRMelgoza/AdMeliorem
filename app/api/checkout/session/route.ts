 // app/api/checkout/session/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Stripe needs Node runtime (NOT edge)
export const runtime = "nodejs";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";

if (!STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment.");
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

// Map each module slug to a Stripe Price ID (replace with real IDs)
const PRICE_BY_MODULE: Record<string, string> = {
  // COPSOQ modules
  "copsoq-demands-at-work": "price_xxx_demands",
  "copsoq-work-organisation-job-content": "price_xxx_jobcontent",
  "copsoq-interpersonal-relations-leadership": "price_xxx_interpersonal",
  "copsoq-work-individual-interface": "price_xxx_interface",
  "copsoq-social-capital": "price_xxx_socialcap",
  // SEQ modules
  "seq-gender-harassment-sexist-hostility": "price_xxx_seq_genderhostility",
  "seq-sexual-hostility": "price_xxx_seq_sexhostility",
  "seq-unwanted-sexual-attention": "price_xxx_seq_unwanted",
  "seq-sexual-coercion": "price_xxx_seq_coercion",
  // Pulse modules
  "pulse-male-dominated-dynamics": "price_xxx_pulse_male",
  "pulse-female-dominated-dynamics": "price_xxx_pulse_female",
  "pulse-power-imbalances": "price_xxx_pulse_power",
  "pulse-speak-up-tolerance": "price_xxx_pulse_speakup",
  "pulse-conflicts-of-interest": "price_xxx_pulse_coi",
  "pulse-values-in-practice": "price_xxx_pulse_values",
  "pulse-beliefs": "price_xxx_pulse_beliefs",
  "pulse-attitudes": "price_xxx_pulse_attitudes",
  "pulse-emotion": "price_xxx_pulse_emotion",
  "pulse-decision-making": "price_xxx_pulse_decisions",
};

export async function POST(req: NextRequest) {
  try {
    const { moduleSlug, parentSlug } = await req.json();

    if (!moduleSlug || !parentSlug) {
      return NextResponse.json({ error: "Missing moduleSlug or parentSlug" }, { status: 400 });
    }

    const priceId = PRICE_BY_MODULE[moduleSlug];
    if (!priceId) {
      return NextResponse.json({ error: `No price configured for ${moduleSlug}` }, { status: 400 });
    }

    const success = `${APP_BASE_URL}/products/culture-risk-diagnostic/${parentSlug}/${moduleSlug}?status=success`;
    const cancel = `${APP_BASE_URL}/products/culture-risk-diagnostic/${parentSlug}/${moduleSlug}?status=cancelled`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: success,
      cancel_url: cancel,
      metadata: {
        product: parentSlug.toUpperCase(), // e.g. COPSOQ
        module: moduleSlug,                // e.g. copsoq-demands-at-work
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Stripe error" }, { status: 500 });
  }
}
