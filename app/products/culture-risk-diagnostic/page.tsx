import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SUBPRODUCTS } from "./subproducts"; // plural

export const metadata = {
  title: "Culture Risk Diagnostic™ — Ad Meliorem",
  description:
    "A forensic cultural assessment with leading indicators, risk scores and evidence of due diligence.",
};

export default function CRDPage() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16,
    marginTop: 16,
  };

  const tile: CSSProperties = {
    background: "#0c0c0c",
    border: "1px solid #1f1f1f",
    borderRadius: 12,
    padding: 14,
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  const titleStyle: CSSProperties = { fontWeight: 700, margin: "8px 0 4px" };
  const shortStyle: CSSProperties = { opacity: 0.85, fontSize: 14, margin: 0 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Culture Risk Diagnostic™</h1>
      <p>
        The Culture Risk Diagnostic™ is a forensic assessment that maps hotspots and provides leading indicators, risk
        scores and due-diligence evidence.
      </p>

      {/* Hero: fixed 16:9 frame */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: 800, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            <Image src="/Images/culture.jpg" alt="Culture Risk Diagnostic illustration" fill sizes="(max-width: 900px) 100vw, 800px" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>

      {/* Purposes (unchanged) */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>The Culture Risk Diagnostic™ serves two purposes</h2>
        <p>
          Depending on organisational needs, five reliable and validated tools can be applied to provide a 360° view of
          hidden culture risks or to evaluate the broader business environment:
        </p>
        <ol>
          <li><strong>COPSOQ</strong> → Measures the psychosocial risk environment.</li>
          <li><strong>SEQ</strong> → Captures data on sexist remarks, harassment and coercion.</li>
          <li><strong>OCAS</strong> → Assesses aggression, bullying and harassment.</li>
          <li><strong>WFBS</strong> → Evaluates in-group favouritism and covert harmful behaviours.</li>
          <li><strong>IAT</strong> → Surfaces hidden biases and exclusion dynamics.</li>
        </ol>
      </section>

      {/* Subproducts grid: fixed 16:9 thumbs */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Subproducts & Tools</h2>
        <div style={grid}>
          {SUBPRODUCTS.map((sp) => {
            const raw = sp.thumb ?? sp.image ?? "/Images/placeholder.jpg";
            const imgSrc = encodeURI(raw);
            return (
              <Link key={sp.slug} href={`/products/culture-risk-diagnostic/${sp.slug}`} style={tile}>
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 10,
