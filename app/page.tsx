import type { CSSProperties } from "react";

export default function Page() {
  // Layout & typography
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
  const ctaButton: CSSProperties = {
    display: "inline-block",
    backgroundColor: "#f1c40f",
    color: "#000",
    padding: "12px 20px",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
  };
  const ghostButton: CSSProperties = {
    display: "inline-block",
    color: "#f1c40f",
    padding: "10px 16px",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid #333",
    marginLeft: 12,
  };

  // Mobile-friendly link affordance
  const tapLink: CSSProperties = {
    color: "inherit",
    textDecoration: "none",
    WebkitTapHighlightColor: "rgba(241, 196, 15, 0.35)",
  };
  const tapCue: CSSProperties = {
    marginTop: 12,
    fontWeight: 700,
    color: "#f1c40f",
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
      {/* Phone-first CTA strip */}
      <section aria-label="Call to action" style={{ marginBottom: 16 }}>
        <div style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ margin: 0, fontWeight: 700 }}>
            Call to book a 20‑min gap‑check
          </p>
          <p style={{ margin: 0 }}>
            <a href="tel:+61490247772" style={ctaButton} aria-label="Call Alberto on 0490 247 772">
              Call 0490 247 772
            </a>
          </p>
        </div>
      </section>

      {/* Hero */}
      <section style={{ marginBottom: 16 }}>
        <h1 style={h1}>Regulator‑ready controls for psychosocial risk — fast, fair, defensible.</h1>
        <p style={{ margin: 0 }}>
          Sexual harassment, aggression, bullying, and procedural‑justice failures are regulated hazards in NSW and QLD.
          You can’t guarantee <em>zero</em> psychological harm — but you can control a pathway that resolves issues
          <strong> fairly, consistently, and fast</strong>.
        </p>
      </section>

      {/* Hero: image + primary actions */}
      <section style={heroGrid}>
        <div style={{ ...card, padding: 24 }}>
          <h2 style={{ ...h2, marginTop: 0, fontSize: "clamp(22px, 2.4vw, 30px)" }}>
            What you can control: a fair, fast, defensible pathway
          </h2>
          <p style={{ marginTop: 0 }}>
            Procedural Justice Framework™ installs clear time standards, independence checks, and an audit trail so your
            decisions, complaints, and investigations stand up to scrutiny.
          </p>
          <p style={{ marginTop: 8, fontWeight: 700 }}>
            ack ≤24h • triage ≤48h • findings ≤21d
          </p>
          <p style={{ marginTop: 12 }}>
            <a href="tel:+61490247772" style={ctaButton} aria-label="Call now to book a gap-check">
              Call 0490 247 772
            </a>
            <a
              href="/products/procedural-justice-framework"
              style={ghostButton}
              aria-label="See Procedural Justice Framework product details"
            >
              See Procedural Justice Framework →
            </a>
          </p>
        </div>

        <div>
          <img
            src="/Images/hero-here-to-help.jpg"
            alt="Advisor speaking with an HR leader about a fair, fast, defensible complaint pathway"
            width={900}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: 12, display: "block" }}
          />
        </div>
      </section>

      {/* Myth → Reality (white paper teaser) */}
      <section style={{ marginTop: 32, display: "grid", gap: 16 }}>
        <div style={card}>
          <h2 style={{ ...h2, marginTop: 0 }}>Myth vs Reality</h2>
          <div style={prose}>
            <p style={{ marginTop: 8, marginBottom: 0 }}>
              <strong>Myth:</strong> “We can achieve zero psychological harm.”
              <br />
              <strong>Reality:</strong> Human systems aren’t risk‑free. What regulators and boards expect is <strong>prevention</strong> plus a
              <strong> fair, consistent, fast</strong> pathway with evidence.
            </p>
            <ul style={{ marginTop: 12 }}>
              <li>Prevention indicators (culture risk, hotspots)</li>
              <li>Skill uptake for leaders & supervisors</li>
              <li>Procedural Justice Framework™ with clear time standards and a complete audit trail</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              <a href="/whitepapers/september-2025" style={ghostButton} aria-label="View September white paper">
                See the September White Paper →
              </a>
            </p>
          </div>
        </div>

        {/* Evidence & stakes (kept general to avoid absolute claims) */}
        <div style={card}>
          <h2 style={{ ...h2, marginTop: 0 }}>Why this matters</h2>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              Psychological injury claims carry outsized cost and time‑loss compared with other injuries. Shortening
              duration and improving perceived fairness reduces escalation risk, total cost, and productivity drag.
            </p>
          </div>
        </div>

        <div style={card}>
          <h2 style={{ ...h2, marginTop: 0 }}>What regulators and courts expect</h2>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              Not perfection — <em>evidence</em> that you’ve taken practicable steps to prevent and control risks:
              documented controls, fair‑process standards, competent investigations, and a defensible audit trail.
            </p>
          </div>
        </div>

        <div style={card}>
          <h2 style={{ ...h2, marginTop: 0 }}>How I help</h2>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              Rapid, regulator‑ready solutions: proactive prevention, psychosocial risk management, and a clear,
              defensible process that stands up under scrutiny — without adding another system.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section>
        <h2 style={h2}>My Products</h2>

        <h3 style={{ marginTop: 16 }}>Flagship Products (™)</h3>
        <div style={twoColCards}>
          {/* Procedural Justice Framework™ */}
          <a href="/products/procedural-justice-framework" style={tapLink} aria-label="View Procedural Justice Framework">
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Procedural Justice Framework™</h4>
              <div style={prose}>
                <p style={{ margin: 0 }}>
                  An <strong>operational control</strong> for decision‑making, complaints, and investigations. Helps ensure your
                  pathway is fair, consistent, and regulator‑ready — with time standards, independence checks, and an
                  auditable trail. No new system required.
                </p>
                <div style={tapCue}>Tap to view →</div>
              </div>
            </div>
          </a>

          {/* Culture Risk Diagnostic™ */}
          <a href="/products/culture-risk-diagnostic" style={tapLink} aria-label="View Culture Risk Diagnostic">
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>Culture Risk Diagnostic™</h4>
              <div style={prose}>
                <p style={{ margin: 0 }}>
                  Validated tools (e.g., COPSOQ, SHEQ) to pinpoint psychosocial‑risk hotspots and track leading indicators.
                  Start light and add depth where needed.
                </p>
                <div style={tapCue}>Tap to view →</div>
              </div>
            </div>
          </a>

          {/* SHSARC™ & RCABH™ */}
          <a href="/products/shsarc-rcabh" style={tapLink} aria-label="View SHSARC and RCABH">
            <div style={card}>
              <h4 style={{ margin: "0 0 6px" }}>SHSARC™ &amp; RCABH™</h4>
              <div style={prose}>
                <p style={{ margin: 0 }}>
                  Comprehensive, prevention‑focused programs for sexual harassment, assault, aggression, bullying, and
                  harassment — documented controls and step‑by‑step frameworks you can evidence.
                </p>
                <div style={tapCue}>Tap to view →</div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ marginTop: 32 }}>
        <div style={{ ...card, background: "#151515" }}>
          <h2 style={{ ...h2, marginTop: 0 }}>Ready to lead with fair, fast, defensible practice?</h2>
          <div style={prose}>
            <p style={{ marginTop: 8 }}>
              Don’t wait for escalation. Book a short call to map your current pathway to regulator‑ready standards.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="tel:+61490247772" style={ctaButton} aria-label="Call Alberto to book a 20 minute gap-check">
                Call 0490 247 772
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
