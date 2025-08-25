"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export const dynamic = "force-dynamic";

type Item = { title: string; link: string; pubDate: string; source: string };
type CountsMap = Record<string, { like: number; share: number }>;

const YELLOW = { color: "#f1c40f", textDecoration: "underline" } as const;
const REFRESH_MS = 120_000;

/** Only YOUR hazards */
const HAZARD_RULES: Array<{ label: string; phrases: string[] }> = [
  { label: "Toxic culture",            phrases: ["toxic culture", "toxic workplace", "culture risk", "corporate culture risk"] },
  { label: "Sexual harassment",        phrases: ["sexual harassment", "workplace sexual harassment"] },
  { label: "Sexual assault",           phrases: ["sexual assault", "workplace sexual assault"] },
  { label: "Bullying",                 phrases: ["workplace bullying", "bullying at work", "workplace bullying and harassment"] },
  { label: "Workplace aggression",     phrases: ["workplace aggression", "aggression at work"] },
  { label: "Workplace misconduct",     phrases: ["workplace misconduct", "employee misconduct", "corporate misconduct"] },
  { label: "Procedural justice",       phrases: ["procedural justice"] },
  { label: "Workplace harassment",     phrases: ["workplace harassment"] },
];

/** Require an obvious work context to avoid TV/sports/school noise */
const WORK_TERMS = ["workplace", "work", "employer", "company", "corporate", "business", "organisation", "organization", "office"];

/** Block common hard paywalls (News Corp) */
const BLOCKED_DOMAINS = ["wsj.com", "theaustralian.com.au", "thetimes.co.uk", "couriermail.com.au"];
const BLOCKED_SOURCES = ["WSJ", "The Australian", "The Times", "Courier-Mail"];

/* ---------------- helpers ---------------- */

function inWorkContext(text: string) {
  const t = text.toLowerCase();
  return WORK_TERMS.some((w) => t.includes(w));
}

function classifyHazard(title: string): string | null {
  const t = title.toLowerCase();
  if (!inWorkContext(t)) return null;
  for (const rule of HAZARD_RULES) {
    if (rule.phrases.some((p) => t.includes(p))) return rule.label;
  }
  return null;
}

function isBlocked(link: string, source?: string | null) {
  try {
    const host = new URL(link).hostname.replace(/^www\./, "");
    if (BLOCKED_DOMAINS.some((d) => host.endsWith(d))) return true;
  } catch {}
  if (source && BLOCKED_SOURCES.some((s) => (source || "").toLowerCase().includes(s.toLowerCase()))) return true;
  return false;
}

function useLocalLikes() {
  const KEY = "mediaroom_likes_v1";
  const [likes, setLikes] = useState<Record<string, true>>({});
  useEffect(() => { try { const raw = localStorage.getItem(KEY); if (raw) setLikes(JSON.parse(raw)); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(likes)); } catch {} }, [likes]);
  const toggle = (link: string) => setLikes(p => { const n = { ...p }; n[link] ? delete n[link] : (n[link] = true); return n; });
  const liked = (link: string) => Boolean(likes[link]);
  return { liked, toggle };
}

async function fetchJSON(url: string, init?: RequestInit) {
  const res = await fetch(url, { cache: "no-store", ...init });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) throw new Error("Not JSON");
  return res.json();
}

/** Headlines: try MediaRoom, then mediaroom, then legacy Newsfeed paths */
async function fetchHeadlines() {
  const ts = Date.now();
  const tries = [
    `/api/MediaRoom?ts=${ts}`,
    `/api/mediaroom?ts=${ts}`,
    `/api/Newsfeed?ts=${ts}`,
    `/api/newsfeed?ts=${ts}`,
  ];
  for (const u of tries) {
    try { return await fetchJSON(u); } catch { /* next */ }
  }
  throw new Error("No headlines endpoint available");
}

