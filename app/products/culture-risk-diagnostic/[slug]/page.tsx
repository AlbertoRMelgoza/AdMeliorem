import Link from "next/link";
import type { CSSProperties } from "react"; // <-- needed
import { SUBPRODUCTS } from "../subproducts";
import { SUBSUB_BY_PARENT } from "../subsubproducts";

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
          <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 600 }}>
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
        <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 600 }}>
          ← Culture Risk Diagnostic™
        </Link>
      </p>

      <h1 style={{ marginTop: 0 }}>{sp.title}</h1>
      <p style={{ opacity: 0.9 }}>{sp.short}</p>

      {/* No hero image */}

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
          <li>Strict anonymity (minimum subgroup sizes enforced).</li>
          <li>Configured for your organisation (unique link, open/close dates, optional domain gating).</li>
          <li>Aggregated reporting only; no personal identifiers.</li>
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

      {/* References (only if present) */}
      {sp.reference && (
        <section style={card}>
          <h2 style={{ marginTop: 0 }}>References</h2>
          <p style={{ whiteSpace: "pre-line" }}>{sp.reference}</p>
        </section>
      )}

      {SUBSUB_BY_PARENT[sp.slug as "copsoq" | "seq" | "culture-pulse-surveys"]?.length > 0 && (
  <section style={card}>
    <h2 style={{ marginTop: 0 }}>Available modules</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
      {SUBSUB_BY_PARENT[sp.slug as "copsoq" | "seq" | "culture-pulse-surveys"].map((m) => (
        <a
          key={m.slug}
          href={`/products/culture-risk-diagnostic/${sp.slug}/${m.slug}`}
          style={{ background: "#f1c40f", color: "#000", border: "1px solid #f1c40f", borderRadius: 12, padding: 14, textDecoration: "none", display: "block", fontWeight: 700 }}
        >
          <div>{m.title}</div>
          <p style={{ margin: "6px 0 0 0", fontSize: 13 }}>{m.short}</p>
        </a>
      ))}
    </div>
  </section>
)}

      // ...above you already rendered Why it matters, How it works, What you receive

{/* ↓↓↓ ADD THIS BLOCK HERE ↓↓↓ */}
{SUBSUB_BY_PARENT[sp.slug as "copsoq" | "seq" | "culture-pulse-surveys"]?.length > 0 && (
  <section style={card}>
    <h2 style={{ marginTop: 0 }}>Available modules</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
      {SUBSUB_BY_PARENT[sp.slug as "copsoq" | "seq" | "culture-pulse-surveys"].map((m) => (
        <a
          key={m.slug}
          href={`/products/culture-risk-diagnostic/${sp.slug}/${m.slug}`}
          style={{
            background: "#f1c40f",
            color: "#000",
            border: "1px solid #f1c40f",
            borderRadius: 12,
            padding: 14,
            textDecoration: "none",
            display: "block",
            fontWeight: 700,
          }}
        >
          <div>{m.title}</div>
          <p style={{ margin: "6px 0 0 0", fontSize: 13 }}>{m.short}</p>
        </a>
      ))}
    </div>
  </section>
)}
{/* ↑↑↑ END MODULES BLOCK ↑↑↑ */}

// ...then your existing “Next step” card comes after this

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Next step</h2>
        <p>You can add this subproduct to a Culture Risk Diagnostic package, or run it as a standalone engagement.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/contact" style={{ background: "#f1c40f", color: "#000", padding: "10px 18px", borderRadius: 6, fontWeight: 700, textDecoration: "none" }}>
            Enquire / Add to Package →
          </Link>
          <a href={sp.cta?.href ?? "/contact"} style={{ border: "1px solid #444", padding: "10px 18px", borderRadius: 6, fontWeight: 600, textDecoration: "none", color: "#fff" }}>
            {sp.cta?.label ?? "Purchase (Coming Soon)"}
          </a>
        </div>
      </section>
    </main>
  );
}
