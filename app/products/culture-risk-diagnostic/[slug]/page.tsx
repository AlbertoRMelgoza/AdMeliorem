import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SUBPRODUCTS } from "../subproducts"; // plural

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SUBPRODUCTS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);
  return {
    title: sp ? `${sp.title} — Ad Meliorem` : "Subproduct — Ad Meliorem",
    description: sp?.short ?? "Culture Risk Diagnostic subproduct",
  };
}

export default function SubproductPage({ params }: Props) {
  const sp = SUBPRODUCTS.find((s) => s.slug === params.slug);

  if (!sp) {
    return (
      <main style={{ maxWidth: 900, margin: "28px auto", padding: "0 16px" }}>
        <h1>Not found</h1>
        <p>This subproduct does not exist.</p>
        <p>
          <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 600 }}>
            ← Back to Culture Risk Diagnostic
          </Link>
        </p>
      </main>
    );
  }

  const wrap: CSSProperties = { maxWidth: 900, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  // Safe path even if filename has spaces
  const heroSrc = encodeURI(sp.image ?? sp.thumb ?? "/Images/placeholder.jpg");

  return (
    <main style={wrap}>
      <p style={{ margin: "0 0 8px 0" }}>
        <Link href="/products/culture-risk-diagnostic" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 600 }}>
          ← Culture Risk Diagnostic™
        </Link>
      </p>

      <h1 style={{ marginTop: 0 }}>{sp.title}</h1>
      <p style={{ opacity: 0.9 }}>{sp.short}</p>

      {/* Fixed-size hero frame */}
      <div style={{ position: "relative", width: "100%", borderRadius: 12, overflow: "hidden", margin: "18px 0" }}>
        {/* 16:9 via padding-top for broad TS/React compatibility */}
        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
          <Image src={heroSrc} alt={sp.title} fill sizes="(ma
