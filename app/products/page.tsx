export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description:
    "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: React.CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 };
  const card: React.CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16 };

  const linkStyle: React.CSSProperties = { color: "inherit", textDecoration: "none" };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>
        Select a product or service to see the full outline, deliverables, and outcomes.
      </p>

      <div style={grid}>
        <a href="/products/shsarc-rcabh" style={linkStyle}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
            <p style={{ margin: 0 }}>
              Two flagship risk control programs through talent management that produce
              regulator-ready Prevention Plans.
            </p>
          </div>
        </a>

        <a href="/products/procedural-justice-framework™" style={linkStyle}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>Procedural Justice Framework™</h3>
            <p style={{ margin: 0 }}>Fair, transparent, defensible processes that prevent escalation and contain liability.</p>
          </div>
        </a>

        <a href="/products/culture-risk-diagnostic™" style={linkStyle}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>Culture Risk Diagnostic™</h3>
            <p style={{ margin: 0 }}>Precise culture risk assessments with qualitative and quantitative methods, culture risk indicators, and due-diligence evidence.</p>
          </div>
        </a>

        <a href="/products/mediation" style={linkStyle}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>Mediation Services</h3>
            <p style={{ margin: 0 }}>Neutral, confidential facilitation to resolve disputes and protect working relationships.</p>
          </div>
        </a>

        <a href="/products/negotiation" style={linkStyle}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>Negotiation Services</h3>
            <p style={{ margin: 0 }}>Structured preparation, leverage mapping, rehearsal, and deal support.</p>
          </div>
        </a>
      </div>
    </main>
  );
}

