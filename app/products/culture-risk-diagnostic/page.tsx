import Link from "next/link";
import type { CSSProperties } from "react";
import { SUBPRODUCTS } from "./subproducts";
import BuyNow from "../../components/BuyNow";

// ───────────────────────────────────────────────────────────────────────────────
// Optional catalog lookup (used if you keep data/catalog.json in the repo root)
// ───────────────────────────────────────────────────────────────────────────────
type CatalogItem = { name?: string; priceId?: string };
async function getCatalog(): Promise<CatalogItem[]> {
  const mod = await import("../../../data/catalog.json"); // repo-root /data/catalog.json
  return (mod as any).default as CatalogItem[];
}

// ───────────────────────────────────────────────────────────────────────────────
// Display-only price labels (text shown on each tile)
// ───────────────────────────────────────────────────────────────────────────────
const PRICE_LABEL_BY_SLUG: Record<string, string> = {
  copsoq: "A$ 3,750.00 — annual subscription",
  sheq: "A$ 3,000.00 — annual subscription",
  "culture-pulse-surveys": "A$ 3,000.00 — annual subscription",
  "qualitative-interventions": "A$ 750.00 — per session (1 hour)",
  "code-of-conduct": "A$ 750.00 — per review",
  "code-of-ethics": "A$ 750.00 — per review",
  ocas: "A$ 2,500.00 — per engagement",
  wfbs: "A$ 2,500.00 — per engagement",
  "culture-risk-indicators": "Contact for quote",
};

// ───────────────────────────────────────────────────────────────────────────────
// Hard-wired Stripe Price IDs for each subproduct (fill with your real price_…)
// If a slug is undefined here, we’ll try to find a priceId via catalog.json;
// if still none is found, we’ll show “Enquire / Request invoice”.
// ───────────────────────────────────────────────────────────────────────────────
const PRICE_ID_BY_SLUG: Record<string, string | undefined> = {
  // Annual subscriptions
  copsoq: undefined,                  // e.g. "price_XXXXXXXX_copsoq_annual_3750"
  sheq: undefined,                    // e.g. "price_XXXXXXXX_sheq_annual_3000"
  "culture-pulse-surveys": undefined, // e.g. "price_XXXXXXXX_pulse_annual_3000"

  // One-off / per engagement
  ocas: undefined, // set when ready
  wfbs: undefined, // set when ready (you added WFBS later — paste its price_… id here)

  "code-of-conduct": "price_1RznlFI3l2fmoUA7DJ3CAuXh",
  "code-of-ethics": "price_1RznmGI3l2fmoUA7Nu5lV2XP",
  "qualitative-interventions": "price_1RznqYI3l2fmoUA7mXcIfjIi",
  "culture-risk-indicators": "price_1RznrPI3l2fmoUA7EODLJphs",
};

// If you want to auto-find priceIds from data/catalog.json by name:
const PRICE_KEYWORD_BY_SLUG: Record<string, string | undefined> = {
  copsoq: "copsoq subscription",
  sheq: "sheq subscription",
  "culture-pulse-surveys": "pulse subscription",
  "qualitative-interventions": "qualitative interventions",
  "code-of-conduct": "code of conduct",
  "code-of-ethics": "code of ethics",
  ocas: "ocas",
  wfbs: "wfbs",
  "culture-risk-indicators": "culture risk indicators",
};

export const metadata = {
  title: "Culture Risk Diagnostic™ — Ad Meliorem",
  description:
    "A forensic cultural assessment that maps hotspots and provides leading indicators, risk scores and evidence of due diligence.",
};

export default async function CRDPage() {
  const catalog = await getCatalog();

  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16,
    marginTop: 16,
  };

  const tile: CSSProperties = {
    background: "#f1c40f",
    color: "#000",
    border: "1px solid #f1c40f",
    borderRadius: 12,
    padding: 16,
    textDecoration: "none",
    display: "block",
    fontWeight: 700,
  };

  const titleStyle: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.35 };
  const shortStyle: CSSProperties = { margin: "6px 0 8px 0", fontSize: 13, opacity: 0.9, fontWeight: 500 };
  const priceStyle: CSSProperties = { margin: 0, fontSize: 14, fontWeight: 700 };

  // Helper: prefer hard-wired map; else try catalog.json keyword match
  const priceIdForSlug = (slug: string): string | null => {
    const pinned = PRICE_ID_BY_SLUG[slug];
    if (pinned) return pinned;
    const kw = PRICE_KEYWORD_BY_SLUG[slug];
    if (!kw) return null;
    const hit = catalog.find((it) => it?.name?.toLowerCase().includes(kw.toLowerCase()));
    return hit?.priceId ?? null;
  };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Culture Risk Diagnostic™</h1>
      <p>
        The Culture Risk Diagnostic™ provides leading indicators, risk scores and due-diligence evidence. Choose a subproduct to see modules,
        deliverables, and purchase options.
      </p>

      {/* Subproducts grid with price labels + Buy buttons when priceId is available */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Subproducts</h2>
        <div style={grid}>
          {SUBPRODUCTS.map((sp) => {
            const label = PRICE_LABEL_BY_SLUG[sp.slug];
            const priceId = priceIdForSlug(sp.slug);

            return (
              <div key={sp.slug} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href={`/products/culture-risk-diagnostic/${sp.slug}`} style={tile}>
                  <p style={titleStyle}>{sp.title}</p>
                  <p style={shortStyle}>{sp.short}</p>
                  {label ? <p style={priceStyle}>{label}</p> : null}
                </Link>

                {priceId ? (
                  <div>
                    <BuyNow priceId={priceId} name={sp.title} price={0}>
                      Buy Now
                    </BuyNow>
                  </div>
                ) : (
                  <div>
                    <a
                      href="/contact"
                      style={{
                        border: "1px solid #444",
                        padding: "8px 12px",
                        borderRadius: 8,
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      Enquire / Request invoice
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverable</h2>
        <p>
          A regulator-ready report with cultural risk scores and hazard mapping, built to withstand regulator scrutiny and provide precise
          early-warning indicators of harm.
        </p>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why organisations purchase it</h2>
        <ul>
          <li>Turns culture into a measured, managed, defensible governance area.</li>
          <li>Assesses psychosocial safety for high-liability hazards.</li>
          <li>Delivers early-warning indicators before incidents multiply.</li>
          <li>Demonstrates due diligence to regulators and boards.</li>
        </ul>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverables (summary)</h2>
        <ul>
          <li>Validated survey instruments and targeted interviews.</li>
          <li>Key Culture Risk Indicators with thresholds and trend views.</li>
          <li>Precise Prevention Plans.</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          <a
            href="/contact"
            style={{
              background: "#f1c40f",
              color: "#000",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Discuss CRD →
          </a>
        </p>
      </section>
    </main>
  );
}
