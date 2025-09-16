import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "SHSARC™ & RCABH™ Critical risk controls — Ad Meliorem",
  description:
    "Two flagship workshops that serve as psychosocial‑hazard critical controls and produce regulator‑ready Prevention Plans.",
};

export default function TrainingPrograms() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16 };
  const grid: CSSProperties = {
    display: "grid",
    gap: 24,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    alignItems: "start",
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
      <section style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <p style={{ margin: 0, fontWeight: 800 }}>Call to book a 20‑min scoping call</p>
        <a href="tel:+61490247772" style={callBtn} aria-label="Call Alberto on 0490 247 772">
          Call 0490 247 772
        </a>
      </section>

      <h1 style={{ marginTop: 0 }}>SHSARC™ &amp; RCABH™ — Workshops that serve as critical controls</h1>
      <p>
        The <strong>SHSARC™</strong> (Sexual Harassment &amp; Sexual Assault Risk Control) and <strong>RCABH™</strong> (Risk
        Control for Aggression, Bullying &amp; Harassment) workshops focus on prevention, early response, and documented
        controls. Each program produces a <strong>regulator‑ready Prevention Plan</strong> aligned to your context.
      </p>

      {/* Hero image (smaller) + At a glance */}
      <section style={grid}>
        <div>
          <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 520, margin: "0 auto" }}>
            <Image
              src="/Images/courses.jpg"
              alt="Facilitated workshop for psychosocial‑risk critical controls"
              width={560}
              height={320}
              sizes="(max-width: 520px) 100vw, 520px"
              style={{ display: "block", width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>At a glance</h2>
          <ul>
            <li><strong>Format:</strong> in‑person or live online (interactive)</li>
            <li><strong>Outputs:</strong> documented critical controls + a Prevention Plan you can evidence</li>
            <li><strong>Max participants:</strong> 20 per workshop</li>
            <li><strong>Price:</strong> <span style={{ fontWeight: 800 }}>A$750 per person</span></li>
          </ul>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope SHSARC and RCABH">
              Call 0490 247 772
            </a>
            <Link href="/products" style={ghostBtn} aria-label="Back to Products">
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ ...card, marginTop: 24 }} id="shsarc">
        <h2 style={{ marginTop: 0 }}>SHSARC™</h2>
        <p>
          A <strong>3‑day, 11‑module</strong> program that builds prevention and rapid, fair response to sexual harassment
          and sexual assault. Focus areas include by‑stander activation, speak‑up tolerance, incident intake, immediate
          safety measures, and referral pathways.
        </p>
        <ul>
          <li>Documented controls mapped to WHS psychosocial Codes of Practice</li>
          <li>Role‑specific actions for leaders, HR, security, and site management</li>
          <li>Template Prevention Plan tailored to your context</li>
        </ul>
      </section>

      <section style={{ ...card, marginTop: 24 }} id="rcabh">
        <h2 style={{ marginTop: 0 }}>RCABH™</h2>
        <p>
          A <strong>4‑day, 13‑module</strong> program for preventing aggression, bullying, and harassment — and responding
          effectively when incidents occur. Covers conflict de‑escalation, complaint intake and triage, independence
          checks, investigation standards, and remediation options.
        </p>
        <ul>
          <li>Critical controls for prevention and early response</li>
          <li>Fair‑process standards you can operationalise (ack ≤24h • triage ≤48h • findings ≤21d)</li>
          <li>Prevention Plan with responsibilities, timing, and evidence artefacts</li>
        </ul>
      </section>

      {/* Compliance note */}
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 16 }}>
        No provider can guarantee zero psychological harm. These workshops implement regulator‑ready operational controls
        and evidence‑based practices to reduce risk and improve defensibility.
      </p>

      {/* Data note */}
      <p style={{ marginTop: 8 }}>
        <span style={badge}>Max 20 participants</span>
      </p>

      {/* Footer CTAs */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
        <a href="tel:+61490247772" style={callBtn} aria-label="Call Alberto to book a workshop">
          Call 0490 247 772
        </a>
        <Link href="/products" style={ghostBtn} aria-label="Back to Products">
          ← Back to Products
        </Link>
      </div>
    </main>
  );
}
