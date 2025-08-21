import type { CSSProperties } from "react";
import Link from "next/link";
import s from "./Products.module.css";

export const metadata = {
  title: "Products & Services — Ad Meliorem",
  description: "Frameworks, diagnostics, and services to prevent harm and protect value.",
};

export default function ProductsIndex() {
  const wrap: CSSProperties = { maxWidth: 1100, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Products &amp; Services</h1>
      <p style={{ marginTop: 8 }}>
        Select a product or service to see the full outline, deliverables, and outcomes.
      </p>

      <div className={s.grid}>
        <Link href="/products/shsarc-rcabh" className={`${s.link} ${s.item}`}>
          <article className={s.card}>
            <div>
              <h3 className={s.title}>SHSARC™ &amp; RCABH™ — Risk Control Programs</h3>
              <p className={s.blurb}>
                Two flagship risk control programs through talent management that produce regulator-ready Prevention Plans.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/procedural-justice-framework" className={`${s.link} ${s.item}`}>
          <article className={s.card}>
            <div>
              <h3 className={s.title}>Procedural Justice Framework™</h3>
              <p className={s.blurb}>
                Fair, transparent, defensible processes that prevent escalation and contain liability.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/culture-risk-diagnostic" className={`${s.link} ${s.item}`}>
          <article className={s.card}>
            <div>
              <h3 className={s.title}>Culture Risk Diagnostic™</h3>
              <p className={s.blurb}>
                Precise culture risk assessments with qualitative and quantitative methods, culture risk indicators, and due-diligence evidence.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/mediation" className={`${s.link} ${s.item}`}>
          <article className={s.card}>
            <div>
              <h3 className={s.title}>Mediation Services</h3>
              <p className={s.blurb}>
                Neutral, confidential facilitation to resolve disputes and protect working relationships.
              </p>
            </div>
          </article>
        </Link>

        <Link href="/products/negotiation" className={`${s.link} ${s.item}`}>
          <article className={s.card}>
            <div>
              <h3 className={s.title}>Negotiation Services</h3>
              <p className={s.blurb}>
                Structured preparation, leverage mapping, rehearsal, and deal support.
              </p>
            </div>
          </article>
        </Link>
      </div>
    </main>
  );
}
