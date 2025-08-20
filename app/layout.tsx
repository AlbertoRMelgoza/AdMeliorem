import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alberto R Melgoza — Web Design & Development",
  description: "Strategy-first websites that load fast and convert.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Alberto R Melgoza — Web Design & Development",
    description: "Strategy-first websites that load fast and convert.",
    type: "website"
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
