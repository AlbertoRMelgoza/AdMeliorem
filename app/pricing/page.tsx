import React from 'react';
import fs from 'node:fs';
import path from 'node:path';

export const runtime = 'nodejs';   // ensure we can use fs/path on the server
export const revalidate = 60;      // ISR cache (1 minute)

type Row = Record<string, unknown>;

function readPricing(): Row[] {
  try {
    const file = path.join(process.cwd(), 'data', 'pricing.json');
    const raw = fs.readFileSync(file, 'utf8');
    const json = JSON.parse(raw);
    return Array.isArray(json) ? (json as Row[]) : [];
  } catch {
    // If file missing or invalid, show an empty table + hint
    return [];
  }
}

function Table({ rows }: { rows: Row[] }) {
  if (!rows.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No pricing found. Make sure <code>data/pricing.json</code> exists, is committed, and is a JSON array.
      </p>
    );
  }

  const columns = Array.from(new Set(rows.flatMap((r) => Object.keys(r))));

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-3 py-2 text-left font-medium capitalize">
                {c.replace(/_/g, ' ')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              {columns.map((c) => (
                <td key={c} className="px-3 py-2 align-top">
                  {String((r as any)[c] ?? '')}
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
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Pricing Catalogue</h1>
      <p className="text-sm text-muted-foreground">
        This table reads from <code>data/pricing.json</code>. Update that file and redeploy to refresh.
      </p>
      <Table rows={rows} />
      <div className="flex gap-3">
        <a className="inline-flex rounded-xl border px-3 py-2 text-sm" href="/api/pricing.csv">Download CSV</a>
        <a className="inline-flex rounded-xl border px-3 py-2 text-sm" href="/api/pricing">View JSON API</a>
      </div>
    </main>
  );
}
