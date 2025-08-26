// components/BuyNow.tsx
"use client";

import { useState } from "react";

type Props = {
  name: string;
  price: number;          // AUD amount to charge (e.g., 750)
  quantity?: number;
  children?: React.ReactNode;
};

export default function BuyNow({ name, price, quantity = 1, children }: Props) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    try {
      setBusy(true);
      setError(null);
      // Always use ad-hoc price data (no Price IDs)
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ name, price, quantity }],
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Checkout failed");
      if (data?.url) window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong");
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

      {error && (
        <div style={{ color: "#ff6b6b", marginTop: 8, fontWeight: 600 }}>
          {error}
        </div>
      )}

      {/* Very simple terms modal */}
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
            zIndex: 50,
          }}
        >
          <div
            style={{
              maxWidth: 700,
              width: "90%",
              background: "#111",
              border: "1px solid #333",
              borderRadius: 12,
              padding: 16,
              lineHeight: 1.6,
            }}
          >
            <h3 style={{ marginTop: 0 }}>Terms &amp; Conditions</h3>
            <p style={{ opacity: 0.9, marginTop: 8 }}>
              By clicking <strong>Agree &amp; Pay</strong>, you confirm you’ve
              read and agree to the{" "}
              <a
                href="/terms"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#f1c40f", fontWeight: 700 }}
              >
                Terms and Conditions
              </a>
              .
            </p>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  border: "1px solid #444",
                  background: "transparent",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                disabled={busy}
              >
                Cancel
              </button>
              <button
                onClick={startCheckout}
                style={{
                  background: "#f1c40f",
                  color: "#000",
                  padding: "10px 18px",
                  borderRadius: 6,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
                disabled={busy}
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
