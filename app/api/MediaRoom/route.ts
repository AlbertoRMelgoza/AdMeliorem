// Alias so /api/MediaRoom works the same as /api/Newsfeed
export { GET } from "../Newsfeed/route";

// app/api/Newsfeed/route.ts
import Parser from "rss-parser";
const parser = new Parser();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Only pull from these outlets (easy to extend)
const ALLOWED_DOMAINS = [
  "abc.net.au",     // ABC
  "afr.com",        // AFR
  "smh.com.au",     // Sydney Morning Herald
  "theage.com.au",  // The Age
  "reuters.com",    // Reuters (good non-paywalled wire)
  "bloomberg.com",  // Bloomberg (some free posts)
  // "ft.com",       // FT (mostly paywalled) — uncomment to include
  // "nytimes.com",  // NYT (paywalled) — uncomment to include
];

// Your hazards
const HAZARDS = [
  "sexual harassment",
  "sexual assault",
  "workplace bullying",
  "workplace aggression",
  "workplace misconduct",
  "procedural justice",
  "workplace harassment",
  "toxic culture",
];

// Google News RSS helper restricted to allowed outlets
function gNewsURL(query: string) {
  const sites = ALLOWED_DOMAINS.map(d => `site:${d}`).join(" OR ");
  const q = encodeURIComponent(`${query} (${sites})`);
  // AU focus to bias local outlets
  return `https://news.google.com/rss/search?q=${q}&hl=en-AU&gl=AU&ceid=AU:en`;
}

export async function GET() {
  const urls = HAZARDS.map(gNewsURL);
  const items: Array<{title: string; link: string; pubDate: string; source: string}> = [];

  for (const url of urls) {
    try {
      const feed = await parser.parseURL(url);
      for (const it of feed.items || []) {
        const link = (it.link || "").toString();
        if (!ALLOWED_DOMAINS.some(d => link.includes(d))) continue; // keep only allowed outlets
        items.push({
          title: (it.title || "").toString(),
          link,
          pubDate: (it.pubDate || (it as any).isoDate || "").toString(),
          source: ((it as any).source?.title || (it as any).source || feed.title || "").toString(),
        });
      }
    } catch {
      // ignore this feed if it fails and continue
    }
  }

  // de-dupe by link & sort newest first
  const seen = new Set<string>();
  const dedup = items.filter(i => (seen.has(i.link) ? false : (seen.add(i.link), true)));
  dedup.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return Response.json({ items: dedup });
}
