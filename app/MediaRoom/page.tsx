// app/media/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

// -----------------------------
// Types (very loose on purpose)
// -----------------------------
type AnyRec = Record<string, any>;
type CuratedItem = {
  // canonical fields we will normalize to:
  title: string;
  link: string;
  date?: string;          // ISO date
  source?: string;        // e.g., AFR
  hazard?: string;        // single topic (optional)
  tags?: string[];        // extra topics (optional)
  note?: string;          // commentary (optional)
  paywalled?: boolean;    // optional (we also auto-detect by domain)
  force?: boolean;        // pin to top
};

// -----------------------------
// UI constants
// -----------------------------
const YELLOW = { color: "#f1c40f", textDecoration: "none", fontWeight: 700 } as const;
const BTN = {
  border: "1px solid #222",
  borderRadius: 10,
  padding: "6px 10px",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
} as const;

const PAYWALL_DOMAINS = [
  "afr.com",
  "ft.com",
  "bloomberg.com",
  "wsj.com",
  "theaustralian.com.au",
  "nytimes.com",
];

// -----------------------------
// Helpers: host, date, mapping
// -----------------------------
function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function deriveDateFromUrl(url: string): string | undefined {
  // AFR-style: ...-20250829-...
  const d1 = url.match(/(\d{8})/);
  if (d1) {
    const y = d1[1].slice(0, 4);
    const m = d1[1].slice(4, 6);
    const d = d1[1].slice(6, 8);
    return `${y}-${m}-${d}`;
  }
  // Common: YYYY/MM/DD or YYYY-MM-DD
  const d2 = url.match(/(\d{4})[/-](\d{2})[/-](\d{2})/);
  if (d2) return `${d2[1]}-${d2[2]}-${d2[3]}`;
  return undefined;
}

function fmtDate(s?: string) {
  if (!s) return "—";
  const d = new Date(s);
  return isNaN(d.getTime())
    ? "—"
    : d.toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" });
}

// Map “hazard-ish” strings to consistent labels (optional)
function normalizeTopic(s?: string) {
  if (!s) return undefined;
  const t = s.trim().toLowerCase();
  if (t.includes("sexual")) return "Sexual harassment";
  if (t.includes("bully")) return "Bullying";
  if (t.includes("aggress")) return "Aggression";
  if (t.includes("toxic")) return "Toxic culture";
  return s; // keep as-is
}

// Flexible field picking across many possible keys
function pickFirst(obj: AnyRec, keys: string[]): any {
  for (const k of keys) {
    if (obj[k] != null) return obj[k];
  }
  return undefined;
}

// Core normalizer: turns any object shape into our CuratedItem
function normalize(raw: AnyRec): CuratedItem & {
  _host: string;
  _date: string | undefined;
  _time: number;
  _paywalled: boolean;
} {
  const title =
    pickFirst(raw, ["title", "headline", "name"]) ??
    "(Untitled)";
  const link =
    pickFirst(raw, ["link", "url", "href"]) ??
    "#";

  // Dates we accept from many sources (RSS/Atom/various JSONs)
  const dateCandidate =
    pickFirst(raw, [
      "pubDate",
      "published",
      "publishedAt",
      "updated",
      "updatedAt",
      "date",
      "isoDate",
      "time",
      "postedAt",
    ]) || deriveDateFromUrl(String(link));

  const source =
    pickFirst(raw, ["source", "publisher", "outlet", "brand", "site", "by"]) ||
    undefined;

  // Topic(s)
  const hazard =
    normalizeTopic(pickFirst(raw, ["hazard", "topic", "category", "label"])) ||
    undefined;

  // tags can arrive in many ways
  const tagsRaw =
    pickFirst(raw, ["tags", "topics", "categories"]) || [];
  const tags = Array.isArray(tagsRaw)
    ? tagsRaw.map((t: any) => String(t)).filter(Boolean)
    : typeof tagsRaw === "string"
      ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

  const note = pickFirst(raw, ["note", "summary", "dek", "description", "excerpt"]);
  const pinned = Boolean(pickFirst(raw, ["force", "pinned", "featured", "sticky"]));
  const pay =
    pickFirst(raw, ["paywalled", "paid", "subscription"]) ??
    undefined;

  const _host = hostOf(String(link));
  const _date = dateCandidate ? String(dateCandidate) : undefined;
  const _time = _date ? Date.parse(_date) : 0;
  const _paywalled = typeof pay === "boolean" ? pay : PAYWALL_DOMAINS.some((d) => _host.endsWith(d));

  return {
    title: String(title),
    link: String(link),
    date: _date,
    source,
    hazard,
    tags,
    note: note ? String(note) : undefined,
    paywalled: _paywalled,
    force: pinned,
    _host,
    _date,
    _time,
    _paywalled,
  };
}

