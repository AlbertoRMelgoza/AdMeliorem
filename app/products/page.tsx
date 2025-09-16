// app/products/page.tsx  (SERVER component — do NOT add "use client")
import type { CSSProperties } from "react";
import Link from "next/link";
import BuyNow from "../../components/BuyNow"; // ✅ correct file name

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description: "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: CSSProperties = {
    maxWidth: 1100,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const grid: CSSProperties = {
    display: "grid",
    gap: 24,
    marginTop: 24,
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  };
  const card: CSSProperties = {
    background: "#111",
    border: "1px solid #333",
    borderRadius: 12,
    padding: 16,
  };
  const title: CSSProperties = { margin: "0 0 8px", fontSize: 18, color: "#f1c40f" };
  const blurb: CSSProperties = { fontSize: 14, color: "#bdbdbd" };
  const linkStyle: CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    WebkitTapHighlightColor: "rgba(241, 196, 15, 0.35)",
  };
  const priceText: CSSProperties = { fontWeight: 700, marginTop: 10 };
  const tapCue: CSSProperties = { marginTop: 8, fontWeight: 700, color: "#f1c40f" };
  const ctaRow: CSSProperties = { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginTop: 10 };
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

      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>Select a product or service to see the full outline, deliverables, and outcomes.</p>

      {/* Terms link visible on this page too */}
      <div style={{ fontSize: 13, opacity: 0.85 }}>
        By purchasing you agree to our {" "}
        <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>
          Terms &amp; Conditions
        </a>
        .
      </div>

      <div style={grid}>
        {/* SHSARC / RCABH */}
        <article style={card}>
          <Link href="/products/shsarc-rcabh" style={linkStyle} aria-label="View SHSARC & RCABH — Risk Control Programs">
            <h3 style={title}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
            <p style={blurb}>Two flagship risk‑control programs through talent management that produce regulator‑ready Prevention Plans.</p>
            <div style={tapCue}>Tap to view →</div>
          </Link>
          <div style={priceText}>A$ 750.00 — per person (max 20 per workshop)</div>
          <div style={ctaRow}>
            <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope SHSARC & RCABH">
              Call 0490 247 772
            </a>
            <BuyNow name="SHSARC™ & RCABH™ — Risk Control Programs" price={750}>Buy Now</BuyNow>
            <Link href="/contact" style={ghostBtn} aria-label="Request invoice or purchase order">
              Request invoice / PO
            </Link>
          </div>
        </article>

        {/* Procedural Justice Framework */}
        <article style={card}>
          <Link href="/products/procedural-justice-framework" style={linkStyle} aria-label="View Procedural Justice Framework">
            <h3 style={title}>Procedural Justice Framework™</h3>
            <p style={blurb}>
              An operational risk control that embeds procedural fairness in incident handling — reducing psychosocial‑risk and liability
              without adding another system.
            </p>
            <div style={{ fontWeight: 800, marginTop: 6 }}>Acknowledge ≤24h • Triage ≤48h • Findings ≤21d</div>
            <div style={tapCue}>Tap to view →</div>
          </Link>
          <div style={priceText}>A$ 4,000.00 — per use</div>
          <div style={ctaRow}>
            <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope Procedural Justice Framework">
              Call 0490 247 772
            </a>
            <BuyNow name="Procedural Justice Framework™" price={4000}>Buy Now</BuyNow>
            <Link href="/contact" style={ghostBtn} aria-label="Request invoice or purchase order">
              Request invoice / PO
            </Link>
          </div>
        </article>

        {/* Culture Risk Diagnostic */}
        <article style={card}>
          <Link href="/products/culture-risk-diagnostic" style={linkStyle} aria-label="View Culture Risk Diagnostic">
            <h3 style={title}>Culture Risk Diagnostic™</h3>
            <p style={blurb}>Forensic culture assessment with leading indicators, risk scores, and due‑diligence evidence.</p>
            <div style={tapCue}>Tap to view →</div>
          </Link>
          <div style={priceText}>A$ 15,000.00 — annual subscription</div>
          <div style={ctaRow}>
            <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope Culture Risk Diagnostic">
              Call 0490 247 772
            </a>
            <BuyNow name="Culture Risk Diagnostic™" price={15000}>Buy Now</BuyNow>
            <Link href="/contact" style={ghostBtn} aria-label="Request invoice or purchase order">
              Request invoice / PO
            </Link>
          </div>
        </article>

        {/* Mediation */}
        <article style={card}>
          <Link href="/products/mediation" style={linkStyle} aria-label="View Mediation Services">
            <h3 style={title}>Mediation Services</h3>
            <p style={blurb}>Neutral, confidential facilitation to resolve disputes and protect working relationships.</p>
            <div style={tapCue}>Tap to view →</div>
          </Link>
          <div style={priceText}>A$ 3,000.00 — per session</div>
          <div style={ctaRow}>
            <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope Mediation Services">
              Call 0490 247 772
            </a>
            <BuyNow name="Mediation Services" price={3000}>Buy Now</BuyNow>
            <Link href="/contact" style={ghostBtn} aria-label="Request invoice or purchase order">
              Request invoice / PO
            </Link>
          </div>
        </article>

        {/* Negotiation */}
        <article style={card}>
          <Link href="/products/negotiation" style={linkStyle} aria-label="View Negotiation Services">
            <h3 style={title}>Negotiation Services</h3>
            <p style={blurb}>Structured preparation, leverage mapping, rehearsal, and deal support.</p>
            <div style={tapCue}>Tap to view →</div>
          </Link>
          <div style={priceText}>A$ 3,000.00 — per session</div>
          <div style={ctaRow}>
            <a href="tel:+61490247772" style={callBtn} aria-label="Call to scope Negotiation Services">
              Call 0490 247 772
            </a>
            <BuyNow name="Negotiation Services" price={3000}>Buy Now</BuyNow>
            <Link href="/contact" style={ghostBtn} aria-label="Request invoice or purchase order">
              Request invoice / PO
            </Link>
          </div>
        </article>
      </div>

      {/* Compliance-friendly footer note */}
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 16 }}>
        No provider can guarantee zero psychological harm. These offerings implement regulator‑ready operational controls and
        evidence‑based methods to reduce risk, shorten duration, and improve defensibility.
      </p>
    </main>
  );
}
