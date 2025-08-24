'use client';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../../lib/supabase-client'; // NOTE: 3 dots up

const DEMO_CODE = 'copsoq-demo';

export default function SurveyDemo() {
  const supabase = getSupabaseClient();
  const [instanceId, setInstanceId] = useState<string>('');
  const [items, setItems] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    (async () => {
      const { data: inst, error } = await supabase
        .from('survey_instances')
        .select('id')
        .eq('code', DEMO_CODE)
        .single();
      if (error || !inst) { setStatus('Survey not found.'); return; }
      setInstanceId(inst.id);
      const { data: qs, error: e2 } = await supabase
        .from('survey_items')
        .select('item_key, prompt, scale_min, scale_max')
        .eq('instance_id', inst.id)
        .order('item_key', { ascending: true });
      if (e2) { setStatus('Unable to load questions.'); return; }
      setItems(qs || []);
    })();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!instanceId) return;
    setStatus('Submitting...');
    const payload = Object.fromEntries(Object.entries(answers).map(([k, v]) => [k, String(v)]));
    const { error } = await supabase.from('survey_responses').insert({ instance_id: instanceId, answers: payload });
    setStatus(error ? 'Submit failed: ' + error.message : 'Thank you! Your response was recorded.');
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>COPSOQ Demo Survey</h1>
      {status && <p>{status}</p>}
      <form onSubmit={submit} style={{maxWidth:640, border:'1px solid #eee', borderRadius:12, padding:16}}>
        {items.map((q) => (
          <fieldset key={q.item_key} style={{marginBottom:12, border:'none'}}>
            <legend style={{fontWeight:600}}>{q.prompt}</legend>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Array.from({ length: (q.scale_max ?? 5) - (q.scale_min ?? 1) + 1 }, (_, i) => (q.scale_min ?? 1) + i).map((val) => (
                <label key={val}>
                  <input type="radio" name={q.item_key}
                    onChange={() => setAnswers({ ...answers, [q.item_key]: val })}
                    required /> {val}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p style={{marginTop:12}}>
        After submitting, open <a href="/crd-demo/dashboard">the demo dashboard</a>.
      </p>
    </main>
  );
}
