import type { CSSProperties } from "react";

export default function Page() {
  // Typography & layout
  const wrap: CSSProperties = {
    maxWidth: 1000,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const h1: CSSProperties = {
    margin: "0 0 8px",
    fontSize: "clamp(28px, 3.2vw, 44px)",
    letterSpacing: "-0.02em",
  };
  const h2: CSSProperties = {
    marginTop: 32,
    fontSize: "clamp(20px, 2.2vw, 28px)",
  };

  // Cards, CTAs, long-copy wrapper
  const card: CSSProperties = {
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: "clamp(14px, 3vw, 20px)",
  };
  const prose: CSSProperties = { maxWidth: 720 };
  const cta: CSSProperties = {
    display: "inline-block",
    backgroundColor: "#f1c40f",
    color: "#000",
    padding: "12px 20px",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
  };

  // Grids
  const heroGrid: CSSProperties = {
    display: "grid",
    gap: 24,
    alignItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  };
  const twoColCards: CSSProperties = {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  };

  return (
    <main style={wrap}>
      {/* Headline + supporting statement */}
      <section style={{ marginBottom: 16 }}>
        <h1 style={h1}>
          Specialist in preventing sexual harassment, aggression, bullying, and procedural justice failures
        </h1>
        <p style={{ margin: 0 }}>
          Sexual harassment, aggression, bullying, and procedural justice are now regulated under WHS Codes of Practice
          in NSW and Qld. Compliance is mandatory, but a proactive approach is essential. I also address toxic culture
          and sexual assault — hazards not yet listed in the Codes but proven to drive risk, harm, and liability.
        </p>
      </section>

      {/* Hero: image + primary CTA */}
      <section style={heroGrid}>
        <div style={{ ...card, padding: 24 }}>
          <h2 style={{ ...h2, marginTop: 0, fontSize: "clamp(22px, 2.4vw, 30px)" }}>
            Compliance isn’t enough — proactive control is essential.
          </h2>
          <p style={{ marginTop: 0 }}>
            I help organisations prevent sexual harassment, aggression, bullying, and procedural justice failures before
            they cause harm.
          </p>
          <p style={{ marginTop: 12 }}>
            <a href="/contact" style={cta} aria-label="Contact me for proactive psychosocial risk control">
              Contact me →
            </a>
          </p>
        </div>

        <div>
          {/* /public/Images/hero-here-to-help.jpg must exist */}
          <img
            src="/Images/hero-here-to-help.jpg"
            alt="Professional support to prevent psychosocial harm"
            width={900}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: 12, display: "block" }}
          />
        </div>
      </section>

      {/* Smart Solution / Thought Leadership — EXACT COPY */}
      <section style={{ marginTop: 32, display: "grid", gap: 16 }}>
        <div style={card}>
          <h2 style={{ ...h2, marginTop: 0 }}>Can you guarantee zero pscyhological harm in your organisation?</h2>
          <div style={prose}>
            <p style={{ marginTop: 8, marginBottom: 0 }}>
              No. As detailed in my August White Paper Edition, analysis of 47 significant Australian cases predicts that psychological and psychosocial harm claims occur across all industries,
              demonstrating that it is impossible to fully eliminate psychological harm—regardless of sector. In addition, my white paper confirms that claims arising from psychosocial hazards
              —such as bullying, harassment (including sexual harassment), aggression, procedural justice failures, toxic culture, and sexual assault— 
              consistently lead to substantial financial liability, with real impact on reputation and social license to operate.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="/contact" style={cta} aria-label="Contact me to request the August White Paper">
                Contact me to request the White Paper →
              </a>
            </p>
          </div>
        </div>

        <div style={card}>
          <h3 style={{ marginTop: 0 }}>More realitites of psychological harm.</h3>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              Workplace harm is inherently unpredictable and impossible to eradicate. Incidents arise from a complex web of
              human behaviours, organisational systems, cultural pressures, and ever-evolving legal standards. These factors
              are often beyond the reach of any single assessment tool or professional’s control. Even with top clinical
              expertise, assessments of psychological harm are frequently ambiguous, open to interpretation, and sometimes
              disputed. No model or method can capture the full scope and nuance of harm in the modern workplace.
            </p>
          </div>
        </div>

        <div style={card}>
          <h3 style={{ marginTop: 0 }}>What do regulators and courts expect?</h3>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              They don’t expect perfection—but they do require hard evidence that your business has taken all practicable
              steps to systematically prevent and control risks, not just react after people are harmed.
            </p>
          </div>
        </div>

        <div style={card}>
          <h3 style={{ marginTop: 0 }}>This is where I make the difference.</h3>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              While compliance is mandatory, our service delivers rapid, regulator-ready solutions: robust, proactive
              prevention, psychosocial risk management, and clear, defensible documentation. We cut through complexity,
              demonstrably protect your reputation, reduce liability, and help you set the benchmark for safety and compliance.
            </p>
            <p style={{ marginTop: 12, marginBottom: 0 }}>
              Don’t wait for harm. Act now—lead the way in safer, more resilient workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Products & Services — UPDATED COPY */}
      <section>
        <h2 style={h2}>My Products</h2>

        <h3 style={{ marginTop: 16 }}>Flagship Products (™)</h3>
        <div style={twoColCards}>
          {/* Procedural Justice Framework™ */}
          <a href="/products/procedural-justice-framework" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Procedural Justice Framework™</h4>
              <div style={prose}>
                <p style={{ margin: 0 }}>
                  Delivers transparent, fair, and consistent processes for decision-making, complaints, and investigations.
                  This toolkit guarantees your organisation is always regulator-ready, minimising legal exposure by
                  demonstrably meeting new WHS psychosocial hazard codes around procedural fairness and organisational justice.
                </p>
              </div>
            </div>
          </a>

          {/* Culture Risk Diagnostic™ */}
          <a href="/products/culture-risk-diagnostic" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Culture Risk Diagnostic™</h4>
              <div style={prose}>
                <p style={{ margin: 0 }}>
                  Uses validated, real-time tools (COPSOQ, SEQ, IAT, OCAS, WFBS) to pinpoint culture and psychosocial risk
                  hotspots—ensuring you have complete visibility and never operate blind to emerging risk. This evidence-based
                  approach proves you are identifying and managing hazards before they become liabilities.
                </p>
              </div>
            </div>
          </a>

          {/* SHSARC™ & RCABH™ — single clickable card */}
          <a href="/products/shsarc-rcabh" style={{ color: "inherit", textDecoration: "none" }}>
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>SHSARC™ &amp; RCABH™</h4>
              <div style={prose}>
                <p style={{ margin: 0 }}>
                  Target sexual harassment, assault, aggression, bullying, and harassment with comprehensive, documented,
                  prevention-focused programs. You gain regulator-ready, step-by-step controls and frameworks—your defensible
                  proof that you’ve acted on risk before it escalates into harm or legal action.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Final CTA — EXACT STATEMENT */}
      <section style={{ marginTop: 32 }}>
        <div style={{ ...card, background: "#151515" }}>
          <h2 style={{ ...h2, marginTop: 0 }}>Ready to prove you’re the leader in workplace safety?</h2>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              Don’t let complexity or psychologist shortages leave your organisation exposed. Let’s future-proof your
              compliance, reputation, and employee wellbeing—get protected today.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="/contact" style={cta} aria-label="Contact me to get protected today">
                Contact me →
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
