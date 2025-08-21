import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Principles — Ad Meliorem",
  description:
    "Code of Conduct, Code of Ethics, and Acknowledgment of Country for Ad Meliorem.",
};

export default function PrinciplesPage() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const section: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };
  const listHead: CSSProperties = { marginTop: 0 };
  const linklike: CSSProperties = { color: "#f1c40f", textDecoration: "none" };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Principles</h1>
      <p>
        These statements set out how Ad Meliorem operates — with fairness, integrity, and respect for people and Country.
      </p>

      {/* AdMeliorem\public\Images\ethics.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/ethics.jpg"
          alt="Principles guiding Ad Meliorem — integrity, fairness, and respect"
          width={900}
          height={500}
          style={{ borderRadius: 12, width: "100%", height: "auto", maxWidth: 900 }}
          sizes="(max-width: 960px) 100vw, 900px"
          priority
        />
      </div>

      {/* Quick navigation */}
      <nav aria-label="Page sections" style={{ marginTop: 8 }}>
        <a href="#conduct" style={linklike}>Code of Conduct</a>{" · "}
        <a href="#ethics" style={linklike}>Code of Ethics</a>{" · "}
        <a href="#country" style={linklike}>Acknowledgment of Country</a>
      </nav>

      {/* Code of Conduct */}
      <section id="conduct" style={section}>
        <h2 style={listHead}>Ad Meliorem – Code of Conduct</h2>
        <h3 style={{ marginTop: 12 }}>Introduction</h3>
        <p>
          As the sole owner and operator of Ad Meliorem, I hold myself to the highest standards of integrity, creativity, and fairness.
          This Code of Conduct articulates the values and commitments that guide every decision and interaction in my business.
          My aim is not only to achieve success, but to do so in a way that respects people, society, and the environment.
        </p>

        <h3 style={{ marginTop: 16 }}>Core Values</h3>
        <ul>
          <li><strong>Creativity with Emotion</strong> — imagination with authenticity and empathy.</li>
          <li><strong>Equity, Equality, and Fairness</strong> — respect and opportunity for every person.</li>
          <li><strong>Hard Work and Integrity</strong> — diligence and honesty in everything I do.</li>
          <li><strong>An Open, Evolving Attitude</strong> — adapt to learning and inclusivity as norms evolve.</li>
          <li><strong>Transparency and Accountability</strong> — own mistakes, address conflicts, and take responsibility.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>My Commitments</h3>
        <ol>
          <li>
            <strong>Ethical and Lawful Conduct.</strong> I act honestly and fairly; I do not tolerate fraud, bribery,
            corruption, money laundering, or misconduct; I disclose and manage conflicts of interest.
          </li>
          <li>
            <strong>Compliance and Risk Management.</strong> I comply with laws, tax, and fiduciary duties and aim for
            mutually beneficial, ethically sound arrangements.
          </li>
          <li>
            <strong>Sustainability and Social Responsibility.</strong> I minimise environmental impact and categorically
            condemn modern slavery, exploitation, and abusive labour practices.
          </li>
          <li>
            <strong>Fair and Respectful Interactions.</strong> I reject discrimination and harassment and foster inclusion.
          </li>
          <li>
            <strong>Professional Integrity and Continuous Improvement.</strong> I own mistakes, keep information
            confidential, and communicate transparently.
          </li>
        </ol>

        <h3 style={{ marginTop: 16 }}>Putting This Code Into Action</h3>
        <p>
          I commit to upholding this Code in every facet of my business. When uncertainty arises, I choose the path of
          integrity, sustainability, and fairness.
        </p>
      </section>

      {/* Code of Ethics */}
      <section id="ethics" style={section}>
        <h2 style={listHead}>Ad Meliorem – Code of Ethics (Virtue Ethics Framework)</h2>
        <h3 style={{ marginTop: 12 }}>Introduction</h3>
        <p>
          Ethical business means striving to be a virtuous person — not merely to avoid wrongdoing but to exemplify the highest
          moral character in all actions and decisions. This commitment guides every relationship, pursuit, and challenge.
        </p>

        <h3 style={{ marginTop: 16 }}>My Guiding Virtues</h3>
        <ul>
          <li><strong>Integrity</strong> — honesty and consistency aligned to deepest values.</li>
          <li><strong>Courage</strong> — face difficult truths and stand up for what is right.</li>
          <li><strong>Empathy</strong> — understand needs and perspectives with compassion.</li>
          <li><strong>Justice</strong> — treat everyone fairly; correct inequities.</li>
          <li><strong>Prudence</strong> — wise judgment, balancing ambition and caution.</li>
          <li><strong>Humility</strong> — recognise limits; listen, learn, and improve.</li>
          <li><strong>Diligence</strong> — disciplined commitment and attention to detail.</li>
          <li><strong>Generosity</strong> — share knowledge, time, and opportunities to uplift others.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>Virtue in Practice</h3>
        <ul>
          <li>Ethical business is personal growth in action — be the best version of myself daily.</li>
          <li>In dilemmas, ask: “What would a virtuous person do?” and act accordingly.</li>
          <li>Meet mistakes with humility, transparency, and the will to make things right.</li>
          <li>Consider broader impacts and contribute to a just, equitable, sustainable world.</li>
          <li>Remain open to feedback and lifelong learning — virtue is a continual journey.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>Conclusion</h3>
        <p>
          This Code of Ethics is a daily commitment to embody virtue so that Ad Meliorem serves clients, partners, and the
          community with integrity.
        </p>
      </section>

      {/* Acknowledgment of Country */}
      <section id="country" style={section}>
        <h2 style={listHead}>Acknowledgment of Country</h2>
        <p>
          I acknowledge the Turrbal and Jagera peoples as the Traditional Custodians of the land on which I live and work in
          Brisbane. The peoples of this land inspire me to do better for both the land and the communities of this country, and
          I am forever grateful for their wisdom.
        </p>
        <p>
          I pay my respects to their Elders past and present and extend that respect to all First Nations peoples. I recognise
          their continuing connection to land, waters, culture, and community, which teach me every day.
        </p>
      </section>

      {/* Optional footer nav back to top */}
      <p style={{ marginTop: 24 }}>
        <a href="#top" style={linklike}>Back to top ↑</a>
      </p>
    </main>
  );
}

