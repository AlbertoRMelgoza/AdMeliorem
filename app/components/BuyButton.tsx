'use client';
import { useState } from 'react';

type Props = {
  /** Prefer passing a Stripe Price ID so the charge matches Stripe exactly */
  priceId?: string;
  /** Fallback (not used for price if priceId is present) */
  name?: string;
  price?: number;
  quantity?: number;
  children?: React.ReactNode;
};

export default function BuyNow({
  priceId,
  name,
  price = 0,
  quantity = 1,
  children,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);

  const startCheckout = async () => {
    setLoading(true);
    setErr(null);
    try {
      // send ONLY priceId if provided (your API requires it and will ignore name/price)
      const item = priceId
        ? { priceId, quantity }
        : { name: String(name), price: Number(price), quantity };

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
      <button
        onClick={() => setOpen(true)}
        disabled={loading}
        style={{ padding: '10px 16px', borderRadius: 8 }}
      >
        {loading ? 'Please wait…' : children || 'Buy Now'}
      </button>
      {err && <p style={{ color: 'red', marginTop: 8 }}>{err}</p>}

      {/* Terms modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-title"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 60,
          }}
        >
          <div
            style={{
              width: 'min(920px, 92vw)',
              maxHeight: '86vh',
              background: '#111',
              color: '#fff',
              border: '1px solid #333',
              borderRadius: 12,
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ padding: '14px 18px', borderBottom: '1px solid #222' }}>
              <h3 id="terms-title" style={{ margin: 0 }}>Terms &amp; Conditions</h3>
            </div>

            {/* Scrollable content */}
            <div style={{ padding: 18, overflowY: 'auto', maxHeight: '60vh', lineHeight: 1.55 }}>
              <p style={{ opacity: 0.9, marginTop: 0 }}>
                Please review the Terms &amp; Conditions before continuing. By checking the box
                below you confirm you have read and agree to them.
              </p>

              {/* Keep this section concise; link to the full page if you publish it at /terms */}
              <ul style={{ marginTop: 8 }}>
                <li><strong>Acceptance:</strong> Purchasing confirms acceptance of the Terms.</li>
                <li><strong>Nature of Services:</strong> Consulting, diagnostics, workshops, mediation, and negotiation services.</li>
                <li><strong>Liability:</strong> No absolute guarantee of outcomes; liability capped to fees paid (except for fraud or wilful misconduct).</li>
                <li><strong>Payment:</strong> Prices excl. GST unless stated; payment due within 30 days; non-payment may suspend services.</li>
                <li><strong>Data &amp; Security:</strong> Joint ownership of engagement data; anonymised/aggregated use permitted; cyber incident notification and remediation commitments.</li>
                <li><strong>IP:</strong> Materials licensed for your internal, non-commercial use only.</li>
                <li><strong>Term/Refunds:</strong> Subscriptions auto-renew unless cancelled 30+ days prior; refunds limited to non-delivery or breach.</li>
                <li><strong>Privacy:</strong> No personal identifiers are collected for diagnostics; personal info for general business handled per law.</li>
                <li><strong>Law &amp; Disputes:</strong> Queensland law; disputes via negotiation/mediation; courts of Queensland (non-exclusive jurisdiction).</li>
              </ul>

              <p style={{ marginTop: 12 }}>
                You can read the full Terms any time at <a href="/terms" style={{ color: '#f1c40f' }}>/terms</a>.
              </p>
            </div>

            {/* Actions */}
            <div
              style={{
                padding: 16,
                borderTop: '1px solid #222',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span>I have read and agree to the Terms &amp; Conditions.</span>
              </label>

              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setOpen(false)}
                  style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #444', background: 'transparent', color: '#fff' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => (agree ? startCheckout() : null)}
                  disabled={!agree || loading}
                  style={{ padding: '8px 14px', borderRadius: 8 }}
                >
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
