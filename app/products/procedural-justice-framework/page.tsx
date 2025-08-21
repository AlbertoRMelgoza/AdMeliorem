export const metadata = {
  title: "Procedural Justice Framework™ — Ad Meliorem",
  description:
    "Fair, transparent, defensible processes that prevent escalation and contain liability.",
};

export default function PJFPage() {
  const wrap: React.CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: React.CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Procedural Justice Framework™</h1>
      <p>
        The Procedural Justice Framework™ establishes fair, transparent and defensible complaint handling and
        investigation processes that prevent escalation and contain liability. After the first mention, Procedural Justice
        Framework is used without the mark for readability.
      </p>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>
        <ul>
          <li>Workflow and roles for intake, triage, assessment, and investigation</li>
          <li>Templates and guidance for notices, interviews, findings, and outcomes</li>
          <li>Quality checks aligned to fairness, transparency and defensibility</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          <a href="/contact" style={{ background: "#f1c40f", color: "#000", padding: "10px 18px", borderRadius: 6, fontWeight: 600, textDecoration: "none" }}>
            Ask about PJF →
          </a>
        </p>
      </section>
    </main>
  );
}

