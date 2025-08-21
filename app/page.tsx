export default function Page() {
  const wrap: React.CSSProperties = {
    maxWidth: 1000,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const card: React.CSSProperties = {
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
  };
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

      {/* Hero: ONE image + yellow CTA */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div style={{ padding: 24, background: "#111", border: "1px solid #222", borderRadius: 12 }}>
          <h2 style={{ marginTop: 0 }}>Compliance isn’t enough — proactive control is essential.</h2>
          <p style={{ marginTop: 0 }}>
            I help organisations prevent sexual harassment, aggression, bullying, and procedural justice failures before
            they cause harm.
          </p>
          <p style={{ marginTop: 12 }}>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#f1c40f",
                color: "#000",
                padding: "10px 18px",
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Contact me →
            </a>
          </p>
        </div>
        <div>
          {/* File must exist at admeliorem/admeliorem/public/images/hero-here-to-help.jpg */}
          <img
            src="/images/hero-here-to-help.jpg"
            alt="Professional support to prevent psychosocial harm"
            style={{ width: "100%", borderRadius: 12, display: "block" }}
          />
        </div>
      </section>

      {/* Programs & Services */}
      <section>
        <h2 style={h2}>My Programs &amp; Services</h2>

        <h3 style={{ marginTop: 16 }}>Flagship Programs (™)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          <a href="/products/procedural-justice-framework" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Procedural Justice Framework™</h4>
              <p style={{ margin: 0 }}>
                Toolkit + guidance for complaint handling &amp; investigations. Ensures fairness, transparency, and
                defensibility.
              </p>
            </div>
          </a>

          <a href="/products/culture-risk-diagnostic" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Culture Risk Diagnostic™</h4>
              <p style={{ margin: 0 }}>
                Validated tools (COPSOQ, SEQ, IAT, OCAS, WFBS) to map hotspots and deliver Key Culture Risk Indicators.
              </p>
            </div>
          </a>

          <a href="/products/shsarc" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>SHSARC™ — Sexual harassment &amp; sexual assault risk control</h4>
              <p style={{ margin: 0 }}>
                3-day, 11-module talent management program focused on prevention, indicators, and defensible controls.
              </p>
            </div>
          </a>

          <a href="/products/rcabh" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>RCABH™ — Risk control aggression, bullying &amp; harassment</h4>
              <p style={{ margin: 0 }}>
                4-day, 13-module talent management program delivering practical, regulator-ready prevention measures.
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

