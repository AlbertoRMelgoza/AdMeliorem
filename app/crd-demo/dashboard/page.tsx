'use client';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../../lib/supabase-client'; // NOTE: 3 dots up

const DEMO_CODE = 'copsoq-demo';

export default function DashboardDemo() {
  const supabase = getSupabaseClient();
  const [rows, setRows] = useState<Array<{ item_key: string; n: number; mean: number; distribution: Record<string, number> }>>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    (async () => {
      const { data: inst, error } = await supabase
        .from('survey_instances')
        .select('id, title')
        .eq('code', DEMO_CODE)
        .single();
      if (error || !inst) { setStatus('Survey not found or not public.'); return; }
      const { data: aggs, error: e2 } = await supabase
        .from('survey_aggregates')
        .select('item_key, n, mean, distribution')
        .eq('instance_id', inst.id)
        .order('item_key', { ascending: true });
      if (e2) { setStatus('No aggregates yet. Submit a response first.'); return; }
      setRows((aggs || []) as any);
    })();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>COPSOQ Demo Dashboard</h1>
      {status && <p>{status}</p>}
      {rows.length > 0 && (
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th style={{border:'1px solid #eee', padding:8}}>Item</th>
              <th style={{border:'1px solid #eee', padding:8}}>Responses (n)</th>
              <th style={{border:'1px solid #eee', padding:8}}>Mean</th>
              <th style={{border:'1px solid #eee', padding:8}}>Distribution (1→5)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item_key}>
                <td style={{border:'1px solid #eee', padding:8}}>{r.item_key}</td>
                <td style={{border:'1px solid #eee', padding:8}}>{r.n}</td>
                <td style={{border:'1px solid #eee', padding:8}}>{Number(r.mean).toFixed(2)}</td>
                <td style={{border:'1px solid #eee', padding:8}}>
                  {['1','2','3','4','5'].map((k) => `${k}:${(r.distribution as any)[k] ?? 0}`).join('  ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p style={{marginTop:12}}>
        Need data? Submit the <a href="/crd-demo/survey">demo survey</a> first.
      </p>
    </main>
  );
}
