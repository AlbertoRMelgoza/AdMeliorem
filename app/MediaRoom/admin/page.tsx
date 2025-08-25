"use client";

import { useEffect, useState } from "react";

type Comment = {
  id: number;
  title: string;
  link: string;
  name: string | null;
  body: string;
  created_at: string;
};

const KEY = "mr_admin_token";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [pending, setPending] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(KEY) || "";
    if (saved) setToken(saved);
  }, []);

  const saveToken = () => {
    localStorage.setItem(KEY, token.trim());
    setMsg("Token saved.");
  };

  const load = async () => {
    if (!token) return setMsg("Enter your admin token first.");
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch("/api/MediaRoom/admin/comments", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || res.statusText);
      setPending(Array.isArray(data?.pending) ? data.pending : []);
    } catch (e: any) {
      setMsg(e?.message || "Failed to load.");
    } finally {
      setLoading(false);
    }
  };

  const doAction = async (action: "approve" | "reject", ids: number[]) => {
    if (!token) return setMsg("Enter your admin token first.");
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch(`/api/MediaRoom/admin/comments/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ids }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || res.statusText);
      setPending((list) => list.filter((c) => !ids.includes(c.id)));
      setMsg(`${action === "approve" ? "Approved" : "Rejected"} ${ids.length} comment(s).`);
    } catch (e: any) {
      setMsg(e?.message || "Action failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>MediaRoom · Admin</h1>

      <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
        <input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste NEWSFEED_ADMIN_TOKEN"
          style={{ border: "1px solid #222", borderRadius: 8, padding: "8px 10px", background: "transparent", color: "inherit" }}
        />
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={saveToken} style={btn()}>Save token</button>
          <button onClick={load} style={btn()} disabled={loading}>{loading ? "Loading…" : "Load pending"}</button>
        </div>
        {msg ? <div style={{ opacity: 0.8 }}>{msg}</div> : null}
      </div>

      {!pending.length ? (
        <p style={{ opacity: 0.8, marginTop: 16 }}>No pending comments.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12, marginTop: 16 }}>
          {pending.map((c) => (
            <li key={c.id} style={{ border: "1px solid #222", borderRadius: 12, padding: 12 }}>
              <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ color: "#f1c40f", textDecoration: "underline" }}>
                {c.title}
              </a>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                {new Date(c.created_at).toLocaleString()} · {c.name || "Anonymous"}
              </div>
              <p style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{c.body}</p>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => doAction("approve", [c.id])} style={btn()}>Approve</button>
                <button onClick={() => doAction("reject", [c.id])} style={btn()}>Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function btn(): React.CSSProperties {
  return { border: "1px solid #222", borderRadius: 10, padding: "6px 10px", background: "transparent", color: "inherit", cursor: "pointer" };
}
