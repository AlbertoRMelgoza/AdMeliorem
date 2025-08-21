import type { CSSProperties } from "react";

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description: "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };

  // ① stretch items so each row shares the tallest height
  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    alignItems: "stretch",
  };

  // ② the link fills the grid cell
  const linkStyle: CSSProperties = { display: "block", height: "100%", color: "inherit", textDecoration: "none" };

  // ③ the card fills the link
  const card: CSSProperties = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
  };

  const h3: CSSProperties = {
    margin: "0 0 8px 0",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  // keep blurbs visually equal; adjust 56 → 48/64 if you want shorter/taller
  const blurb: CSSProperties = { margin: 0, color: "#bbb", minHeight: 56 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>Select a product or service to see the full outline, deliverables, and outcomes.</p>

      <div style={grid}>
        <a href="/products/shsarc-rcabh" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={h3}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
              <p style={blurb}>
                Two flagship risk control programs through talent management that produce regulator-ready Prevention Plans.
              </p>
            </div>
          </article>
        </a>

        <a href="/products/procedural-justice-framework" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={h3}>Procedural Justice Framework™</h3>
              <p style={blurb}>Fair, transparent, defensible processes that prevent escalation and contain liability.</p>
            </div>
          </article>
        </a>

        <a href="/products/culture-risk-diagnostic" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={h3}>Culture Risk Diagnostic™</h3>
              <p style={blurb}>
                Precise culture risk assessments with qualitative and quantitative methods, culture risk indicators, and due-diligence evidence.
              </p>
            </div>
          </article>
        </a>

        <a href="/products/mediation" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={h3}>Mediation Services</h3>
              <p style={blurb}>Neutral, confidential facilitation to resolve disputes and protect working relationships.</p>
            </div>
          </article>
        </a>

        <a href="/products/negotiation" style={linkStyle}>
          <article style={card}>
            <div>
              <h3 style={h3}>Negotiation Services</h3>
              <p style={blurb}>Structured preparation, leverage mapping, rehearsal, and deal support.</p>
            </div>
          </article>
        </a>
      </div>
    </main>
  );
}
