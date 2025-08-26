import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata = {
  title: "Payment successful — Ad Meliorem",
};

export default function SuccessPage({
  searchParams,
}: {
  searchParams?: { session_id?: string };
}) {
  const wrap: CSSProperties = { maxWidth: 900, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Thank you — payment received ✅</h1>
      <p>
        We’ve received your order. You’ll get an email receipt from Stripe, and we’ll follow up shortly with next steps.
      </p>

      {searchParams?.session_id && (
        <p style={{ opacity: 0.8, fontSize: 14 }}>
          Reference: <code>{searchParams.session_id}</code>
        </p>
      )}

      <p style={{ marginTop: 16 }}>
        <Link href="/products" style={{ color: "#f1c40f", textDecoration: "none", fontWeight: 700 }}>
          ← Back to Products
        </Link>
      </p>
    </main>
  );
}
