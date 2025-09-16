// app/media/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/** ───────────────────────────────────────────────────────────
 * Ultra-flexible curated item (we normalize many shapes)
 * ─────────────────────────────────────────────────────────── */
type AnyRec = Record<string, any>;
type CuratedItem = {
  title: string;
  link: string;
  date?: string;        // ISO date
  source?: string;
  hazard?: string;      // single topic (optional)
  tags?: string[];      // optional
  note?: string;        // optional
  paywalled?: boolean;  // optional
  force?: boolean;      // pin to top
  // computed fields:
  _host?: string;
  _time?: number;
};

const LINK = { color: "#f1c40f", textDecoration: "none", fontWeight: 700 } as const;
const BTN = {
  border: "1px solid #222",
  borderRadius: 10,
  padding: "6px 10px",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
} as const;

const PAYWALL_DOMAINS = [
  "afr.com", "ft.com", "bloomberg.com", "wsj.com", "theaustralian.com.au", "nytimes.com",
];

const CACHE_KEY = "media_room_cache_v1";

/** ───────────────────────────────────────────────────────────
 * Helpers
 * ─────────────────────────────────────────────────────────── */
function hostOf(url: string) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
}

function deriveDateFromUrl(url: string): string | undefined {
  const m1 = url.match(/(\d{8})/); // ...-20250829-...
  if (m1) return `${m1[1].slice(0, 4)}-${m1[1].slice(4, 6)}-${m1[1].slice(6, 8)}`;
  const m2 = url.match(/(\d{4})[/-](\d{2})[/-](\d{2})/); // YYYY/MM/DD or YYYY-MM-DD
  if (m2) return `${m2[1]}-${m2[2]}-${m2[3]}`;
  return undefined;
}

function fmtDate(s?: string) {
  if (!s) return "—";
  const d = new Date(s);
  return isNaN(d.getTime()) ? "—" : d.toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" });
}

function pickFirst(obj: AnyRec, keys: string[]) {
  for (const k of keys) if (obj[k] != null) return obj[k];
  return undefined;
}

// Auto-tag topics if missing, from title/note
function autoHazardFrom(text: string) {
  const t = text.toLowerCase();
  if (/(sexual|harass|assault)\b/.test(t)) return "Sexual harassment";
  if (/(bully|aggress|intimidat)/.test(t)) return "Bullying/Aggression";
  if (/(toxic|culture|misconduct|governance)/.test(t)) return "Toxic culture";
  return undefined;
}

function normalizeTopic(s?: string) {
  if (!s) return undefined;
  const t = s.trim().toLowerCase();
  if (t.includes("sexual")) return "Sexual harassment";
  if (t.includes("bully") || t.includes("aggress")) return "Bullying/Aggression";
  if (t.includes("toxic")) return "Toxic culture";
  return s;
}

function normalize(raw: AnyRec) {
  const title = String(pickFirst(raw, ["title", "headline", "name"]) ?? "(Untitled)");
  const link = String(pickFirst(raw, ["link", "url", "href"]) ?? "#");

  const date =
    String(
      pickFirst(raw, [
        "pubDate", "published", "publishedAt", "updated", "updatedAt", "date", "isoDate", "time", "postedAt",
      ]) ?? deriveDateFromUrl(link) ?? "",
    ) || undefined;

  const source = pickFirst(raw, ["source", "publisher", "outlet", "brand", "site", "by"]) as string | undefined;

  const hazardRaw = pickFirst(raw, ["hazard", "topic", "category", "label"]) as string | undefined;
  const hazard = normalizeTopic(hazardRaw) ?? autoHazardFrom(`${title} ${raw.note ?? ""}`) ?? undefined;

  const tagsRaw = pickFirst(raw, ["tags", "topics", "categories"]);
  const tags = Array.isArray(tagsRaw)
    ? tagsRaw.map((t: any) => String(t)).filter(Boolean)
    : typeof tagsRaw === "string"
      ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

  const note = pickFirst(raw, ["note", "summary", "dek", "description", "excerpt"]) as string | undefined;
  const force = Boolean(pickFirst(raw, ["force", "pinned", "featured", "sticky"]));

  const host = hostOf(link);
  const payBool = pickFirst(raw, ["paywalled", "paid", "subscription"]);
  const paywalled = typeof payBool === "boolean" ? payBool : PAYWALL_DOMAINS.some((d) => host.endsWith(d));

  const _time = date ? Date.parse(date) : 0;

  return { title, link, date, source, hazard, tags, note, paywalled, force, _host: host, _time } as CuratedItem;
}

