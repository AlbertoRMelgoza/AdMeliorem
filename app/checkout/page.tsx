"use client";

import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../lib/products";
import { lines, setQty, totalCents, clearCart } from "../lib/cart";

const YELLOW = { color: "#f1c40f", textDecoration: "underline" } as const;

export default function CheckoutPage() {
  const [cartLines, setCartLines] = useState(lines());
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // keep the page in sync if cart changes elsewhere
  useEffect(() => {
    const h = () => setCartLines(lines());
    window.addEventListener("cart:updated", h);
    return () => window.removeEventListener("cart:updated", h);
  }, []);

  const grandTotal = useMemo(() => totalCents(), [cartLines]);

  const updateQty = (sku: string, qty: number) => {
    setQty(sku, qty);
    setCartLines(lines());
  };

  const startCheckout = async () => {
    setMsg(null);
    if (!agree) {
      setMsg("Please agree to the Terms & Conditions to continue.");
      return;
    }
    if (!cartLines.length) {
      setMsg("Your basket is empty.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agree: true,
          items: cartLines.map((l) => ({ sku: l.sku, qty: l.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.url) {
        throw new Error(data?.error || "Unable to start checkout");
      }
      // Redirect to Stripe
      window.location.href = data.url;
    } catch (e: any) {
      setMsg(e?.message || "Checkout failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!cartLines.length) {
    return (
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "24px 16px" }}>
        <h1>Checkout</h1>
        <p style={{ opacity: 0.8 }}>Your basket is empty.</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Checkout</h1>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {cartLines.map((ln) => {
          const p = (PRODUCTS as any)[ln.sku];
          return (
            <li
              key={ln.sku}
              style={{ border: "1px solid #222", borderRadius: 12, padding: 12 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{p?.name || ln.sku}</div>
                  <div style={{ opacity: 0.75, fontSize: 12 }}>
                    {p?.description || ""}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <QtyInput value={ln.qty} onChange={(q) => updateQty(ln.sku, q)} />
                  <div style={{ minWidth: 120, textAlign: "right" }}>
                    {formatAUD((p?.unit_amount || 0) * ln.qty)}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
        <button
          onClick={() => { clearCart(); setCartLines([]); }}
          style={btn()}
        >
          Clear basket
        </button>
        <div style={{ fontSize: 18, fontWeight: 600 }}>
          Total: {formatAUD(grandTotal)}
        </div>
      </div>

      <label style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 16 }}>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <span>
          I agree to the{" "}
          <a href="/terms" style={YELLOW} target="_blank">
            Terms &amp; Conditions
          </a>
          .
        </span>
      </label>

      <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={startCheckout} style={btn()} disabled={loading || !agree}>
          {loading ? "Starting…" : "Pay with card"}
        </button>
        {msg ? <span style={{ opacity: 0.8 }}>{msg}</span> : null}
      </div>
    </main>
  );
}

function QtyInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <button style={btn()} onClick={() => onChange(Math.max(0, value - 1))}>–</button>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Math.max(0, parseInt(e.target.value || "0", 10)))}
        style={{ width: 70, border: "1px solid #222", borderRadius: 8, padding: "6px 10px", background: "transparent", color: "inherit" }}
      />
      <button style={btn()} onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}

function btn(): React.CSSProperties {
  return { border: "1px solid #222", borderRadius: 10, padding: "6px 10px", background: "transparent", color: "inherit", cursor: "pointer" };
}

function formatAUD(cents: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format((cents || 0) / 100);
}
