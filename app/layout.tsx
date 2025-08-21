export const metadata = {
  title: "Ad Meliorem — Psychosocial Risk Prevention & Control",
  description:
    "Specialist in preventing sexual harassment, aggression, bullying, and procedural justice failures. WHS-compliant frameworks, diagnostics, and training.",
  openGraph: {
    title: "Ad Meliorem",
    description:
      "Specialist in psychosocial risk prevention. Procedural Justice Framework™, Culture Risk Diagnostic™, SHSARC™, RCABH™, mediation & negotiation.",
    type: "website",
  },
};

const brand = {
  max: 960,
  pad: "0 16px",
  color: "#0a3d62", // brand accent
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          color: "#1b1b1b",
        }}
      >
        <header
          style={{
            maxWidth: brand.max,
            margin: "12px auto 0",
            padding: brand.pad,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src="/images/logo-ad-meliorem.png"
              alt="Ad Meliorem"
              style={{ height: 32 }}
            />
            <strong>Ad Meliorem</strong>
          </a>
          <nav
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a href="/" style={{ color: brand.color }}>
              Home
            </a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/evidence">Evidence</a>
            <a href="/principles">Principles</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        {children}

        <footer
          style={{
            maxWidth: brand.max,
            margin: "40px auto 24px",
            padding: brand.pad,
            borderTop: "1px solid #eee",
          }}
        >
          <p style={{ fontSize: 14 }}>
            © {new Date().getFullYear()} Ad Meliorem · Practical help when it
            matters.
          </p>
        </footer>
      </body>
    </html>
  );
}
