// app/lib/products.ts
// One source of truth for your pricing (AUD cents) and hierarchy.
// - "leaf": directly purchasable item with a price
// - "bundle": a display container that *includes* child SKUs (the bundle may
//             have its own price OR just be for UI grouping)

export type Billing =
  | "one_time"
  | "per_year"
  | "per_participant"
  | "per_session"
  | "per_use";

export type Currency = "AUD";

export type Sku =
  // Core / examples
  | "PROCEDURAL_JUSTICE_FRAMEWORK"
  | "SHSARC_WORKSHOP"
  // Culture Risk Diagnostic (CRD)
  | "CRD_SUB_ALL"              // Annual subscription (includes all modules)
  | "CRD_COPSOQ_FULL"
  | "CRD_SHEQ_FULL"
  | "CRD_SHEQ_MOD4"
  | "CRD_PULSE_SUITE"
  | "CRD_PULSE_TOPIC"
  | "CRD_GROUP"                // UI-only bundle (no price)
  ;

type Base = {
  sku: Sku;
  name: string;
  kind: "leaf" | "bundle";
  currency?: Currency;
  // Optional: for UI labels like “per participant”, “per year”, etc.
  billing?: Billing;
  // Optional: use to present a bundle tree in the UI
  children?: Sku[];
  // Optional note shown in UI (e.g., “Includes all modules below”)
  note?: string;
};

// A purchasable item
export type Leaf = Base & {
  kind: "leaf";
  currency: Currency;
  unit_amount: number; // cents
};

// A container for children (may or may not be purchasable itself)
// If a bundle *is* purchasable (like CRD_SUB_ALL), we still model it as a LEAF
// with its own price (so it can be added to cart). A pure container uses kind:"bundle".
export type Bundle = Base & {
  kind: "bundle";
  children: Sku[];
};

export type Product = Leaf | Bundle;

export const PRODUCTS: Record<Sku, Product> = {
  // ── General examples ──────────────────────────────────────────────────────
  PROCEDURAL_JUSTICE_FRAMEWORK: {
    sku: "PROCEDURAL_JUSTICE_FRAMEWORK",
    name: "Procedural Justice Framework™",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 400000, // $4,000
    billing: "one_time",
  },

  SHSARC_WORKSHOP: {
    sku: "SHSARC_WORKSHOP",
    name: "SHSARC™ Workshop (per participant)",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 75000, // $750
    billing: "per_participant",
  },

  // ── Culture Risk Diagnostic (CRD) ─────────────────────────────────────────
  // UI container for grouping (not purchasable, no price)
  CRD_GROUP: {
    sku: "CRD_GROUP",
    name: "Culture Risk Diagnostic™",
    kind: "bundle",
    children: [
      "CRD_SUB_ALL",
      "CRD_COPSOQ_FULL",
      "CRD_SHEQ_FULL",
      "CRD_SHEQ_MOD4",
      "CRD_PULSE_SUITE",
      "CRD_PULSE_TOPIC",
    ],
    note: "Choose the annual subscription (all modules) or build your own from modules below.",
  },

  // Annual subscription — purchasable LEAF with its own price
  CRD_SUB_ALL: {
    sku: "CRD_SUB_ALL",
    name: "CRD™ Annual Subscription (includes all modules)",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 1500000, // $15,000 / year
    billing: "per_year",
  },

  // Individual CRD modules (leaves)
  CRD_COPSOQ_FULL: {
    sku: "CRD_COPSOQ_FULL",
    name: "COPSOQ Full (annual psychosocial assessment)",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 375000, // $3,750 / year
    billing: "per_year",
  },

  CRD_SHEQ_FULL: {
    sku: "CRD_SHEQ_FULL",
    name: "SHEQ Full (annual sexual harassment experiences analysis)",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 300000, // $3,000 / year
    billing: "per_year",
  },

  CRD_SHEQ_MOD4: {
    sku: "CRD_SHEQ_MOD4",
    name: "SHEQ Modules 4 (per module)",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 75000, // $750 each (set quantity to #modules)
    billing: "per_use",
  },

  CRD_PULSE_SUITE: {
    sku: "CRD_PULSE_SUITE",
    name: "Pulse Surveys Suite (annual, all topics)",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 300000, // $3,000 / year
    billing: "per_year",
  },

  CRD_PULSE_TOPIC: {
    sku: "CRD_PULSE_TOPIC",
    name: "Pulse Survey – per topic",
    kind: "leaf",
    currency: "AUD",
    unit_amount: 30000, // $300 each (set quantity to #topics)
    billing: "per_use",
  },
};

// Helpers
export function getProduct(sku: Sku): Product | undefined {
  return PRODUCTS[sku];
}
export function isBundle(p: Product | undefined): p is Bundle {
  return !!p && p.kind === "bundle";
}
export function isLeaf(p: Product | undefined): p is Leaf {
  return !!p && p.kind === "leaf";
}
export const ALL = Object.values(PRODUCTS);

// Display helper
export function formatAUD(cents: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" })
    .format(cents / 100);
}
