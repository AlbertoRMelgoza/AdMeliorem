import React from "react";

export const runtime = "nodejs";       // stable on Vercel
export const dynamic = "force-dynamic";
export const revalidate = 0;           // always fetch fresh from the API

type AnyRow = Record<string, unknown>;

function normalize(raw: AnyRow[]) {
  // Map Excel-export field names to clean headers
  const rows = raw.map((r) => ({
    item: String(r["pricing_catalogue"] ?? "").trim(),
    description: r["unnamed:_1"] != null ? String(r["unnamed:_1"]).trim() : "",
    price: r["unnamed:_2"] ?? "",
    billing: r["unnamed:_3"] != null ? String(r["unnamed:_3"]).trim() : "",
  }));

  // Drop header/divider rows
  const isAllDash = (v: string) => ["—", "-", "…", ""].includes(v.trim());
  return rows.filter((row) => {
    if (row.item.toLowerCase() === "product / service") return false; // header row
    const cells = [
      row.item,
      row.description,
      row.price != null ? String(row.price) : "",
      row.billing,
    ].map((v) => String(v).trim());
    return !cells.every(isAllDash);
  });
}

async function getRows() {
  // Build a base URL that always works on Vercel & locally
  const base =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  const res = await fetch(`${base}/api/pricing`, { cache: "no-store" });
  if (!res.ok) return [];
  const data = (await res.json()) as unknown;
  if (!Array.isArray(data)) return [];
  return normalize(data as AnyRow[]);
}

export default async function PricingPage() {
  const rows = await getRows();

  const cell: React.CSSProperties = {
    border: "1px solid #222",
    padding: "8px 10px",
    verticalAlign: "top",
  };

  const fmtPrice = (v: unknown) => {
    const s = String(v ?? "").trim();
    if (/^[0-9]+(\.[0-9]+)?$/.test(s)) return `AUD ${Number(s).toLocaleString()}`;
    return s;
  };

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 28, margin: 0, marginBottom: 12 }}>Pricing Catalogue</h1>

      {!rows.length ? (
        <p style={{ fontSize: 14, opacity: 0.8 }}>
          No pricing found. Confirm <code>/api/pricing</code> returns an array, or set
          <code> NEXT_PUBLIC_BASE_URL</code> in Vercel to your site URL.
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
