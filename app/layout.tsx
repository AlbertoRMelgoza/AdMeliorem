import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://albertormelgoza.com"),
  title: "Ad Meliorem — Culture and Psychosocial Risk Prevention & Control",
  description:
    "Specialist in preventing sexual harassment, aggression, bullying, and procedural justice failures. WHS-compliant frameworks, diagnostics, and support.",
  openGraph: {
    title: "Ad Meliorem",
    description:
      "Specialist in sexual harassment, aggression and bullying prevention. Procedural Justice Framework™, Culture Risk Diagnostic™, SHSARC™, RCABH™, mediation & negotiation.",
    type: "website",
    images: [
      {
        url: "/Images/logo-ad-meliorem - Copy.jpg",
        width: 1200,
        height: 630,
        alt: "Ad Meliorem — Practical help when it matters",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico?v=2", // 👈 Add this line
  },
};

const brand = {
  max: 1000,
  pad: "0 16px",
  accent: "#f1c40f",
  text: "#eaeaea",
  subtext: "#bdbdbd",
  bg: "#000000",
  line: "#222222",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          background: brand.bg,
          color: brand.text,
        }}
      >
        {/* Header */}
        <header
          style={{
            maxWidth: brand.max,
            margin: "12px auto 0",
            padding: brand.pad,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "inherit",
            }}
            aria-label="Ad Meliorem Home"
          >
          {/* Logo file: public/Images/logo-ad-meliorem - Copy.jpg */}
<span
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: 8,
    padding: 4,
    lineHeight: 0,
  }}
>
  <img
    src="/Images/logo-ad-meliorem - Copy.jpg"
    alt="Ad Meliorem logo"
    style={{ height: 28, display: "block" }}
  />
</span>


            <span style={{ display: "inline-flex", flexDirection: "column" }}>
              <strong style={{ fontSize: 18, lineHeight: 1 }}>Ad Meliorem</strong>
              <span style={{ fontSize: 13, color: brand.subtext, lineHeight: 1.2 }}>
                Alberto R Melgoza, PhD
              </span>
            </span>
          </a>

          {/* Navigation */}
          <nav
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a href="/" style={{ color: brand.accent, textDecoration: "none" }}>
              Home
            </a>
            <a href="/about" style={{ color: brand.text, textDecoration: "none" }}>
              About
            </a>
            <a href="/products" style={{ color: brand.text, textDecoration: "none" }}>
              Products
            </a>
            <a href="/evidence" style={{ color: brand.text, textDecoration: "none" }}>
              Evidence
            </a>
            <a href="/principles" style={{ color: brand.text, textDecoration: "none" }}>
              Principles
            </a>
            <a href="/whitepapers" style={{ color: brand.text, textDecoration: "none" }}>
              Whitepapers
            </a>
            <a href="/contact" style={{ color: brand.text, textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer
          style={{
            maxWidth: brand.max,
            margin: "40px auto 24px",
            padding: brand.pad,
            borderTop: `1px solid ${brand.line}`,
            color: brand.subtext,
          }}
        >
          <p style={{ fontSize: 14 }}>
            © {new Date().getFullYear()} Ad Meliorem · Practical help when it matters.
          </p>
        </footer>

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />

        {/* Vercel Analytics & Speed Insights */}
<Analytics />
<SpeedInsights />

{/* Google tag (gtag.js) */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XC0JMD1CHD"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XC0JMD1CHD');
  `}
</Script>
      </body>
    </html>
  );
}
