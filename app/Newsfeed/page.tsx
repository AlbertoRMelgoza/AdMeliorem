"use client";

import { useEffect, useMemo, useState } from "react";

export const dynamic = "force-dynamic";

type Item = { title: string; link: string; pubDate: string; source: string };

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
const REFRESH_MS = 120_000; // auto-refresh every 2 minutes

function inferTopic(title: string): Topic {
  const t = title.toLowerCase();
  for (const key of TOPICS) {
    if (t.includes(key.toLowerCase())) return key;
  }
  return "all";
}

function useLocalLikes() {
  const KEY = "newsfeed_likes_v1";
  const [likes, setLikes] = useState<Record<string, true>>({});
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLikes(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(likes));
    } catch {}
  }, [likes]);
  const toggle = (link: string) =>
    setLikes((prev) => {
      const next = { ...prev };
      if (next[link]) delete next[link];
      else next[link] = true;
      return next;
    });
  const liked = (link: string) => Boolean(likes[link]);
  return { liked, toggle };
}

async function fetchJSON(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  const ctype = res.headers.get("content-type") || "";
  if (!res.ok || !ctype.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `API ${res.status} ${res.statusText}. Non-JSON: ${text.slice(0, 80)}`
    );
  }
  return res.json();
}

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const [topic, setTopic] = useState<Topic>("all");
  const [source, setSource] = useState<string>("all");
  const { liked, toggle } = useLocalLikes();

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const data = await fetchJSON("/api/Newsfeed?ts=" + Date.now()); // UPPERCASE N
        if (!cancelled) {
          setItems(Array.isArray(data?.items) ? data.items : []);
          setApiError(data?.error || null);
          setUpdatedAt(new Date());
        }
      } catch (e: any) {
        if (!cancelled) {
          setApiError(e?.message || "Failed to load Newsfeed.");
          setItems([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load(); // initial
    const id = setInterval(load, REFRESH_MS); // poll
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const sources = useMemo(
    () => ["all", ...Array.from(new Set(items.map((i) => i.source))).sort()],
    [items]
  );

  const enriched = useMemo(
    () => items.map((it) => ({ ...it, _topic: inferTopic(it.title) })),
    [items]
  );

  const filtered = enriched.filter(
    (i: any) =>
      (topic === "all" || i._topic === topic) &&
      (source === "all" || i.source === source)
  );

  const mailtoFor = (it: Item, userComment: string) => {
    const to = "am@albertormelgoza.com";
    const subject = encodeURIComponent(`Newsfeed comment: ${it.title}`);
    const body = encodeURIComponent(
      `Article: ${it.title}\nLink: ${it.link}\n\nComment:\n${userComment}\n\n(From site newsfeed)`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>Newsfeed</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "8px 0 4px",
        }}
      >
        <span style={{ fontSize: 12, opacity: 0.7 }}>
          {updatedAt
            ? `Updated ${updatedAt.toLocaleTimeString()}`
            : loading
            ? "Loading…"
            : "Updated just now"}
        </span>
        <button
          onClick={async () => {
            setLoading(true);
            try {
              const data = await fetchJSON("/api/Newsfeed?ts=" + Date.now());
              setItems(Array.isArray(data?.items) ? data.items : []);
              setApiError(data?.error || null);
              setUpdatedAt(new Date());
            } catch (e: any) {
              setApiError(e?.message || "Failed to load Newsfeed.");
              setItems([]);
            } finally {
              setLoading(false);
            }
          }}
          style={{
            border: "1px solid #222",
            borderRadius: 10,
            padding: "6px 10px",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Refresh now
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 12, margin: "12px 0 16px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ opacity: 0.75, fontSize: 12 }}>Topic:</span>
          <button onClick={() => setTopic("all")} style={btn(topic === "all")}>
            All
          </button>
          {TOPICS.map((t) => (
            <button key={t} onClick={() => setTopic(t)} style={btn(topic === t)}>
              {shortLabel(t)}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ opacity: 0.75, fontSize: 12 }}>Source:</span>
          {sources.map((s) => (
            <button key={s} onClick={() => setSource(s)} style={btn(source === s)}>
              {s}
            </button>
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
          {filtered.map((it: any, i: number) => (
            <li
              key={`${it.link}-${i}`}
              style={{ border: "1px solid #222", borderRadius: 12, padding: 12 }}
            >
              <a
                href={it.link}
                target="_blank"
                rel="noopener noreferrer"
                style={YELLOW}
              >
                {it.title}
              </a>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                {new Date(it.pubDate).toLocaleString()} · {it.source}
                {it._topic !== "all" ? <> · {shortLabel(it._topic as Topic)}</> : null}
              </div>
              <LikeAndComment
                item={it}
                liked={liked(it.link)}
                toggle={() => toggle(it.link)}
                mailto={(c) => mailtoFor(it, c)}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function btn(active: boolean): React.CSSProperties {
  return {
    border: "1px solid #222",
    borderRadius: 10,
    padding: "6px 10px",
    background: active ? "#111" : "transparent",
    color: "inherit",
    cursor: "pointer",
  };
}
function shortLabel(t: Topic) {
  switch (t) {
    case "sexual harassment at work":
      return "Sexual harassment";
    case "bullying at work":
      return "Bullying";
    case "aggression at work":
      return "Aggression";
    case "harassment at work":
      return "Harassment";
    case "toxic culture at work":
      return "Toxic culture";
    case "culture at work":
      return "Culture";
    case "corporate culture":
      return "Corporate culture";
    case "procedural justice":
      return "Procedural justice";
    case "psychosocial risk management":
      return "Psychosocial risk";
    case "mediation":
      return "Mediation";
    case "negotiation":
      return "Negotiation";
    default:
      return "All";
  }
}

function LikeAndComment({
  item,
  liked,
  toggle,
  mailto,
}: {
  item: Item;
  liked: boolean;
  toggle: () => void;
  mailto: (text: string) => string;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginTop: 10,
        flexWrap: "wrap",
      }}
    >
      <button
        onClick={toggle}
        style={{
          border: "1px solid #222",
          borderRadius: 10,
          padding: "6px 10px",
          background: liked ? "#111" : "transparent",
          color: "inherit",
          cursor: "pointer",
        }}
        aria-pressed={liked}
      >
        {liked ? "Liked" : "Like"}
      </button>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          style={{
            border: "1px solid #222",
            borderRadius: 10,
            padding: "6px 10px",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Comment
        </button>
      ) : (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment…"
            style={{
              border: "1px solid #222",
              borderRadius: 8,
              padding: "6px 10px",
              minWidth: 240,
              background: "transparent",
              color: "inherit",
            }}
          />
          <a
            href={mailto(text)}
            style={{
              border: "1px solid #222",
              borderRadius: 10,
              padding: "6px 10px",
              ...YELLOW,
            }}
            onClick={() => {
              setOpen(false);
              setText("");
            }}
          >
            Send
          </a>
          <button
            onClick={() => {
              setOpen(false);
              setText("");
            }}
            style={{
              border: "1px solid #222",
              borderRadius: 10,
              padding: "6px 10px",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
