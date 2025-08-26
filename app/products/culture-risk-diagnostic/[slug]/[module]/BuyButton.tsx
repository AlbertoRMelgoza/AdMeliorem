'use client';
import { useState } from 'react';

type Props = {
  priceId?: string;
  name?: string;
  price?: number;
  quantity?: number;
  children?: React.ReactNode;
};

export default function BuyButton({ priceId, name, price = 0, quantity = 1, children }: Props) {
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const startCheckout = async () => {
    if (!agree) return;
    setLoading(true);
    setErr(null);
    try {
      const item = priceId ? { priceId, quantity } : { name: String(name), price: Number(price), quantity };
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [item] }),
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
      <button onClick={() => setOpen(true)} style={{ padding: '10px 16px', borderRadius: 8 }}>
        {children || 'Buy Now'}
      </button>
      {err && <p style={{ color: 'red', marginTop: 8 }}>{err}</p>}

      {open && (
        <div role="dialog" aria-modal="true" style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'grid', placeItems: 'center', zIndex: 60
        }}>
          <div style={{
            width: 'min(920px, 92vw)', maxHeight: '86vh', background: '#111', color: '#fff',
            border: '1px solid #333', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #222' }}>
              <h3 style={{ margin: 0 }}>Terms &amp; Conditions</h3>
            </div>

            <div style={{ padding: 18, overflowY: 'auto', maxHeight: '60vh', lineHeight: 1.55 }}>
              <p>
                Please read and agree to the Terms before continuing. Full text at{' '}
                <a href="/terms" style={{ color: '#f1c40f' }}>/terms</a>.
              </p>
            </div>

            <div style={{ padding: 16, borderTop: '1px solid #222', display: 'flex', alignItems: 'center', gap: 12 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span>I have read and agree to the Terms.</span>
              </label>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button onClick={() => setOpen(false)} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #444', background: 'transparent', color: '#fff' }}>
                  Cancel
                </button>
                <button onClick={startCheckout} disabled={!agree || loading} style={{ padding: '8px 14px', borderRadius: 8 }}>
                  {loading ? 'Please wait…' : 'Agree & Continue'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
