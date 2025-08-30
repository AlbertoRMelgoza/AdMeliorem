"use client";

import { useEffect, useState } from "react";

type CuratedItem = {
  title: string;
  link: string;
  pubDate: string;       // ISO date
  source?: string;
  hazard?: string;       // e.g. "Toxic culture", "Bullying"
  note?: string;         // optional commentary
  paywalled?: boolean;   // optional; we also auto-detect by domain
};

const YELLOW = { color: "#f1c40f", textDecoration: "underline" } as const;
const PAYWALL_DOMAINS = [
  "afr.com", "ft.com", "bloomberg.com", "wsj.com",
  "theaustralian.com.au", "nytimes.com"
];

function hostOf(url: string) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
}

export default function MediaRoom() {
  const [items, setItems] = useState<CuratedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/media/curated.json?ts=" + Date.now(), { cache: "no-store" });
        const data = await res.json();
        const list: CuratedItem[] = Array.isArray(data) ? data : [];
        list.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
        setItems(list);
      } catch (e: any) {
        setErr(e?.message || "Could not load curated list.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const latest = items[0] ? new Date(items[0].pubDate) : null;

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>MediaRoom</h1>

      <div style={{ margin: "8px 0 12px", fontSize: 12, opacity: 0.7 }}>
        {latest ? `Updated ${latest.toLocaleString("en-AU")}` : loading ? "Loading…" : "Updated just now"}
       </div>

      {err && <p style={{ opacity: 0.8 }}>No results yet. {err}</p>}
      {!loading && !items.length && <p style={{ opacity: 0.8 }}>No results.</p>}

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {items.map((it, i) => {
          const host = hostOf(it.link);
          const isPaywalled = it.paywalled ?? PAYWALL_DOMAINS.some(d => host.endsWith(d));
          return (
            <li key={`${it.link}-${i}`} style={{ border: "1px solid #222", borderRadius: 12, padding: 12 }}>
              <a href={it.link} target="_blank" rel="noopener noreferrer" style={YELLOW}>{it.title}</a>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                {new Date(it.pubDate).toLocaleString("en-AU")} · {it.source || host}
                {it.hazard ? <> · <span style={{ color: "#f1c40f" }}>Hazard: {it.hazard}</span></> : null}
                {isPaywalled ? <> · <span style={{ opacity: 0.8 }}>may require subscription</span></> : null}
              </div>
              {it.note ? <p style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{it.note}</p> : null}

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button
                  onClick={() => navigator.clipboard.writeText(it.link)}
                  style={{ border: "1px solid #222", borderRadius: 10, padding: "6px 10px", background: "transparent", color: "inherit", cursor: "pointer" }}
                >
                  Copy link
                </button>
                <button
                  onClick={() => { if (navigator.share) { navigator.share({ title: it.title, url: it.link }); } else { window.open(it.link, "_blank"); } }}
                  style={{ border: "1px solid #222", borderRadius: 10, padding: "6px 10px", background: "transparent", color: "inherit", cursor: "pointer" }}
                >
                  Share
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