// Prefer pinned; then prefer newest; else prefer longer note
function prefer(a: CuratedItem, b: CuratedItem) {
  if (!!a.force !== !!b.force) return a.force ? a : b;
  if ((a._time ?? 0) !== (b._time ?? 0)) return (a._time ?? 0) > (b._time ?? 0) ? a : b;
  if ((a.note?.length ?? 0) !== (b.note?.length ?? 0)) return (a.note?.length ?? 0) > (b.note?.length ?? 0) ? a : b;
  return a;
}

// De-dupe by normalized title + host
function dedupe(items: CuratedItem[]) {
  const map = new Map<string, CuratedItem>();
  for (const it of items) {
    const key = `${it.title.toLowerCase().trim()}|${it._host ?? ""}`;
    if (!map.has(key)) map.set(key, it);
    else map.set(key, prefer(map.get(key)!, it));
  }
  return Array.from(map.values());
}

// UTM for “Next step” links (conversion visibility)
function withUtm(href: string, sourceHost: string | undefined, topic: string | undefined) {
  const url = new URL(href, "https://dummy.local"); // base ignored by browser when rendered
  url.searchParams.set("utm_source", "media");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "next-step");
  if (sourceHost) url.searchParams.set("utm_content", sourceHost);
  if (topic) url.searchParams.set("utm_term", topic);
  return href + (href.includes("?") ? "&" : "?") + url.searchParams.toString();
}

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

/** ───────────────────────────────────────────────────────────
 * Component
 * ─────────────────────────────────────────────────────────── */
