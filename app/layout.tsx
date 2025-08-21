export const metadata = {
  title: "Ad Meliorem — Psychosocial Risk Prevention & Control",
  description:
    "Specialist in preventing sexual harassment, aggression, bullying, and procedural justice failures.",
};

const brand = {
  max: 1000,
  pad: "0 16px",
  accent: "#f1c40f",     // yellow accent
  text: "#eaeaea",
  subtext: "#bdbdbd",
  bg: "#000000",
  line: "#222222",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        background: brand.bg, color: brand.text,
      }}>
        <header style={{
          maxWidth: brand.max, margin: "12px auto 0", padding: brand.pad,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <a href="/" style={{display:"inline-flex",alignItems:"center",gap:12,textDecoration:"none",color:"inherit"}}>
            <img
              src="/images/logo-ad-meliorem.png"   // <-- IMPORTANT: /images/ path
              alt="Ad Meliorem logo"
              style={{ height: 36, display: "block", background:"#fff", borderRadius:8, padding:4 }}
            />
            <span style={{display:"inline-flex",flexDirection:"column"}}>
              <strong style={{ fontSize: 18, lineHeight: 1 }}>Ad Meliorem</strong>
              <span style={{ fontSize: 13, color: brand.subtext, lineHeight: 1.2 }}>
                Alberto R Melgoza, PhD
              </span>
            </span>
          </a>
          <nav style={{ marginLeft:"auto", display:"flex", gap:16 }}>
            <a href="/" style={{ color: brand.accent, textDecoration: "none" }}>Home</a>
            <a href="/products" style={{ color: brand.text, textDecoration: "none" }}>Products</a>
            <a href="/contact" style={{ color: brand.text, textDecoration: "none" }}>Contact</a>
          </nav>
        </header>

        {children}

        <footer style={{
          maxWidth: brand.max, margin:"40px auto 24px", padding:brand.pad,
          borderTop:`1px solid ${brand.line}`, color: brand.subtext
        }}>
          <p style={{ fontSize: 14 }}>© {new Date().getFullYear()} Ad Meliorem</p>
        </footer>
      </body>
    </html>
  );
}
