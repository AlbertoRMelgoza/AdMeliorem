import type { CSSProperties } from "react";

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description:
    "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };

  // Equal-height responsive grid
  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    alignItems: "stretch",
  };

  // Card fills full height; flex keeps spacing consistent
  const card: CSSProperties = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
    transition: "border-color .15s ease, box-shadow .15s ease",
  };

  // Make the link fill the grid cell so the card can stretch
  const linkStyle: CSSProperties = { display: "block", height: "100%", color: "inherit", textDecoration: "none" };

  // Small title style tweak so top alignment is consistent
  const h3: CSSProperties = { margin: "0 0 8px 0" };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>
        Select a product or service to see the full outline, deliverables, and outcomes.
      </p>

      <div style={grid}>
        <a href="/products/shsarc-rcabh" style={linkStyle}
           onMouseEnter={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#333"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "0 6px 16px rgba(0,0,0,.35)"; }}
           onMouseLeave={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#222"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "none"; }}>
          <div style={card}>
            <div>
              <h3 style={h3}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
              <p style={{ margin: 0 }}>
                Two flagship risk control programs through talent management that produce regulator-ready Prevention Plans.
              </p>
            </div>
            <div style={{ height: 4 }} />
          </div>
        </a>

        <a href="/products/procedural-justice-framework" style={linkStyle}
           onMouseEnter={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#333"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "0 6px 16px rgba(0,0,0,.35)"; }}
           onMouseLeave={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#222"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "none"; }}>
          <div style={card}>
            <div>
              <h3 style={h3}>Procedural Justice Framework™</h3>
              <p style={{ margin: 0 }}>
                Fair, transparent, defensible processes that prevent escalation and contain liability.
              </p>
            </div>
            <div style={{ height: 4 }} />
          </div>
        </a>

        <a href="/products/culture-risk-diagnostic" style={linkStyle}
           onMouseEnter={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#333"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "0 6px 16px rgba(0,0,0,.35)"; }}
           onMouseLeave={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#222"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "none"; }}>
          <div style={card}>
            <div>
              <h3 style={h3}>Culture Risk Diagnostic™</h3>
              <p style={{ margin: 0 }}>
                Precise culture risk assessments with qualitative and quantitative methods, culture risk indicators, and due-diligence evidence.
              </p>
            </div>
            <div style={{ height: 4 }} />
          </div>
        </a>

        <a href="/products/mediation" style={linkStyle}
           onMouseEnter={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#333"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "0 6px 16px rgba(0,0,0,.35)"; }}
           onMouseLeave={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#222"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "none"; }}>
          <div style={card}>
            <div>
              <h3 style={h3}>Mediation Services</h3>
              <p style={{ margin: 0 }}>
                Neutral, confidential facilitation to resolve disputes and protect working relationships.
              </p>
            </div>
            <div style={{ height: 4 }} />
          </div>
        </a>

        <a href="/products/negotiation" style={linkStyle}
           onMouseEnter={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#333"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "0 6px 16px rgba(0,0,0,.35)"; }}
           onMouseLeave={(e) => { (e.currentTarget.firstElementChild as HTMLElement).style.borderColor = "#222"; (e.currentTarget.firstElementChild as HTMLElement).style.boxShadow = "none"; }}>
          <div style={card}>
            <div>
              <h3 style={h3}>Negotiation Services</h3>
              <p style={{ margin: 0 }}>
                Structured preparation, leverage mapping, rehearsal, and deal support.
              </p>
            </div>
            <div style={{ height: 4 }} />
          </div>
        </a>
      </div>
    </main>
  );
}
