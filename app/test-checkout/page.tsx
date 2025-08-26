'use client';
import { useState } from 'react';

export default function TestCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const start = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ name: 'Test Product', price: 19.95, quantity: 1 }]
        })
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setError(data.error || 'No URL returned');
    } catch (e: any) {
      setError(e.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Test Checkout</h1>
      <button onClick={start} disabled={loading} style={{ padding: '12px 16px' }}>
        {loading ? 'Creating session…' : 'Go to Stripe Checkout'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
}
