import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "SHSARC™ & RCABH™ Critical risk controls — Ad Meliorem",
  description:
    "Two flagship workshops that serve as psychosocial hazard critical controls and produce regulator-ready Prevention Plans.",
};

export default function TrainingPrograms() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const block: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>SHSARC™ &amp; RCABH™ — Workshops that serve as critical controls</h1>
      <p>
        The SHSARC™ — Sexual Harassment &amp; Sexual Assault Risk Control workshop and the RCABH™ — Risk Control
        Aggression, Bullying &amp; Harassment workshop provide in-depth awareness and understanding of the consequences of wrongful behaviour and produce
        regulator-ready Prevention Plans.
      </p>

            <section style={block} id="shsarc">
        <h2 style={{ marginTop: 0 }}>SHSARC™</h2>
        <p>
          A 3-day, 11-module workshop focused on prevention, awareness, and isolating wrongful
          behaviour to the individual. Output includes a regulator-ready Prevention Plan tailored to your context.
        </p>
      </section>

      <section style={{ ...block, marginTop: 24 }} id="rcabh">
        <h2 style={{ marginTop: 0 }}>RCABH™</h2>
        <p>
          A 4-day, 13-module workshop that equips leaders and teams to prevent aggression, bullying and harassment before
          claims arise, and to respond immediately when an incident happens.
        </p>
      </section>
    
{/* AdMeliorem\public\Images\courses.jpg */}
     <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
  <Image
    src="/Images/courses.jpg"
    alt="Training programs illustration"
    width={800}
    height={400}
    style={{ borderRadius: 12 }}
  />
</div>
  
    <p style={{ margin: "0 0 8px 0" }}>
  <a href="/products" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
    ← Back to Products
      </a>
    </p>
    
    </main>
  );
}
