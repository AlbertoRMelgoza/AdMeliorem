// components/BuyNow.tsx
"use client";

import { useState } from "react";

type Props = {
  name: string;           // what shows on Stripe
  price: number;          // AUD, e.g. 750
  quantity?: number;      // default 1
  termsUrl?: string;      // defaults to /terms
  termsVersion?: string;  // stored in Checkout metadata
  children?: React.ReactNode;
};

export default function BuyNow({
  name,
  price,
  quantity = 1,
  termsUrl = "/terms",
  termsVersion = "1.0",
  children,
}: Props) {
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
          items: [{ name, price, quantity }], // always ad-hoc amount
          agreed: true,
          termsVersion,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Checkout failed");
      if (data?.url) window.location.href = data.url;
    } catch (e: any) {
      setErr(e.message || "Something went wrong");
      setBusy(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={busy}
        style={{
          background: "#f1c40f",
          color: "#000",
          padding: "10px 18px",
          borderRadius: 6,
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
        }}
      >
        {busy ? "Processing…" : children ?? "Buy Now"}
      </button>

      {err && <div style={{ color: "#ff6b6b", marginTop: 8, fontWeight: 600 }}>{err}</div>}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "grid",
            placeItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              maxWidth: 720,
              width: "92%",
              background: "#111",
              border: "1px solid #333",
              borderRadius: 12,
              padding: 16,
              lineHeight: 1.6,
            }}
          >
            <h3 style={{ marginTop: 0 }}>Terms &amp; Conditions</h3>
            <p style={{ opacity: 0.9 }}>
              Please review our{" "}
              <a href={termsUrl} target="_blank" rel="noreferrer" style={{ color: "#f1c40f", fontWeight: 700 }}>
                Terms and Conditions
              </a>{" "}
              before proceeding.
            </p>

            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 8 }}>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginTop: 4 }}
              />
              <span>I have read and agree to the Terms and Conditions.</span>
            </label>

            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button
                onClick={() => setOpen(false)}
                disabled={busy}
                style={{
                  border: "1px solid #444",
                  background: "transparent",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                onClick={startCheckout}
                disabled={!agree || busy}
                style={{
                  background: agree ? "#f1c40f" : "#6c6c6c",
                  color: "#000",
                  padding: "10px 18px",
                  borderRadius: 6,
                  fontWeight: 700,
                  border: "none",
                  cursor: !agree || busy ? "not-allowed" : "pointer",
                }}
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
