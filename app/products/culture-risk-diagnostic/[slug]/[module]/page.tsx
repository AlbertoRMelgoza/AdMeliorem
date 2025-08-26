import Link from "next/link";
import type { CSSProperties } from "react";
import BuyButton from "./BuyButton";
import { getSubSubproduct, SUBSUB_BY_PARENT, type SubSubproduct } from "../../subsubproducts";

// Display labels
const MODULE_PRICE_LABEL: Record<SubSubproduct["parent"], string> = {
  copsoq: "A$ 750.00 — per module",
  sheq: "A$ 750.00 — per module",
  "culture-pulse-surveys": "A$ 300.00 — per module",
};

// Fallback amounts in AUD used if no Stripe priceId exists yet
const FALLBACK_PRICE_BY_PARENT: Record<SubSubproduct["parent"], number> = {
  copsoq: 750,
  sheq: 750,
  "culture-pulse-surveys": 300,
};

// Optional: fill these when you create Stripe Prices for each module
const PRICE_ID_BY_MODULE: Record<string, string | undefined> = {
  // COPSOQ
  "copsoq-demands-at-work": undefined,
  "copsoq-work-organisation-job-content": undefined,
  "copsoq-interpersonal-relations-leadership": undefined,
  "copsoq-work-individual-interface": undefined,
  "copsoq-social-capital": undefined,
  // SHEQ
  "sheq-gender-harassment-sexist-hostility": undefined,
  "sheq-sexual-hostility": undefined,
  "sheq-unwanted-sexual-attention": undefined,
  "sheq-sexual-coercion": undefined,
  // Culture Pulse
  "pulse-male-dominated-dynamics": undefined,
  "pulse-female-dominated-dynamics": undefined,
  "pulse-power-imbalances": undefined,
  "pulse-speak-up-tolerance": undefined,
  "pulse-conflicts-of-interest": undefined,
  "pulse-values-in-practice": undefined,
  "pulse-beliefs": undefined,
  "pulse-attitudes": undefined,
  "pulse-emotion": undefined,
  "pulse-decision-making": undefined,
};

type Props = { params: { slug: SubSubproduct["parent"]; module: string } };

export async function generateStaticParams() {
  const params: Props["params"][] = [];
  (Object.keys(SUBSUB_BY_PARENT) as Array<SubSubproduct["parent"]>).forEach((parent) => {
    SUBSUB_BY_PARENT[parent].forEach((m) => params.push({ slug: parent, module: m.slug }));
  });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const m = getSubSubproduct(params.module);
  return {
    title: m ? `${m.title} — Ad Meliorem` : "Module — Ad Meliorem",
    description: m?.short ?? "Culture Risk Diagnostic module",
  };
}

export default function ModulePage({ params }: Props) {
  const m = getSubSubproduct(params.module);
  if (!m) {
    return (
      <main style={{ maxWidth: 900, margin: "28px auto", padding: "0 16px" }}>
        <h1>Not found</h1>
        <p>This module does not exist.</p>
        <p>
          <Link href={`/products/culture-risk-diagnostic/${params.slug}`} style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
            ← Back
          </Link>
        </p>
      </main>
    );
  }

  const wrap: CSSProperties = { maxWidth: 900, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  const displayLabel = MODULE_PRICE_LABEL[m.parent];
  const fallbackPrice = FALLBACK_PRICE_BY_PARENT[m.parent]; // AUD
  const priceId = PRICE_ID_BY_MODULE[m.slug]; // optional

  return (
    <main style={wrap}>
      <p style={{ margin: "0 0 8px 0" }}>
        <Link href={`/products/culture-risk-diagnostic/${params.slug}`} style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          ← {params.slug === "copsoq" ? "COPSOQ" : params.slug === "sheq" ? "SHEQ" : "Culture Pulse Surveys"}
        </Link>
      </p>

      <h1 style={{ marginTop: 0 }}>{m.title}</h1>
      <p style={{ opacity: 0.9 }}>{m.short}</p>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Price</h2>
        <p style={{ fontWeight: 700 }}>{displayLabel}</p>

        {/* Always show Buy button. If priceId is present, it’s used.
            Otherwise we charge the fallback amount via name+price (AUD) — Terms checkbox applies. */}
        <BuyButton priceId={priceId} name={m.title} price={fallbackPrice}>
          Buy Now
        </BuyButton>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What it covers</h2>
        <p>{m.description}</p>
        {m.reference && (
          <>
            <h3 style={{ marginTop: 16 }}>References</h3>
            <p style={{ whiteSpace: "pre-line" }}>{m.reference}</p>
          </>
        )}
      </section>
    </main>
  );
}
