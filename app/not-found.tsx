// app/not-found.tsx
export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: 820,
        margin: "40px auto",
        padding: "0 16px",
        textAlign: "center",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: 16, color: "#f1c40f" }}>
        Page Not Found
      </h1>
      <p style={{ opacity: 0.85, marginBottom: 24 }}>
        Sorry, the page you’re looking for doesn’t exist or is no longer available.
      </p>
      <a
        href="/"
        style={{
          background: "#f1c40f",
          color: "#000",
          padding: "10px 18px",
          borderRadius: 6,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        ← Back to Home
      </a>
    </main>
  );
}
