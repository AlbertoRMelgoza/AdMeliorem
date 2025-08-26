import type { CSSProperties } from "react";
import Link from "next/link";
import Stripe from "stripe";
import BuyNow from "../../components/BuyNow";

export const runtime = "nodejs";          // ensure Node runtime (server-side)
export const dynamic = "force-dynamic";   // fetch live prices each request (or change to revalidate)

type CatalogItem = {
  productId?: string;
  priceId?: string;
  name: string;
  description?: string | null;
  currency?: string | null;   // fallback display
  priceAUD?: number | null;   // fallback display
  url?: string | null;
};

// Load the static catalog
async function getCatalog(): Promise<CatalogItem[]> {
  const mod = await import("../../data/catalog.json");
  return (mod as any).default as CatalogItem[];
}

// Get live price from Stripe for a Price ID
async function getLivePrice(priceId?: string): Promise<{ amount: number | null; currency: string | null }> {
  if (!priceId) return { amount: null, currency: null };
  const key = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET;
  if (!key) return { amount: null, currency: null };
  const stripe = new Stripe(key);
  const price = await stripe.prices.retrieve(priceId);
  const amount = (price.unit_amount ?? null) !== null ? (price.unit_amount as number) / 100 : null;
  const currency = (price.currency || "").toUpperCase() || null;
  return { amount, currency };
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

  // 🔐 Fetch live prices (server-side) so display matches Stripe Checkout exactly
  const shsarcLive = await getLivePrice(shsarc?.priceId);
  const proceduralLive = await getLivePrice(procedural?.priceId);
  const cultureLive = await getLivePrice(culture?.priceId);
  const mediationLive = await getLivePrice(mediation?.priceId);
  const negotiationLive = await getLivePrice(negotiation?.priceId);

  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const grid: CSSProperties = { display: "grid", gap: 24, marginTop: 24 };
  const card: CSSProperties = { background: "#111", border: "1px solid #333", borderRadius: 8, padding: 16 };
  const title: CSSProperties = { margin: "0 0 8px", fontSize: 18, color: "#f1c40f" };
  const blurb: CSSProperties = { fontSize: 14, color: "#bdbdbd" };
  const linkStyle: CSSProperties = { textDecoration: "none", color: "inherit" };
  const price: CSSProperties = { fontWeight: 600, marginTop: 8 };

  const showPrice = (live: { amount: number | null; currency: string | null }, fallback?: CatalogItem) => {
    if (live.amount != null) return `${live.currency ?? "AUD"} ${live.amount.toFixed(2)}`;
    if (fallback?.priceAUD != null) return `A$${fallback.priceAUD.toFixed(2)}`;
    return "Price shown at checkout";
    };

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
              <div style={price}>{showPrice(shsarcLive, shsarc)}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={shsarc.priceId} name={shsarc.name} price={shsarc.priceAUD ?? 0}>
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
              <div style={price}>{showPrice(proceduralLive, procedural)}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={procedural.priceId} name={procedural.name} price={procedural.priceAUD ?? 0}>
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
              <div style={price}>{showPrice(cultureLive, culture)}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={culture.priceId} name={culture.name} price={culture.priceAUD ?? 0}>
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
              <div style={price}>{showPrice(mediationLive, mediation)}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={mediation.priceId} name={mediation.name} price={mediation.priceAUD ?? 0}>
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
              <div style={price}>{showPrice(negotiationLive, negotiation)}</div>
              <div style={{ marginTop: 10 }}>
                <BuyNow priceId={negotiation.priceId} name={negotiation.name} price={negotiation.priceAUD ?? 0}>
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
