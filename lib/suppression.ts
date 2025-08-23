// Privacy helpers: suppress small groups, format labels.

export const MIN_GROUP_N = 5;

export function isSuppressed(n?: number, min = MIN_GROUP_N) {
  return typeof n === "number" && n > 0 && n < min;
}

export function displayGroup(label: string, n: number) {
  return isSuppressed(n) ? "Not reported (n<5)" : `${label} (n=${n})`;
}

export function trafficTextColor(level: "Green" | "Amber" | "Red") {
  if (level === "Green") return "#22c55e";
  if (level === "Amber") return "#f59e0b";
  return "#ef4444";
}
