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

function buildOutletUrl(domain: string) {
  const q = `site:${domain} (${QUERY_TERMS.join(" OR ")})`;
  return `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-AU&gl=AU&ceid=AU:en`;
}
const GLOBAL_URL = (() => {
  const q = `(${QUERY_TERMS.join(" OR ")})`;
  return `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-AU&gl=AU&ceid=AU:en`;
})();

function unCdata(s: string) {
  return s.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "");
}
function pick(xml: string, tag: string) {
  const m = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return m ? unCdata(m[1]).trim() : "";
}
function parseRss(xml: string): { title: string; link: string; pubDate: string }[] {
  const items: { title: string; link: string; pubDate: string }[] = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml))) {
    const chunk = m[1];
    const title = pick(chunk, "title");
    const link = pick(chunk, "link");
    const pubDateRaw = pick(chunk, "pubDate");
    const pubDate = new Date(pubDateRaw || Date.now()).toISOString();
    if (title && link) items.push({ title, link, pubDate });
  }
  return items;
}

async function fetchRss(url: string): Promise<string> {
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
      Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
    },
  });
  if (!res.ok) throw new Error(`RSS fetch ${res.status} ${res.statusText}`);
  return await res.text();
}

export async function GET() {
  try {
    const reqs: Promise<Item[]>[] = [
      ...OUTLETS.map(async ({ name, domain }) => {
        try {
          const xml = await fetchRss(buildOutletUrl(domain));
          return parseRss(xml).map((i) => ({ ...i, source: name }));
        } catch {
          return []; // ignore a single outlet failure
        }
      }),
      (async () => {
        try {
          const xml = await fetchRss(GLOBAL_URL);
          return parseRss(xml).map((i) => ({ ...i, source: "Google News" }));
        } catch {
          return [];
        }
      })(),
    ];

    const settled = await Promise.all(reqs);
    const all = settled.flat();

    const seen = new Set<string>();
    const deduped: Item[] = [];
    for (const it of all) {
      const key = (it.link || it.title).replace(/(\?|#).+$/, "");
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(it);
      }
    }

    deduped.sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate));
    const limited = deduped.slice(0, 100);

    if (!limited.length) {
      // surface a helpful error instead of silent empty
      return NextResponse.json({ error: "No results parsed from RSS." }, { status: 200 });
    }
    return NextResponse.json(
      { count: limited.length, items: limited },
      { headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" } }
    );
  } catch (e: any) {
    return NextResponse.json({ error: e.message || String(e) }, { status: 500 });
  }
}
