"use client";

import { useEffect, useMemo, useState } from "react";

export const dynamic = "force-dynamic";

type Item = { title: string; link: string; pubDate: string; source: string };
type CountsMap = Record<string, { like: number; share: number }>;

const TOPICS = [
  "sexual harassment at work",
  "bullying at work",
  "aggression at work",
  "harassment at work",
  "toxic culture at work",
  "culture at work",
  "corporate culture",
  "procedural justice",
  "psychosocial risk management",
  "mediation",
  "negotiation",
] as const;
type Topic = (typeof TOPICS)[number] | "all";

const YELLOW = { color: "#f1c40f", textDecoration: "underline" } as const;
const REFRESH_MS = 120_000;

function inferTopic(title: string): Topic {
  const t = title.toLowerCase();
  for (const key of TOPICS) if (t.includes(key.toLowerCase())) return key;
  return "all";
}

function useLocalLikes() {
  const KEY = "newsfeed_likes_v1";
  const [likes, setLikes] = useState<Record<string, true>>({});
  useEffect(() => { try { const raw = localStorage.getItem(KEY); if (raw) setLikes(JSON.parse(raw)); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(likes)); } catch {} }, [likes]);
  const toggle = (link: string) => setLikes((p) => { const n = { ...p }; n[link] ? delete n[link] : (n[link] = true); return n; });
  const liked = (link: string) => Boolean(likes[link]);
  return { liked, toggle };
}

