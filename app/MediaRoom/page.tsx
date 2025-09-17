"use client";

import { useEffect, useMemo, useState } from "react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
type CuratedItem = {
  title: string;
  link: string;
  pubDate?: string;      // ISO date
  source?: string;       // e.g., "AFR", "ABC News"
  hazard?: string;       // "Bullying" | "Sexual harassment" | "Sexual assault" | "Toxic culture" | "Procedural justice" | ...
  note?: string;
  paywalled?: boolean;

  // optional pin flags (ignored for ordering; badge only)
  force?: boolean;
  pinned?: boolean;
  featured?: boolean;
  sticky?: boolean;

  // derived
  _host?: string;
  _time?: number;
};

const LINK = { color: "#f1c40f", textDecoration: "underline" } as const;
const BTN  = {
  border: "1px solid #222",
  borderRadius: 10,
  padding: "6px 10px",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
} as const;

const PAYWALL_DOMAINS = ["afr.com","ft.com","bloomberg.com","wsj.com","theaustralian.com.au","nytimes.com"];

function hostOf(url: string) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
}
function isPaywalledHost(host: string) {
  return PAYWALL_DOMAINS.some((d) => host.endsWith(d));
}

// Normalise & enrich one record
function normalize(raw: CuratedItem): CuratedItem {
  const _host = raw._host || hostOf(raw.link || "");
  const ts = raw.pubDate ? new Date(raw.pubDate).getTime() : NaN;
  const _time = isNaN(ts) ? undefined : ts;
  const paywalled = typeof raw.paywalled === "boolean" ? raw.paywalled : isPaywalledHost(_host);
  return { ...raw, _host, _time, paywalled };
}

// Map hazard/topic → best-fit product CTA
function nextStepFor(it: CuratedItem): { href: string; label: string } {
  const h = (it.hazard || "").toLowerCase();
  if (h.includes("procedural")) {
    return { href: "/products/procedural-justice-framework", label: "Next step — Procedural Justice Framework →" };
  }
  if (h.includes("toxic")) {
    return { href: "/products/culture-risk-diagnostic", label: "Next step — Culture Risk Diagnostic →" };
  }
  if (h.includes("bullying") || h.includes("aggression") || h.includes("harassment")) {
    // Covers bullying/harassment/sexual-harassment buckets
    return { href: "/products/shsarc-rcabh", label: "Next step — SHSARC & RCABH →" };
  }
  if (h.includes("assault")) {
    return { href: "/products/shsarc-rcabh", label: "Next step — SHSARC & RCABH →" };
  }
  // Fallback
  return { href: "/products", label: "Explore products →" };
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export default function MediaRoom() {
  const [items, setItems] = useState<CuratedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const paths = ["/media/curated.json", "/content/curated.json", "/curated.json"];
        let got: Response | null = null;
        for (const p of paths) {
          const res = await fetch(`${p}?ts=${Date.now()}`, { cache: "no-store" });
          if (res.ok) { got = res; break; }
        }
        if (!got) throw new Error("curated.json not found at /media, /content, or root");

        const raw = await got.json();
        const arr: CuratedItem[] = Array.isArray(raw) ? raw : raw?.items || [];

        // Normalize and mark ALL as featured (badge only; order is by date)
        const normalized = arr.map(normalize).map((it) => ({ ...it, force: true }));
        setItems(normalized);
      } catch (e: any) {
        setErr(e?.message || "Could not load curated list.");
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Neutral ordering: newest → oldest; no pin floating
  const ordered = useMemo(() => {
    const list = [...items];
    list.sort(
      (a, b) =>
        (b._time ?? 0) - (a._time ?? 0) ||
        (a.title || "").localeCompare(b.title || "")
    );
    return list;
  }, [items]);

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      {/* Header */}
      <section style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Media Room</h1>
        <p style={{ marginTop: 8, opacity: 0.85 }}>
          Curated headlines on bullying, sexual harassment/assault, toxic culture, and procedural justice — from multiple outlets.
          Every item is featured for relevance; order is strictly by date. Each story includes a direct next step.
        </p>
      </section>

      {/* Status */}
      {loading && <p style={{ opacity: 0.8, marginTop: 12 }}>Loading stories…</p>}
      {err && !loading && <p style={{ opacity: 0.8, marginTop: 12 }}>No results yet. {err}</p>}
      {!loading && !ordered.length && <p style={{ opacity: 0.8, marginTop: 12 }}>No results.</p>}

      {/* List */}
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12, marginTop: 12 }}>
        {ordered.map((it, i) => {
          const host = it._host || hostOf(it.link);
          const d = it._time ? new Date(it._time) : undefined;
          const dateStr = d
            ? d.toLocaleString("en-AU", { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" })
            : "—";
          const cta = nextStepFor(it);

          return (
            <li key={`${it.link}-${i}`} style={{ border: "1px solid #222", borderRadius: 12, padding: 12 }}>
              {/* Title row + universal Featured badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                {(it.force || it.pinned || it.featured || it.sticky) && (
                  <span
                    aria-label="Featured item"
                    title="Featured item"
                    style={{
                      display: "inline-block",
                      background: "#f1c40f",
                      color: "#000",
                      borderRadius: 9999,
                      padding: "2px 8px",
                      fontWeight: 800,
                      fontSize: 11,
                    }}
                  >
                    Featured
                  </span>
                )}
                <a href={it.link} target="_blank" rel="noopener noreferrer nofollow" style={LINK} title={it.title}>
                  <h3 style={{ margin: 0, fontSize: 16, lineHeight: 1.35 }}>{it.title}</h3>
                </a>
              </div>

              {/* Meta */}
              <div style={{ fontSize: 12, opacity: 0.75 }}>
                {dateStr} · {it.source || host}
                {it.hazard ? <> · <span style={{ color: "#f1c40f" }}>Hazard: {it.hazard}</span></> : null}
                {it.paywalled ? <> · <span style={{ opacity: 0.8 }}>may require subscription</span></> : null}
              </div>

              {/* Note */}
              {it.note ? <p style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{it.note}</p> : null}

              {/* Product CTA */}
              <div style={{ marginTop: 8 }}>
                <a href={cta.href} style={{ ...LINK, fontWeight: 800 }} aria-label={cta.label}>
                  {cta.label}
                </a>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => navigator.clipboard.writeText(it.link)} style={BTN} title="Copy link to clipboard">
                  Copy link
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) navigator.share({ title: it.title, url: it.link });
                    else window.open(it.link, "_blank", "noopener,noreferrer");
                  }}
                  style={BTN}
                  title="Share"
                >
                  Share
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Utility */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={() => location.reload()} style={BTN} title="Refetch latest">
          Refetch
        </button>
      </div>
    </main>
  );
}
