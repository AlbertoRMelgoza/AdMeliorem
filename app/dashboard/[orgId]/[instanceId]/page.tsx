import type { CSSProperties } from "react";

// ⬇️ four ../ to get from app/dashboard/[orgId]/[instanceId]/ to the project root
import TrafficCard from "../../../../components/TrafficCard";
import DashboardFilters from "../../../../components/DashboardFilters";
import { MOCK_AGGREGATE_COPSOQ } from "../../../../lib/mock";
import { MIN_GROUP_N } from "../../../../lib/suppression";


type Params = { params: { orgId: string; instanceId: string } };

export default async function DashboardPage({ params }: Params) {
  const data = MOCK_AGGREGATE_COPSOQ;

  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Dashboard — {data.instrument.toUpperCase()}</h1>
      <p style={{ opacity: 0.85 }}>
        Instance: <strong>{params.instanceId}</strong> • Last computed: {new Date(data.computedAt).toLocaleString()}
      </p>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Filters</h2>
        <DashboardFilters departments={["Operations", "HR", "Finance", "Other"]} onChange={() => {}} />
        <p style={{ marginTop: 12, fontSize: 13, opacity: 0.75 }}>
          Privacy: subgroup results are only shown when <code>n ≥ {MIN_GROUP_N}</code>.
        </p>
      </section>

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Subscale Scores</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
          {data.subscales.map((s) => (
            <TrafficCard key={s.key} item={s} />
          ))}
        </div>
      </section>

      {data.distributions && (
        <section style={card}>
          <h2 style={{ marginTop: 0 }}>Respondent Profile</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {Object.entries(data.distributions).map(([dim, rows]) => (
              <div key={dim} style={{ background: "#0d0d0d", border: "1px solid #222", borderRadius: 10, padding: 12 }}>
                <div style={{ fontWeight: 700, marginBottom: 8, textTransform: "capitalize" }}>{dim}</div>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {rows.map((r) => (
                    <li key={r.label} style={{ margin: "4px 0" }}>
                      {r.label}: {r.pct}% {r.n < MIN_GROUP_N ? "(not reported in breakdowns)" : `(n=${r.n})`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Interpretation</h2>
        <p>
          Amber/Red subscales indicate elevated risk. For regulator-grade evidence and targeted controls, a deeper analysis
          (e.g., t-tests/regression) is recommended. Contact Alberto for executive briefing and intervention planning.
        </p>
      </section>
    </main>
  );
}
