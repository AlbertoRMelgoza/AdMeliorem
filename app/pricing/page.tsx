import React from "react";
import path from "node:path";
import fs from "node:fs/promises";

export const runtime = "nodejs"; // allow fs on Vercel Node runtime

type AnyRow = Record<string, unknown>;
type Row = { item: string; description: string; price: string; billing: string };

function normalize(raw: AnyRow[]): Row[] {
  const rows = raw.map((r) => ({
    item: String(r?.["pricing_catalogue"] ?? "").trim(),
    description: r?.["unnamed:_1"] != null ? String(r["unnamed:_1"]).trim() : "",
    price: String(r?.["unnamed:_2"] ?? "").trim(),
    billing: r?.["unnamed:_3"] != null ? String(r["unnamed:_3"]).trim() : "",
  }));

  // Drop the Excel header row and divider rows
  const isAllDash = (v: string) => ["—", "-", "…", ""].includes(v.trim());
  return rows.filter((row) => {
    if (row.item.toLowerCase() === "product / service") return false; // header row
    const cells = [row.item, row.description, row.price, row.billing].map((v) => v.trim());
    return !cells.every(isAllDash);
  });
}

async function readPricing(): Promise<Row[]> {
  try {
    const file = path.join(process.cwd(), "app", "data", "pricing.json");
    const raw = await fs.readFile(file, "utf8");
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return normalize(data as AnyRow[]);
  } catch {
    return [];
  }
}

export default async function PricingPage() {
  const rows = await readPricing();

  const cell: React.CSSProperties = {
    border: "1px solid #222",
    padding: "8px 10px",
    verticalAlign: "top",
  };

  const fmtPrice = (s: string) =>
    /^[0-9]+(\.[0-9]+)?$/.test(s) ? `AUD ${Number(s).toLocaleString()}` : s;

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 28, margin: 0, marginBottom: 12 }}>Pricing Catalogue</h1>

      {!rows.length ? (
        <p style={{ fontSize: 14, opacity: 0.8 }}>
          No pricing found. Ensure <code>app/data/pricing.json</code> exists, is committed, and is a top-level JSON array.
        </p>
      ) : (
        <div style={{ overflowX: "auto", border: "1px solid #222", borderRadius: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead style={{ background: "#111" }}>
              <tr>
                <th style={{ ...cell, textAlign: "left", fontWeight: 600 }}>Item</th>
                <th style={{ ...cell, textAlign: "left", fontWeight: 600 }}>Description</th>
                <th style={{ ...cell, textAlign: "left", fontWeight: 600 }}>Price (AUD)</th>
                <th style={{ ...cell, textAlign: "left", fontWeight: 600 }}>Billing / Usage</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td style={cell}>{r.item}</td>
                  <td style={cell}>{r.description}</td>
                  <td style={cell}>{fmtPrice(r.price)}</td>
                  <td style={cell}>{r.billing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
