import Stripe from "stripe";

let stripe: Stripe | null = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is missing");
  if (!stripe) {
    stripe = new Stripe(key, { apiVersion: "2024-06-20" as any });
  }
  return stripe;
}