/** Metrics POST with graceful fallback to legacy paths */
async function postJSONWithFallback(pathA: string, pathB: string, body: any) {
  try {
    return await fetchJSON(pathA, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return await fetchJSON(pathB, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }
}

/* ---------------- page ---------------- */

export default function Page() {
  const [items, setItems] = useState<Array<Item & { hazard: string }>>([]);
  const [counts, setCounts] = useState<CountsMap>({});
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const { liked, toggle } = useLocalLikes();

  // Load headlines (polling)
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const data = await fetchHeadlines();
        if (!cancelled) {
          const raw: Item[] = Array.isArray(data?.items) ? data.items : [];
          const next = raw
            .filter((it) => !isBlocked(it.link, it.source))
            .map((it) => ({ ...it, hazard: classifyHazard(it.title) || "" }))
            .filter((it) => it.hazard); // keep only recognised hazards
          setItems(next);
          setApiError(data?.error || null);
          setUpdatedAt(new Date());
        }
      } catch (e: any) {
        if (!cancelled) { setApiError(e?.message || "Failed to load"); setItems([]); }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    const id = setInterval(load, REFRESH_MS);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  // Load like/share counts
  useEffect(() => {
    (async () => {
      if (!items.length) { setCounts({}); return; }
      try {
        const data = await postJSONWithFallback(
          "/api/MediaRoom/metrics",
          "/api/Newsfeed/metrics",
          { action: "get", links: items.map(i => ({ link: i.link, title: i.title })) }
        );
        setCounts(data?.counts || {});
      } catch {
        setCounts({});
      }
    })();
  }, [items]);

  const handleToggleLike = async (it: Item) => {
    toggle(it.link); // optimistic
    try {
      await postJSONWithFallback(
        "/api/MediaRoom/metrics",
        "/api/Newsfeed/metrics",
        { action: "toggleLike", link: it.link, title: it.title }
      );
      const data = await postJSONWithFallback(
        "/api/MediaRoom/metrics",
        "/api/Newsfeed/metrics",
        { action: "get", links: [{ link: it.link, title: it.title }] }
      );
      setCounts(c => ({ ...c, ...data.counts }));
    } catch {}
  };

  const handleShare = async (it: Item) => {
    try {
      await postJSONWithFallback(
        "/api/MediaRoom/metrics",
        "/api/Newsfeed/metrics",
        { action: "share", link: it.link, title: it.title }
      );
      setCounts(c => {
        const cur = c[it.link] || { like: 0, share: 0 };
        return { ...c, [it.link]: { ...cur, share: cur.share + 1 } };
      });
    } catch {}
    if (navigator.share) {
      try { await navigator.share({ title: it.title, url: it.link }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(it.link); alert("Link copied to clipboard"); } catch {}
    }
  };

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>MediaRoom</h1>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0 12px" }}>
        <span style={{ fontSize: 12, opacity: 0.7 }}>
          {updatedAt ? `Updated ${updatedAt.toLocaleTimeString()}` : loading ? "Loading…" : "Updated just now"}
        </span>
        <button
          onClick={() => location.reload()}
          style={{ border: "1px solid #222", borderRadius: 10, padding: "6px 10px", background: "transparent", color: "inherit", cursor: "pointer" }}
        >
          Refresh now
        </button>
      </div>

      {loading ? (
        <p style={{ opacity: 0.8 }}>Loading…</p>
      ) : apiError ? (
        <p style={{ opacity: 0.8 }}>No results yet. {apiError}</p>
      ) : !items.length ? (
        <p style={{ opacity: 0.8 }}>No results.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
          {items.map((it, i) => {
            const c = counts[it.link] || { like: 0, share: 0 };
            return (
              <li key={`${it.link}-${i}`} style={{ border: "1px solid #222", borderRadius: 12, padding: 12 }}>
                <a href={it.link} target="_blank" rel="noopener noreferrer" style={YELLOW}>{it.title}</a>
                <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                  {new Date(it.pubDate).toLocaleString()} · {it.source} · <span style={YELLOW}>Hazard: {it.hazard}</span>
                </div>

                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 10, flexWrap: "wrap" }}>
                  <button onClick={() => handleToggleLike(it)} style={btn()} aria-pressed={liked(it.link)}>
                    {liked(it.link) ? "Liked" : "Like"} · {c.like}
                  </button>
                  <button onClick={() => handleShare(it)} style={btn()}>
                    Share · {c.share}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

function btn(): CSSProperties {
  return { border: "1px solid #222", borderRadius: 10, padding: "6px 10px", background: "transparent", color: "inherit", cursor: "pointer" };
}
