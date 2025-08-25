import React from "react";
import { headers } from "next/headers";

export const revalidate = 60;

type Raw = Record<string, unknown>;
type Row = {
  item: string;
  description?: string;
  price?: string | number | null;
  billing?: string;
};

function normalize(raw: Raw[]): Row[] {
  const rows: Row[] = raw.map((r) => ({
    item: String(r["pricing_catalogue"] ?? "").trim(),
    description: r["unnamed:_1"] != null ? String(r["unnamed:_1"]).trim() : "",
    price: r["unnamed:_2"] ?? "",
    billing: r["unnamed:_3"] != null ? String(r["unnamed:_3"]).trim() : "",
  }));

  // Drop the Excel header row and divider rows (—, -, …, empty)
  const isAllDash = (v: string) => ["—", "-", "…", ""].includes(v.trim());
  return rows.filter((row) => {
    const itemLower = row.item.toLowerCase();
    if (itemLower === "product / service") return false; // header row
    const cells = [
      row.item,
      row.description ?? "",
      row.price != null ? String(row.price) : "",
      row.billing ?? "",
    ].map((v) => String(v).trim());
    return !cells.every(isAllDash);
  });
}

async function fetchRows(): Promise<Row[]> {
  try {
    // Build absolute URL so it works on Vercel + localhost
    const h = headers();
    const host = h.get("host") || "";
    const scheme = host.startsWith("localhost") ? "http" : "https";
    const url = `${scheme}://${host}/api/pricing`;

    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = (await res.json()) as unknown;
    return Array.isArray(data) ? normalize(data as Raw[]) : [];
  } catch {
    return [];
  }
}

function Table({ rows }: { rows: Row[] }) {
  if (!rows.length) {
    return (
      <p style={{ fontSize: 14, opacity: 0.8 }}>
        No pricing found. If you just added <code>pricing.json</code>, wait a minute for the cache to refresh or redeploy.
      </p>
    );
  }

  const cell: React.CSSProperties = {
    border: "1px solid #222",
    padding: "8px 10px",
    verticalAlign: "top",
  };

  const fmtPrice = (v: string | number | null | undefined) => {
    if (v === null || v === undefined) return "";
    const s = String(v).trim();
    if (/^[0-9]+(\.[0-9]+)?$/.test(s)) {
      // looks numeric
      return `AUD ${Number(s).toLocaleString()}`;
    }
    return s; // keep e.g. "TBA", "..."
  };

  return (
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
  );
}

export default async function PricingPage() {
  const rows = await fetchRows();
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 28, margin: 0, marginBottom: 12 }}>Pricing Catalogue</h1>
      <Table rows={rows} />
    </main>
  );
}
