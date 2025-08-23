// Core shapes used across dashboard + API

export type Demographics = {
  gender?: "Male" | "Female" | "Non-binary" | "Prefer not to say";
  age?: "18–24" | "25–34" | "35–44" | "45–54" | "55–64" | "65+";
  tenure?: "0–1" | "2–5" | "6–10" | "11+";
  department?: string;
  employmentType?: "Full-time" | "Part-time" | "Casual" | "Contractor";
  location?: "Head office" | "Branch" | "Remote" | "Hybrid";
  region?: string;
  industrySkew?: "Male-dominated" | "Female-dominated" | "Equal" | "Not specified";
};

export type SubscaleScore = {
  key: string;              // e.g. 'copsoq_demands'
  label: string;            // 'Demands at Work'
  mean: number;             // 1–5
  n: number;                // group count used to compute
  level: "Green" | "Amber" | "Red";
};

export type Aggregate = {
  orgId: string;
  instanceId: string;
  instrument: "copsoq" | "sheq" | "pulse";
  subscales: SubscaleScore[];
  // distribution tables for demographic % (optional)
  distributions?: Record<string, Array<{ label: string; pct: number; n: number }>>;
  computedAt: string; // ISO
};

export type DashboardParams = {
  orgId: string;
  instanceId: string;
  instrument: "copsoq" | "sheq" | "pulse";
};
