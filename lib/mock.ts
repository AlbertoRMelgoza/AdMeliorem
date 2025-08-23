import type { Aggregate } from "./types";

export const MOCK_AGGREGATE_COPSOQ: Aggregate = {
  orgId: "demo-org",
  instanceId: "demo-instance",
  instrument: "copsoq",
  computedAt: new Date().toISOString(),
  subscales: [
    { key: "copsoq_demands", label: "Demands at Work", mean: 3.2, n: 148, level: "Amber" },
    { key: "copsoq_work_org", label: "Work Organisation & Job Content", mean: 4.1, n: 149, level: "Green" },
    { key: "copsoq_interpersonal", label: "Interpersonal Relations & Leadership", mean: 2.9, n: 147, level: "Red" },
    { key: "copsoq_interface", label: "Work–Individual Interface", mean: 3.8, n: 146, level: "Amber" },
    { key: "copsoq_social", label: "Social Capital", mean: 4.3, n: 149, level: "Green" },
  ],
  distributions: {
    gender: [
      { label: "Male", pct: 45, n: 67 },
      { label: "Female", pct: 50, n: 75 },
      { label: "Non-binary", pct: 3, n: 5 },
      { label: "Prefer not to say", pct: 2, n: 3 },
    ],
    age: [
      { label: "18–24", pct: 10, n: 15 },
      { label: "25–34", pct: 30, n: 45 },
      { label: "35–44", pct: 25, n: 38 },
      { label: "45–54", pct: 20, n: 30 },
      { label: "55–64", pct: 12, n: 18 },
      { label: "65+", pct: 3, n: 5 },
    ],
    tenure: [
      { label: "0–1", pct: 15, n: 22 },
      { label: "2–5", pct: 40, n: 60 },
      { label: "6–10", pct: 25, n: 38 },
      { label: "11+", pct: 20, n: 30 },
    ],
  },
};
