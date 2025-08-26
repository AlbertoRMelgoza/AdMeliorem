// components/BuyNow.tsx
"use client";

import { useState } from "react";

type Props = {
  name: string;           // label that appears on Stripe
  price: number;          // AUD amount (e.g., 750)
  quantity?: number;      // optional, defaults to 1
  termsUrl?: string;      // defaults to /terms
  children?: React.ReactNode;
};

export default function BuyNow({
  name,
  price,
  quantity = 1,
  termsUrl = "/terms",
  children,
}: Props) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function go() {
    try {
      setBusy(true);
      setErr(null);

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ name, price, quantity }], // ad-hoc amount
          agreed: true,                       // we’re only showing the link, not gating
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
    <div>
      <button
        onClick={go}
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

      <div style={{ fontSize: 12, opacity: 0.85, marginTop: 8 }}>
        By clicking Buy Now you agree to our{" "}
        <a href={termsUrl} style={{ color: "#f1c40f", fontWeight: 700 }}>
          Terms &amp; Conditions
        </a>.
      </div>

      {err && (
        <div style={{ color: "#ff6b6b", marginTop: 8, fontWeight: 600 }}>{err}</div>
      )}
    </div>
  );
}
