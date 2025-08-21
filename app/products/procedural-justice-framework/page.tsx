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
        The Procedural Justice Framework™ establishes fair, transparent and defensible complaint handling and
        investigation processes that prevent escalation and contain liability. After the first mention, Procedural Justice
        Framework is used without the mark for readability.
      </p>

      {/* Centered image */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/images/pjf.jpg" // 👈 make sure this file is inside public/images/
          alt="Procedural Justice Framework illustration"
          width={800}
          height={400}
          style={{ borderRadius: 12 }}
        />
      </div>

      {/* New section with your content */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>How it functions as a critical control</h2>
        <p>This framework functions as a critical control by embedding:</p>
        <ul>
          <li>
            <strong>Fair &amp; Defensible Complaint Handling Systems</strong> → aligned with WHS Codes of Practice,
            Respect@Work, and regulator expectations.
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

        <p style={{ marginTop: 16 }}>By design, the Procedural Justice Framework enables organisations to:</p>
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

      {/* Existing section moved to the end */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>
        <ul>
          <li>Workflow and roles for intake, triage, assessment, and investigation</li>
          <li>Templates and guidance for notices, interviews, findings, and outcomes</li>
          <li>Quality checks aligned to fairness, transparency and defensibility</li>
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
