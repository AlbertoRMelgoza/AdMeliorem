import Link from "next/link";
import type { CSSProperties } from "react";
import BuyButton from "./BuyButton"; // make sure this file exists in the same folder

export const metadata = {
  title: "Culture Risk Diagnostic™ — Ad Meliorem",
  description:
    "A forensic cultural assessment that maps hotspots and provides leading indicators, risk scores, and evidence of due diligence.",
};

// ─────────────────────────────────────────────────────────────
// Subproducts: display labels + fallback charge amounts (AUD)
// ─────────────────────────────────────────────────────────────
type Tile = {
  slug: string;
  title: string;
  short: string;
  priceLabel: string; // what the user sees
  fallbackPrice: number; // what we'll charge if no Stripe priceId is set
};

const SUBPRODUCTS: Tile[] = [
  {
    slug: "copsoq",
    title: "COPSOQ (Copenhagen Psychosocial Questionnaire)",
    short: "Psychosocial hazard mapping across workload, fairness, and relationships.",
    priceLabel: "A$ 3,750.00 — annual subscription",
    fallbackPrice: 3750,
  },
  {
    slug: "sheq",
    title: "SHEQ (Sexual Harassment Experiences Questionnaire)",
    short: "Surfaces harassment, unwanted sexual attention, coercion, and unsafe climates.",
    priceLabel: "A$ 3,000.00 — annual subscription",
    fallbackPrice: 3000,
  },
  {
    slug: "ocas",
    title: "OCAS (Overt–Covert Aggression Scale)",
    short: "Detects bullying, aggression, intimidation — overt and subtle.",
    priceLabel: "A$ 2,250.00 — per engagement",
    fallbackPrice: 2250,
  },
  {
    slug: "wfbs",
    title: "WFBS (Workplace Feelings & Behaviour Survey)",
    short: "Maps in‑group favouritism, exclusion, and covert feelings.",
    priceLabel: "A$ 2,250.00 — per engagement",
    fallbackPrice: 2250,
  },
  {
    slug: "culture-pulse-surveys",
    title: "Culture Risk Pulse Surveys",
    short: "Short, repeatable pulses to track culture risks and control them.",
    priceLabel: "A$ 3,000.00 — annual subscription",
    fallbackPrice: 3000,
  },
  {
    slug: "code-of-conduct",
    title: "Review / Development of Code of Conduct",
    short: "Modern, defensible conduct standards and roll‑out.",
    priceLabel: "A$ 750.00 — per review",
    fallbackPrice: 750,
  },
  {
    slug: "code-of-ethics",
    title: "Review / Development of Code of Ethics",
    short: "Ethical principles that guide behaviour and decision‑making beyond compliance.",
    priceLabel: "A$ 750.00 — per review",
    fallbackPrice: 750,
  },
  {
    slug: "qualitative-interventions",
    title: "Qualitative Interventions",
    short: "Focus groups • Interviews • Observations.",
    priceLabel: "A$ 750.00 — per session (1 hour)",
    fallbackPrice: 750,
  },
  {
    slug: "culture-risk-indicators",
    title: "Culture Risk Indicators (Risk Culture)",
    short: "Customisable indicators aligned to key risk domains.",
    priceLabel: "A$ 750.00 — per product",
    fallbackPrice: 750,
  },
];

// Optional: paste your real Stripe price IDs here to charge Stripe prices
const PRICE_ID_BY_SLUG: Record<string, string | undefined> = {
  // copsoq: "price_XXXXXXXXXXXXXXXX",
  // ...
};

