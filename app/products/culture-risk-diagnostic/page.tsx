import Link from "next/link";
import type { CSSProperties } from "react";
import { SUBPRODUCTS } from "./subproducts";
import BuyNow from "../../../components/BuyNow";

type CatalogItem = { name?: string; priceId?: string };

async function getCatalog(): Promise<CatalogItem[]> {
  const mod = await import("../../../data/catalog.json");
  return (mod as any).default as CatalogItem[];
}

// Hard-wire Stripe Price IDs for subproducts
const PRICE_ID_BY_SLUG: Record<string, string | undefined> = {
  copsoq: "price_XXXXXXXX_copsoq_annual_3750",                 // A$3,750/yr
  sheq: "price_XXXXXXXX_sheq_annual_3000",                     // A$3,000/yr
  "culture-pulse-surveys": "price_XXXXXXXX_pulse_annual_3000", // A$3,000/yr

  ocas: "price_XXXXXXXX_ocas_2500",                            // A$2,500/engagement
  wfbs: "price_XXXXXXXX_wfbs_2500",                            // A$2,500/engagement

  "code-of-conduct": "price_XXXXXXXX_coc_750",                 // A$750/review
  "code-of-ethics": "price_XXXXXXXX_coe_750",                  // A$750/review
  "qualitative-interventions": "price_XXXXXXXX_qual_750",      // A$750/session
  "culture-risk-indicators": "price_XXXXXXXX_cri",             // if you created one; else leave undefined
};

// Keywords to find Stripe Price IDs in your catalog.json
const PRICE_KEYWORD_BY_SLUG: Record<string, string> = {
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
    "A forensic cultural assessment with leading indicators, risk scores and evidence of due diligence, with the intention to minimise financial and reputational liability for your business.",
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

  const priceIdForSlug = (slug: string): string | null => {
    const kw = PRICE_KEYWORD_BY_SLUG[slug];
    if (!kw) return null;
    const hit = catalog.find((it) => it?.name?.toLowerCase().includes(kw.toLowerCase()));
    return hit?.priceId ?? null;
  };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Culture Risk Diagnostic™</h1>
      <p>
        The Culture Risk Diagnostic™ is a forensic assessment that maps hotspots and provides leading indicators, risk
        scores and due-diligence evidence.
      </p>

      {/* Subproducts grid WITH prices and Buy buttons when priceId is available */}
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
          A regulator-ready report for key stakeholders with cultural risk scores and hazard mapping. The report is
          designed to withstand regulator scrutiny and provide precise leading indicators of harm.
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
          <li>Validated survey instruments and targeted interviews</li>
          <li>Key Culture Risk Indicators with thresholds and trend views</li>
          <li>Precise Prevention Plans</li>
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
