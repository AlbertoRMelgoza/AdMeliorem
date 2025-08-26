// app/products/page.tsx  (SERVER component — do NOT add "use client")
import type { CSSProperties } from "react";
import Link from "next/link";
import BuyNow from "../../components/BuyNow"; // ✅ correct file name

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description:
    "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: CSSProperties = {
    maxWidth: 1100,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const grid: CSSProperties = { display: "grid", gap: 24, marginTop: 24 };
  const card: CSSProperties = {
    background: "#111",
    border: "1px solid #333",
    borderRadius: 8,
    padding: 16,
  };
  const title: CSSProperties = { margin: "0 0 8px", fontSize: 18, color: "#f1c40f" };
  const blurb: CSSProperties = { fontSize: 14, color: "#bdbdbd" };
  const linkStyle: CSSProperties = { textDecoration: "none", color: "inherit" };
  const priceText: CSSProperties = { fontWeight: 700, marginTop: 10 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>
        Select a product or service to see the full outline, deliverables, and outcomes.
      </p>

      {/* Terms link visible on this page too */}
      <div style={{ fontSize: 13, opacity: 0.85 }}>
        By purchasing you agree to our{" "}
        <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>
          Terms &amp; Conditions
        </a>.
      </div>

      <div style={grid}>
        {/* SHSARC / RCABH */}
        <article style={card}>
          <Link href="/products/shsarc-rcabh" style={linkStyle}>
            <h3 style={title}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
            <p style={blurb}>
              Two flagship risk control programs through talent management that produce regulator-ready Prevention Plans.
            </p>
          </Link>
          <div style={priceText}>A$ 750.00 — per person (max 20 per workshop)</div>
          <div style={{ marginTop: 10 }}>
            <BuyNow name="SHSARC™ & RCABH™ — Risk Control Programs" price={750}>
              Buy Now
            </BuyNow>
          </div>
        </article>

        {/* Procedural Justice Framework */}
        <article style={card}>
          <Link href="/products/procedural-justice-framework" style={linkStyle}>
            <h3 style={title}>Procedural Justice Framework™</h3>
            <p style={blurb}>
              Fair, transparent, defensible processes that prevent escalation and contain liability.
            </p>
          </Link>
          <div style={priceText}>A$ 4,000.00 — per use</div>
          <div style={{ marginTop: 10 }}>
            <BuyNow name="Procedural Justice Framework™" price={4000}>
              Buy Now
            </BuyNow>
          </div>
        </article>

        {/* Culture Risk Diagnostic */}
        <article style={card}>
          <Link href="/products/culture-risk-diagnostic" style={linkStyle}>
            <h3 style={title}>Culture Risk Diagnostic™</h3>
            <p style={blurb}>
              Forensic culture assessment with leading indicators, risk scores and due-diligence evidence.
            </p>
          </Link>
          <div style={priceText}>A$ 15,000.00 — annual subscription</div>
          <div style={{ marginTop: 10 }}>
            <BuyNow name="Culture Risk Diagnostic™" price={15000}>
              Buy Now
            </BuyNow>
          </div>
        </article>

        {/* Mediation */}
        <article style={card}>
          <Link href="/products/mediation" style={linkStyle}>
            <h3 style={title}>Mediation Services</h3>
            <p style={blurb}>
              Neutral, confidential facilitation to resolve disputes and protect working relationships.
            </p>
          </Link>
          <div style={priceText}>A$ 3,000.00 — per session</div>
          <div style={{ marginTop: 10 }}>
            <BuyNow name="Mediation Services" price={3000}>
              Buy Now
            </BuyNow>
          </div>
        </article>

        {/* Negotiation */}
        <article style={card}>
          <Link href="/products/negotiation" style={linkStyle}>
            <h3 style={title}>Negotiation Services</h3>
            <p style={blurb}>
              Structured preparation, leverage mapping, rehearsal, and deal support.
            </p>
          </Link>
          <div style={priceText}>A$ 3,000.00 — per session</div>
          <div style={{ marginTop: 10 }}>
            <BuyNow name="Negotiation Services" price={3000}>
              Buy Now
            </BuyNow>
          </div>
        </article>
      </div>
    </main>
  );
}
