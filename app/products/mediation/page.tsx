import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Mediation Services — Ad Meliorem",
  description:
    "Neutral, confidential facilitation to resolve disputes and protect working relationships.",
};

export default function MediationPage() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  <p style={{ margin: "0 0 8px 0" }}>
  <a href="/products" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
    ← Back to Products
  </a>
</p>
  
  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Mediation Services</h1>
      <p>
        Neutral, confidential facilitation to resolve disputes, de-escalate conflict and restore workable agreements while
        protecting duty-of-care and reputation.
      </p>

      {/* AdMeliorem\public\Images\Snow.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/Snow.jpg" // 👈 put your image in public/images/mediation.jpg
          alt="Mediation services illustration"
          width={800}
          height={400}
          style={{ borderRadius: 12 }}
        />
      </div>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>When to use</h2>
        <ul>
          <li>Interpersonal disputes impacting performance or safety</li>
          <li>Team friction following complaints or investigations</li>
          <li>Settlement discussions requiring careful facilitation</li>
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
            Enquire about mediation →
          </a>
        </p>
      </section>
    </main>
  );
}

