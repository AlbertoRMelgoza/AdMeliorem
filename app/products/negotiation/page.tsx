import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Negotiation Services — Ad Meliorem",
  description:
    "Structured preparation, leverage mapping, rehearsal, and deal support.",
};

export default function NegotiationPage() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Negotiation Services</h1>
      <p>
        I help you clarify leverage, pressure-test scenarios, rehearse critical moves, and structure defensible
        agreements aligned to your objectives.
      </p>

      {/* AdMeliorem\public\Images\negotiation.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/negotiation.jpg" // 👈 place your image here: public/images/negotiation.jpg
          alt="Negotiation services illustration"
          width={800}
          height={400}
          style={{ borderRadius: 12 }}
        />
      </div>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Typical engagements</h2>
        <ul>
          <li>Pre-negotiation planning and BATNA development</li>
          <li>Live counsel during high-stakes negotiations</li>
          <li>Deal reviews and documentation</li>
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
            Enquire about negotiation →
          </a>
        </p>
      </section>
    </main>
  );
}

