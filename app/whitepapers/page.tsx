// app/whitepapers/page.tsx
import type { CSSProperties } from "react";

export const metadata = {
  title: "Whitepapers — Ad Meliorem",
  description:
    "Evidence-based guidance on culture risk, psychosocial hazards, and dispute containment.",
};

type Paper = { title: string; blurb: string; slug: string };

const PAPERS: Paper[] = [
  {
    title:
      "Do stronger consultation practices and procedural fairness with care relate to higher revenue per employee and fewer hours lost for Comcare self-licensees?",
    blurb:
      "Consultation, and Procedural Fairness with Care when applied adequately can improve revenue per employee.",
    slug: "predicting revenue per employee through consultation and fair processes with care",
  },
  {
    title:
      "Do Psychological Claim Costs Undermine Productivity for Australian Self-Insured Licensees",
    blurb:
      "Do higher rates and costs of psychological workplace injury claims reduce productivity and financial performance for large self-insured employers?",
    slug:
      "predicting-lower-productivity-from-comcare-self-licensees-psychological-claims",
  },
  {
    title: "Can Financial Liability Be Predicted by Psychosocial Hazard Claims?",
    blurb:
      "Lead indicators in claims data and how they correlate with downstream financial exposure.",
    slug: "predicting-liability-from-psychosocial-claims",
  },
  {
    title:
      "Your Payroll Isn’t Just an Expense: Control Culture Risk to Capture ROI from Human Capital",
    blurb:
      "Links culture-risk controls to productivity, retention, and measurable ROI across the payroll base.",
    slug: "payroll-roi-through-culture-risk-control",
  },
  {
    title: "How Culture Risks Can Cost Your Business Big Time",
    blurb:
      "Legal, operational, and reputational loss channels when culture risks go unmanaged.",
    slug: "how-culture-risks-cost-business",
  },
  ];

