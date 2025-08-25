import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Procedural Justice Framework™ — Ad Meliorem",
  description:
    "Fair, transparent, defensible processes that prevent escalation and contain liability.",
};

export default function PJFPage() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Procedural Justice Framework™</h1>
      <p>
         When a psychosocial hazard or workplace incident arises, financial and reputational liability escalates fastest
         where processes are weak or inconsistent. The Procedural Justice Framework™ closes this gap, establishing industry-best, regulator
         ready protocols for managing incidents, so your organisation prevents escalation, demonstrates fairness, and protects against 
         psychosocial risks or hazards. 
      </p>

      {/* Image lives at: AdMeliorem/public/Images/justice.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/justice.jpg"
          alt="Procedural Justice Framework illustration"
          width={800}
          height={400}
          style={{ borderRadius: 12 }}
        />
      </div>

      {/* How it functions as a critical control */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why Procedural Justice is your most powerful liability control?</h2>
        <p>This framework functions as your single most effective line of defence by embedding:</p>
        <ul>
          <li>
            <strong>Fair &amp; Defensible Complaint Handling Systems</strong> → not just policies, but live-ready systems
            aligned to WHS Codes of Practice, The Codes, Respect@Work, and modern regulatory expectations.
          </li>
          <li>
            <strong>Investigation Protocols</strong> → consistent, transparent, and procedurally fair, reducing disputes
            and escalation.
          </li>
          <li>
            <strong>Remediation Mechanisms</strong> → trusted systems for addressing harm, restoring fairness, and
            maintaining organisational integrity.
          </li>
          <li>
            <strong>Toolkit &amp; Training</strong> → templates, guidance, and skill-building for HR, managers, and
            investigators to apply procedural justice in practice.
          </li>
        </ul>

        <p style={{ marginTop: 16 }}>By design, the Procedural Justice Framework™ enables organisations to:</p>
        <ul>
          <li>Prevent costly escalation by eliminating gaps in process that regulators target.</li>
          <li>Contain liability by demonstrating that systems — not just policies — are live and defensible.</li>
          <li>Protect trust with employees and regulators by embedding fairness and transparency.</li>
          <li>
            Provide evidence of due diligence when psychosocial claims arise, shifting liability away from systemic
            failure.
          </li>
        </ul>
      </section>

      {/* What you get (at the end) */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>
        <ul>
          <li>End-to-end workflows detailing every role and setup from compliant intake, triage, assessment, and investigation, ensuring nothing is missed and every action is defensible</li>
          <li>Built-in quality checks and documentation designed for fairness, transparency, and regulator ready evidence, turning process into your strongest shield</li>
          <li>Practical tools: ready-to-use templates, protocols, and tailored coaching so every incident reponse is consistent, fair, and auditable </li>
          
                   </ul>
        <p style={{ marginTop: 12 }}>
          <a
            href="/contact"
            style={{
              background: "#f1c40f",
              color: "#000",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Ask about PJF →
          </a>
        </p>
      </section>
    </main>
  );
}
