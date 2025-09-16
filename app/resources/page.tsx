// app/resources/page.tsx
import type { CSSProperties } from "react";

export const metadata = {
  title: "Resource Library — Ad Meliorem",
  description:
    "FAQs on ISO standards and psychosocial risk, announcements, and official Codes of Practice.",
};

export default function Page() {
  const wrap: CSSProperties = { maxWidth: 980, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const section: CSSProperties = { border: "1px solid #222", borderRadius: 12, padding: 16, marginBottom: 16, background: "#111" };
  const linkStyle: CSSProperties = { color: "#f1c40f", textDecoration: "none", fontWeight: 700 };
  const chipRow: CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 };
  const chip: CSSProperties = { display: "inline-block", background: "#f1c40f", color: "#000", borderRadius: 9999, padding: "6px 10px", fontWeight: 800, fontSize: 12 };
  const grid: CSSProperties = { display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 8 };

  const faq = [
    {
      q: "What is ISO 45003 and how does it relate to psychosocial risk?",
      a: "ISO 45003:2021 gives guidance for managing psychosocial risks within an OH&S system based on ISO 45001."
    },
    {
      q: "How does ISO 31000 fit in?",
      a: "ISO 31000:2018 provides a reusable risk framework: establish context; identify, analyse, evaluate, treat; monitor and communicate."
    },
    {
      q: "Do I need ISO certification to comply with psychosocial rules?",
      a: "No. Codes of Practice and WHS regulations are the legal baseline; ISO standards are voluntary guidance that strengthen your system."
    },
    {
      q: "Is 'toxic culture' an identified hazard under NSW/QLD codes?",
      a: "Not as a single named hazard. Regulators focus on specific psychosocial hazards (e.g., poor organisational justice, bullying, aggression, sexual harassment) that together create a toxic culture. Managing those hazards is what matters."
    },
    {
      q: "What changed recently?",
      a: "The Commonwealth approved a Psychosocial Code (2024) and a Sexual & Gender-based Harassment Code (2025). QLD commenced sexual-harassment regulations (Sept 2024). The AHRC’s Positive Duty enforcement powers are live (Dec 2023)."
    }
  ];

  const announcements = [
    {
      title: "Commonwealth Psychosocial Code of Practice (2024)",
      blurb: "Adds fatigue, intrusive surveillance/monitoring, and job insecurity as named hazards; mandates hierarchy of controls in the Comcare jurisdiction.",
      href: "https://www.comcare.gov.au/safe-healthy-work/prevent-harm/changes-to-whs-laws"
    },
    {
      title: "Commonwealth Sexual & Gender-based Harassment Code (2025)",
      blurb: "New code for Commonwealth/Comcare workplaces. Practical guidance relevant to all PCBUs.",
      href: "https://www.comcare.gov.au/about/news-events/news/new-whs-code"
    },
    {
      title: "Model Code: Sexual & Gender-based Harassment",
      blurb: "Safe Work Australia resources alongside the Model Psychosocial Code.",
      href: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/sexual-and-gender-based-harassment/resources"
    },
    {
      title: "QLD Sexual Harassment Regulation (commenced 1 Sept 2024)",
      blurb: "Explicit duty for PCBUs to proactively manage sexual and gender-based harassment risks.",
      href: "https://www.worksafe.qld.gov.au/news-and-events/newsletters/esafe-newsletters/esafe-editions/esafe/december-2024/supporting-businesses-to-understand-their-requirements-under-the-new-sexual-harassment-regulations"
    },
    {
      title: "AHRC Positive Duty — enforcement",
      blurb: "From 12 Dec 2023 the Commission can investigate and enforce compliance with the Positive Duty (Sex Discrimination Act).",
      href: "https://humanrights.gov.au/sites/default/files/2023-08/Guidelines%20for%20Complying%20with%20the%20Positive%20Duty%20%282023%29.pdf"
    }
  ];

  const policies = [
    { title: "Psychosocial Risk Management Policy", blurb: "Editable templates available for clients (no public download)." },
    { title: "Workplace Culture & Conduct Standard/Code", blurb: "Defines expected behaviours, leadership duties, and measures." },
    { title: "Code of Ethics", blurb: "Ethical principles beyond compliance to guide behaviour and decision-making." }
  ];

  const codeLinks = [
    // Commonwealth (Comcare) — current
    { name: "Commonwealth Code — Managing Psychosocial Hazards (2024)", href: "https://www.legislation.gov.au/F2024L01380/asmade/2024-11-01/text/original/pdf" },
    { name: "Commonwealth Code — Sexual & Gender-based Harassment (2025)", href: "https://www.legislation.gov.au/F2025L00326/asmade/2025-03-07/text/original/pdf" },

    // Model codes
    { name: "Safe Work Australia — Model Code: Managing Psychosocial Hazards (2022)", href: "https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-psychosocial-hazards-work" },
    { name: "Safe Work Australia — Model Code: Sexual & Gender-based Harassment", href: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/sexual-and-gender-based-harassment/resources" },

    // States/territories (your existing picks)
    { name: "Queensland Code of Practice — Psychosocial hazards at work", href: "https://www.worksafe.qld.gov.au/__data/assets/pdf_file/0025/104857/managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice.pdf" },
    { name: "NSW Code of Practice — Managing psychosocial hazards", href: "https://www.safework.nsw.gov.au/__data/assets/pdf_file/0004/983353/Code-of-Practice_Managing-psychosocial-hazards.pdf" },
    { name: "WA Code of Practice — Psychosocial hazards in the workplace", href: "https://www.worksafe.wa.gov.au/sites/default/files/atoms/files/221154_cp_psychosocialhazards.pdf" }
  ];

  return (
    <main style={wrap}>
      <section style={section}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Resource Library</h1>
        <p style={{ marginTop: 8, opacity: 0.85 }}>
          FAQs on ISO standards and psychosocial risk, recent announcements, and official Codes of Practice.
        </p>

        {/* What's new / announcements */}
        <h2 style={{ margin: "12px 0 6px 0", fontSize: 20 }}>What’s new (2024–25)</h2>
        <div style={grid}>
          {announcements.map((a, i) => (
            <div key={i} style={{ border: "1px solid #222", borderRadius: 10, padding: 12, background: "#0f0f0f" }}>
              <p style={{ margin: 0, fontWeight: 700 }}>{a.title}</p>
              <p style={{ marginTop: 6, opacity: 0.9 }}>{a.blurb}</p>
              <p style={{ marginTop: 6 }}>
                <a href={a.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>Read more →</a>
              </p>
            </div>
          ))}
        </div>

        {/* Fast chips people like to copy into board packs */}
        <div style={chipRow}>
          <span style={chip}>Hierarchy of controls (Commonwealth)</span>
          <span style={chip}>Fatigue • Intrusive monitoring • Job insecurity</span>
          <span style={chip}>Positive Duty (AHRC) — enforceable</span>
          <span style={chip}>QLD sexual harassment regulation live</span>
        </div>
      </section>

      <section style={section}>
        <h2 style={{ margin: 0, fontSize: 20 }}>FAQs (ISOs & psychosocial risk)</h2>
        <ul style={{ padding: 0, listStyle: "none", marginTop: 8 }}>
          {faq.map((f, i) => (
            <li key={i} style={{ border: "1px solid #222", borderRadius: 10, padding: 12, marginTop: 8, background: "#0f0f0f" }}>
              <p style={{ margin: 0, fontWeight: 600 }}>{f.q}</p>
              <p style={{ marginTop: 6, opacity: 0.85 }}>{f.a}</p>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 8, fontSize: 14 }}>
          Key standards:&nbsp;
          <a href="https://www.iso.org/standard/64283.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>ISO 45003</a>,{" "}
          <a href="https://www.iso.org/standard/65694.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>ISO 31000</a>,{" "}
          <a href="https://www.iso.org/standard/63787.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>ISO 45001</a>.
        </p>
      </section>

      <section style={section}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Sample policies & standards</h2>
        <div style={grid}>
          {policies.map((p, i) => (
            <div key={i} style={{ border: "1px solid #222", borderRadius: 10, padding: 12, background: "#0f0f0f" }}>
              <p style={{ margin: 0, fontWeight: 600 }}>{p.title}</p>
              <p style={{ marginTop: 6, opacity: 0.85 }}>{p.blurb}</p>
              <p style={{ marginTop: 6, fontSize: 13, opacity: 0.8 }}>Available on request.</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.75 }}>
          Disclaimer: Templates are general guidance only and not legal advice. Adapt to your jurisdiction.
        </p>
      </section>

      <section style={section}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Codes of Practice & official guidance</h2>
        <ul style={{ padding: 0, listStyle: "none", marginTop: 8 }}>
          {codeLinks.map((c, i) => (
            <li key={i} style={{ border: "1px solid #222", borderRadius: 10, padding: 12, marginTop: 8, background: "#0f0f0f" }}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{c.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
