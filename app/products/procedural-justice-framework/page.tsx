import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Procedural Justice Framework™ — Ad Meliorem",
  description:
    "A defensible, regulator-ready operational control that proves your incident processes are fair, consistent, and working in practice — without adding another system.",
};

export default function PJFPage() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };
  const callBtn: CSSProperties = {
    display: "inline-block",
    background: "#f1c40f",
    color: "#000",
    padding: "10px 16px",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
  };
  const ghostBtn: CSSProperties = {
    display: "inline-block",
    color: "#f1c40f",
    padding: "10px 14px",
    border: "1px solid #333",
    borderRadius: 6,
    fontWeight: 700,
    textDecoration: "none",
  };

  return (
    <main style={wrap}>
      {/* Phone-first CTA strip */}
      <section style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 0 }}>
        <p style={{ margin: 0, fontWeight: 800 }}>Call to book a 20‑min scoping call</p>
        <a href="tel:+61490247772" style={callBtn} aria-label="Call Alberto on 0490 247 772">
          Call 0490 247 772
        </a>
      </section>

      <h1 style={{ marginTop: 16 }}>Procedural Justice Framework™</h1>
      <p>
        When a psychosocial hazard or workplace incident occurs, liability escalates fastest where processes are weak or inconsistent.
        The Procedural Justice Framework™ is an <strong>operational risk control</strong> that embeds procedural fairness end‑to‑end so your organisation
        prevents escalation, demonstrates fairness, and protects against psychosocial risks — <em>without adding another system</em>.
      </p>

      {/* Smaller hero image */}
      <div style={{ display: "flex", justifyContent: "center", margin: "18px 0" }}>
        <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 520, width: "100%" }}>
          <Image
            src="/Images/justice.jpg"
            alt="Scales of justice symbolising a fair, fast, defensible process"
            width={560}
            height={320}
            sizes="(max-width: 520px) 100vw, 520px"
            style={{ display: "block", width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>

      {/* SLA ribbon + At a glance */}
      <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>Fair‑process standards (SLA)</h2>
          <p style={{ marginTop: 0, fontWeight: 800 }}>Acknowledge ≤24h • Triage ≤48h • Findings ≤21d</p>
          <ul style={{ marginTop: 8 }}>
            <li>Independence checks and role separation</li>
            <li>Transparent communication with parties (expectations & timelines)</li>
            <li>Complete audit trail and evidence pack</li>
          </ul>
        </div>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>At a glance</h2>
          <ul>
            <li><strong>Price:</strong> A$4,000 per use</li>
            <li><strong>Format:</strong> deployable operational control, no new system</li>
            <li><strong>Time to implement:</strong> fast start with immediate process gap‑check</li>
            <li><strong>Best for:</strong> licensees & large employers under regulator/board scrutiny</li>
          </ul>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope Procedural Justice Framework">
              Call 0490 247 772
            </a>
            <Link href="/contact" style={ghostBtn} aria-label="Request invoice or purchase order">
              Request invoice / PO
            </Link>
          </div>
        </div>
      </section>

      {/* Why it functions as a critical control */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why procedural justice is a powerful liability control</h2>
        <p>This operational control strengthens your first line of defence by embedding:</p>
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
            <strong>Toolkit &amp; coaching</strong> — practical templates and coaching for HR, Health & Safety, Legal, Compliance, and Managers.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>Outcomes you can rely on:</p>
        <ul>
          <li>Prevent costly escalation by closing process gaps regulators target</li>
          <li>Demonstrate due diligence with evidence you can show (not just policies)</li>
          <li>Protect trust with employees and regulators through fairness and transparency</li>
          <li>Contain liability by proving systems are live, consistent, and defensible</li>
        </ul>
      </section>

      {/* What you get (deliverables) */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>
        <ul>
          <li><strong>Critical Control &amp; Action Plan</strong> — roles, steps, triggers, and priority fixes across intake, triage, assessment, and investigation</li>
          <li><strong>Evidence Pack Template</strong> — incident log with 10 critical controls (checkboxes), notes, deviations, and attestation</li>
          <li><strong>Investigation Protocols</strong> — step‑by‑step procedures that are consistent, fair, and regulator‑ready</li>
          <li><strong>Manager/HR Toolkit</strong> — ready‑to‑use templates, scripts, and guidance to ensure consistent, auditable responses</li>
          <li><strong>Optional coaching</strong> — targeted sessions to prepare stakeholders assertively</li>
        </ul>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          <a href="tel:+61490247772" style={callBtn} aria-label="Call to book a 15 minute scoping call">
            Call 0490 247 772
          </a>
          <Link href="/products" style={ghostBtn} aria-label="Back to Products">
            ← Back to Products
          </Link>
        </div>
      </section>

      {/* Compliance note */}
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 16 }}>
        No provider can guarantee zero psychological harm. This framework implements regulator‑ready operational controls and
        evidence‑based methods to reduce risk, shorten duration, and improve defensibility.
      </p>
    </main>
  );
}
