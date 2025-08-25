import React from "react";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const revalidate = 60;

type Row = Record<string, unknown>;

// Read from public/data first (always deployed), then fallback to data/
function readPricing(): Row[] {
  const candidates = [
    path.join(process.cwd(), "public", "data", "pricing.json"),
    path.join(process.cwd(), "data", "pricing.json"),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        const raw = fs.readFileSync(p, "utf8");
        const json = JSON.parse(raw);
        return Array.isArray(json) ? (json as Row[]) : [];
      }
    } catch {
      // keep trying next path
    }
  }
  return [];
}

function Table({ rows }: { rows: Row[] }) {
  if (!rows.length) {
    return (
      <p style={{ fontSize: 14, opacity: 0.8 }}>
        No pricing found. Ensure <code>public/data/pricing.json</code> exists,
        is committed, and is a JSON array.
      </p>
    );
  }

  const columns = Array.from(new Set(rows.flatMap((r) => Object.keys(r))));

  const cellStyle: React.CSSProperties = {
    border: "1px solid #222",
    padding: "8px 10px",
    verticalAlign: "top",
  };

  return (
    <div style={{ overflowX: "auto", border: "1px solid #222", borderRadius: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead style={{ background: "#111" }}>
          <tr>
            {columns.map((c) => (
              <th key={c} style={{ ...cellStyle, textAlign: "left", fontWeight: 600 }}>
                {c.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={c} style={cellStyle}>
                  {String((r as any)[c] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PricingPage() {
  const rows = readPricing();
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ fontSize: 28, margin: 0, marginBottom: 12 }}>Pricing Catalogue</h1>
      <Table rows={rows} />
    </main>
  );
}
