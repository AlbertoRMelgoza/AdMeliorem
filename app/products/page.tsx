'use client';

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

/** Small inline Buy button with Terms gate (per card) */
function BuyInline({ name, price, termsUrl = "/terms" }: { name: string; price: number; termsUrl?: string }) {
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function startCheckout() {
    if (!agree) return;
    try {
      setBusy(true);
      setErr(null);
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ name, price, quantity: 1 }], // charge the shown amount
          agreed: true,
          termsVersion: "1.0",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Checkout failed");
      if (data?.url) window.location.href = data.url;
    } catch (e: any) {
      setErr(e?.message ?? "Something went wrong");
      setBusy(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={busy}
        style={{ background: "#f1c40f", color: "#000", padding: "10px 18px", borderRadius: 6, fontWeight: 700, border: "none", cursor: "pointer" }}
      >
        {busy ? "Processing…" : "Buy Now"}
      </button>

      {err && <div style={{ color: "#ff6b6b", marginTop: 8, fontWeight: 600 }}>{err}</div>}

      {open && (
        <div role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "grid", placeItems: "center", zIndex: 1000 }}>
          <div style={{ maxWidth: 720, width: "92%", background: "#111", border: "1px solid #333", borderRadius: 12, padding: 16, lineHeight: 1.6 }}>
            <h3 style={{ marginTop: 0 }}>Terms &amp; Conditions</h3>
            <p style={{ opacity: 0.9 }}>
              Please review our{" "}
              <a href={termsUrl} target="_blank" rel="noreferrer" style={{ color: "#f1c40f", fontWeight: 700 }}>
                Terms and Conditions
              </a>{" "}
              before proceeding.
            </p>

            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 8 }}>
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} style={{ marginTop: 4 }} />
              <span>I have read and agree to the Terms and Conditions.</span>
            </label>

            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button
                onClick={() => setOpen(false)}
                disabled={busy}
                style={{ border: "1px solid #444", background: "transparent", color: "#fff", padding: "10px 18px", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}
              >
                Cancel
              </button>
              <button
                onClick={startCheckout}
                disabled={!agree || busy}
                style={{ background: agree ? "#f1c40f" : "#6c6c6c", color: "#000", padding: "10px 18px", borderRadius: 6, fontWeight: 700, border: "none", cursor: !agree || busy ? "not-allowed" : "pointer" }}
                aria-disabled={!agree || busy}
              >
                {busy ? "Processing…" : "Agree & Pay"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description: "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const grid: CSSProperties = { display: "grid", gap: 24, marginTop: 24 };
  const card: CSSProperties = { background: "#111", border: "1px solid #333", borderRadius: 8, padding: 16 };
  const title: CSSProperties = { margin: "0 0 8px", fontSize: 18, color: "#f1c40f" };
  const blurb: CSSProperties = { fontSize: 14, color: "#bdbdbd" };
  const linkStyle: CSSProperties = { textDecoration: "none", color: "inherit" };
  const priceText: CSSProperties = { fontWeight: 700, marginTop: 10 };
  const termsInline: CSSProperties = { fontSize: 12, opacity: 0.8, marginTop: 8 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>Select a product or service to see the full outline, deliverables, and outcomes.</p>

      {/* Global notice */}
      <p style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>
        By purchasing you agree to our{" "}
        <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>Terms &amp; Conditions</a>.
      </p>

      <div style={grid}>
        {/* SHSARC / RCABH */}
        <article style={card}>
          <Link href="/products/shsarc-rcabh" style={linkStyle}>
            <h3 style={title}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
            <p style={blurb}>Two flagship risk control programs through talent management that produce regulator-ready Prevention Plans.</p>
          </Link>
          <div style={priceText}>A$ 750.00 — per person (max 20 per workshop)</div>
          <div style={{ marginTop: 10 }}>
            <BuyInline name="SHSARC™ & RCABH™ — Risk Control Programs" price={750} />
            <div style={termsInline}>By clicking Buy Now you agree to the <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>Terms &amp; Conditions</a>.</div>
          </div>
        </article>

        {/* Procedural Justice Framework */}
        <article style={card}>
          <Link href="/products/procedural-justice-framework" style={linkStyle}>
            <h3 style={title}>Procedural Justice Framework™</h3>
            <p style={blurb}>Fair, transparent, defensible processes that prevent escalation and contain liability.</p>
          </Link>
          <div style={priceText}>A$ 4,000.00 — per use</div>
          <div style={{ marginTop: 10 }}>
            <BuyInline name="Procedural Justice Framework™" price={4000} />
            <div style={termsInline}>By clicking Buy Now you agree to the <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>Terms &amp; Conditions</a>.</div>
          </div>
        </article>

        {/* Culture Risk Diagnostic */}
        <article style={card}>
          <Link href="/products/culture-risk-diagnostic" style={linkStyle}>
            <h3 style={title}>Culture Risk Diagnostic™</h3>
            <p style={blurb}>Forensic culture assessment with leading indicators, risk scores and due-diligence evidence.</p>
          </Link>
          <div style={priceText}>A$ 15,000.00 — annual subscription</div>
          <div style={{ marginTop: 10 }}>
            <BuyInline name="Culture Risk Diagnostic™" price={15000} />
            <div style={termsInline}>By clicking Buy Now you agree to the <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>Terms &amp; Conditions</a>.</div>
          </div>
        </article>

        {/* Mediation */}
        <article style={card}>
          <Link href="/products/mediation" style={linkStyle}>
            <h3 style={title}>Mediation Services</h3>
            <p style={blurb}>Neutral, confidential facilitation to resolve disputes and protect working relationships.</p>
          </Link>
          <div style={priceText}>A$ 3,000.00 — per session</div>
          <div style={{ marginTop: 10 }}>
            <BuyInline name="Mediation Services" price={3000} />
            <div style={termsInline}>By clicking Buy Now you agree to the <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>Terms &amp; Conditions</a>.</div>
          </div>
        </article>

        {/* Negotiation */}
        <article style={card}>
          <Link href="/products/negotiation" style={linkStyle}>
            <h3 style={title}>Negotiation Services</h3>
            <p style={blurb}>Structured preparation, leverage mapping, rehearsal, and deal support.</p>
          </Link>
          <div style={priceText}>A$ 3,000.00 — per session</div>
          <div style={{ marginTop: 10 }}>
            <BuyInline name="Negotiation Services" price={3000} />
            <div style={termsInline}>By clicking Buy Now you agree to the <a href="/terms" style={{ color: "#f1c40f", fontWeight: 700 }}>Terms &amp; Conditions</a>.</div>
          </div>
        </article>
      </div>
    </main>
  );
}
