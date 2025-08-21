import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description: "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };

  // Inline styles (replacing the missing CSS module)
  const grid: CSSProperties = { display: "grid", gap: 24, marginTop: 24 };
  const card: CSSProperties = {
    background: "#111",
    border: "1px solid #333",
    borderRadius: 8,
    padding: 16,
    transition: "transform 0.2s ease",
  };
  const cardHover: CSSProperties = { transform: "translateY(-4px)" }; // for future use if you add events
  const title: CSSProperties = { margin: "0 0 8px", fontSize: 18, color: "#f1c40f" };
  const blurb: CSSProperties = { fontSize: 14, color: "#bdbdbd" };
  const linkStyle: CSSProperties = { textDecoration: "none", color: "inherit", display: "block" };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>
        Select a product or service to see the full outline, deliverables, and outcomes.
      </p>

      <div style={grid}>
        <Link href="/products/shsarc-rcabh" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={title}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
              <p style={blurb}>
                Two flagship risk control programs through talent management that produce regulator-ready Prevention Plans.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/procedural-justice-framework" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={title}>Procedural Justice Framework™</h3>
              <p style={blurb}>
                Fair, transparent, defensible processes that prevent escalation and contain liability.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/culture-risk-diagnostic" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={title}>Culture Risk Diagnostic™</h3>
              <p style={blurb}>
                Precise culture risk assessments with qualitative and quantitative methods, culture risk indicators, and due-diligence evidence.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/mediation" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={title}>Mediation Services</h3>
              <p style={blurb}>
                Neutral, confidential facilitation to resolve disputes and protect working relationships.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/negotiation" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={title}>Negotiation Services</h3>
              <p style={blurb}>
                Structured preparation, leverage mapping, rehearsal, and deal support.
              </p>
            </div>
          </article>
        </Link>
      </div>
    </main>
  );
}
