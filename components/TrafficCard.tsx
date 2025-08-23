"use client";
import { trafficTextColor } from "../lib/suppression";   // ← relative path
import type { SubscaleScore } from "../lib/types";        // ← relative path

export default function TrafficCard({ item }: { item: SubscaleScore }) {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid #222",
        borderRadius: 12,
        padding: 14,
      }}
    >
      <div style={{ fontWeight: 700 }}>{item.label}</div>
      <div style={{ marginTop: 6, opacity: 0.85 }}>
        Mean: {item.mean.toFixed(2)} (n={item.n})
      </div>
      <div
        style={{
          marginTop: 4,
          fontWeight: 700,
          color: trafficTextColor(item.level),
        }}
      >
        {item.level}
      </div>
    </div>
  );
}
