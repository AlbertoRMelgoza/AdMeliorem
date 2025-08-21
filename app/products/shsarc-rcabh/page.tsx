export const metadata = {
  title: "SHSARC™ & RCABH™ Talent Management— Ad Meliorem",
  description:
    "Two flagship workshops that serve as hazard controls and produce regulator-ready Prevention Plans.",
};

export default function TrainingPrograms() {
  const wrap: React.CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const block: React.CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>SHSARC™ &amp; RCABH™ — Training Programs</h1>
      <p>
        The SHSARC™ — Sexual Harassment &amp; Sexual Assault Risk Control workshop and the RCABH™ — Risk Control
        Aggression, Bullying &amp; Harassment workshop produce regulator-ready Prevention Plans. SHSARC™ and RCABH™ will allow to isolate wrongful behavoiur to the individual.
      </p>

      <div style={{ display: "grid", gap: 16 }}>
        <section style={block} id="shsarc">
          <h2 style={{ marginTop: 0 }}>SHSARC — Sexual harassment &amp; sexual assault risk control</h2>
          <p style={{ marginTop: 0 }}>
            A 3-day, 11-module workshop focused on prevention, indicators, defensible controls, and clear escalation
            pathways. Output includes a regulator-ready Prevention Plan tailored to your context.
          </p>
          <ul>
            <li>Hazard identification and live control design</li>
            <li>Early indicators, reporting channels, by-stander activation</li>
            <li>Understanding key concepts</li>
          </ul>
        </section>

        <section style={block} id="rcabh">
          <h2 style={{ marginTop: 0 }}>RCABH — Risk control for aggression, bullying &amp; harassment</h2>
          <p style={{ marginTop: 0 }}>
            A 4-day, 13-module program that equips stakeholders to prevent aggression, bullying and harassment before
            claims arise, and to respond with procedural fairness when events occur.
          </p>
          <ul>
            <li>Hotspot mapping and workload/role design controls</li>
            <li>Manager toolkits for early intervention and follow-through</li>
            <li>Prevention Plan deliverables and implementation roadmap</li>
          </ul>
        </section>

        <p style={{ marginTop: 8 }}>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#f1c40f",
              color: "#000",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book a training discussion →
          </a>
        </p>
      </div>
    </main>
  );
}
