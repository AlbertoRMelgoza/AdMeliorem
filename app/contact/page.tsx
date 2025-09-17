// app/contact/page.tsx  (SERVER component — no "use client")
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact — Ad Meliorem",
  description:
    "Contact details, fast response standards, and business information for Ad Meliorem.",
};

export default function ContactPage() {
  const wrap: CSSProperties = {
    maxWidth: 980,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const section: CSSProperties = {
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  };
  const chipRow: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  };
  const chip: CSSProperties = {
    display: "inline-block",
    background: "#f1c40f",
    color: "#000",
    borderRadius: 9999,
    padding: "6px 10px",
    fontWeight: 800,
    fontSize: 12,
  };
  const cta: CSSProperties = {
    display: "inline-block",
    background: "#f1c40f",
    color: "#000",
    padding: "12px 18px",
    borderRadius: 8,
    fontWeight: 700,
    textDecoration: "none",
  };
  const ghost: CSSProperties = {
    display: "inline-block",
    color: "#f1c40f",
    padding: "12px 16px",
    border: "1px solid #333",
    borderRadius: 8,
    fontWeight: 700,
    textDecoration: "none",
  };
  const small: CSSProperties = { fontSize: 13, opacity: 0.82 };

  const mailto =
    "mailto:am@albertormelgoza.com" +
    "?subject=" +
    encodeURIComponent("Confidential consult request") +
    "&body=" +
    encodeURIComponent(
      [
        "Hi Alberto,",
        "",
        "I'd like a brief confidential consult.",
        "",
        "• Name:",
        "• Organisation:",
        "• Phone:",
        "• Topic (e.g., harassment, bullying, toxic culture, investigations):",
        "",
        "Thank you.",
      ].join("\n"),
    );

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Contact</h1>

      {/* Phone-first CTA */}
      <section style={section}>
        <p style={{ marginTop: 0 }}>
          Fast, practical help on sexual harassment/assault, bullying & aggression, toxic culture, and procedural justice.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="tel:+61490247772" style={cta} aria-label="Call Alberto on 0490 247 772">
            Call 0490 247 772
          </a>
          <a className={styles.mailto} href={mailto} style={ghost} aria-label="Email Alberto">
            Email am@albertormelgoza.com
          </a>
        </div>
        <p style={small}>Private & confidential. Australia-wide. No marketing list.</p>
      </section>

      {/* What happens next */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>What happens next</h2>
        <div style={chipRow}>
          <span style={chip}>Response ≤24h</span>
          <span style={chip}>Call booked ≤48h</span>
          <span style={chip}>Scoping summary ≤3d</span>
        </div>
        <ul style={{ marginTop: 12 }}>
          <li>We agree the outcome you need (containment, prevention, evidence pack, or uplift).</li>
          <li>We confirm what’s already in place and the safest immediate steps.</li>
          <li>You receive a short plan with clear pricing anchors before we proceed.</li>
        </ul>
      </section>

      {/* Popular next steps */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Popular next steps</h2>
        <ul>
          <li>
            <a href="/products/procedural-justice-framework" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
              Procedural Justice Framework →
            </a>{" "}
            — defensible complaint handling, investigation protocols, and remedy.
          </li>
          <li>
            <a href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
              Culture Risk Diagnostic →
            </a>{" "}
            — leading indicators, risk scores, and regulator-ready reporting.
          </li>
          <li>
            <a href="/products/shsarc-rcabh" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
              SHSARC & RCABH →
            </a>{" "}
            — prevention programs for sexual harassment/assault, aggression, bullying & harassment.
          </li>
        </ul>
      </section>

      {/* Smaller, de-emphasised image */}
      <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
        <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 460, width: "100%", filter: "grayscale(100%)", opacity: 0.9 }}>
          <Image
            src="/Images/contact.jpg"
            alt=""
            width={460}
            height={260}
            sizes="(max-width: 460px) 100vw, 460px"
            style={{ display: "block", width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>

      {/* Business info */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Business information</h2>
        <ul>
          <li>
            <strong>Business name:</strong> Ad Meliorem
          </li>
          <li>
            <strong>ABN:</strong> 93&nbsp;710&nbsp;507&nbsp;818
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a className={styles.mailto} href="mailto:am@albertormelgoza.com">
              am@albertormelgoza.com
            </a>
          </li>
        </ul>
      </section>

      {/* Trust / privacy snippet */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Trust & privacy</h2>
        <p style={{ marginTop: 8 }}>
          I operate to regulator expectations and respect confidentiality. Where surveys are involved, data collection uses{" "}
          <strong>Alchemer</strong> (SOC 2 / ISO 27001; AES-256 at rest, TLS in transit). Anonymous reporting and minimum subgroup sizes are enforced.
        </p>
      </section>

      {/* Disclaimer */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Disclaimer</h2>
        <p>
          The information provided by Ad Meliorem is for general educational and advisory purposes only. It does not constitute legal, financial,
          or medical advice and should not be relied upon as a substitute for independent professional consultation.
        </p>
        <p>
          While all care is taken to ensure accuracy, Ad Meliorem makes no warranties as to the completeness or suitability of this information
          for your specific circumstances. Ultimate responsibility for decisions remains with you and your organisation.
        </p>
      </section>
    </main>
  );
}
