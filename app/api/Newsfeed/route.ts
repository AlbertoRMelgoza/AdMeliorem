import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Item = { title: string; link: string; pubDate: string; source: string };

const QUERY_TERMS = [
  `"sexual harassment at work"`,
  `"bullying at work"`,
  `"aggression at work"`,
  `"harassment at work"`,
  `"toxic culture at work"`,
  `"culture at work"`,
  `"corporate culture"`,
  `"procedural justice"`,
  `"psychosocial risk management"`,
  `mediation`,
  `negotiation`,
];

const OUTLETS: { name: string; domain: string }[] = [
  { name: "AFR", domain: "afr.com" },
  { name: "FT", domain: "ft.com" },
  { name: "WSJ", domain: "wsj.com" },
  { name: "The Australian", domain: "theaustralian.com.au" },
  { name: "The Times", domain: "thetimes.co.uk" },
  { name: "Courier-Mail", domain: "couriermail.com.au" },
  { name: "The West Australian", domain: "thewest.com.au" },
  { name: "The Age", domain: "theage.com.au" },
  { name: "Sydney Morning Herald", domain: "smh.com.au" },
  { name: "NYT", domain: "nytimes.com" },
  { name: "Sky News (UK)", domain: "news.sky.com" },
  { name: "Sky News Australia", domain: "skynews.com.au" },
  { name: "ABC Australia", domain: "abc.net.au" },
  { name: "The Guardian", domain: "theguardian.com" },
  { name: "BBC News", domain: "bbc.com" },
  { name: "Bloomberg", domain: "bloomberg.com" },
  { name: "Reuters", domain: "reuters.com" },
];

function outletUrl(name: string, domain: string) {
  const q = `site:${domain} (${QUERY_TERMS.join(" OR ")})`;
  return {
    name,
    url: `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-AU&gl=AU&ceid=AU:en`,
  };
}

const GLOBAL_URL = (() => {
  const q = `(${QUERY_TERMS.join(" OR ")})`;
  return `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-AU&gl=AU&ceid=AU:en`;
})();

function between(s: string, start: string, end: string) {
  const a = s.indexOf(start); if (a === -1) return null;
  const b = s.indexOf(end, a + start.length); if (b === -1) return null;
  return s.slice(a + start.length, b);
}
function stripCdata(s: string) {
  return s.replace("<![CDATA[", "").replace("]]>", "");
}
function parseRss(xml: string): { title: string; link: string; pubDate: string }[] {
  const chunks = xml.split("<item>").slice(1);
  const items = chunks.map((chunk) => {
    const titleRaw = between(chunk, "<title>", "</title>") ?? "";
    const linkRaw = between(chunk, "<link>", "</link>") ?? "";
    const dateRaw = between(chunk, "<pubDate>", "</pubDate>") ?? "";
    const title = stripCdata(titleRaw).trim();
    const link = stripCdata(linkRaw).trim();
    const pubDate = new Date((stripCdata(dateRaw).trim()) || Date.now()).toISOString();
    return { title, link, pubDate };
  });
  return items.filter((i) => i.title && i.link);
}

export async function GET() {
  try {
    const feeds = OUTLETS.map((o) => outletUrl(o.name, o.domain));
    const requests = [
      ...feeds.map(async (f) => {
        const res = await fetch(f.url, { cache: "no-store" });
        const xml = await res.text();
        return parseRss(xml).map<Item>((i) => ({ ...i, source: f.name }));
      }),
      (async () => {
        const res = await fetch(GLOBAL_URL, { cache: "no-store" });
        const xml = await res.text();
        return parseRss(xml).map<Item>((i) => ({ ...i, source: "Google News" }));
      })(),
    ];

    const settled = await Promise.allSettled(requests);
    const all: Item[] = settled.flatMap((r) => (r.status === "fulfilled" ? r.value : []));

    const seen = new Set<string>();
    const deduped: Item[] = [];
    for (const it of all) {
      const key = (it.link || it.title).replace(/(\?|#).+$/, "");
      if (!seen.has(key)) { seen.add(key); deduped.push(it); }
    }

    deduped.sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));
    return NextResponse.json(
      { count: deduped.length, items: deduped.slice(0, 100) },
      { headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" } }
    );
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