async function fetchJSON(url: string, init?: RequestInit) {
  const res = await fetch(url, { cache: "no-store", ...init });
  const ctype = res.headers.get("content-type") || "";
  if (!ctype.includes("application/json")) throw new Error(await res.text());
  return res.json();
}

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [counts, setCounts] = useState<CountsMap>({});
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const [topic, setTopic] = useState<Topic>("all");
  const [source, setSource] = useState<string>("all");
  const { liked, toggle } = useLocalLikes();

  // load headlines (poll) — still using /api/Newsfeed for now
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const data = await fetchJSON("/api/Newsfeed?ts=" + Date.now());
        if (!cancelled) {
          const items = Array.isArray(data?.items) ? data.items : [];
          setItems(items);
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

  // load counts whenever items change
  useEffect(() => {
    (async () => {
      if (!items.length) { setCounts({}); return; }
      try {
        const data = await fetchJSON("/api/Newsfeed/metrics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "get", links: items.map(i => ({ link: i.link, title: i.title })) }),
        });
        setCounts(data?.counts || {});
      } catch {
        setCounts({});
      }
    })();
  }, [items]);

  const sources = useMemo(() => ["all", ...Array.from(new Set(items.map((i) => i.source))).sort()], [items]);
  const enriched = useMemo(() => items.map((it) => ({ ...it, _topic: inferTopic(it.title) })), [items]);
  const filtered = enriched.filter((i: any) => (topic === "all" || i._topic === topic) && (source === "all" || i.source === source));

  const handleToggleLike = async (it: Item) => {
    toggle(it.link); // optimistic UI
    try {
      await fetchJSON("/api/Newsfeed/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "toggleLike", link: it.link, title: it.title }),
      });
      const data = await fetchJSON("/api/Newsfeed/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "get", links: [{ link: it.link, title: it.title }] }),
      });
      setCounts((c) => ({ ...c, ...data.counts }));
    } catch {}
  };

  const handleShare = async (it: Item) => {
    try {
      await fetchJSON("/api/Newsfeed/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "share", link: it.link, title: it.title }),
      });
      setCounts((c) => {
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

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0 4px" }}>
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

      {/* Filters */}
      <div style={{ display: "flex", gap: 12, margin: "12px 0 16px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ opacity: 0.75, fontSize: 12 }}>Topic:</span>
          <button onClick={() => setTopic("all")} style={btn(topic === "all")}>All</button>
          {TOPICS.map((t) => (
            <button key={t} onClick={() => setTopic(t)} style={btn(topic === t)}>{shortLabel(t)}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ opacity: 0.75, fontSize: 12 }}>Source:</span>
          {sources.map((s) => (
            <button key={s} onClick={() => setSource(s)} style={btn(source === s)}>{s}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ opacity: 0.8 }}>Loading…</p>
      ) : apiError ? (
        <p style={{ opacity: 0.8 }}>No results yet. {apiError}</p>
      ) : !filtered.length ? (
        <p style={{ opacity: 0.8 }}>No results. Try a different filter.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
          {filtered.map((it: any, i: number) => {
            const c = counts[it.link] || { like: 0, share: 0 };
            return (
              <li key={`${it.link}-${i}`} style={{ border: "1px solid #222", borderRadius: 12, padding: 12 }}>
                <a href={it.link} target="_blank" rel="noopener noreferrer" style={YELLOW}>{it.title}</a>
                <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                  {new Date(it.pubDate).toLocaleString()} · {it.source}
                  {it._topic !== "all" ? <> · {shortLabel(it._topic as Topic)}</> : null}
                </div>

                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 10, flexWrap: "wrap" }}>
                  <button onClick={() => handleToggleLike(it)} style={btn(false)} aria-pressed={liked(it.link)}>
                    {liked(it.link) ? "Liked" : "Like"} · {c.like}
                  </button>
                  <button onClick={() => handleShare(it)} style={btn(false)}>
                    Share · {c.share}
                  </button>
                  <CommentsBlock item={it} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

function btn(active: boolean): React.CSSProperties {
  return { border: "1px solid #222", borderRadius: 10, padding: "6px 10px", background: active ? "#111" : "transparent", color: "inherit", cursor: "pointer" };
}
function shortLabel(t: Topic) {
  switch (t) {
    case "sexual harassment at work": return "Sexual harassment";
    case "bullying at work": return "Bullying";
    case "aggression at work": return "Aggression";
    case "harassment at work": return "Harassment";
    case "toxic culture at work": return "Toxic culture";
    case "culture at work": return "Culture";
    case "corporate culture": return "Corporate culture";
    case "procedural justice": return "Procedural justice";
    case "psychosocial risk management": return "Psychosocial risk";
    case "mediation": return "Mediation";
    case "negotiation": return "Negotiation";
    default: return "All";
  }
}

function CommentsBlock({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Array<{ id: number; name: string; body: string; created_at: string }>>([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchJSON("/api/Newsfeed/comments?link=" + encodeURIComponent(item.link));
      setList(Array.isArray(data?.comments) ? data.comments : []);
      setMsg(null);
    } catch {
      setMsg("Failed to load comments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { if (open) load(); }, [open]);

  const submit = async () => {
    if (!body.trim()) return;
    setLoading(true);
    try {
      await fetchJSON("/api/Newsfeed/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link: item.link, title: item.title, name, body }),
      });
      setBody("");
      setMsg("Submitted for review.");
      await load(); // reload approved (new one is pending)
    } catch {
      setMsg("Failed to submit comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!open ? (
        <button onClick={() => setOpen(true)} style={btn(false)}>
          Comments {list.length ? `(${list.length})` : ""}
        </button>
      ) : (
        <div style={{ border: "1px solid #222", borderRadius: 10, padding: 10, marginTop: 6, maxWidth: 800 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <strong>Comments</strong>
            <button onClick={() => setOpen(false)} style={btn(false)}>Close</button>
          </div>

          {loading ? <p style={{ opacity: 0.8 }}>Loading…</p> : list.length ? (
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
              {list.map((c) => (
                <li key={c.id} style={{ border: "1px solid #222", borderRadius: 8, padding: 8 }}>
                  <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 4 }}>
                    {c.name} · {new Date(c.created_at).toLocaleString()}
                  </div>
                  <div>{c.body}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ opacity: 0.8 }}>No comments yet.</p>
          )}

          <div style={{ marginTop: 10, display: "grid", gap: 6 }}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name (optional)" style={{ border: "1px solid #222", borderRadius: 8, padding: "6px 10px", background: "transparent", color: "inherit" }} />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Add a comment…" rows={3} style={{ border: "1px solid #222", borderRadius: 8, padding: "6px 10px", background: "transparent", color: "inherit" }} />
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button onClick={submit} style={btn(false)}>Submit</button>
              {msg ? <span style={{ fontSize: 12, opacity: 0.75 }}>{msg}</span> : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
