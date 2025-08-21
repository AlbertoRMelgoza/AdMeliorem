export default function Page() {
  const wrap: React.CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 12, padding: 16 };
  const img: React.CSSProperties = { width: "100%", borderRadius: 8, display: "block" };
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

      {/* Hero */}
      <section style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24, alignItems: "center" }}>
        <div style={{ padding: 24, border: "1px solid #eee", borderRadius: 12 }}>
          <h2 style={{ marginTop: 0 }}>Compliance isn’t enough — proactive control is essential.</h2>
          <p style={{ marginTop: 0 }}>
            I help organisations prevent sexual harassment, aggression, bullying, and procedural justice failures before
            they cause harm.
          </p>
          <p style={{ marginTop: 12 }}>
            <a href="/contact" style={{ textDecoration: "none" }}>Contact me →</a>
          </p>
        </div>
        <div>
          <img
            src="/images/hero-here-to-help.jpg"
            alt="Professional support to prevent psychosocial harm"
            style={{ width: "100%", borderRadius: 12 }}
          />
        </div>
      </section>

      {/* Programs & Services */}
      <section>
        <h2 style={h2}>My Programs &amp; Services</h2>

        <h3 style={{ marginTop: 16 }}>Flagship Programs (™)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          <a href="/products/procedural-justice-framework" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <img
                src="/images/procedural-justice-book.jpg"
                alt="Procedural Justice Framework—complaint handling & investigations"
                style={img}
              />
              <h4 style={{ margin: "12px 0 6px" }}>Procedural Justice Framework™</h4>
              <p style={{ margin: 0 }}>Toolkit + training for complaint handling & investigations. Fairness, transparency, defensibility.</p>
            </div>
          </a>

          <a href="/products/culture-risk-diagnostic" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <img
                src="/images/culture-weave.jpg"
                alt="Culture Risk Diagnostic—organisation culture mapping"
                style={img}
              />
              <h4 style={{ margin: "12px 0 6px" }}>Culture Risk Diagnostic™</h4>
              <p style={{ margin: 0 }}>Validated tools (COPSOQ, SEQ, etc.). Maps hotspots, delivers Key Culture Risk Indicators.</p>
            </div>
          </a>

          <a href="/products/shsarc" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <img
                src="/images/product-1-help-scene.jpg"
                alt="SHSARC training—sexual harassment & sexual assault risk control"
                style={img}
              />
              <h4 style={{ margin: "12px 0 6px" }}>SHSARC™</h4>
              <p style={{ margin: 0 }}>3-day, 11-module training on sexual harassment & sexual assault risk control.</p>
            </div>
          </a>

          <a href="/products/rcabh" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <img
                src="/images/product-1-help-scene.jpg"
                alt="RCABH training—aggression, bullying & harassment prevention"
                style={img}
              />
              <h4 style={{ margin: "12px 0 6px" }}>RCABH™</h4>
              <p style={{ margin: 0 }}>4-day, 13-module training on aggression, bullying & harassment prevention.</p>
            </div>
          </a>

          <a href="/products/talent-management-risk-controls" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <img
                src="/images/product-1-help-scene.jpg"
                alt="Talent management risk controls—staff as live hazard controls"
                style={img}
              />
              <h4 style={{ margin: "12px 0 6px" }}>Talent Management Risk Controls</h4>
              <p style={{ margin: 0 }}>Embed staff as live hazard controls. Regulator-ready Prevention Plans.</p>
            </div>
          </a>
        </div>

        <h3 style={{ marginTop: 24 }}>Supporting Services</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          <a href="/mediation" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <img
                src="/images/mediation-chairs.jpg"
                alt="Mediation—neutral, confidential facilitation"
                style={img}
              />
              <h4 style={{ margin: "12px 0 6px" }}>Mediation</h4>
              <p style={{ margin: 0 }}>Neutral, confidential facilitation to resolve disputes.</p>
            </div>
          </a>

          <a href="/negotiation" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <img
                src="/images/negotiation-handshake.jpg"
                alt="Negotiation—structured preparation and leverage clarification"
                style={img}
              />
              <h4 style={{ margin: "12px 0 6px" }}>Negotiation</h4>
              <p style={{ margin: 0 }}>Structured preparation and leverage clarification for better outcomes.</p>
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
          <li>Targeted training with proven outcomes</li>
          <li>Confidential, pragmatic, and tailored support</li>
          <li>Backed by over 20 years of personal expertise</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ marginTop: 24 }}>
        <h2>Book a consultation</h2>
        <p>Let’s discuss how I can support your organisation.</p>
        <p><a href="/contact" style={{ textDecoration: "none" }}>Contact me →</a></p>
      </section>
    </main>
  );
}