export default function MediaRoom() {
  const [raw, setRaw] = useState<AnyRec[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // Controls
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState("All");
  const [source, setSource] = useState("All");
  const [sort, setSort] = useState<"new" | "old" | "source" | "az">("new");

  async function fetchFirst(paths: string[]) {
    for (const p of paths) {
      try {
        const res = await fetch(p + (p.includes("?") ? "&" : "?") + "ts=" + Date.now(), { cache: "no-store" });
        if (res.ok) return res.json();
      } catch { /* continue */ }
    }
    throw new Error("No curated feed found");
  }

  async function refetch() {
    setLoading(true);
    setErr(null);
    try {
      const data = await fetchFirst(["/media/curated.json", "/content/curated.json", "/curated.json"]);
      const arr = Array.isArray(data) ? data : Array.isArray(data?.items) ? data.items : [];
      setRaw(arr);
      // cache
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(arr)); } catch {}
    } catch (e: any) {
      setErr(e?.message || "Could not load curated list.");
      // soft-fail: load cache
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) setRaw(JSON.parse(cached));
      } catch { /* ignore */ }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refetch(); }, []);

  // Normalize → de-dupe → sort
  const base = useMemo(() => {
    const normalized = raw.map(normalize);
    const unique = dedupe(normalized);
    const cmp = {
      new: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || (b._time ?? 0) - (a._time ?? 0) || a.title.localeCompare(b.title),
      old: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || (a._time ?? 0) - (b._time ?? 0) || a.title.localeCompare(b.title),
      source: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || (a.source || a._host || "").localeCompare(b.source || b._host || "") || (b._time ?? 0) - (a._time ?? 0),
      az: (a: any, b: any) => (Number(!!b.force) - Number(!!a.force)) || a.title.localeCompare(b.title),
    } as const;
    return unique.sort(cmp[sort]);
  }, [raw, sort]);

  // Facets
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

  // Filter + search
  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return base.filter((i) => {
      if (source !== "All" && (i.source || i._host || "Unknown") !== source) return false;
      if (topic !== "All") {
        const tset = new Set([i.hazard, ...(i.tags || [])].filter(Boolean) as string[]);
        if (!tset.has(topic)) return false;
      }
      if (!ql) return true;
      const hay = [i.title, i.note || "", i.source || "", i._host || "", i.hazard || "", ...(i.tags || [])]
        .join(" ").toLowerCase();
      return hay.includes(ql);
    });
  }, [base, q, topic, source]);

  return (
    <main style={{ maxWidth: 1100, margin: "28px auto", padding: "24px 16px", lineHeight: 1.65 }}>
      {/* Header */}
      <section style={{ border: "1px solid #222", borderRadius: 12, padding: 16, marginBottom: 12, background: "#111" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0 }}>Media Room</h1>
            <p style={{ marginTop: 6, opacity: 0.9 }}>
              Curated links to reporting on culture risk, psychosocial hazards, and procedural justice. External articles may be paywalled.
            </p>
            <p style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>Last updated: {new Date().toLocaleDateString("en-AU")}</p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <a href="tel:+61490247772" style={LINK}>Call 0490 247 772</a>
            <span style={{ opacity: 0.5 }}>&middot;</span>
            <a href="/contact" style={LINK}>Contact</a>
            <button onClick={refetch} style={{ ...BTN, marginLeft: 8 }} aria-label="Refetch media items">
              Refetch
            </button>
          </div>
        </div>
      </section>

      {/* Controls */}
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
          placeholder="Search title, note, source, topic…"
          style={{ border: "1px solid #222", background: "#0f0f0f", color: "inherit", borderRadius: 10, padding: "8px 10px", outline: "none" }}
        />
        <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ border: "1px solid #222", background: "#0f0f0f", color: "inherit", borderRadius: 10, padding: "8px 10px" }} aria-label="Filter by topic">
          {allTopics.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={source} onChange={(e) => setSource(e.target.value)} style={{ border: "1px solid #222", background: "#0f0f0f", color: "inherit", borderRadius: 10, padding: "8px 10px" }} aria-label="Filter by source">
          {allSources.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as any)} style={{ border: "1px solid #222", background: "#0f0f0f", color: "inherit", borderRadius: 10, padding: "8px 10px" }} aria-label="Sort">
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="source">Source (A–Z)</option>
          <option value="az">Title (A–Z)</option>
        </select>
      </section>

      {/* Messages */}
      {err && <p style={{ opacity: 0.8 }}>Couldn’t refresh live feed. Showing last available list{filtered.length ? "" : " (none cached)"}.</p>}
      {(!loading && !filtered.length) && <p style={{ opacity: 0.8 }}>No results.</p>}

      {/* Cards */}
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
        {filtered.map((it, i) => {
          const dateStr = fmtDate(it.date);
          const showSource = it.source || it._host || "Unknown";
          const next = nextStepFor(it.hazard, it.tags);
          const nextHref = withUtm(next.href, it._host, it.hazard);
          return (
            <li key={`${it.link}-${i}`} style={{ border: "1px solid #222", borderRadius: 12, padding: 12, background: "#0f0f0f", display: "grid", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {it.force && <span aria-label="Pinned">📌</span>}
                <a href={it.link} target="_blank" rel="noopener noreferrer nofollow" style={LINK} aria-label={`Open article: ${it.title}`}>
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
                Next step:&nbsp;<a href={nextHref} style={LINK}>{next.label}</a>
              </p>

              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <button onClick={() => navigator.clipboard.writeText(it.link)} style={BTN} aria-label="Copy link">
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

      <p style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
        Editorial note: Headlines only + brief context. No logos or reproduced excerpts. Some outlets require subscription.
      </p>
    </main>
  );
}
