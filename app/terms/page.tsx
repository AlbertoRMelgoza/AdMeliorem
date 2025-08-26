import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";
export const revalidate = 0; // always show latest file content if you change it

export const metadata = {
  title: "Terms & Conditions — Ad Meliorem",
  description: "Contract terms for purchases and engagements with Ad Meliorem.",
};

export default async function TermsPage() {
  const filePath = path.join(process.cwd(), "data", "terms.html");
  const html = await fs.readFile(filePath, "utf8");

  return (
    <main style={{ maxWidth: 900, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 }}>
      <h1 style={{ marginTop: 0 }}>Terms &amp; Conditions</h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          background: "#111",
          border: "1px solid #222",
          borderRadius: 12,
          padding: 16,
        }}
      />
    </main>
  );
}
