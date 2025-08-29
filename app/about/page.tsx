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
            {/* Put your image at: /public/Images/alberto.jpg */}
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
            that stakeholders and boards respect at a global scale.
          </p>

          {/* Results at a glance */}
          <section style={{ background:"#111", border:"1px solid #222", borderRadius:12, padding:16, marginTop:12 }}>
            <h2 style={{ marginTop:0 }}>Results at a glance</h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px,1fr))", gap:12, marginTop:8 }}>
              <div style={{ background:"#0f0f0f", border:"1px solid #222", borderRadius:10, padding:12 }}>
                <div style={{ fontSize:22, fontWeight:800 }}>Pre-regulation</div>
                <div style={{ opacity:0.9 }}>Psychosocial controls designed years before mandates</div>
              </div>
              <div style={{ background:"#0f0f0f", border:"1px solid #222", borderRadius:10, padding:12 }}>
                <div style={{ fontSize:22, fontWeight:800 }}>Board-grade</div>
                <div style={{ opacity:0.9 }}>Indicators & dossiers used for executive assurance</div>
              </div>
              <div style={{ background:"#0f0f0f", border:"1px solid #222", borderRadius:10, padding:12 }}>
                <div style={{ fontSize:22, fontWeight:800 }}>High-stakes</div>
                <div style={{ opacity:0.9 }}>Negotiations & mediation that avoid litigation</div>
              </div>
            </div>
          </section>

          {/* Aha proof */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Global proof</h2>
            <ul>
              <li>
                <strong>PEMEX:</strong> Culture &amp; trust architecture through crisis—aligned labour, social licence,
                and executive negotiation so critical projects could move.
              </li>
              <li>
                <strong>Aramco:</strong> Governance &amp; culture mechanisms through the world’s largest IPO and
                mega-transactions—tying behaviour to board-level assurance.
              </li>
              <li>
                <strong>Aesthetic Management (2000s):</strong> Psychosocial risk controls <em>before regulation</em>,
                turning policy into live, defensible practice.
              </li>
              <li>
                <strong>Negotiation &amp; Mediation:</strong> Structured agreements across government, energy &amp;
                finance—reducing litigation risk and reputational drag.
              </li>
            </ul>
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
                <strong>Negotiation &amp; Mediation</strong> — helping you understand leverage, what’s at stake, and what
                not to lose.
              </li>
              <li>
                <strong>Assurance &amp; Governance</strong> — board-grade indicators and regulator-ready dossiers that
                evidence duty-of-care.
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

          {/* Partner & privacy */}
          <div style={{ marginTop: 12 }}>
            <span style={badge}>Data collected via Alchemer</span>
          </div>
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Partner for data management &amp; privacy</h2>
            <p>
              Data collection via <strong>Alchemer</strong> with enterprise-grade security (SOC 2, ISO 27001, AES-256 at
              rest / TLS in transit, AWS).{" "}
              <a
                href="/docs/alchemer-security-whitepaper-091824.pdf" // update if your filename differs
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

          {/* Credentials (updated as requested) */}
          <section style={card}>
            <h2 style={{ marginTop: 0 }}>Credentials</h2>
            <ul style={{ margin: 0 }}>
              <li><strong>PhD – OB (UQ)</strong>; <strong>MBR – OB (RMIT-U)</strong></li>
              <li>COSO (ERM &amp; Internal Control); Certified Director &amp; Board Secretary (GCC BDI); WHS Diploma (TAFE NSW)</li>
              <li>Awards: Academy of Management &amp; British Academy of Management Best Paper</li>
              <li>Memberships: American Psychological Association (APA); Gladstone Engineering Alliance (GEA); The Resolution Institute</li>
              <li>Ex Aramco, Ex Deloitte, Ex Pemex</li>
            </ul>
          </section>

          {/* CTA */}
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
              Schedule a confidential discussion →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
