export const dynamic = "force-dynamic";

export default function CancelPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>Payment cancelled</h1>
      <p style={{ marginTop: 8 }}>
        No charge was made. You can adjust your selections and try again.
      </p>
      <a href="/checkout" style={{ color: "#f1c40f", textDecoration: "underline" }}>
        Return to checkout
      </a>
    </main>
  );
}
