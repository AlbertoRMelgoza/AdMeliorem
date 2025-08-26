import type { CSSProperties } from "react";
import Link from "next/link";
import BuyNow from "../../components/BuyNow";

type CatalogItem = {
  productId?: string;
  priceId?: string;
  name: string;
  description?: string | null;
  currency?: string | null;
  priceAUD?: number | null;
  url?: string | null;
};

// Load your catalog to grab the correct Stripe priceIds
async function getCatalog(): Promise<CatalogItem[]> {
  const mod = await import("../../data/catalog.json");
  return (mod as any).default as CatalogItem[];
}

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description: "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default async function ProductsIndex() {
  const catalog = await getCatalog();

  const pick = (needle: string) =>
    catalog.find((it) => it?.name?.toLowerCase().includes(needle.toLowerCase()));

  const shsarc = pick("shsarc");
  const procedural = pick("procedural justice");
  const culture = pick("culture risk");
  const mediation = pick("mediation");
  const negotiation = pick("negotiation");

  // 🔴 DISPLAY PRICES (text labels only). Charges still come from Stripe via priceId.
  const PRICE_LABEL = {
    shsarc: "A$ 750.00 — per person (max 20 per workshop)",
    procedural: "A$ 4,000.00 — per use",
    culture: "A$ 15,000.00 — annual subscription",
    mediation: "A$ 3,000.00 — per session",
    negotiation: "A$ 3,000.00 — per session",
  } as const;

  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const grid: CSSProperties = { display: "grid", gap: 24, marginTop: 24 };
  const card: CSSProperties = { background: "#111", border: "1px solid #333", borderRadius: 8, padding: 16 };
  const title: CSSProperties = { margin: "0 0 8px", fontSize: 18, color: "#f1c40f" };
  const blurb: CSSProperties = { fontSize: 14, color: "#bdbdbd" };
  const linkStyle: CSSProperties = { textDecoration: "none", color: "inherit" };
  const price: CSSProperties = { fontWeight: 600, marginTop: 8 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>
        Select a product or service to see the full outline, deliverables, and outcomes.
      </p>

      <div style={grid}>
        {/* SHSARC / RCABH */}
        <article style={card}>
          <Link href="/products/shsarc-rcabh" style={linkStyle}>
            <h3 style={title}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
            <p style={blurb}>
              Two flagship risk control programs through talent management that produce regulator-ready Prevention Plans.
            </p>
          </Link>
          {shsarc && (
            <>
              <div style={price}>{PRICE_LABEL.shsarc}</div>
              <div style={{ marginTop: 10 }}>
                {/* Uses Stripe priceId; the number above is only display */}
                <BuyNow priceId={shsarc.priceId} name={shsarc.name} price={0}>
                  Buy Now
                </BuyNow>
              </div>
            </>
          )}
        </article>

        {/* Procedural Justice Framework */}
        <article style={card}>
          <Link href="/products/procedural-justice-framework" style={linkStyle}>
            <h3 style={title}>Procedural Justice Framework™</h3>
            <p style={blurb}>
              Fair, transparent, defensible processes that prevent escalation and contain liability.
            </p>
          </Link>
          {procedural && (
            <>
              <div style={price}>{PRICE_LABEL.procedural}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={procedural.priceId} name={procedural.name} price={0}>
                  Buy Now
                </BuyNow>
              </div>
            </>
          )}
        </article>

        {/* Culture Risk Diagnostic */}
        <article style={card}>
          <Link href="/products/culture-risk-diagnostic" style={linkStyle}>
            <h3 style={title}>Culture Risk Diagnostic™</h3>
            <p style={blurb}>
              Precise culture risk assessments with qualitative and quantitative methods, culture risk indicators, and due-diligence evidence.
            </p>
          </Link>
          {culture && (
            <>
              <div style={price}>{PRICE_LABEL.culture}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={culture.priceId} name={culture.name} price={0}>
                  Buy Now
                </BuyNow>
              </div>
            </>
          )}
        </article>

        {/* Mediation */}
        <article style={card}>
          <Link href="/products/mediation" style={linkStyle}>
            <h3 style={title}>Mediation Services</h3>
            <p style={blurb}>
              Neutral, confidential facilitation to resolve disputes and protect working relationships.
            </p>
          </Link>
          {mediation && (
            <>
              <div style={price}>{PRICE_LABEL.mediation}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={mediation.priceId} name={mediation.name} price={0}>
                  Buy Now
                </BuyNow>
              </div>
            </>
          )}
        </article>

        {/* Negotiation */}
        <article style={card}>
          <Link href="/products/negotiation" style={linkStyle}>
            <h3 style={title}>Negotiation Services</h3>
            <p style={blurb}>
              Structured preparation, leverage mapping, rehearsal, and deal support.
            </p>
          </Link>
          {negotiation && (
            <>
              <div style={price}>{PRICE_LABEL.negotiation}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={negotiation.priceId} name={negotiation.name} price={0}>
                  Buy Now
                </BuyNow>
              </div>
            </>
          )}
        </article>
      </div>
    </main>
  );
}
