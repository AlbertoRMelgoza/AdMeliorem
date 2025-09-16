// app/about/page.tsx
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "About — Alberto R. Melgoza | Ad Meliorem",
  description:
    "Prevent harm. Protect value. Prove diligence. The systems side of culture, psychosocial risk, and high-stakes negotiation.",
};

export default function AboutPage() {
  // Layout
  const wrap: CSSProperties = {
    maxWidth: 1000,
    margin: "28px auto",
    padding: "0 16px",
    color: "#eaeaea",
    lineHeight: 1.65,
  };
  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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

  // Typography & cards
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
  const ghostButton: CSSProperties = {
    display: "inline-block",
    color: "#f1c40f",
    padding: "10px 16px",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid #333",
  };
  const ctaButton: CSSProperties = {
    display: "inline-block",
    backgroundColor: "#f1c40f",
    color: "#000",
    padding: "10px 18px",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
  };

  return (
    <section style={wrap}>
      {/* Phone-first CTA strip */}
      <div style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 0 }}>
        <p style={{ margin: 0, fontWeight: 800 }}>Call to book a confidential 20‑min consult</p>
        <a href="tel:+61490247772" style={ctaButton} aria-label="Call Alberto on 0490 247 772">
          Call 0490 247 772
        </a>
      </div>

      <div style={grid}>
        {/* Photo */}
        <div style={leftCol}>
          <div style={photoBox}>
            {/* Ensure this exists: /public/Images/alberto.jpg */}
            <img
              src="/Images/alberto.jpg"
              alt="Portrait of Alberto R. Melgoza, founder of Ad Meliorem"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Hero */}
          <h1 style={h1}>Prevent harm. Protect value. Prove diligence.</h1>
          <p style={subhead}>The systems side of culture, psychosocial risk, and high‑stakes negotiation.</p>
          <p style={{ ...subhead, marginBottom: 12 }}>
            30+ years building regulator‑ready culture systems, negotiation playbooks, and psychosocial‑risk controls
            that boards and investigators respect.
          </p>

          {/* Results at a glance */}
          <section style={{ background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 12 }}>
            <h2 style={{ marginTop: 0 }}>Results at a glance</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 12, marginTop: 8 }}>
              <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>Pre‑regulation</div>
                <div style={{ opacity: 0.9 }}>Psychosocial controls designed years before mandates</div>
              </div>
              <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>90+ indicators</div>
                <div style={{ opacity: 0.9 }}>Board‑grade risk‑culture indicators & dossiers</div>
              </div>
              <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>High‑stakes</div>
                <div style={{ opacity: 0.9 }}>Negotiation & mediation that keep projects moving</div>
              </div>
            </div>
          </section>

          {/* Early trust badge (privacy/security up‑front) */}
          <div style={{ marginTop: 12 }}>
            <span style={badge}>Data collected via Alchemer</span>
          </div>

          {/* Aha proof (de‑risked claims) */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Aha proof</h2>

            <p style={{ marginBottom: 6 }}>
              <strong>PEMEX:</strong> Avoided industrial‑action threats by combining negotiation expertise, culture‑risk
              analysis, and a time‑to‑agreement strategy — delivering continuity across key change initiatives.
            </p>

            <p style={{ marginBottom: 6 }}>
              <strong>Aramco:</strong> During the period of Aramco’s IPO on Tadawul, mentored leaders and consultants on
              culture‑risk and supported negotiations that enabled program delivery and alignment across functions and
              partners.
            </p>

            <p style={{ marginBottom: 6 }}>
              <strong>QDoE:</strong> Adopted <strong>14+</strong> recommendations to uplift the psychosocial‑risk management framework,
              including stronger confidentiality for incidents related to psychosocial hazards and risks.
            </p>

            <p style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
              Results reflect multi‑factor programs and collaborations; the contributions above describe my role within
              broader initiatives.
            </p>
          </section>

          {/* What leaders say */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>What leaders say</h2>
            <blockquote style={{ margin: 0, fontStyle: "italic", opacity: 0.95 }}>
              “The best culture transformation we have experienced at this company.”
            </blockquote>
            <div style={{ marginTop: 6, opacity: 0.85 }}>— Senior Vice President & CFO, Aramco</div>
          </section>

          {/* What I do */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>What I do</h2>
            <ul>
              <li>
                <strong>Psychosocial Risk & Culture Diagnostics</strong> — COPSOQ, SHEQ, OCAS, WFBS; risk indicators with
                thresholds; anonymity built‑in; regulator‑aligned reporting.
              </li>
              <li>
                <strong>Procedural Justice</strong> — defensible complaint handling, triage, investigations, and
                remediation so processes are fair, transparent, and auditable.
                <div style={{ marginTop: 8, fontWeight: 800 }}>Acknowledge ≤24h • Triage ≤48h • Findings ≤21d</div>
              </li>
              <li>
                <strong>Negotiation & Mediation</strong> — leverage mapping, rehearsal, and live counsel for high‑stakes
                agreements.
              </li>
              <li>
                <strong>Assurance & Governance</strong> — board‑grade indicators and regulator‑ready dossiers that prove
                duty‑of‑care and cut litigation exposure and reputational drag.
              </li>
            </ul>
          </section>

          {/* Signature products */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Signature products</h2>
            <ul>
              <li>
                <strong>Procedural Justice Framework™</strong> — Defensible processes, external investigations, speak‑up
                handling and remediation strategies, aligned with international standards (e.g., ILO C190, UNGPs) and
                WHS psychosocial Codes of Practice.
              </li>
              <li>
                <strong>Culture Risk Diagnostic™</strong> — Forensic mapping of hotspots with early‑warning indicators.
              </li>
              <li>
                <strong>SHSARC™ / RCABH™</strong> — Critical controls for sexual harassment, aggression, bullying &
                harassment — outputs are <em>Prevention Plans</em> that withstand scrutiny.
              </li>
            </ul>
          </section>

          {/* Partner & privacy (details + white paper) */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Partner for data management & privacy</h2>
            <p>
              Data collection via <strong>Alchemer</strong> with enterprise‑grade security (SOC 2, ISO 27001, AES‑256 at
              rest / TLS in transit, AWS). Retention policies are configurable to client requirements.
              {" "}
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
              <li>Qld Department of Education — department‑wide psychosocial‑risk framework & COPSOQ rollout.</li>
              <li>Sunwater — board‑level risk‑culture indicators for decision‑making.</li>
              <li>Newcrest — uplifted psychosocial governance & response.</li>
              <li>Suncorp — risk‑culture metrics adopted by board & executive.</li>
              <li>Aramco — culture‑risk and transformation work during the IPO period; led key negotiations.</li>
            </ul>
          </section>

          {/* Credentials */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Credentials</h2>
            <ul style={{ margin: 0 }}>
              <li>
                <strong>PhD – OB (UQ)</strong>; <strong>MBR – OB (RMIT)</strong>
              </li>
              <li>COSO (ERM & Internal Control); Certified Director & Board Secretary (GCC BDI); WHS Diploma (TAFE NSW)</li>
              <li>Awards: Academy of Management & British Academy of Management Best Paper</li>
              <li>Memberships: American Psychology Association (APA); Gladstone Engineering Alliance (GEA); The Resolution Institute</li>
              <li>Ex Aramco, Ex Deloitte, Ex Pemex</li>
            </ul>
          </section>

          {/* Primary CTA — phone first */}
          <p style={{ marginTop: 16 }}>
            <a href="tel:+61490247772" style={ctaButton} aria-label="Call Alberto to book a confidential 20 minute consult">
              Call 0490 247 772
            </a>
          </p>

          {/* Secondary CTA (email/booking) */}
          <p style={{ marginTop: 6 }}>
            <Link href="/contact" style={ghostButton} aria-label="Use the contact form to request a consult">
              Prefer email? Message me here →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
