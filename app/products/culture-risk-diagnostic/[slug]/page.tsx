import Link from "next/link";
import type { CSSProperties } from "react";
import BuyButton from "../BuyButton";
import { SUBPRODUCTS } from "../subproducts";
import { SUBSUB_BY_PARENT } from "../subsubproducts";

// All valid slugs (those with modules are: copsoq, sheq, culture-pulse-surveys)
type Slug =
  | "copsoq"
  | "sheq"
  | "culture-pulse-surveys"
  | "ocas"
  | "wfbs"
  | "code-of-conduct"
  | "code-of-ethics"
  | "qualitative-interventions"
  | "culture-risk-indicators";

type Props = { params: { slug: Slug } };

export function generateStaticParams() {
  return SUBPRODUCTS.map((s) => ({ slug: s.slug as Slug }));
}

export async function generateMetadata({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);
  return {
    title: sp ? `${sp.title} — Ad Meliorem` : "Subproduct — Ad Meliorem",
    description: sp?.short ?? "Culture Risk Diagnostic subproduct",
  };
}

// Fallback charge (AUD) for each subproduct (used if no Stripe priceId is set)
const FALLBACK_BY_SLUG: Record<Slug, number> = {
  copsoq: 3750,
  sheq: 3000,
  "culture-pulse-surveys": 3000,
  ocas: 2250,
  wfbs: 2250,
  "code-of-conduct": 750,
  "code-of-ethics": 750,
  "qualitative-interventions": 750,
  "culture-risk-indicators": 750,
};

// Display labels for each subproduct
const PRICE_LABEL_BY_SLUG: Record<Slug, string> = {
  copsoq: "A$ 3,750.00 — annual subscription",
  sheq: "A$ 3,000.00 — annual subscription",
  "culture-pulse-surveys": "A$ 3,000.00 — annual subscription",
  ocas: "A$ 2,250.00 — per engagement",
  wfbs: "A$ 2,250.00 — per engagement",
  "code-of-conduct": "A$ 750.00 — per review",
  "code-of-ethics": "A$ 750.00 — per review",
  "qualitative-interventions": "A$ 750.00 — per session (1 hour)",
  "culture-risk-indicators": "A$ 750.00 — per product",
};

// OPTIONAL: paste Stripe price IDs per subproduct (if you want to charge Stripe prices)
const PRICE_ID_BY_SLUG: Partial<Record<Slug, string>> = {
  // copsoq: "price_XXXXXXXXXXXX",
  // sheq: "price_YYYYYYYYYYYY",
  // ...
};

export default function SubproductPage({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);

  // Modules only exist for these three; others return [] so we don't crash
  const modules =
    (SUBSUB_BY_PARENT as Partial<Record<Slug, Array<{ slug: string; title: string; short: string }>>>)[params.slug] ??
    [];

  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };
  const grid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 };
  const tile: CSSProperties = { background: "#f1c40f", color: "#000", border: "1px solid #f1c40f", borderRadius: 12, padding: 14, textDecoration: "none", display: "block", fontWeight: 700 };
  const title: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.35 };
  const short: CSSProperties = { margin: "6px 0 10px 0", fontSize: 13 };

  if (!sp) {
    return (
      <main style={wrap}>
        <h1>Not found</h1>
        <p>This subproduct does not exist.</p>
        <p>
          <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", fontWeight: 700 }}>
            ← Back to Culture Risk Diagnostic
          </Link>
        </p>
      </main>
    );
  }

  const subPriceLabel = PRICE_LABEL_BY_SLUG[params.slug];
  const subFallback = FALLBACK_BY_SLUG[params.slug];
  const subPriceId = PRICE_ID_BY_SLUG[params.slug];

  return (
    <main style={wrap}>
      <p style={{ margin: "0 0 8px 0" }}>
        <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          ← Culture Risk Diagnostic™
        </Link>
      </p>

      <h1 style={{ marginTop: 0 }}>{sp.title}</h1>
      <p style={{ opacity: 0.9 }}>{sp.short}</p>

{/* Partner + privacy note */}
<div style={{ margin: "12px 0 0 0" }}>
  <span
    style={{
      display: "inline-block",
      background: "#f1c40f",
      color: "#000",
      borderRadius: 9999,
      padding: "4px 10px",
      fontWeight: 700,
      fontSize: 12,
    }}
  >
    Data collected via Alchemer
  </span>
</div>

<section style={card} id="data-safety">
  <h2 style={{ marginTop: 0 }}>Data safety &amp; privacy</h2>
  <p>
    We partner with <strong>Alchemer</strong> to run secure collection for Culture Risk
    Diagnostic engagements. Alchemer provides enterprise-grade controls:
  </p>
  <ul>
    <li>AES-256 encryption at rest and TLS in transit; encrypted backups.</li>
    <li>Hosted on AWS with VPC isolation, WAF, and fault-tolerant design.</li>
    <li>Independent certifications: SOC 2 Type II and ISO 27001.</li>
    <li>Committed 99.9% service uptime for surveys and app access.</li>
  </ul>
  <p style={{ marginTop: 10 }}>
    <a
      href="/docs/alchemer-security-whitepaper-091824.pdf"
      style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Alchemer Security White Paper →
    </a>
  </p>
  <p style={{ opacity: 0.9, marginTop: 10 }}>
    We also enforce strict anonymity and minimum subgroup sizes for reporting.
  </p>
</section>
      
      {/* If this subproduct has modules, show them with prices + Buy Now for each module */}
      {modules.length > 0 ? (
        <section style={card}>
          <h2 style={{ marginTop: 0 }}>Available modules</h2>
          <div style={grid}>
            {modules.map((m) => {
              // per-module pricing: COPSOQ/SHEQ = A$750, Pulse = A$300
              const perModuleLabel =
                params.slug === "culture-pulse-surveys" ? "A$ 300.00 — per module" : "A$ 750.00 — per module";
              const perModuleFallback = params.slug === "culture-pulse-surveys" ? 300 : 750;

              return (
                <div key={m.slug} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link href={`/products/culture-risk-diagnostic/${params.slug}/${m.slug}`} style={tile}>
                    <p style={title}>{m.title}</p>
                    <p style={short}>{m.short}</p>
                    <p style={{ margin: 0, fontWeight: 700 }}>{perModuleLabel}</p>
                  </Link>
                  {/* If you later add Stripe price IDs per module, wire them in the module page file */}
                  <BuyButton priceId={undefined} name={m.title} price={perModuleFallback}>
                    Buy Now
                  </BuyButton>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        // Otherwise, sell the subproduct itself here
        <section style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h2 style={{ margin: "0 0 6px 0" }}>Purchase</h2>
            <div style={{ fontWeight: 700 }}>{subPriceLabel}</div>
            <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>Instant checkout with Terms &amp; Conditions.</div>
          </div>
          <BuyButton priceId={subPriceId} name={sp.title} price={subFallback}>
            Buy Now
          </BuyButton>
        </section>
      )}

      {/* Why it matters */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why it matters</h2>
        <p>{sp.description}</p>
        {sp.includedInPackages && (
          <p style={{ opacity: 0.9 }}>
            <strong>Included in:</strong> {sp.includedInPackages.join(" • ")}
          </p>
        )}
      </section>
    </main>
  );
}
