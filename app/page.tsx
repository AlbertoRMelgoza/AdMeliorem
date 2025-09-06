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
          {/* File must exist at admeliorem/public/Images/hero-here-to-help.jpg */}
          <img
            src="/Images/hero-here-to-help.jpg"
            alt="Professional support to prevent psychosocial harm"
            style={{ width: "100%", borderRadius: 12, display: "block" }}
          />
        </div>
      </section>

      {/* Smart Solution section */}
      <section style={{ marginTop: 32, display: "grid", gap: 16 }}>
        {/* Hook */}
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>The Smart Solution for Safer Workplaces</h2>
          <p style={{ margin: 0 }}>
            <strong>Can you guarantee zero individual harm in your organisation?</strong><br />
            No leader can—my August White Paper Edition proves that individual claims and incidents can never be entirely
            eliminated, and even the best psychologists cannot always clearly assess harm.
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
              Contact me to request the White Paper →
            </a>
          </p>
        </div>

        {/* Truth + Stakes */}
        <div style={card}>
          <p style={{ marginTop: 0 }}>
            <strong>But your business CAN guarantee one thing:</strong><br />
            That you have done everything possible to prevent harm, control risks, and demonstrate proactive compliance
            to regulators, staff, and the public—even when incidents occur.
          </p>
          <p style={{ marginBottom: 0 }}>That’s where I come in.</p>
        </div>

        {/* When harm strikes */}
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>When harm strikes, complexity explodes:</h3>
          <ul style={{ margin: "8px 0 0 18px" }}>
            <li>
              Psychological assessments are slow and scarce (Australia faces a shortage of registered psychologists for
              harm assessment).
            </li>
            <li>
              Clinical answers are rarely clear—even experts can’t always define the full impact.
            </li>
            <li>Every delay increases your liability and reputational risk.</li>
          </ul>
        </div>

        {/* Advantage + Proof */}
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Here’s your advantage:</h3>
          <p style={{ marginTop: 0 }}>
            We deliver immediate, regulator-ready psychosocial risk assessments and prevention solutions—no waitlists, no
            ambiguity, just decisive, validated action.
          </p>
          <ul style={{ margin: "8px 0 0 18px" }}>
            <li>
              <strong>Instant credibility:</strong> Show regulators and the public concrete proof of your diligence,
              safety leadership, and compliance—right now.
            </li>
            <li>
              <strong>Stay out of crisis mode:</strong> We identify and control psychosocial risks before incidents
              spiral, making compliance your strategic asset.
            </li>
            <li>
              <strong>Make complexity manageable:</strong> Our practical, proven frameworks turn red tape into clear
              action and executive peace of mind.
            </li>
            <li>
              <strong>Prove your leadership:</strong> While others stall, you lead. Our assessments and solutions are
              your documented evidence of care and responsibility—protecting your people and your organisation every step
              of the way.
            </li>
          </ul>
          <p style={{ marginTop: 12, marginBottom: 0 }}>
            Don’t wait for harm—or for slow answers. Minimise complexity, reinforce trust, and stay ahead. That’s the
            real smart solution.
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
              aria-label="Contact to get immediate, regulator-ready psychosocial risk assessments"
            >
              Talk to us →
            </a>
          </p>
        </div>
      </section>

      {/* Products & Services */}
      <section>
        <h2 style={h2}>My Products</h2>

        <h3 style={{ marginTop: 16 }}>Flagship Products (™)</h3>
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
