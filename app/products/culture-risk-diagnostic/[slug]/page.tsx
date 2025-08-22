import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SUBPRODUCTS } from "../subproducts";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SUBPRODUCTS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);
  return {
    title: sp ? `${sp.title} — Ad Meliorem` : "Subproduct — Ad Meliorem",
    description: sp?.short ?? "Culture Risk Diagnostic subproduct",
  };
}

export default function SubproductPage({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);

  if (!sp) {
    return (
      <main style={{ maxWidth: 900, margin: "28px auto", padding: "0 16px" }}>
        <h1>Not found</h1>
        <p>This subproduct does not exist.</p>
        <p>
          <Link
            href="/products/culture-risk-diagnostic"
            style={{
              color: "#f1c40f",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            ← Back to Culture Risk Diagnostic
          </Link>
        </p>
      </main>
    );
  }

  const wrap: CSSProperties = { maxWidth: 900, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  return (
    <main style={wrap}>
      <p style={{ margin: "0 0 8px 0" }}>
        <Link
          href="/products/culture-risk-diagnostic"
          style={{
            color: "#f1c40f", // brand yellow
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Culture Risk Diagnostic™
        </Link>
      </p>

      <h1 style={{ marginTop: 0 }}>{sp.title}</h1>
      <p style={{ opacity: 0.9 }}>{sp.short}</p>

      {sp.image && (
        <div style={{ display: "flex", justifyContent: "center", margin: "18px 0" }}>
          <Image
            src={sp.image}
            alt={sp.title}
            width={900}
            height={420}
            style={{ borderRadius: 12, width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      )}

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why it matters</h2>
        <p>{sp.description}</p>
        {sp.includedInPackages && (
          <p style={{ opacity: 0.9 }}>
            <strong>Included in:</strong> {sp.includedInPackages.join(" • ")}
          </p>
        )}
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>How it works</h2>
        <ul>
          <li>Deployed with strict anonymity (minimum subgroup sizes enforced).</li>
          <li>Configured for your organisation (unique link, open/close dates, optional domain gating).</li>
          <li>Results aggregated; no personal identifiers stored or reported.</li>
        </ul>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What you receive</h2>
        <ul>
          <li>Hotspot and risk mapping relevant to {sp.title.split(" ")[0]} focus.</li>
          <li>Key indicators and thresholds to guide proactive controls.</li>
          <li>Executive briefing with recommendations from Alberto.</li>
        </ul>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Next step</h2>
        <p>
          You can add this subproduct to a Culture Risk Diagnostic package, or run it as a standalone engagement.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              background: "#f1c40f",
              color: "#000",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Enquire / Add to Package →
          </Link>

          {/* Example purchase link — replace with Stripe Checkout when ready */}
          <a
            href={sp.cta?.href ?? "/contact"}
            style={{
              border: "1px solid #444",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: "none",
              color: "#fff",
            }}
          >
            {sp.cta?.label ?? "Purchase (Coming Soon)"}
          </a>
        </div>
      </section>
    </main>
  );
}
