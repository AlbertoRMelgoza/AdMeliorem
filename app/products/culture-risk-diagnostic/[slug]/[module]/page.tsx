import Link from "next/link";
import type { CSSProperties } from "react";
import BuyNow from "../../../../components/BuyNow";
import { getSubSubproduct, SUBSUB_BY_PARENT, type SubSubproduct } from "../../subsubproducts";

// display-only labels by parent
const MODULE_PRICE_LABEL: Record<SubSubproduct["parent"], string> = {
  copsoq: "A$ 750.00 — per module",
  sheq: "A$ 750.00 — per module",
  "culture-pulse-surveys": "A$ 300.00 — per module",
};

// OPTIONAL: hard-wire Stripe Price IDs per module slug when you have them
// (leave undefined to show “Enquire / Request invoice”)
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

  const priceLabel = MODULE_PRICE_LABEL[m.parent];
  const priceId = PRICE_ID_BY_MODULE[m.slug];

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
        <p style={{ fontWeight: 700 }}>{priceLabel}</p>
        {priceId ? (
          <BuyNow priceId={priceId} name={m.title} price={0}>
            Buy Now
          </BuyNow>
        ) : (
          <a
            href="/contact"
            style={{ border: "1px solid #444", padding: "10px 18px", borderRadius: 6, fontWeight: 600, textDecoration: "none", color: "#fff" }}
          >
            Enquire / Request invoice
          </a>
        )}
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
