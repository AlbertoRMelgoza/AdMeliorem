export default function Page() {
  const wrap: React.CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: React.CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16 };
  const h2: React.CSSProperties = { marginTop: 32 };

  return (
    <main style={wrap}>
      {/* Headline + supporting statement */}
      <section style={{ marginBottom: 16 }}>
        <h1 style={{ margin: "0 0 8px" }}>
          Specialist in preventing sexual harassment, aggression, bullying, and procedural justice failures
        </h1>
        <p style={{ margin: 0 }}>
          Sexual harassment, aggression, bullying, and procedural justice are now regulated under WHS Codes of Practice
          in NSW and Qld. Compliance is mandatory, but a proactive approach is essential. I also address toxic culture
          and sexual assault — hazards not yet listed in the Codes but proven to drive risk, harm, and liability.
        </p>
      </section>

      {/* Hero COPY ONLY (no image) */}
      <section style={{ padding: 24, background: "#111", border: "1px solid #222", borderRadius: 12 }}>
        <h2 style={{ marginTop: 0 }}>Compliance isn’t enough — proactive control is essential.</h2>
        <p style={{ marginTop: 0 }}>
          I help organisations prevent sexual harassment, aggression, bullying, and procedural justice failures before
          they cause harm.
        </p>
        <p style={{ marginTop: 12 }}>
          <a href="/contact" style={{ textDecoration: "none", color: "#61dafb" }}>Contact me →</a>
        </p>
      </section>

      {/* Niche Products & Services */}
      <section>
        <h2 style={h2}>My Products &amp; Services</h2>

        <h3 style={{ marginTop: 16 }}>Flagship Programs (™)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          <a href="/products/procedural-justice-framework™" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Procedural Justice Framework™</h4>
              <p style={{ margin: 0 }}>
                Toolkit + guidance for fair processes, remediation &amp; investigations. Ensures fairness, transparency, and defensibility.
              </p>
            </div>
          </a>

          <a href="/products/culture-risk-diagnostic™" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Culture Risk Diagnostic™</h4>
              <p style={{ margin: 0 }}>
                Validated tools (COPSOQ, SEQ, OCAS, IAT, WFBS) to identify hotspots and deliver Key Culture Risk Indicators.
              </p>
            </div>
          </a>

          <a href="/products/SHSARC™" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>SHSARC™ — Sexual harassment &amp; sexual assault risk control</h4>
              <p style={{ margin: 0 }}>
                3-day, 11-module talent management program focused on prevention, indicators, and defensible controls.
              </p>
            </div>
          </a>

          <a href="/products/RCABH™" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>RCABH™ — Risk control aggression, bullying &amp; harassment</h4>
              <p style={{ margin: 0 }}>
                4-day, 13-module talent management program delivering practical, regulator-ready prevention measures.
              </p>
            </div>
          </a>
        </div>

        <h3 style={{ marginTop: 24 }}>Services</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          <a href="/products/mediation" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Mediation</h4>
              <p style={{ margin: 0 }}>Neutral, confidential facilitation to resolve disputes.</p>
            </div>
          </a>

          <a href="/products/negotiation" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Negotiation</h4>
              <p style={{ margin: 0 }}>Helping you understand your leverage.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Why choose */}
      <section>
        <h2 style={h2}>Why Choose Ad Meliorem</h2>
        <ul>
          <li>Regulator-ready documentation and defensibility</li>
          <li>Evidence-based tools and validated surveys</li>
          <li>Targeted programs with proven outcomes</li>
          <li>Confidential, pragmatic, and tailored support</li>
          <li>Backed by over 20 years of personal expertise</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginTop: 24 }}>
        <h2>Book a consultation</h2>
        <p>Let’s discuss how I can support your organisation.</p>
        <p><a href="/contact" style={{ textDecoration: "none", color: "#f1c40f" }}>Contact me →</a></p>
      </section>
    </main>
  );
}
