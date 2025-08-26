export const dynamic = "force-dynamic";

export default function SuccessPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px" }}>
      <h1 style={{ margin: 0, fontSize: 24 }}>Payment successful</h1>
      <p style={{ marginTop: 8 }}>
        Thank you—your payment was processed successfully.
      </p>
      <p style={{ opacity: 0.85 }}>
        You’ll receive a receipt at the email address you provided. We’ll be in
        touch shortly with next steps.
      </p>
      <a href="/" style={{ color: "#f1c40f", textDecoration: "underline" }}>
        Back to home
      </a>
    </main>
  );
}
