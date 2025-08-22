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
      "Can Financial Liability/Impact Be Predicted by Psychosocial Hazards Claims?",
    blurb:
      "Explores lead indicators in claims data and how they correlate with downstream financial exposure.",
    slug: "predicting-liability-from-psychosocial-claims",
  },
  {
    title:
      "Your payroll is not just an expense, I control culture risk so your people control ROI",
    blurb:
      "Links culture-risk controls to productivity, retention, and measurable ROI across the payroll base.",
    slug: "payroll-roi-through-culture-risk-control",
  },
  {
    title: "How culture risks can cost your business big time?",
    blurb:
      "Breaks down legal, operational, and reputational loss channels when culture risks go unmanaged.",
    slug: "how-culture-risks-cost-business",
  },
  {
    title:
      "Sexual harassment and Sexual assault — what they are and what they are not?",
    blurb:
      "Clarifies definitions, thresholds, and evidentiary standards to prevent escalation and misclassification.",
    slug: "sh-and-sa-what-they-are-and-are-not",
  },
  {
    title: "Power imbalances at work, the role of gender domination",
    blurb:
      "Examines structural and situational power dynamics and how to design fair, defensible processes.",
    slug: "power-imbalances-gender-domination",
  },
];

export default function WhitepapersPage() {
  // layout + brand
  const wrap: CSSProperties = {
    maxWidth: 1100,
    margin: "28px auto",
    padding: "0 16px",
    lineHeight: 1.65,
  };
  const accent = "#f1c40f";
  const subtext = "#bdbdbd";

  const hero: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 24,
    alignItems: "center",
    marginBottom: 28,
  };

  const heroImg: CSSProperties = {
    width: "100%",
    height: "auto",
    borderRadius: 12,
    border: "1px solid #222",
    display: "block",
  };

  const grid: CSSProperties = {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "1fr 1fr",
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

  // CTA styles
  const cta: CSSProperties = {
    marginTop: 40,
    padding: 24,
    background: "#111",
    border: "1px solid #333",
    borderRadius: 12,
    textAlign: "center",
  };
  const button: CSSProperties = {
    marginTop: 12,
    padding: "10px 18px",
    borderRadius: 8,
    border: "1px solid #f1c40f",
    background: accent,
    color: "#000",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  };

  const mailto = `mailto:am@albertormelgoza.com?subject=${encodeURIComponent(
    "Whitepaper request from website"
  )}&body=${encodeURIComponent(
    "Hi Alberto,\n\nI'd like a copy of your whitepaper.\n\nThanks!"
  )}`;

  return (
    <main style={wrap}>
      {/* Hero */}
      <section style={hero}>
        <div>
          <h1 style={{ marginTop: 0 }}>Whitepapers</h1>
        </div>

        {/* AdMeliorem/public/Images/Whitepapers.jpg */}
        <img
          src="/Images/Whitepapers.jpg"
          alt="Ad Meliorem whitepapers"
          style={heroImg}
          width={800}
          height={500}
        />
      </section>

      {/* Cards */}
      <section style={grid}>
        {PAPERS.map((p) => (
          <article key={p.slug} style={card}>
            <h3 style={title}>{p.title}</h3>
            <p style={blurb}>{p.blurb}</p>
          </article>
        ))}
      </section>

      {/* Call to action */}
      <section style={cta}>
        <h2 style={{ marginTop: 0 }}>Want a copy?</h2>
        <p style={{ color: subtext }}>
          Get in touch and I’ll send you the full whitepaper tailored to your needs.
        </p>

        {/* Primary CTA → thank-you page (for Google Ads Page-load conversion) */}
        <a
          href="/whitepapers/thank-you"
          style={button}
          title="Request a whitepaper"
        >
          Request Whitepaper
        </a>

        {/* Optional secondary mailto link */}
        <p style={{ color: subtext, marginTop: 12 }}>
          Prefer email?{" "}
          <a href={mailto} style={{ color: accent }}>
            am@albertormelgoza.com
          </a>
        </p>
      </section>
    </main>
  );
}
