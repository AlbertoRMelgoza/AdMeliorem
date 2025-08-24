'use client';
import { useEffect, useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase-client';

export default function SurveyPage({ params }: { params: { code: string } }) {
  const { code } = params;
  const supabase = getSupabaseClient();
  const [items, setItems] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    (async () => {
      const { data: inst } = await supabase.from('survey_instances')
        .select('id').eq('code', code).single();
      if (!inst) { setStatus('Survey not found.'); return; }
      const { data: qs } = await supabase.from('survey_items')
        .select('*').eq('instance_id', inst.id);
      setItems(qs || []);
    })();
  }, [code]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const { data: inst } = await supabase.from('survey_instances')
      .select('id').eq('code', code).single();
    if (!inst) return;
    await supabase.from('survey_responses')
      .insert({ instance_id: inst.id, answers });
    setStatus('Thank you! Your response was recorded.');
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Survey {code}</h1>
      <form onSubmit={submit}>
        {items.map((q) => (
          <div key={q.item_key}>
            <p>{q.prompt}</p>
            {[1,2,3,4,5].map(v => (
              <label key={v}>
                <input type="radio" name={q.item_key}
                  onChange={() => setAnswers({ ...answers, [q.item_key]: v })} />
                {v}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p>{status}</p>
    </main>
  );
}
