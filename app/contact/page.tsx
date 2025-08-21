import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Contact — Ad Meliorem",
  description: "Contact details, disclaimer, and business information for Ad Meliorem.",
};

export default function ContactPage() {
  const wrap: CSSProperties = { maxWidth: 800, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Contact</h1>
      <p>
        Please send an email to{" "}
        <a href="mailto:am@albertormelgoza.com">am@albertormelgoza.com</a>{" "}
        outlining your needs or request. I’ll get back to you promptly to discuss next steps.
      </p>

      {/* AdMeliorem\public\Images\contact.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/contact.jpg" // 👈 make sure file is in public/images/contact.jpg
          alt="Contact Ad Meliorem"
          width={800}
          height={400}
          style={{ borderRadius: 12, width: "100%", height: "auto", maxWidth: 800 }}
          sizes="(max-width: 840px) 100vw, 800px"
        />
      </div>

      {/* Business info */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Business Information</h2>
        <ul>
          <li><strong>Business Name:</strong> Ad Meliorem</li>
          <li><strong>ABN:</strong> 93 710 507 818</li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:am@albertormelgoza.com">am@albertormelgoza.com</a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Disclaimer</h2>
        <p>
          The information provided by Ad Meliorem is for general educational and advisory purposes only. It does not
          constitute legal, financial, or medical advice and should not be relied upon as a substitute for independent
          professional consultation.
        </p>
        <p>
          While all care is taken to ensure accuracy, Ad Meliorem makes no warranties as to the completeness or suitability
          of this information for your specific circumstances. Ultimate responsibility for decisions remains with you and
          your organisation.
        </p>
      </section>

      {/* Scoped style — ONLY affects mailto links on this page */}
      <style jsx>{`
        a[href^="mailto:"] {
          color: #f1c40f !important;
          font-weight: 600 !important;
          text-decoration: none !important;
        }
        a[href^="mailto:"]:hover {
          text-decoration: underline !important;
        }
      `}</style>
    </main>
  );
}
