'use client';
import { useState } from 'react';

type Props = {
  name: string;
  price: number;      // e.g. 19.95 (AUD)
  quantity?: number;  // default 1
  children?: React.ReactNode;
};

export default function BuyNow({ name, price, quantity = 1, children }: Props) {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const start = async () => {
    setLoading(true); setErr(null);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ name, price, quantity }] })
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setErr(data.error || 'No checkout URL returned');
    } catch (e: any) {
      setErr(e.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={start} disabled={loading} style={{ padding: '10px 16px', borderRadius: 8 }}>
        {loading ? 'Please wait…' : (children || 'Buy Now')}
      </button>
      {err && <p style={{ color: 'red', marginTop: 8 }}>{err}</p>}
    </div>
  );
}
