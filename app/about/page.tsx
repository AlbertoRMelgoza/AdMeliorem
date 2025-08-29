// app/about/page.tsx
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "About — Alberto R. Melgoza | Ad Meliorem",
  description:
    "Prevent harm. Protect value. Prove diligence. The systems side of culture, psychosocial risk, and high-stakes negotiation.",
};

export default function AboutPage() {
  const wrap: CSSProperties = {
    maxWidth: 1000,
    margin: "28px auto",
    padding: "0 16px",
    color: "#eaeaea",
    lineHeight: 1.65,
  };
  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    gap: 24,
    alignItems: "start",
  };
  const leftCol: CSSProperties = { minWidth: 240 };
  const photoBox: CSSProperties = {
    width: 240,
    height: 240,
    borderRadius: 12,
    overflow: "hidden",
    background: "#111",
    border: "1px solid #222",
  };
  const h1: CSSProperties = { margin: "0 0 6px", fontSize: 24, fontWeight: 800 };
  const subhead: CSSProperties = { margin: "2px 0", opacity: 0.95 };
  const card: CSSProperties = {
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  };
  const badge: CSSProperties = {
    display: "inline-block",
    background: "#f1c40f",
    color: "#000",
    borderRadius: 9999,
    padding: "4px 10px",
    fontWeight: 700,
    fontSize: 12,
  };

  return (
    <section style={wrap}>
      <div style={grid}>
        {/* Photo */}
        <div style={leftCol}>
          <div style={photoBox}>
            {/* Ensure this exists: /public/Images/alberto.jpg */}
            <img
              src="/Images/alberto.jpg"
              alt="Alberto R. Melgoza, founder of Ad Meliorem"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Hero */}
          <h1 style={h1}>Prevent harm. Protect value. Prove diligence.</h1>
          <p style={subhead}>The systems side of culture, psychosocial risk, and high-stakes negotiation.</p>
          <p style={{ ...subhead, marginBottom: 12 }}>
            30+ years building regulator-ready culture systems, negotiation playbooks, and psychosocial risk controls
            that boards and investigators respect.
          </p>

          {/* Results at a glance */}
          <section style={{ background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 12 }}>
            <h2 style={{ marginTop: 0 }}>Results at a glance</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 12, marginTop: 8 }}>
              <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>Pre-regulation</div>
                <div style={{ opacity: 0.9 }}>Psychosocial controls designed years before mandates</div>
              </div>
              <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>90+ indicators</div>
                <div style={{ opacity: 0.9 }}>Board-grade risk-culture indicators & dossiers</div>
              </div>
              <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>High-stakes</div>
                <div style={{ opacity: 0.9 }}>Negotiation & mediation that keep projects moving</div>
              </div>
            </div>
          </section>

          {/* Early trust badge (privacy/security up-front) */}
          <div style={{ marginTop: 12 }}>
            <span style={badge}>Data collected via Alchemer</span>
          </div>

          {/* Aha proof */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Aha proof</h2>

            <p style={{ marginBottom: 6 }}>
              <strong>PEMEX:</strong> Avoided numerous industrial action threats by applying in-depth negotiation expertise,
              rigorous culture risk analysis, and a time-to-agreement strategy—resulting in:
            </p>
            <ul style={{ marginTop: 0 }}>
              <li>Zero industrial stoppages across key change initiatives.</li>
              <li>Preserved operational continuity and avoided multimillion-dollar disruptions.</li>
              <li>Enhanced trust and alignment among labour, management, and executive teams.</li>
            </ul>

            <p style={{ marginBottom: 6 }}>
              <strong>Aramco:</strong> Mentored project and external consultants on culture risk, enabling a smooth and
              diligent IPO transformation on the Tadawul. Results included:
            </p>
            <ul style={{ marginTop: 0 }}>
              <li>Record-setting IPO valuation of US$1.88T (largest listed company at the time).</li>
              <li>US$25.6B initial corporate financing, up to US$29.4B post-IPO—fueling strategic M&amp;A and procurement.</li>
              <li>Facilitated high-value deals and JVs—moving from multimillion to multibillion-dollar transactions.</li>
              <li>Increased staff productivity via continuous development programs.</li>
              <li>Elevated investor and board confidence in culture risk management—positive DD, successful post-IPO communications, strong market response.</li>
            </ul>

            <p style={{ marginBottom: 6 }}>
              <strong>QDoE:</strong> Adopted <strong>14+</strong> recommendations to uplift the psychosocial risk management framework,
              including stronger confidentiality for incidents related to psychosocial hazards and risks.
            </p>
          </section>

          {/* Testimonial */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>What leaders say</h2>
            <blockquote style={{ margin: 0, fontStyle: "italic", opacity: 0.95 }}>
              “The best culture transformation we have experienced at this company.”
            </blockquote>
            <div style={{ marginTop: 6, opacity: 0.85 }}>— Senior Vice President &amp; CFO, Aramco</div>
          </section>

          {/* What I do */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>What I do</h2>
            <ul>
              <li>
                <strong>Psychosocial Risk &amp; Culture Diagnostics</strong> — COPSOQ, SHEQ, OCAS, WFBS; risk indicators
                with thresholds; anonymity built-in; regulator-aligned reporting.
              </li>
              <li>
                <strong>Procedural Justice</strong> — defensible complaint handling, triage, investigations, and
                remediation so processes are fair, transparent, and auditable.
              </li>
              <li>
                <strong>Negotiation &amp; Mediation</strong> — leverage mapping, rehearsal, and live counsel for
                high-stakes agreements.
              </li>
              <li>
                <strong>Assurance &amp; Governance</strong> — board-grade indicators and regulator-ready dossiers that
                prove duty-of-care and cut litigation exposure and reputational drag.
              </li>
            </ul>
          </section>

          {/* Signature products */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Signature products</h2>
            <ul>
              <li>
                <strong>Procedural Justice Framework™</strong> — Defensible processes, external investigations, speak-up
                handling and remediation strategies, in alignment with UN mandates.
              </li>
              <li>
                <strong>Culture Risk Diagnostic™</strong> — Forensic mapping of hotspots with early-warning indicators.
              </li>
              <li>
                <strong>SHSARC™ / RCABH™</strong> — Critical controls for sexual harassment, aggression, bullying &amp;
                harassment—outputs are <em>Prevention Plans</em> that withstand scrutiny.
              </li>
            </ul>
          </section>

          {/* Partner & privacy (details + white paper) */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Partner for data management &amp; privacy</h2>
            <p>
              Data collection via <strong>Alchemer</strong> with enterprise-grade security (SOC 2, ISO 27001, AES-256 at
              rest / TLS in transit, AWS).{" "}
              <a
                href="/docs/alchemer-security-whitepaper-091824.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f1c40f", fontWeight: 700, textDecoration: "none" }}
              >
                Security White Paper →
              </a>
            </p>
          </section>

          {/* Selected engagements */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Selected engagements</h2>
            <ul>
              <li>Qld Department of Education — department-wide psychosocial risk framework &amp; COPSOQ rollout.</li>
              <li>Sunwater — board-level risk-culture indicators for decision-making.</li>
              <li>Newcrest — uplifted psychosocial governance &amp; response.</li>
              <li>Suncorp — risk-culture metrics adopted by board &amp; exec.</li>
              <li>Aramco — led culture risk and transformation for the largest IPO in history; led key negotiations.</li>
            </ul>
          </section>

          {/* Credentials */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Credentials</h2>
            <ul style={{ margin: 0 }}>
              <li><strong>PhD – OB (UQ)</strong>; <strong>MBR – OB (RMIT)</strong></li>
              <li>COSO (ERM &amp; Internal Control); Certified Director &amp; Board Secretary (GCC BDI); WHS Diploma (TAFE NSW)</li>
              <li>Awards: Academy of Management &amp; British Academy of Management Best Paper</li>
              <li>Memberships: American Psychology Association (APA); Gladstone Engineering Alliance (GEA); The Resolution Institute</li>
              <li>Ex Aramco, Ex Deloitte, Ex Pemex</li>
            </ul>
          </section>

          {/* Primary CTA */}
          <p style={{ marginTop: 16 }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#f1c40f",
                color: "#000",
                padding: "10px 18px",
                borderRadius: 6,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Schedule a confidential 20-min consult →
            </Link>
          </p>

          {/* Repeat CTA at bottom (sticky) */}
          <p style={{ marginTop: 6 }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                color: "#f1c40f",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Prefer email? Message me here →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
