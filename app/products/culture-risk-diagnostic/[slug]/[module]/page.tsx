import Link from "next/link";
import type { CSSProperties } from "react";
import BuyButton from "../../BuyButton"; // ← uses the Terms modal
import { getSubSubproduct, SUBSUBPRODUCTS } from "../../subsubproducts";

// Build all module pages
export function generateStaticParams() {
  return SUBSUBPRODUCTS.map((m) => ({ slug: m.parent, module: m.slug }));
}

type Props = { params: { slug: "copsoq" | "sheq" | "culture-pulse-surveys"; module: string } };

export async function generateMetadata({ params }: Props) {
  const m = getSubSubproduct(params.module);
  return {
    title: m ? `${m.title} — Ad Meliorem` : "Module — Ad Meliorem",
    description: m?.short ?? "Culture Risk Diagnostic module",
  };
}

// Fallback charge amounts (AUD) when no Stripe priceId is provided
const FALLBACK_BY_PARENT: Record<"copsoq" | "sheq" | "culture-pulse-surveys", number> = {
  copsoq: 750,
  sheq: 750,
  "culture-pulse-surveys": 300,
};

// Optional: paste Stripe price IDs keyed by module slug (prefer these if you have them)
const PRICE_ID_BY_MODULE: Record<string, string | undefined> = {
  // "copsoq-demands-at-work": "price_XXXX",
  // "copsoq-work-organisation-job-content": "price_XXXX",
  // "copsoq-interpersonal-relations-leadership": "price_XXXX",
  // "copsoq-work-individual-interface": "price_XXXX",
  // "copsoq-social-capital": "price_XXXX",
  // "sheq-gender-harassment-sexist-hostility": "price_XXXX",
  // "sheq-sexual-hostility": "price_XXXX",
  // "sheq-unwanted-sexual-attention": "price_XXXX",
  // "sheq-sexual-coercion": "price_XXXX",
  // "pulse-male-dominated-dynamics": "price_XXXX",
  // "pulse-female-dominated-dynamics": "price_XXXX",
  // "pulse-power-imbalances": "price_XXXX",
  // "pulse-speak-up-tolerance": "price_XXXX",
  // "pulse-conflicts-of-interest": "price_XXXX",
  // "pulse-values-in-practice": "price_XXXX",
  // "pulse-beliefs": "price_XXXX",
  // "pulse-attitudes": "price_XXXX",
  // "pulse-emotion": "price_XXXX",
  // "pulse-decision-making": "price_XXXX",
};

export default function ModulePage({ params }: Props) {
  const m = getSubSubproduct(params.module);

  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  if (!m || m.parent !== params.slug) {
    return (
      <main style={wrap}>
        <h1>Not found</h1>
        <p>This module does not exist.</p>
        <p>
          <Link href={`/products/culture-risk-diagnostic/${params.slug}`} style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
            ← Back to {params.slug.replace(/-/g, " ").toUpperCase()}
          </Link>
        </p>
      </main>
    );
  }

  // Display label based on parent
  const priceLabel =
    m.parent === "culture-pulse-surveys" ? "A$ 300.00 — per module" : "A$ 750.00 — per module";

  const priceId = PRICE_ID_BY_MODULE[m.slug];
  const fallback = FALLBACK_BY_PARENT[m.parent];

  return (
    <main style={wrap}>
      <p style={{ margin: "0 0 8px 0" }}>
        <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          ← Culture Risk Diagnostic™
        </Link>{" "}
        ·{" "}
        <Link href={`/products/culture-risk-diagnostic/${m.parent}`} style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          {m.parent.toUpperCase()}
        </Link>
      </p>

      <h1 style={{ marginTop: 0 }}>{m.title}</h1>
      <p style={{ opacity: 0.9 }}>{m.short}</p>

      {/* BUY NOW */}
      <section style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontWeight: 700 }}>{priceLabel}</div>
          <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>
            Instant checkout with Terms &amp; Conditions.
          </div>
        </div>
        <BuyButton priceId={priceId} name={m.title} price={fallback}>
          Buy Now
        </BuyButton>
      </section>

      {/* Why it matters */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why it matters</h2>
        <p>{m.description}</p>
        {m.reference && (
          <p style={{ opacity: 0.85 }}>
            <strong>Reference:</strong> {m.reference}
          </p>
        )}
      </section>

      {/* What you receive */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What you receive</h2>
        <ul>
          <li>Risk mapping and indicators focused on this domain.</li>
          <li>Actionable recommendations and Prevention Plan inputs.</li>
          <li>Executive briefing from Alberto with targeted controls.</li>
        </ul>
      </section>
    </main>
  );
}
