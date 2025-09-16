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
  const chip: CSSProperties = {
    display: "inline-block",
    background: "#f1c40f",
    color: "#000",
    borderRadius: 9999,
    padding: "6px 10px",
    fontWeight: 800,
    fontSize: 12,
  };
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
      a: "There’s sharpened guidance on managing sexual and gender-based harassment, a continued focus on psychosocial hazard management, and active enforcement of the AHRC Positive Duty."
    }
  ];

  const announcements = [
    {
      title: "Sexual & Gender-based Harassment — National guidance",
      blurb: "Fresh practical guidance for PCBUs to prevent and respond to SGBH. Useful for policy, training, and incident response design.",
      href: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/sexual-and-gender-based-harassment/resources"
    },
    {
      title: "AHRC Positive Duty — enforcement in effect",
      blurb: "The Commission can investigate and enforce the Positive Duty to prevent workplace sex discrimination and harassment.",
      href: "https://humanrights.gov.au/our-work/women/positive-duty"
    },
    {
      title: "Model Code — Managing Psychosocial Hazards",
      blurb: "Baseline expectations for identifying, controlling, and reviewing psychosocial risks.",
      href: "https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-psychosocial-hazards-work"
    },
    {
      title: "Queensland — Sexual harassment requirements",
      blurb: "Queensland’s framework emphasises proactive risk management for sexual and gender-based harassment.",
      href: "https://www.worksafe.qld.gov.au/"
    }
  ];

  const policies = [
    { title: "Psychosocial Risk Management Policy", blurb: "Editable templates available for clients (no public download)." },
    { title: "Workplace Culture & Conduct Standard/Code", blurb: "Defines expected behaviours, leadership duties, and measures." },
    { title: "Code of Ethics", blurb: "Ethical principles beyond compliance to guide behaviour and decision-making." }
  ];

  const codeLinks = [
    // Keep your original state picks; add national model guidance
    { name: "Queensland Code of Practice (Psychosocial hazards at work)", href: "https://www.worksafe.qld.gov.au/__data/assets/pdf_file/0025/104857/managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice.pdf" },
    { name: "NSW Code of Practice (Managing psychosocial hazards)", href: "https://www.safework.nsw.gov.au/__data/assets/pdf_file/0004/983353/Code-of-Practice_Managing-psychosocial-hazards.pdf" },
    { name: "WA Code of Practice (Psychosocial hazards in the workplace)", href: "https://www.worksafe.wa.gov.au/sites/default/files/atoms/files/221154_cp_psychosocialhazards.pdf" },
    { name: "Safe Work Australia — Model Code (Psychosocial)", href: "https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-psychosocial-hazards-work" },
    { name: "Safe Work Australia — Sexual & Gender-based Harassment guidance", href: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/sexual-and-gender-based-harassment/resources" }
  ];

  return (
    <main style={wrap}>
      {/* Header */}
      <section style={section}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Resource Library</h1>
        <p style={{ marginTop: 8, opacity: 0.85 }}>
          FAQs on ISO standards and psychosocial risk, recent announcements, and official Codes of Practice.
        </p>

        {/* Service-aligned quick chips */}
        <div style={chipRow}>
          <span style={chip}>Sexual harassment controls</span>
          <span style={chip}>Aggression & bullying controls</span>
          <span style={chip}>Procedural justice & fair process</span>
          <span style={chip}>Investigations & remediation</span>
          <span style={chip}>Culture risk indicators (90+)</span>
          <span style={chip}>Regulator-ready evidence packs</span>
          <span style={chip}>AHRC Positive Duty support</span>
        </div>
      </section>

      {/* Announcements (kept generic, service-aligned) */}
      <section style={section}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What’s new (service-relevant)</h2>
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
      </section>

      {/* FAQs */}
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

      {/* Sample policies */}
      <section style={section}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Sample policies & standards</h2>
        <div style={grid}>
          {[
            ...[{ title: "Psychosocial Risk Management Policy", blurb: "Editable templates available for clients (no public download)." }],
            ...[{ title: "Workplace Culture & Conduct Standard/Code", blurb: "Defines expected behaviours, leadership duties, and measures." }],
            ...[{ title: "Code of Ethics", blurb: "Ethical principles beyond compliance to guide behaviour and decision-making." }],
          ].map((p, i) => (
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

      {/* Codes & official guidance */}
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
