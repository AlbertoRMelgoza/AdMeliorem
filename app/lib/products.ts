// app/lib/products.ts
// Prices are in CENTS (Stripe convention). AUD 4,000.00 => 400000
export type SKU =
  | "PROCEDURAL_JUSTICE_FRAMEWORK"
  | "RCABH_WORKSHOP"
  | "SHSARC_WORKSHOP"
  | "SHEQ_FULL"
  | "COPSOQ_FULL"
  | "NEGOTIATION";

export const PRODUCTS: Record<
  SKU,
  { name: string; unit_amount: number; currency: "aud" }
> = {
  PROCEDURAL_JUSTICE_FRAMEWORK: {
    name: "Procedural Justice Framework™",
    unit_amount: 400000, // AUD 4,000
    currency: "aud",
  },
  RCABH_WORKSHOP: {
    name: "RCABH™ – Aggression/Bullying/Harassment Workshop",
    unit_amount: 75000, // AUD 750
    currency: "aud",
  },
  SHSARC_WORKSHOP: {
    name: "SHSARC™ – Sexual Harassment & Assault Workshop",
    unit_amount: 75000, // AUD 750
    currency: "aud",
  },
  SHEQ_FULL: {
    name: "SHEQ – Sexual Harassment Experiences (Full)",
    unit_amount: 300000, // AUD 3,000
    currency: "aud",
  },
  COPSOQ_FULL: {
    name: "COPSOQ – Annual Psychosocial Assessment (Full)",
    unit_amount: 300000, // AUD 3,000
    currency: "aud",
  },
  NEGOTIATION: {
    name: "Negotiation (per engagement)",
    unit_amount: 300000, // AUD 3,000
    currency: "aud",
  },
};
export function formatAUD(cents: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format((cents || 0) / 100);
}
