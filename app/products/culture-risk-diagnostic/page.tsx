import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Culture Risk Diagnostic™ — Ad Meliorem",
  description:
    "A forensic cultural assessment that maps hotspots and provides leading indicators, risk scores and evidence of due diligence.",
};

// Hard-coded subproducts (no external imports)
const SUBPRODUCTS = [
  {
    slug: "copsoq",
    title: "COPSOQ (Copenhagen Psychosocial Questionnaire)",
    short: "Psychosocial hazard mapping across workload, justice, relationships.",
    priceLabel: "A$ 3,750.00 — annual subscription",
  },
  {
    slug: "sheq",
    title: "SHEQ (Sexual Harassment Experiences Questionnaire)",
    short: "Surfaces harassment, unwanted sexual attention, coercion, unsafe climates.",
    priceLabel: "A$ 3,000.00 — annual subscription",
  },
  {
    slug: "ocas",
    title: "OCAS (Overt–Covert Aggression Scale)",
    short: "Detects bullying, aggression, intimidation — overt and subtle.",
    priceLabel: "A$ 2,250.00 — per engagement",
  },
  {
    slug: "wfbs",
    title: "WFBS (Workplace Feelings & Behaviour Survey)",
    short: "Maps in-group favouritism, exclusion and covert harmful behaviours.",
    priceLabel: "A$ 2,250.00 — per engagement",
  },
  {
    slug: "culture-pulse-surveys",
    title: "Culture Pulse Surveys",
    short: "Short, repeatable pulses to track change and sustain improvement.",
    priceLabel: "A$ 3,000.00 — annual subscription",
  },
  {
    slug: "code-of-conduct",
    title: "Review / Development of Code of Conduct",
    short: "Modern, defensible conduct standards and roll-out.",
    priceLabel: "A$ 750.00 — per review",
  },
  {
    slug: "code-of-ethics",
    title: "Review / Development of Code of Ethics",
    short: "Ethical principles beyond compliance — embedded in practice.",
    priceLabel: "A$ 750.00 — per review",
  },
  {
    slug: "qualitative-interventions",
    title: "Qualitative Interventions",
    short: "Focus Groups • Interviews • Observations",
    priceLabel: "A$ 750.00 — per session (1 hour)",
  },
  {
    slug: "culture-risk-indicators",
    title: "Culture Risk Indicators (Risk Culture)",
    short: "Customisable indicators aligned to key risk domains.",
    priceLabel: "A$ 3,000.00 - annual subscription",
  },
];

export default function CRDPage() {
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

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Culture Risk Diagnostic™</h1>
      <p>
        The Culture Risk Diagnostic™ provides leading indicators, risk scores and due-diligence evidence. Choose a
        subproduct to see modules and details.
      </p>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Subproducts</h2>
        <div style={grid}>
          {SUBPRODUCTS.map((sp) => (
            <div key={sp.slug} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href={`/products/culture-risk-diagnostic/${sp.slug}`} style={tile}>
                <p style={titleStyle}>{sp.title}</p>
                <p style={shortStyle}>{sp.short}</p>
                <p style={priceStyle}>{sp.priceLabel}</p>
              </Link>

              {/* Keep it simple: enquiries only from this page.
                 Purchases (if any) can happen on the deeper pages you already set up. */}
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
                  Enquire 
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverable</h2>
        <p>
          A regulator-ready report with cultural risk scores and hazard mapping, built to withstand regulator scrutiny
          and provide precise early-warning indicators of harm.
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
    </main>
  );
}
