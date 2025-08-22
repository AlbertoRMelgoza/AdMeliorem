import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SUBPRODUCTS } from "./subproducts";

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

      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/culture.jpg"
          alt="Culture Risk Diagnostic illustration"
          width={800}
          height={400}
          style={{ borderRadius: 12 }}
        />
      </div>

      {/* NEW: Subproducts grid */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Subproducts & Tools</h2>
        <div style={grid}>
          {SUBPRODUCTS.map((sp) => (
            <Link key={sp.slug} href={`/products/culture-risk-diagnostic/${sp.slug}`} style={tile}>
              {sp.image && (
                <Image
                  src={sp.image}
                  alt={sp.title}
                  width={560}
                  height={280}
                  style={{ width: "100%", height: "auto", borderRadius: 10, objectFit: "cover" }}
                />
              )}
              <div style={titleStyle}>{sp.title}</div>
              <p style={shortStyle}>{sp.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Deliverable */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverable</h2>
        <p>
          A regulator-ready report for key stakeholders with cultural risk scores and hazard mapping. The report is designed
          to withstand regulator scrutiny, proving that leadership actively monitors and manages psychosocial culture risks
          while also giving detailed insight into the organisation’s cultural environment — providing precise leading
          indicators on possible harm.
        </p>
      </section>

      {/* Why Organisations Purchase It */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why organisations purchase it</h2>
        <ul>
          <li>
            As a strategic risk control that turns culture into a measured, managed, and defensible governance area through
            qualitative and quantitative methods.
          </li>
          <li>
            To assess whether the organisation provides a psychosocially safe environment, particularly in relation to
            high-liability hazards like sexual harassment, aggression, bullying, and harassment.
          </li>
          <li>
            To gain leading indicators of risk — an early warning system before incidents multiply (Risk Culture).
          </li>
          <li>To isolate liability to individual behaviour by proving culture is monitored and controlled.</li>
          <li>To satisfy regulators, who already investigate culture when claims escalate.</li>
          <li>
            To give boards and executives defensible evidence of due diligence in the highest-liability hazard category:
            organisational culture.
          </li>
          <li>To transform your codes of conduct and code of ethics.</li>
        </ul>
      </section>

      {/* Deliverables block with CTA */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverables (summary)</h2>
        <ul>
          <li>Validated survey instruments (e.g., COPSOQ, SEQ) and targeted interviews</li>
          <li>Key Culture Risk Indicators with thresholds and trend views</li>
          <li>Precise Prevention Plans for the corporation</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          <a
            href="/contact"
            style={{
              background: "#f1c40f",
              color: "#000",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Discuss CRD →
          </a>
        </p>
      </section>
    </main>
  );
}

