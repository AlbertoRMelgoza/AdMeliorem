import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Procedural Justice Framework™ — Ad Meliorem",
  description:
    "A defensible, regulator-ready review that proves your incident processes are fair, consistent, and working in practice—without adding another system.",
};

export default function PJFPage() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Procedural Justice Framework™</h1>
      <p>
        When a psychosocial hazard or workplace incident occurs, liability escalates fastest where processes are weak or
        inconsistent. The Procedural Justice Framework™ is a <strong>defensible review</strong> that tests your live processes
        end-to-end, so your organisation prevents escalation, demonstrates fairness, and protects against psychosocial risks—
        <em>without adding another system</em>.
      </p>

      {/* Image lives at: AdMeliorem/public/Images/justice.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/justice.jpg"
          alt="Scales of justice representing fair and defensible processes"
          width={800}
          height={400}
          style={{ borderRadius: 12 }}
          priority
        />
      </div>

      {/* Why it functions as a critical control */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why procedural justice is your most powerful liability control</h2>
        <p>This review strengthens your first line of defence by embedding:</p>
        <ul>
          <li>
            <strong>Fair &amp; defensible complaint handling</strong> — not just policies, but <em>operational</em> practices aligned to
            modern regulatory expectations (e.g., WHS Codes of Practice, Respect@Work).
          </li>
          <li>
            <strong>Investigation protocols</strong> — consistent, transparent, and procedurally fair to reduce disputes and escalation.
          </li>
          <li>
            <strong>Remediation mechanisms</strong> — trusted ways to address harm, restore fairness, and maintain organisational integrity.
          </li>
          <li>
            <strong>Toolkit &amp; coaching</strong> — practical templates and coaching for HR, Health and Safety, Legal, Compliance, and Managers.
          </li>
        </ul>

        <p style={{ marginTop: 16 }}>Outcomes you can rely on:</p>
        <ul>
          <li>Prevent costly escalation by closing process gaps regulators target.</li>
          <li>Demonstrate due diligence with evidence you can show, not just policies.</li>
          <li>Protect trust with employees and regulators through fairness and transparency.</li>
          <li>Contain liability by proving systems are live, consistent, and defensible.</li>
        </ul>
      </section>

      {/* What you get (deliverables) */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>
        <ul>
          <li><strong>Process Review &amp; Gap Report</strong> — findings, risks, and priority fixes across intake, triage, assessment, and investigation.</li>
          <li><strong>Evidence Pack Template</strong> — incident log with 10 critical controls (checkboxes), notes, deviations, and attestation.</li>
          <li><strong>Investigation Protocols</strong> — step-by-step procedures that are consistent, fair, and regulator-ready.</li>
          <li><strong>Manager/HR Toolkit</strong> — ready-to-use templates, scripts, and guidance to ensure consistent, auditable responses.</li>
          <li><strong>Optional coaching</strong> — targeted sessions to prepare your stakeholders assertively.</li>
        </ul>

        <p style={{ marginTop: 12 }}>
          <a
            href="/contact"
            aria-label="Book a 15-minute scoping call"
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
            Book a 15-min scoping call →
          </a>
        </p>
      </section>

      <p style={{ margin: "0 0 8px 0" }}>
        <a href="/products" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          ← Back to Products
        </a>
      </p>
    </main>
  );
}
