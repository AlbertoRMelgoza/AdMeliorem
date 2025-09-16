import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Evidence of Impact — Ad Meliorem",
  description: "Real-world outcomes preventing harm, embedding fairness, and transforming cultures.",
};

export default function EvidencePage() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const section: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 16 };
  const grid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 12 };
  const card: CSSProperties = { background: "#0e0e0e", border: "1px solid #222", borderRadius: 12, padding: 16 };
  const quoteMark: CSSProperties = { fontSize: 28, lineHeight: 1, marginRight: 8, opacity: 0.6, userSelect: "none" };
  const source: CSSProperties = { marginTop: 10, color: "#bbb", fontStyle: "italic" };
  const chipRow: CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 };
  const chip: CSSProperties = { display: "inline-block", background: "#f1c40f", color: "#000", borderRadius: 9999, padding: "6px 10px", fontWeight: 800, fontSize: 12 };
  const callBtn: CSSProperties = { display: "inline-block", background: "#f1c40f", color: "#000", padding: "10px 16px", borderRadius: 6, fontWeight: 700, textDecoration: "none" };
  const ghostBtn: CSSProperties = { display: "inline-block", color: "#f1c40f", padding: "10px 14px", border: "1px solid #333", borderRadius: 6, fontWeight: 700, textDecoration: "none" };

  return (
    <main style={wrap}>
      {/* Phone-first CTA strip */}
      <section style={{ ...section, display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 0 }}>
        <p style={{ margin: 0, fontWeight: 800 }}>Call to request the full evidence pack</p>
        <a href="tel:+61490247772" style={callBtn} aria-label="Call Alberto on 0490 247 772">Call 0490 247 772</a>
      </section>

      <h1 style={{ marginTop: 16 }}>Evidence of Impact</h1>
      <p>Selected outcomes from complex matters and organisational change work, showing prevention, fairness, and measurable culture improvement.</p>

      {/* ✅ Marketing WOW only */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Proven outcomes at a glance</h2>
        <div style={chipRow}>
          <span style={chip}>14+ recommendations adopted (QDoE)</span>
          <span style={chip}>Zero stoppages during change (PEMEX)</span>
          <span style={chip}>IPO transformation supported (Aramco)</span>
          <span style={chip}>Indicators embedded in board reports</span>
          <span style={chip}>Regulator‑ready evidence packs</span>
        </div>
        <p style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
          Results reflect multi‑factor programs; statements describe my contribution within broader initiatives.
        </p>
      </section>

      {/* ✅ What clients receive (tangible deliverables, no SLA jargon) */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>What you receive</h2>
        <ul style={{ marginTop: 8 }}>
          <li><strong>Evidence Pack</strong> — clear timeline summary, key decisions, and artefacts in one place.</li>
          <li><strong>Independence record</strong> — who assessed, who investigated, and why the choice was appropriate.</li>
          <li><strong>Findings letter template</strong> — plain‑English outcome format ready to personalise.</li>
          <li><strong>Close‑out memo</strong> — actions taken, lessons learned, and next steps for leaders.</li>
          <li><strong>Board snapshot</strong> — 1‑page summary for governance and external scrutiny.</li>
        </ul>
      </section>

      {/* Headline evidence block */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Preventing harm in complex sexual‑harassment cases</h2>
        <div style={card}>
          <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
            <span style={quoteMark}>“</span>
            <span>
              Alberto brought clarity and fairness to a deeply complex sexual‑harassment case that management had struggled with for years. His calm, skilled interviewing uncovered the truth, restored trust, and gave the organisation defensible confidence in its processes.
            </span>
          </p>
          <div style={source}>— Australian Broadcasting Corporation</div>
        </div>
      </section>

      {/* Evidence grid */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>A D M E L I O R E M — Evidence</h2>
        <div style={grid}>
          <article style={card} aria-labelledby="evidence-abh">
            <h3 id="evidence-abh" style={{ margin: "0 0 8px 0" }}>Driving authentic behavioural change to stop ABH</h3>
            <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
              <span style={quoteMark}>“</span>
              <span>
                Alberto’s guidance helped crystallise key issues and gave me clearer insight into how my behaviour affects others, as well as my own internal frame of reference.
              </span>
            </p>
            <div style={source}>— University of Queensland, School of Dentistry</div>
          </article>

          <article style={card} aria-labelledby="evidence-procjust">
            <h3 id="evidence-procjust" style={{ margin: "0 0 8px 0" }}>Embedding fairness in every process to prevent liability</h3>
            <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
              <span style={quoteMark}>“</span>
              <span>
                Alberto’s work helped us understand procedural justice in detail — from remediation to building fair processes for every stakeholder involved.
              </span>
            </p>
            <div style={source}>— Hunter Water</div>
          </article>

          <article style={card} aria-labelledby="evidence-psychsafe">
            <h3 id="evidence-psychsafe" style={{ margin: "0 0 8px 0" }}>Transforming toxic workplaces into psychosocially safe environments</h3>
            <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
              <span style={quoteMark}>“</span>
              <span>
                In a workplace long plagued by toxic conflict, Alberto helped uncover hidden issues, rebuild trust, and create the foundation for a safer, healthier culture. His empathy, insight, and ability to challenge assumptions transformed a divided workplace into a functioning team.
              </span>
            </p>
            <div style={source}>— Australian Broadcasting Corporation, Far North Queensland</div>
          </article>
        </div>
      </section>

      {/* Evidence documents (on request) */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Evidence documents (on request)</h2>
        <div style={grid}>
          <article style={card}>
            <h3 style={{ marginTop: 0 }}>Executive Brief</h3>
            <p>Short overview of approach, products, and regulator‑ready positioning.</p>
            <p style={{ marginTop: 8 }}>
              <Link href="/contact" style={ghostBtn} aria-label="Request a copy of the Executive Brief">Request a copy →</Link>
            </p>
          </article>
          <article style={card}>
            <h3 style={{ marginTop: 0 }}>Product Catalogue</h3>
            <p>Flagship products, pricing anchors, and deliverables in one document.</p>
            <p style={{ marginTop: 8 }}>
              <Link href="/contact" style={ghostBtn} aria-label="Request a copy of the Product Catalogue">Request a copy →</Link>
            </p>
          </article>
          <article style={card}>
            <h3 style={{ marginTop: 0 }}>White Paper — September 2025</h3>
            <p>Findings across significant Australian cases: why zero psychological harm cannot be guaranteed.</p>
            <p style={{ marginTop: 8 }}>
              <Link href="/contact" style={ghostBtn} aria-label="Request a copy of the September 2025 White Paper">Request a copy →</Link>
            </p>
          </article>
        </div>
      </section>

      {/* Small, de‑emphasised image */}
      <div style={{ display: "flex", justifyContent: "center", margin: "12px 0" }}>
        <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 420, width: "100%", filter: "grayscale(100%)", opacity: 0.9 }}>
          <Image
            src="/Images/feedback.jpg"
            alt=""
            width={440}
            height={240}
            sizes="(max-width: 420px) 100vw, 420px"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Procurement help */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Procurement‑ready</h2>
        <ul>
          <li>Clear pricing anchors across products (see Products page)</li>
          <li>Invoice / PO path supported; standard Terms & Conditions</li>
          <li>Operational controls integrate with existing systems — no new platform</li>
        </ul>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a href="tel:+61490247772" style={callBtn} aria-label="Call to request the full evidence pack">Call 0490 247 772</a>
          <Link href="/contact" style={ghostBtn} aria-label="Request the evidence pack via email">Request evidence pack via email</Link>
        </div>
      </section>

      {/* Compliance note */}
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 12 }}>
        No provider can guarantee zero psychological harm. These materials evidence practical controls designed to reduce risk, shorten duration, and improve defensibility.
      </p>
    </main>
  );
}
