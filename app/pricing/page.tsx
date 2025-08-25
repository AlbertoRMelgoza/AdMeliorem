import React from 'react'


async function getPricing() {
const res = await fetch('/api/pricing', { next: { revalidate: 60 } })
if (!res.ok) throw new Error('Failed to load pricing')
return res.json()
}


export function PriceTable({ rows }:{ rows:any[] }) {
if (!rows?.length) return <p className="text-sm text-muted-foreground">No pricing loaded.</p>
const columns = Array.from(new Set(rows.flatMap(r => Object.keys(r))))
return (
<div className="overflow-x-auto rounded-xl border">
<table className="min-w-full text-sm">
<thead className="bg-gray-50">
<tr>
{columns.map(col => (
<th key={col} className="px-3 py-2 text-left font-medium capitalize">{col.replace(/_/g,' ')}</th>
))}
</tr>
</thead>
<tbody>
{rows.map((r, i) => (
<tr key={i} className="border-t">
{columns.map(c => (
<td key={c} className="px-3 py-2 align-top">{String(r[c] ?? '')}</td>
))}
</tr>
))}
</tbody>
</table>
</div>
)
}


export default async function PricingPage() {
const rows = await getPricing()
return (
<main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
<h1 className="text-2xl font-semibold">Pricing Catalogue</h1>
<p className="text-sm text-muted-foreground">This table is powered by <code>/api/pricing</code>. Replace <code>data/pricing.json</code> with your JSON export from Excel to update.</p>
<PriceTable rows={rows} />
<a className="inline-flex rounded-xl border px-3 py-2 text-sm" href="/api/pricing.csv">Download CSV</a>
</main>
)
}