// Map topics to your “next step” product
function nextStepFor(hazard?: string, tags: string[] = []) {
  const s = (hazard || "").toLowerCase();
  const joined = [hazard, ...tags].join(" ").toLowerCase();
  if (s.includes("sexual") || joined.includes("sexual"))
    return { label: "SH/ABH prevention (SHSARC/RCABH) →", href: "/products/shsarc-rcabh" };
  if (s.includes("bully") || s.includes("aggress") || joined.includes("bully") || joined.includes("aggress"))
    return { label: "Aggression/Bullying controls →", href: "/products/shsarc-rcabh" };
  if (s.includes("toxic") || joined.includes("toxic"))
    return { label: "Culture Risk Diagnostic™ →", href: "/products/culture-risk-diagnostic" };
  return { label: "Procedural Justice Framework™ →", href: "/products/procedural-justice-framework" };
}

// -----------------------------
// Component
// -----------------------------
export default function MediaRoom() {
  const [raw, setRaw] = useState<AnyRec[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // Filters/controls
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState("All");
  const [source, setSource] = useState("All");
  const [sort, setSort] = useState<"new" | "old" | "source" | "az">("new");

  // Try multiple locations to maximize flexibility
  async function fetchFirst(paths: string[]) {
    for (const p of paths) {
      try {
        const res = await fetch(p + (p.includes("?") ? "&" : "?") + "ts=" + Date.now(), { cache: "no-store" });
        if (res.ok) return res.json();
      } catch {
        // continue
      }
    }
    throw new Error("No curated feed found");
  }

  useEffect(() => {
    (async () => {
      try {
        // Prefer /media/curated.json, fallback to /content/curated.json, then /curated.json
        const data = await fetchFirst(["/media/curated.json", "/content/curated.json", "/curated.json"]);
        const arr = Array.isArray(data) ? data : Array.isArray(data?.items) ? data.items : [];
        setRaw(arr);
      } catch (e: any) {
        setErr(e?.message || "Could not load curated list.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Normalize and sort base list (pin first, then sort mode)
  const base = useMemo(() => {
    const mapped = raw.map(normalize);

    const cmp = {
      new: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || b._time - a._time || a.title.localeCompare(b.title),
      old: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || a._time - b._time || a.title.localeCompare(b.title),
      source: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || (a.source || a._host || "").localeCompare(b.source || b._host || "") || b._time - a._time,
      az: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || a.title.localeCompare(b.title),
    } as const;

    return mapped.sort(cmp[sort]);
  }, [raw, sort]);

  // Build dynamic facets (topics, sources)
  const allTopics = useMemo(() => {
    const s = new Set<string>();
    base.forEach((i) => {
      if (i.hazard) s.add(i.hazard);
      i.tags?.forEach((t) => t && s.add(t));
    });
    return ["All", ...Array.from(s).sort()];
  }, [base]);

  const allSources = useMemo(() => {
    const s = new Set<string>();
    base.forEach((i) => s.add(i.source || i._host || "Unknown"));
    return ["All", ...Array.from(s).sort()];
  }, [base]);

  // Apply filters + search
  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return base.filter((i) => {
      // source filter
      if (source !== "All" && (i.source || i._host || "Unknown") !== source) return false;

      // topic filter (matches hazard or any tag)
      if (topic !== "All") {
        const tset = new Set([i.hazard, ...(i.tags || [])].filter(Boolean) as string[]);
        if (!tset.has(topic)) return false;
      }

      // search
      if (!ql) return true;
      const hay = [
        i.title,
        i.note || "",
        i.source || "",
        i._host || "",
        i.hazard || "",
        ...(i.tags || []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(ql);
    });
  }, [base, q, topic, source]);

  return (
    <main style={{ maxWidth: 1100, margin: "28px auto", padding: "24px 16px", lineHeight: 1.65 }}>
      {/* Header */}
      <section style={{ border: "1px solid #222", borderRadius: 12, padding: 16, marginBottom: 12, background: "#111" }}>
        <h1 style={{ margin: 0 }}>Media Room</h1>
        <p style={{ marginTop: 6, opacity: 0.9 }}>
          Curated links to reporting on culture risk, psychosocial hazards, and procedural justice. External articles may be paywalled.
        </p>
        <p style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>Last updated: {new Date().toLocaleDateString("en-AU")}</p>
        <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a href="tel:+61490247772" style={YELLOW} aria-label="Call Alberto">Call 0490 247 772</a>
          <span style={{ opacity: 0.5 }}>&middot;</span>
          <a href="/contact" style={YELLOW} aria-label="Contact form">Contact</a>
        </div>
      </section>

      {/* Controls: search + filters + sort */}
      <section
        style={{
          display: "grid",
          gap: 8,
          gridTemplateColumns: "1fr 200px 200px 160px",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search title, note, source, topic..."
          style={{
            border: "1px solid #222",
            background: "#0f0f0f",
            color: "inherit",
            borderRadius: 10,
            padding: "8px 10px",
            outline: "none",
          }}
        />
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{ border: "1px solid #222", background: "#0f0f0f", color: "inherit", borderRadius: 10, padding: "8px 10px" }}
          aria-label="Filter by topic"
        >
          {allTopics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{ border: "1px solid #222", background: "#0f0f0f", color: "inherit", borderRadius: 10, padding: "8px 10px" }}
          aria-label="Filter by source"
        >
          {allSources.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
          style={{ border: "1px solid #222", background: "#0f0f0f", color: "inherit", borderRadius: 10, padding: "8px 10px" }}
          aria-label="Sort"
        >
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="source">Source (A–Z)</option>
          <option value="az">Title (A–Z)</option>
        </select>
      </section>

      {/* Results / errors */}
      {err && <p style={{ opacity: 0.8 }}>No results yet. {err}</p>}
      {!loading && !filtered.length && <p style={{ opacity: 0.8 }}>No results.</p>}

      {/* Cards */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
        }}
      >
        {filtered.map((it, i) => {
          const dateStr = fmtDate(it.date);
          const next = nextStepFor(it.hazard, it.tags);
          const showSource = it.source || hostOf(it.link) || "Unknown";
          return (
            <li key={`${it.link}-${i}`} style={{ border: "1px solid #222", borderRadius: 12, padding: 12, background: "#0f0f0f", display: "grid", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {it.force && <span aria-label="Pinned">📌</span>}
                <a href={it.link} target="_blank" rel="noopener noreferrer nofollow" style={YELLOW} aria-label={`Open article: ${it.title}`}>
                  <h3 style={{ margin: 0, fontSize: 16, lineHeight: 1.35 }}>{it.title}</h3>
                </a>
              </div>

              <div style={{ fontSize: 12, opacity: 0.8 }}>
                {dateStr} · {showSource}
                {it.hazard ? <> · <span style={{ color: "#f1c40f", fontWeight: 700 }}>{it.hazard}</span></> : null}
                {it.tags?.length ? <> · {it.tags.join(" • ")}</> : null}
                {it.paywalled ? <> · <span style={{ opacity: 0.8 }}>may require subscription</span></> : null}
              </div>

              {it.note ? <p style={{ margin: 0 }}>{it.note}</p> : null}

              <p style={{ margin: 0, fontSize: 12, opacity: 0.85 }}>
                Next step:&nbsp;
                <a href={next.href} style={YELLOW}>{next.label}</a>
              </p>

              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <button onClick={() => navigator.clipboard.writeText(it.link)} style={BTN} aria-label="Copy link to clipboard">
                  Copy link
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) navigator.share({ title: it.title, url: it.link });
                    else window.open(it.link, "_blank", "noopener,noreferrer");
                  }}
                  style={BTN}
                  aria-label="Share link"
                >
                  Share
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Footer note */}
      <p style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
        Editorial note: We link headlines only and provide short context in our own words. No logos or article excerpts are reproduced.
      </p>
    </main>
  );
}