export default function CRDPage() {
  const wrap: CSSProperties = {
    maxWidth: 1000,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const card: CSSProperties = {
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  };
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
    WebkitTapHighlightColor: "rgba(241, 196, 15, 0.35)",
  };
  const titleStyle: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.35 };
  const shortStyle: CSSProperties = { margin: "6px 0 8px 0", fontSize: 13, opacity: 0.9, fontWeight: 500 };
  const priceStyle: CSSProperties = { margin: 0, fontSize: 14, fontWeight: 700 };
  const tapCue: CSSProperties = { marginTop: 8, fontWeight: 700, color: "#000" };

  const callBtn: CSSProperties = {
    display: "inline-block",
    background: "#f1c40f",
    color: "#000",
    padding: "10px 16px",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
  };
  const ghostBtn: CSSProperties = {
    display: "inline-block",
    color: "#f1c40f",
    padding: "10px 14px",
    border: "1px solid #333",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
  };

  return (
    <main style={wrap}>
      {/* Phone-first CTA strip */}
      <section style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 0 }}>
        <p style={{ margin: 0, fontWeight: 800 }}>Call to book a 20‑min scoping call</p>
        <a href="tel:+61490247772" style={callBtn} aria-label="Call Alberto on 0490 247 772">
          Call 0490 247 772
        </a>
      </section>

      <h1 style={{ marginTop: 16 }}>Culture Risk Diagnostic™</h1>

      <p style={{ margin: "0 0 8px 0" }}>
        <a href="/products" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          ← Back to Products
        </a>
      </p>

      <p>
        The Culture Risk Diagnostic™ provides leading indicators, risk scores, and due‑diligence evidence. Choose a
        sub‑product to see modules and details.
      </p>

      {/* At a glance */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>At a glance</h2>
        <ul>
          <li><strong>Price:</strong> A$15,000 / year (subscription)</li>
          <li><strong>Includes:</strong> baseline + quarterly pulses + board report</li>
          <li><strong>Format:</strong> online collection via Alchemer + interviews/focus groups (optional)</li>
          <li><strong>Best for:</strong> licensees & large employers needing prevention indicators and governance evidence</li>
        </ul>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope Culture Risk Diagnostic">
            Call 0490 247 772
          </a>
          <Link href="/contact" style={ghostBtn} aria-label="Request invoice or purchase order">
            Request invoice / PO
          </Link>
        </div>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Sub‑products</h2>
        <div style={grid}>
          {SUBPRODUCTS.map((sp) => {
            const priceId = PRICE_ID_BY_SLUG[sp.slug];
            return (
              <div key={sp.slug} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href={`/products/culture-risk-diagnostic/${sp.slug}`} style={tile} aria-label={`View ${sp.title}`}>
                  <p style={titleStyle}>{sp.title}</p>
                  <p style={shortStyle}>{sp.short}</p>
                  <p style={priceStyle}>{sp.priceLabel}</p>
                  <div style={tapCue}>Tap to view →</div>
                </Link>
                <BuyButton priceId={priceId} name={sp.title} price={sp.fallbackPrice}>
                  Buy Now
                </BuyButton>
              </div>
            );
          })}
        </div>
      </section>

      {/* Partner + privacy note */}
      <div style={{ margin: "12px 0 0 0" }}>
        <span
          style={{
            display: "inline-block",
            background: "#f1c40f",
            color: "#000",
            borderRadius: 9999,
            padding: "4px 10px",
            fontWeight: 700,
            fontSize: 12,
          }}
        >
          Data collected via Alchemer
        </span>
      </div>

      <section style={card} id="data-safety">
        <h2 style={{ marginTop: 0 }}>Data safety & privacy</h2>
        <p>
          We partner with <strong>Alchemer</strong> to run secure collection for Culture Risk Diagnostic engagements.
          Alchemer provides enterprise‑grade controls:
        </p>
        <ul>
          <li>AES‑256 encryption at rest and TLS in transit; encrypted backups</li>
          <li>Hosted on AWS with VPC isolation, WAF, and fault‑tolerant design</li>
          <li>Independent certifications: SOC 2 Type II and ISO 27001</li>
          <li>Committed 99.9% service uptime for surveys and app access</li>
        </ul>
        <p style={{ opacity: 0.9, marginTop: 10 }}>We also enforce strict anonymity and minimum subgroup sizes for reporting.</p>
        <p style={{ marginTop: 8 }}>
          <strong>Data security:</strong> We partner with {" "}
          <a href="https://www.alchemer.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#f1c40f", fontWeight: 700, textDecoration: "none" }}>
            Alchemer
          </a>{" "}
          for survey delivery. Read the {" "}
          <a href="/docs/alchemer-security-whitepaper-091824.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#f1c40f", fontWeight: 700, textDecoration: "none" }}>
            Alchemer Security White Paper →
          </a>
        </p>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverable</h2>
        <p>
          A regulator‑ready report with cultural‑risk scores and hazard mapping, built to withstand regulator scrutiny and
          provide precise early‑warning indicators of harm.
        </p>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why organisations purchase it</h2>
        <ul>
          <li>Turns culture into a measured, managed, defensible governance area</li>
          <li>Assesses psychosocial safety for high‑liability hazards</li>
          <li>Delivers early‑warning indicators before incidents multiply</li>
          <li>Demonstrates due diligence to regulators and boards</li>
        </ul>
      </section>

      {/* Compliance note */}
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 16 }}>
        No provider can guarantee zero psychological harm. This diagnostic provides prevention indicators and governance
        evidence to reduce risk and improve defensibility.
      </p>
    </main>
  );
}
