"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { PRODUCTS, type SKU } from "@/app/lib/products";

type BasketRow = { sku: SKU; name: string; unitPrice: number; qty: number };

const YELLOW = { color: "#f1c40f", textDecoration: "underline" } as const;

// format numbers like A$4,000 (no cents shown)
const fmtAUD = (amount: number) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

export default function CheckoutPage() {
  // Build the selectable catalogue from PRODUCTS (unit_amount is in cents → dollars)
  const catalogue: BasketRow[] = useMemo(
    () =>
      (Object.entries(PRODUCTS) as [SKU, (typeof PRODUCTS)[SKU]][]).map(
        ([sku, p]) => ({
          sku,
          name: p.name,
          unitPrice: Math.round(p.unit_amount / 100), // 400000 → 4000
          qty: 0,
        })
      ),
    []
  );

  const [items, setItems] = useState<BasketRow[]>(catalogue);
  const [terms, setTerms] = useState(false);
  const [email, setEmail] = useState("");

  const updateQty = (sku: SKU, delta: number) =>
    setItems((rows) =>
      rows.map((r) =>
        r.sku === sku ? { ...r, qty: Math.max(0, r.qty + delta) } : r
      )
    );

  const total = items.reduce((s, it) => s + it.qty * it.unitPrice, 0);

  const checkout = async () => {
    const payload = {
      customer_email: email || undefined,
      termsAccepted: terms,
      items: items
        .filter((it) => it.qty > 0)
        .map((it) => ({ sku: it.sku, quantity: it.qty })),
    };

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data?.error || "Checkout failed");
      return;
    }
    location.href = data.url; // redirect to Stripe Checkout
  };

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>Checkout</h1>
      <p style={{ marginTop: 8, opacity: 0.85 }}>
        Select items and proceed to secure payment (AUD).
      </p>

      <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
        {items.map((it) => (
          <div
            key={it.sku}
            style={{
              border: "1px solid #222",
              borderRadius: 12,
              padding: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{it.name}</div>
              <div style={{ opacity: 0.8 }}>{fmtAUD(it.unitPrice)}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={() => updateQty(it.sku, -1)} style={btn()}>
                -
              </button>
              <span>{it.qty}</span>
              <button onClick={() => updateQty(it.sku, +1)} style={btn()}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          Contact email (optional):{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            style={{
              border: "1px solid #222",
              borderRadius: 8,
              padding: "6px 10px",
              background: "transparent",
              color: "inherit",
            }}
          />
        </label>

        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          I agree to the{" "}
          <a href="/terms" style={YELLOW} target="_blank" rel="noreferrer">
            contract / terms & conditions
          </a>
          .
        </label>
      </div>

      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>Total: {fmtAUD(total)}</strong>
        <button
          onClick={checkout}
          style={btn()}
          disabled={!terms || total <= 0}
          aria-disabled={!terms || total <= 0}
          title={
            !terms
              ? "You must accept the contract before paying"
              : total <= 0
              ? "Add at least one item"
              : "Pay securely"
          }
        >
          Pay securely
        </button>
      </div>
    </main>
  );
}

function btn(): CSSProperties {
  return {
    border: "1px solid #222",
    borderRadius: 10,
    padding: "8px 12px",
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
  };
}
