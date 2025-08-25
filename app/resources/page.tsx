export default function Page() {
  // Yellow link style requested
  const linkStyle = { color: "#f1c40f", textDecoration: "underline" } as const;

  const faq = [
    {
      q: "What is ISO 45003 and how does it relate to psychosocial risk?",
      a: "ISO 45003:2021 gives guidance for managing psychosocial risks within an OH&S system based on ISO 45001.",
    },
    {
      q: "How does ISO 31000 fit in?",
      a: "ISO 31000:2018 provides a reusable risk framework: establish context, identify, analyse, evaluate, treat, monitor and communicate.",
    },
    {
      q: "Do I need ISO certification to comply with psychosocial rules?",
      a: "No. Codes of Practice and WHS regulations are the legal baseline; ISO standards are voluntary guidance that strengthen your system.",
    },
    {
      q: "Is toxic culture a psychosocial hazard or a risk?",
      a: "Toxic culture can be both a hazard and a risk. Yet Toxic Culture is not identified in the Codes as a hazard or risk, my services help you to control toxic culture risks.",
    },
  ];

  const policies = [
    {
      title: "Psychosocial Risk Management Policy",
      blurb: "Editable templates available for clients (no public download).",
    },
    {
      title: "Workplace Culture & Conduct Standard",
      blurb: "Defines expected behaviours, leadership duties, and measures.",
    },
    {
      title: "Incident Response & Support Procedure",
      blurb: "Trigger, immediate actions, investigation, and follow-up.",
    },
  ];

  const codeLinks = [
    {
      name: "Queensland Code of Practice (Psychosocial hazards at work)",
      href: "https://www.worksafe.qld.gov.au/__data/assets/pdf_file/0025/104857/managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice.pdf",
    },
    {
      name: "NSW Code of Practice (Managing psychosocial hazards)",
      href: "https://www.safework.nsw.gov.au/__data/assets/pdf_file/0004/983353/Code-of-Practice_Managing-psychosocial-hazards.pdf",
    },
    {
      name: "WA Code of Practice (Psychosocial hazards in the workplace)",
      href: "https://www.worksafe.wa.gov.au/sites/default/files/atoms/files/221154_cp_psychosocialhazards.pdf",
    },
    {
      name: "Safe Work Australia – Model Code (July 2022)",
      href: "https://www.safeworkaustralia.gov.au/sites/default/files/2022-08/model_code_of_practice_-_managing_psychosocial_hazards_at_work_25082022_0.pdf",
    },
  ];

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      {/* Header (no price mention) */}
      <section
        style={{
          border: "1px solid #222",
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span aria-hidden>📚</span>
          <h1 style={{ margin: 0, fontSize: 24 }}>Resource Library</h1>
        </div>
        <p style={{ opacity: 0.85, marginTop: 8 }}>
          FAQs on ISO standards and psychosocial risk, overview of paid policy templates, and official Codes of Practice.
        </p>
      </section>

      {/* FAQs */}
      <section
        style={{
          border: "1px solid #222",
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span aria-hidden>❓</span>
          <h2 style={{ margin: 0, fontSize: 20 }}>FAQs (ISOs & psychosocial risk)</h2>
        </div>
        <ul style={{ display: "grid", gap: 8, padding: 0, listStyle: "none" }}>
          {faq.map((f, i) => (
            <li key={i} style={{ border: "1px solid #222", borderRadius: 10, padding: 12 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>{f.q}</p>
              <p style={{ margin: "6px 0 0", opacity: 0.85 }}>{f.a}</p>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 8, fontSize: 14 }}>
          Key standards:{" "}
          <a href="https://www.iso.org/standard/64283.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            ISO 45003
          </a>
          ,{" "}
          <a
            href="https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/06/56/65694.html"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            ISO 31000
          </a>
          ,{" "}
          <a
            href="https://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=63787"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            ISO 45001
          </a>
          .
        </p>
      </section>

      {/* Paid templates (no links or downloads) */}
      <section
        style={{
          border: "1px solid #222",
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span aria-hidden>🛡️</span>
          <h2 style={{ margin: 0, fontSize: 20 }}>Sample policies & standards (paid)</h2>
        </div>
        <div
          style={{
            display: "grid",
            gap: 8,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {policies.map((p) => (
            <article key={p.title} style={{ border: "1px solid #222", borderRadius: 10, padding: 12 }}>
              <h3 style={{ margin: 0, fontWeight: 600 }}>{p.title}</h3>
              <p style={{ marginTop: 6, fontSize: 14, opacity: 0.85 }}>{p.blurb}</p>
              <p style={{ marginTop: 6, fontSize: 13, opacity: 0.8 }}>Available on request.</p>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.75 }}>
          Disclaimer: Templates are general guidance only and not legal advice. Adapt to your jurisdiction.
        </p>
      </section>

      {/* Codes of Practice — yellow links */}
      <section style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span aria-hidden>🔗</span>
          <h2 style={{ margin: 0, fontSize: 20 }}>Codes of Practice & official guidance</h2>
        </div>
        <ul style={{ display: "grid", gap: 8, padding: 0, listStyle: "none" }}>
          {codeLinks.map((c) => (
            <li key={c.href} style={{ border: "1px solid #222", borderRadius: 10, padding: 12 }}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