export default function WhitepapersPage() {
  const wrap: CSSProperties = {
    maxWidth: 1100,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const accent = "#f1c40f";
  const subtext = "#bdbdbd";

  // tighter hero; image small so copy/CTAs lead
  const hero: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: 24,
    alignItems: "center",
    marginBottom: 24,
  };
  const badge: CSSProperties = {
    display: "inline-block",
    background: accent,
    color: "#000",
    borderRadius: 9999,
    padding: "4px 10px",
    fontWeight: 800,
    fontSize: 12,
  };
  const heroImgWrap: CSSProperties = {
    border: "1px solid #222",
    borderRadius: 12,
    overflow: "hidden",
    background: "#0e0e0e",
  };
  const heroImg: CSSProperties = { width: "100%", height: "auto", display: "block" };

  // skim chips (keep jargon-free)
  const chipRow: CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 };
  const chip: CSSProperties = {
    display: "inline-block",
    background: "#191919",
    border: "1px solid #2a2a2a",
    color: "#eaeaea",
    borderRadius: 9999,
    padding: "6px 10px",
    fontWeight: 700,
    fontSize: 12,
  };
  const link: CSSProperties = { color: accent, textDecoration: "none", fontWeight: 700 };

  const grid: CSSProperties = {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    marginTop: 8,
  };
  const card: CSSProperties = {
    background: "#0b0b0b",
    border: "1px solid #222",
    borderRadius: 12,
    padding: 16,
  };
  const title: CSSProperties = { margin: "0 0 6px", fontSize: 18, color: accent };
  const blurb: CSSProperties = { margin: 0, color: subtext, fontSize: 14 };

  const cta: CSSProperties = {
    marginTop: 24,
    padding: 16,
    background: "#111",
    border: "1px solid #333",
    borderRadius: 12,
    textAlign: "center",
  };
  const btnPrimary: CSSProperties = {
    display: "inline-block",
    marginTop: 10,
    padding: "10px 18px",
    borderRadius: 8,
    border: "1px solid #f1c40f",
    background: accent,
    color: "#000",
    fontWeight: 700,
    textDecoration: "none",
  };
  const btnGhost: CSSProperties = {
    display: "inline-block",
    marginTop: 10,
    padding: "10px 16px",
    borderRadius: 8,
    border: "1px solid #333",
    color: accent,
    fontWeight: 700,
    textDecoration: "none",
  };

  const phoneHref = "tel:+61490247772";
  const contactHref = "/contact";

  // Pre-filled email for a specific paper
  const mailtoFor = (paperTitle: string) =>
    `mailto:am@albertormelgoza.com?subject=${encodeURIComponent(
      `Whitepaper request: ${paperTitle}`
    )}&body=${encodeURIComponent(
      `Hi Alberto,\n\nPlease send me the whitepaper: “${paperTitle}”.\n\nOrganisation:\nRole:\nLicensee (Y/N):\n\nThanks!`
    )}`;

  return (
    <main style={wrap}>
      <section style={hero}>
        <div>
          <h1 style={{ marginTop: 0 }}>Whitepapers</h1>
          <span style={badge}>For scheme licensees & large PCBUs</span>
          <p style={{ marginTop: 10, opacity: 0.9 }}>
            Evidence-based briefings that turn complex case law and regulator expectations into <strong>actionable controls</strong>.
            These papers are not publicly downloadable — request a copy and we’ll verify details before sending.
          </p>

          <div style={chipRow}>
            <span style={chip}>Regulator-ready findings</span>
            <span style={chip}>Board-grade visuals</span>
            <span style={chip}>Fair-process timelines</span>
            <span style={chip}>Independence checks</span>
          </div>

          {/* Reader-friendly related solutions (replaces confusing acronym chip) */}
          <p style={{ marginTop: 8, fontSize: 12, opacity: 0.85 }}>
            Related solutions:&nbsp;
            <a href="/products/procedural-justice-framework" style={link}>
              Procedural Justice Framework™
            </a>
            &nbsp;•&nbsp;
            <a href="/products/culture-risk-diagnostic" style={link}>
              Culture Risk Diagnostic™
            </a>
          </p>

          <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <a href={phoneHref} style={btnPrimary} aria-label="Call Alberto to request a whitepaper">
              Call 0490 247 772
            </a>
            <a href={contactHref} style={btnGhost} aria-label="Open contact form to request a whitepaper">
              Request via contact form
            </a>
          </div>
          <p style={{ marginTop: 8, fontSize: 12, color: subtext }}>
            Same-day delivery to verified licensee emails.
          </p>
        </div>

        <div style={heroImgWrap}>
          <img
            src="/Images/Whitepapers.jpg"
            alt="Ad Meliorem whitepapers"
            style={heroImg}
            width={360}
            height={240}
            loading="lazy"
          />
        </div>
      </section>

      <section style={grid} aria-label="Available whitepapers">
        {PAPERS.map((p) => (
          <article key={p.slug} style={card}>
            <h3 style={title}>{p.title}</h3>
            <p style={blurb}>{p.blurb}</p>

            {/* Reader-friendly nudge to your core offers */}
            <p style={{ marginTop: 8, fontSize: 12, opacity: 0.85 }}>
              What to do next: install the{" "}
              <a href="/products/procedural-justice-framework" style={link}>
                Procedural Justice Framework™
              </a>{" "}
              or run a{" "}
              <a href="/products/culture-risk-diagnostic" style={link}>
                Culture Risk Diagnostic™
              </a>
              .
            </p>

            <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
              <a
                href={contactHref + `?paper=${encodeURIComponent(p.title)}`}
                style={btnPrimary}
                aria-label={`Contact to request whitepaper: ${p.title}`}
              >
                Request via contact form
              </a>
              <a href={phoneHref} style={btnGhost} aria-label={`Call to request whitepaper: ${p.title}`}>
                Call 0490 247 772
              </a>
              <a
                href={mailtoFor(p.title)}
                style={{ ...btnGhost, borderColor: "#222" }}
                aria-label={`Email to request whitepaper: ${p.title}`}
              >
                Email request
              </a>
            </div>
          </article>
        ))}
      </section>

      <section style={cta}>
        <h2 style={{ marginTop: 0 }}>Want a copy?</h2>
        <p style={{ color: subtext }}>
          We’ll send the relevant whitepaper <strong>after a quick verification</strong>. Choose call or form:
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={phoneHref} style={btnPrimary} aria-label="Call to request whitepaper">
            Call 0490 247 772
          </a>
          <a href={contactHref} style={btnGhost} aria-label="Contact form to request whitepaper">
            Request via contact form
          </a>
        </div>
        <p style={{ color: subtext, marginTop: 12, fontSize: 12 }}>
          Note: These materials are informational, not legal advice.
        </p>
      </section>
    </main>
  );
}
