'use client';
import { useEffect, useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase-client';

export default function DashboardPage({ params }: { params: { code: string } }) {
  const { code } = params;
  const supabase = getSupabaseClient();
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { data: inst } = await supabase.from('survey_instances')
        .select('id').eq('code', code).single();
      if (!inst) return;
      const { data: aggs } = await supabase.from('survey_aggregates')
        .select('*').eq('instance_id', inst.id);
      setRows(aggs || []);
    })();
  }, [code]);

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard {code}</h1>
      <table border={1} cellPadding={6}>
        <thead>
          <tr><th>Item</th><th>n</th><th>Mean</th><th>Distribution</th></tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.item_key}>
              <td>{r.item_key}</td>
              <td>{r.n}</td>
              <td>{r.mean}</td>
              <td>{JSON.stringify(r.distribution)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
