// app/whitepapers/thank-you/page.tsx
import type { CSSProperties } from "react";

export const metadata = {
  title: "Whitepaper Request — Thank You",
  robots: { index: false, follow: false }, // keep this page out of Google results
};

export default function WhitepaperThankYou() {
  const wrap: CSSProperties = { maxWidth: 800, margin: "32px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #333", borderRadius: 12, padding: 24 };
  const btn: CSSProperties = {
    marginTop: 16, display: "inline-block", padding: "10px 18px",
    borderRadius: 8, border: "1px solid #f1c40f", background: "#f1c40f",
    color: "#000", fontWeight: 600, textDecoration: "none"
  };
  const sub: CSSProperties = { color: "#bdbdbd" };

  return (
    <main style={wrap}>
      <section style={card}>
        <h1 style={{ marginTop: 0 }}>✅ Request received</h1>
        <p style={sub}>
          Thanks for your interest. Please send me a quick note with the title(s) you’d like,
          and I’ll reply with the whitepaper(s).
        </p>

        {/* primary action */}
        <a
          href="mailto:am@albertormelgoza.com?subject=Whitepaper%20request&body=Hi%20Alberto%2C%0A%0AI%E2%80%99d%20like%20a%20copy%20of%3A%20%5Btitle%5D.%0A%0AThanks!"
          style={btn}
          title="Email Alberto to request a whitepaper"
        >
          Email Alberto
        </a>

        <p style={{ ...sub, marginTop: 12 }}>
          Or email <strong>am@albertormelgoza.com</strong> directly.
        </p>
      </section>
    </main>
  );
}

