import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Evidence of Impact — Ad Meliorem",
  description:
    "Real-world outcomes preventing harm, embedding fairness, and transforming cultures.",
};

export default function EvidencePage() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const section: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };
  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
    marginTop: 12,
  };
  const card: CSSProperties = {
    background: "#0e0e0e",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
  };
  const quoteMark: CSSProperties = {
    fontSize: 28,
    lineHeight: 1,
    marginRight: 8,
    opacity: 0.6,
    userSelect: "none",
  };
  const source: CSSProperties = { marginTop: 10, color: "#bbb", fontStyle: "italic" };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Evidence of Impact</h1>
      <p>
        Selected outcomes from complex matters and organisational change work, showing prevention, fairness, and measurable
        culture improvement.
      </p>

      {/* AdMeliorem\public\Images\feedback.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/feedback.jpg"  // ← place your image at public/images/evidence.jpg
          alt="Preventing harm and embedding fairness"
          width={900}
          height={500}
          style={{ borderRadius: 12, width: "100%", height: "auto", maxWidth: 900 }}
          sizes="(max-width: 960px) 100vw, 900px"
        />
      </div>

      {/* Headline evidence blocks */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Preventing Harm in Complex Sexual Harassment Cases</h2>
        <div style={card}>
          <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
            <span style={quoteMark}>“</span>
            <span>
              Alberto brought clarity and fairness to a deeply complex sexual harassment case that management had struggled
              with for years. His calm, skilled interviewing uncovered the truth, restored trust, and gave the organisation
              defensible confidence in its processes.
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
            <h3 id="evidence-abh" style={{ margin: "0 0 8px 0" }}>
              Driving Authentic Behavioural Change to Stop ABH
            </h3>
            <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
              <span style={quoteMark}>“</span>
              <span>
                Alberto’s guidance helped crystallize key issues and gave me clearer insight into how my behaviour affects
                others, as well as my own internal frame of reference.
              </span>
            </p>
            <div style={source}>— University of Queensland, School of Dentistry</div>
          </article>

          <article style={card} aria-labelledby="evidence-procjust">
            <h3 id="evidence-procjust" style={{ margin: "0 0 8px 0" }}>
              Embedding Fairness in Every Process to Prevent Liability
            </h3>
            <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
              <span style={quoteMark}>“</span>
              <span>
                Alberto’s work helped us understand procedural justice in detail — from remediation to building fair
                processes for every stakeholder involved.
              </span>
            </p>
            <div style={source}>— Hunter Water</div>
          </article>

          <article style={card} aria-labelledby="evidence-psychsafe">
            <h3 id="evidence-psychsafe" style={{ margin: "0 0 8px 0" }}>
              Transforming Toxic Workplaces into Psychosocially Safe Environments
            </h3>
            <p style={{ display: "flex", alignItems: "flex-start", marginTop: 0 }}>
              <span style={quoteMark}>“</span>
              <span>
                In a workplace long plagued by toxic conflict, Alberto helped uncover hidden issues, rebuild trust, and create
                the foundation for a safer, healthier culture. His empathy, insight, and ability to challenge assumptions
                transformed a divided workplace into a functioning team.
              </span>
            </p>
            <div style={source}>— Australian Broadcasting Corporation, Far North Queensland</div>
          </article>
        </div>
      </section>

      {/* Optional CTA */}
      <section style={section}>
        <h2 style={{ marginTop: 0 }}>Discuss your situation</h2>
        <p>
          Whether you’re facing a live dispute, regulator scrutiny, or a culture turning point, I will design a defensible,
          fair pathway that prevents harm and protects value.
        </p>
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
            Book a confidential discussion →
          </a>
        </p>
      </section>
    </main>
  );
}

