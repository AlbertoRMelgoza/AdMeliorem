// app/components/CRDConfigurator.tsx
"use client";

import { useState } from "react";
import { PRODUCTS, formatAUD } from "../lib/products";
import { setQty } from "../lib/cart";

// SKUs used in the UI (must match app/lib/products.ts)
const SUB = "CRD_SUB_ALL";
const COPSOQ = "CRD_COPSOQ_FULL";
const SHEQ_FULL = "CRD_SHEQ_FULL";
const SHEQ_MOD4 = "CRD_SHEQ_MOD4";
const PULSE_SUITE = "CRD_PULSE_SUITE";
const PULSE_TOPIC = "CRD_PULSE_TOPIC";

function p(sku: string) {
  return PRODUCTS[sku as keyof typeof PRODUCTS];
}

export default function CRDConfigurator() {
  const [mode, setMode] = useState<"sub" | "build">("sub");

  // Build-your-own state
  const [useCOPS, setUseCOPS] = useState(false);      // COPSOQ full (0/1)
  const [useSHEQ, setUseSHEQ] = useState(false);      // SHEQ full (0/1)
  const [mod4Qty, setMod4Qty] = useState(0);          // SHEQ Modules 4 (# modules)
  const [pulseSuite, setPulseSuite] = useState(false);// Pulse Surveys suite (0/1)
  const [pulseQty, setPulseQty] = useState(0);        // Pulse survey per topic (# topics)
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const addAnnual = () => {
    setBusy(true);
    // Ensure annual is exclusive: clear module SKUs and set SUB=1
    setQty(COPSOQ, 0);
    setQty(SHEQ_FULL, 0);
    setQty(SHEQ_MOD4, 0);
    setQty(PULSE_SUITE, 0);
    setQty(PULSE_TOPIC, 0);
    setQty(SUB, 1);
    done("Annual subscription added to basket.");
  };

  const addBuild = () => {
    setBusy(true);
    // Ensure we’re not mixing annual with modules
    setQty(SUB, 0);

    // Apply the user selections
    setQty(COPSOQ, useCOPS ? 1 : 0);
    setQty(SHEQ_FULL, useSHEQ ? 1 : 0);
    setQty(SHEQ_MOD4, Math.max(0, mod4Qty | 0));
    setQty(PULSE_SUITE, pulseSuite ? 1 : 0);
    setQty(PULSE_TOPIC, Math.max(0, pulseQty | 0));

    done("Selected modules added to basket.");
  };

  const done = (text: string) => {
    // Tell other tabs / the checkout to refresh if they listen
    try { window.dispatchEvent(new Event("cart:updated")); } catch {}
    setMsg(text);
    setBusy(false);
    setTimeout(() => setMsg(null), 1500);
  };

  const yellow: React.CSSProperties = { color: "#f1c40f", textDecoration: "underline" };

  return (
    <section style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
      <h3 style={{ margin: 0 }}>Culture Risk Diagnostic™</h3>
      <p style={{ marginTop: 6, opacity: 0.85 }}>
        Choose the annual subscription (includes all modules) or build your own from modules below.
      </p>

      {/* Toggle */}
      <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
        <label style={radioLbl()}>
          <input
            type="radio"
            name="crd_mode"
            checked={mode === "sub"}
            onChange={() => setMode("sub")}
          />
          Annual subscription (all modules)
          <span style={{ marginLeft: 8, opacity: 0.8 }}>
            {p(SUB) ? formatAUD((p(SUB) as any).unit_amount) + " / yr" : ""}
          </span>
        </label>

        <label style={radioLbl()}>
          <input
            type="radio"
            name="crd_mode"
            checked={mode === "build"}
            onChange={() => setMode("build")}
          />
          Build my own modules
        </label>
      </div>

      {/* Annual action */}
      {mode === "sub" && (
        <div style={{ marginTop: 12 }}>
          <button onClick={addAnnual} disabled={busy} style={btn(busy)}>
            {busy ? "Adding…" : "Add annual subscription to basket"}
          </button>
          {msg ? <span style={{ marginLeft: 10, opacity: 0.85 }}>{msg}</span> : null}
        </div>
      )}

      {/* Build-your-own controls */}
      {mode === "build" && (
        <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
          <Line>
            <label style={checkLbl()}>
              <input type="checkbox" checked={useCOPS} onChange={(e) => setUseCOPS(e.target.checked)} />
              {p(COPSOQ)?.name}
            </label>
            <span style={{ opacity: 0.8 }}>{formatAUD((p(COPSOQ) as any).unit_amount)} / yr</span>
          </Line>

          <Line>
            <label style={checkLbl()}>
              <input type="checkbox" checked={useSHEQ} onChange={(e) => setUseSHEQ(e.target.checked)} />
              {p(SHEQ_FULL)?.name}
            </label>
            <span style={{ opacity: 0.8 }}>{formatAUD((p(SHEQ_FULL) as any).unit_amount)} / yr</span>
          </Line>

          <Line>
            <div>
              <div style={{ fontWeight: 600 }}>{p(SHEQ_MOD4)?.name}</div>
              <small style={{ opacity: 0.8 }}>(enter number of modules)</small>
            </div>
            <Qty value={mod4Qty} onChange={setMod4Qty} />
            <span style={{ opacity: 0.8 }}>{formatAUD((p(SHEQ_MOD4) as any).unit_amount)} each</span>
          </Line>

          <Line>
            <label style={checkLbl()}>
              <input type="checkbox" checked={pulseSuite} onChange={(e) => setPulseSuite(e.target.checked)} />
              {p(PULSE_SUITE)?.name}
            </label>
            <span style={{ opacity: 0.8 }}>{formatAUD((p(PULSE_SUITE) as any).unit_amount)} / yr</span>
          </Line>

          <Line>
            <div>
              <div style={{ fontWeight: 600 }}>{p(PULSE_TOPIC)?.name}</div>
              <small style={{ opacity: 0.8 }}>(enter number of topics)</small>
            </div>
            <Qty value={pulseQty} onChange={setPulseQty} />
            <span style={{ opacity: 0.8 }}>{formatAUD((p(PULSE_TOPIC) as any).unit_amount)} each</span>
          </Line>

          <div style={{ marginTop: 4 }}>
            <button onClick={addBuild} disabled={busy} style={btn(busy)}>
              {busy ? "Adding…" : "Add selected modules to basket"}
            </button>
            <a href="/checkout" style={{ ...yellow, marginLeft: 12 }}>Go to checkout</a>
            {msg ? <span style={{ marginLeft: 10, opacity: 0.85 }}>{msg}</span> : null}
          </div>
        </div>
      )}
    </section>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 10, alignItems: "center" }}>
      {children}
    </div>
  );
}

function Qty({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={() => onChange(Math.max(0, (value | 0) - 1))} style={btn()}>−</button>
      <input
        value={value}
        onChange={(e) => onChange(Math.max(0, parseInt(e.target.value || "0", 10)))}
        style={{ width: 56, textAlign: "center", border: "1px solid #222", borderRadius: 8, background: "transparent", color: "inherit", padding: "6px 8px" }}
      />
      <button onClick={() => onChange((value | 0) + 1)} style={btn()}>+</button>
    </div>
  );
}

function btn(disabled = false): React.CSSProperties {
  return {
    border: "1px solid #222",
    borderRadius: 10,
    padding: "8px 12px",
    background: disabled ? "#111" : "transparent",
    color: "inherit",
    cursor: disabled ? "not-allowed" : "pointer",
  };
}
function radioLbl(): React.CSSProperties { return { display: "inline-flex", gap: 8, alignItems: "center" }; }
function checkLbl(): React.CSSProperties { return { display: "flex", gap: 8, alignItems: "center", fontWeight: 600 }; }
