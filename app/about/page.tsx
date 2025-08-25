export const metadata = {
  title: "About — Alberto R. Melgoza | Ad Meliorem",
  description:
    "20+ years preventing harm and protecting value. Controlling and preventing harm for sexual harassment, aggression and bullying, culture risk diagnostics™, procedural justice frameworks™, mediation, and negotiation",
};

export default function AboutPage() {
  const wrap: React.CSSProperties = {
    maxWidth: 1000,
    margin: "28px auto",
    padding: "0 16px",
    color: "#eaeaea",
    lineHeight: 1.65,
  };
  const leftCol: React.CSSProperties = {
    minWidth: 240,
  };
  const photoBox: React.CSSProperties = {
    width: 240,
    height: 240,
    borderRadius: 12,
    overflow: "hidden",
    background: "#111",
    border: "1px solid #222",
  };
  const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    gap: 24,
    alignItems: "start",
  };
  const h1: React.CSSProperties = {
    margin: "0 0 12px",
    fontSize: 24,
    fontWeight: 700,
  };
  const card: React.CSSProperties = {
    background: "#111",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
  };

  return (
    <section style={wrap}>
      <div style={grid}>
        {/* Photo */}
        <div style={leftCol}>
          <div style={photoBox}>
            {/* File must exist at AdMeliorem/public/Images/alberto.jpg */}
            <img
              src="/Images/alberto.jpg"
              alt="Portrait of Alberto R. Melgoza, founder of Ad Meliorem"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h1 style={h1}>
            Experience, integrity, and leverage, applied to prevent harm and protect value
          </h1>

          <div style={card}>
            <p>
              With intensive, research and applied work, I help organisations proactively control psychosocial risks (now regulated) with a focus on sexual
              harassment, aggression, bullying, and procedural justice. My approach combines
              evidence-based tools, regulator-ready documentation, and pragmatic delivery tailored to
              the realities of each business.
            </p>
            <p>
              Over 20 years I have advised on complex incidents, assist with external investigation
              processes, and delivered organisation-wide prevention programs. I routinely work with
              validated diagnostics (e.g., COPSOQ, SEQ, OCAS, WFBS, IAT) to surface hotspots and establish Key Culture
              Risk Indicators that leadership can actually act on.
            </p>
            <p>
              I design, implement, and train on frameworks including the Procedural Justice
              Framework™, Culture Risk Diagnostic™, SHSARC™ (sexual harassment & sexual assault risk
              control), and RCABH™ (risk control for aggression, bullying & harassment).
            </p>
            <p>
              My commitment is simple, helping your corporation being proactive by: preventing individual harm, preventing culture risk to materialise, and reducing liability with a
              clear path from risk management, compliance to succesful execution of strategy.
            </p>

            <p style={{ marginTop: 16 }}>
              <a
                href="/contact"
                style={{
                  display: "inline-block",
                  backgroundColor: "#f1c40f",
                  color: "#000",
                  padding: "10px 18px",
                  borderRadius: 6,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Contact me →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

