"use client";

import { useState } from "react";

type Props = {
  moduleSlug: string;         // e.g. "copsoq-demands-at-work"
  parentSlug: string;         // e.g. "copsoq"
  label?: string;             // button label
};

export default function BuyButton({ moduleSlug, parentSlug, label = "Buy Now" }: Props) {
  const [loading, setLoading] = useState(false);

  async function onClick() {
    try {
      setLoading(true);
      const r = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleSlug, parentSlug }),
      });
      const j = await r.json();
      if (j.url) window.location.href = j.url;
      else alert(j.error || "Could not start checkout.");
    } catch (e: any) {
      alert(e?.message || "Error starting checkout");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={loading}
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
      {loading ? "Starting…" : label}
    </button>
  );
}

