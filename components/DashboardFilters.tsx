"use client";
import { useState } from "react";

type Props = {
  departments: string[];
  onChange: (f: { department?: string; gender?: string; tenure?: string }) => void;
};

export default function DashboardFilters({ departments, onChange }: Props) {
  const [department, setDepartment] = useState<string | undefined>();
  const [gender, setGender] = useState<string | undefined>();
  const [tenure, setTenure] = useState<string | undefined>();

  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <select
        value={department ?? ""}
        onChange={(e) => {
          const v = e.target.value || undefined;
          setDepartment(v);
          onChange({ department: v, gender, tenure });
        }}
        style={{ background: "#111", color: "#fff", border: "1px solid #222", borderRadius: 8, padding: "8px 10px" }}
      >
        <option value="">All departments</option>
        {departments.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <select
        value={gender ?? ""}
        onChange={(e) => {
          const v = e.target.value || undefined;
          setGender(v);
          onChange({ department, gender: v, tenure });
        }}
        style={{ background: "#111", color: "#fff", border: "1px solid #222", borderRadius: 8, padding: "8px 10px" }}
      >
        <option value="">All genders</option>
        <option>Male</option>
        <option>Female</option>
        <option>Non-binary</option>
        <option>Prefer not to say</option>
      </select>

      <select
        value={tenure ?? ""}
        onChange={(e) => {
          const v = e.target.value || undefined;
          setTenure(v);
          onChange({ department, gender, tenure: v });
        }}
        style={{ background: "#111", color: "#fff", border: "1px solid #222", borderRadius: 8, padding: "8px 10px" }}
      >
        <option value="">All tenure</option>
        <option>0–1</option>
        <option>2–5</option>
        <option>6–10</option>
        <option>11+</option>
      </select>
    </div>
  );
}
