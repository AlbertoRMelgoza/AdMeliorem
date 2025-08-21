import Image from "next/image";

export const metadata = {
  title: "SHSARC™ & RCABH™ Training — Ad Meliorem",
  description:
    "Two flagship training programs that embed leaders and staff as live hazard controls and produce regulator-ready Prevention Plans.",
};

export default function TrainingPrograms() {
  const wrap: React.CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const block: React.CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>SHSARC™ &amp; RCABH™ — Training Programs</h1>
      <p>
        The SHSARC™ — Sexual Harassment &amp; Sexual Assault Risk Control training program and the RCABH™ — Risk Control
        Aggression, Bullying &amp; Harassment training program embed leaders and staff as live hazard controls and produce
        regulator-ready Prevention Plans.
      </p>

      <section style={block} id="shsarc">
        <h2 style={{ marginTop: 0 }}>SHSARC</h2>
        <Image
          src="/images/products/shsarc.jpg"
          alt="SHSARC training illustration"
          width={800}
          height={400}
          style={{ borderRadius: 8, marginBottom: 16 }}
        />
        <p>
          A 3-day, 11-module program focused on prevention, indicators, defensible controls, and clear escalation
          pathways. Output includes a regulator-ready Prevention Plan tailored to your context.
        </p>
      </section>

      <section style={{ ...block, marginTop: 24 }} id="rcabh">
        <h2 style={{ marginTop: 0 }}>RCABH</h2>
        <Image
          src="/images/products/rcabh.jpg"
          alt="RCABH training illustration"
          width={800}
          height={400}
          style={{ borderRadius: 8, marginBottom: 16 }}
        />
        <p>
          A 4-day, 13-module program that equips leaders and teams to prevent aggression, bullying and harassment before
          claims arise, and to respond with procedural fairness when events occur.
        </p>
      </section>
    </main>
  );
}
