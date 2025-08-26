import Link from "next/link";
import type { CSSProperties } from "react";
import BuyButton from "../BuyButton";
import { SUBPRODUCTS } from "../subproducts";
import { SUBSUB_BY_PARENT } from "../subsubproducts";

type Slug = "copsoq" | "sheq" | "culture-pulse-surveys";
type Props = { params: { slug: Slug } };

export function generateStaticParams() {
  return SUBPRODUCTS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);
  return {
    title: sp ? `${sp.title} — Ad Meliorem` : "Subproduct — Ad Meliorem",
    description: sp?.short ?? "Culture Risk Diagnostic subproduct",
  };
}

// fallback charge (AUD) if no Stripe priceId is set for a module
const FALLBACK_BY_PARENT: Record<Slug, number> = {
  copsoq: 750,
  sheq: 750,
  "culture-pulse-surveys": 300,
};

// OPTIONAL: paste Stripe price IDs per-module (keyed by module slug)
const PRICE_ID_BY_MODULE: Record<string, string | undefined> = {
  // "copsoq-demands-at-work": "price_XXXX",
  // "sheq-sexual-coercion": "price_YYYY",
  // "pulse-decision-making": "price_ZZZZ",
};

export default function SubproductPage({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);
  const modules = SUBSUB_BY_PARENT[params.slug];

  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };
  const grid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 };
  const tile: CSSProperties = { background: "#f1c40f", color: "#000", border: "1px solid #f1c40f", borderRadius: 12, padding: 14, textDecoration: "none", display: "block", fontWeight: 700 };
  const title: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.35 };
  const short: CSSProperties = { margin: "6px 0 10px 0", fontSize: 13 };
  const priceLabel = FALLBACK_BY_PARENT[params.slug] === 300 ? "A$ 300.00 — per module" : "A$ 750.00 — per module";

  if (!sp) {
    return (
      <main style={wrap}>
        <h1>Not found</h1>
        <p>This subproduct does not exist.</p>
        <p><Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", fontWeight: 700 }}>← Back to Culture Risk Diagnostic</Link></p>
      </main>
    );
  }

  return (
    <main style={wrap}>
      <p style={{ margin: "0 0 8px 0" }}>
        <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          ← Culture Risk Diagnostic™
        </Link>
      </p>

      <h1 style={{ marginTop: 0 }}>{sp.title}</h1>
      <p style={{ opacity: 0.9 }}>{sp.short}</p>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Available modules</h2>
        <div style={grid}>
          {modules.map((m) => {
            const priceId = PRICE_ID_BY_MODULE[m.slug];
            const fallback = FALLBACK_BY_PARENT[params.slug];
            return (
              <div key={m.slug} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href={`/products/culture-risk-diagnostic/${params.slug}/${m.slug}`} style={tile}>
                  <p style={title}>{m.title}</p>
                  <p style={short}>{m.short}</p>
                  <p style={{ margin: 0, fontWeight: 700 }}>{priceLabel}</p>
                </Link>
                <BuyButton priceId={priceId} name={m.title} price={fallback}>Buy Now</BuyButton>
              </div>
            );
          })}
        </div>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why it matters</h2>
        <p>{sp.description}</p>
        {sp.includedInPackages && (
          <p style={{ opacity: 0.9 }}><strong>Included in:</strong> {sp.includedInPackages.join(" • ")}</p>
        )}
      </section>
    </main>
  );
}
