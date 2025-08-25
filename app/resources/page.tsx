'use client';

import React from 'react';
import Link from 'next/link';

const PRICE_AUD = process.env.NEXT_PUBLIC_RESOURCES_PRICE ?? 'TBD';

const faq = [
  {
    q: 'What is ISO 45003 and how does it relate to psychosocial risk?',
    a: 'ISO 45003:2021 gives guidance for managing psychosocial risks within an OH&S system based on ISO 45001.',
  },
  {
    q: 'How does ISO 31000 fit in?',
    a: 'ISO 31000:2018 provides a reusable risk framework: establish context, identify, analyse, evaluate, treat, monitor and communicate.',
  },
  {
    q: 'Do I need ISO certification to comply with psychosocial rules?',
    a: 'No. Codes of Practice and WHS regulations are the legal baseline; ISO standards are voluntary guidance that strengthen your system.',
  },
  {
    q: 'Where do culture risks fit?',
    a: 'Culture risk overlaps with psychosocial risk (e.g., bullying, harassment). Track drivers, controls, and early-warning indicators.',
  },
];

// join('\n') avoids template-string pitfalls during deploy
const policies = [
  {
    title: 'Psychosocial Risk Management Policy',
    filename: 'psychosocial-risk-policy.md',
    body: [
      '# Psychosocial Risk Management Policy',
      '',
      '**Purpose** - Eliminate or minimise psychosocial risks as far as reasonably practicable.',
      '**Scope** - All workers, contractors and visitors.',
      '**Principles** - Consultation, prevention-first, trauma-informed response, confidentiality.',
      '**Roles & Responsibilities** - Officers, managers, workers, HSRs.',
      '**Risk Management** - Identify, assess, control, verify effectiveness.',
      '**Reporting & Support** - No detriment; timely supports and adjustments.',
      '**Review** - Annual or after any notifiable incident.',
    ].join('\n'),
  },
  {
    title: 'Workplace Culture & Conduct Standard',
    filename: 'culture-conduct-standard.md',
    body: [
      '# Workplace Culture & Conduct Standard',
      '',
      '**Expected behaviours** - Respect, inclusion, zero tolerance for bullying/harassment.',
      '**Leadership duties** - Model behaviours, act on early signals, ensure psychological safety.',
      '**Consultation** - Regular, genuine; workers can raise concerns without fear.',
      '**Measurement** - Workload, role clarity, EAP usage, leave, claims.',
    ].join('\n'),
  },
  {
    title: 'Incident Response & Support Procedure',
    filename: 'incident-response-procedure.md',
    body: [
      '# Incident Response & Support Procedure',
      '',
      '**When to activate** - Any psychosocial hazard exposure or complaint.',
      '**Immediate actions** - Ensure safety, listen, document, offer supports.',
      '**Investigation** - Impartial, timely, confidential.',
      '**Follow-up** - Monitor harm, test controls, close the loop with workers.',
    ].join('\n'),
  },
];

const codeLinks = [
  { name: 'Queensland Code of Practice (Psychosocial hazards at work)', href: 'https://www.worksafe.qld.gov.au/__data/assets/pdf_file/0025/104857/managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice.pdf' },
  { name: 'NSW Code of Practice (Managing psychosocial hazards)', href: 'https://www.safework.nsw.gov.au/__data/assets/pdf_file/0004/983353/Code-of-Practice_Managing-psychosocial-hazards.pdf' },
  { name: 'WA Code of Practice (Psychosocial hazards in the workplace)', href: 'https://www.worksafe.wa.gov.au/sites/default/files/atoms/files/221154_cp_psychosocialhazards.pdf' },
  { name: 'Safe Work Australia – Model Code (July 2022)', href: 'https://www.safeworkaustralia.gov.au/sites/default/files/2022-08/model_code_of_practice_-_managing_psychosocial_hazards_at_work_25082022_0.pdf' },
];

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function ResourcesPage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      <section style={{ border: '1px solid #222', borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span aria-hidden>📚</span>
          <h1 style={{ margin: 0, fontSize: 24 }}>Resource Library</h1>
        </div>
        <p style={{ opacity: 0.85, marginTop: 8 }}>
          Access FAQs, ready-to-use policy templates, and official Codes of Practice.{' '}
          <strong>Price:</strong> {String(PRICE_AUD)} (AUD)
        </p>
      </section>

      <section style={{ border: '1px solid #222', borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span aria-hidden>❓</span>
          <h2 style={{ margin: 0, fontSize: 20 }}>FAQs (ISOs & psychosocial risk)</h2>
        </div>
        <ul style={{ display: 'grid', gap: 8, padding: 0, listStyle: 'none' }}>
          {faq.map((f, i) => (
            <li key={i} style={{ border: '1px solid #222', borderRadius: 10, padding: 12 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>{f.q}</p>
              <p style={{ margin: '6px 0 0', opacity: 0.85 }}>{f.a}</p>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 8, fontSize: 14 }}>
          Key standards:{' '}
          <Link className="underline" href="https://www.iso.org/standard/64283.html" target="_blank">ISO 45003</Link>,{' '}
          <Link className="underline" href="https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/06/56/65694.html" target="_blank">ISO 31000</Link>,{' '}
          <Link className="underline" href="https://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=63787" target="_blank">ISO 45001</Link>.
        </p>
      </section>

      <section style={{ border: '1px solid #222', borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span aria-hidden>🛡️</span>
          <h2 style={{ margin: 0, fontSize: 20 }}>Sample policies & standards</h2>
        </div>
        <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {policies.map((p) => (
            <article key={p.filename} style={{ border: '1px solid #222', borderRadius: 10, padding: 12 }}>
              <h3 style={{ margin: 0, fontWeight: 600 }}>{p.title}</h3>
              <p style={{ marginTop: 6, fontSize: 14, opacity: 0.85 }}>Editable Markdown template</p>
              <button
                onClick={() => downloadText(p.filename, p.body)}
                style={{ marginTop: 10, border: '1px solid #222', borderRadius: 10, padding: '6px 10px', fontSize: 14, background: 'transparent', color: 'inherit' }}
              >
                ⬇️ Download .md
              </button>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.75 }}>
          Disclaimer: Templates are general guidance only and not legal advice. Adapt to your jurisdiction.
        </p>
      </section>

      <section style={{ border: '1px solid #222', borderRadius: 12, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span aria-hidden>🔗</span>
          <h2 style={{ margin: 0, fontSize: 20 }}>Codes of Practice & official guidance</h2>
        </div>
        <ul style={{ display: 'grid', gap: 8, padding: 0, listStyle: 'none' }}>
          {codeLinks.map((c) => (
            <li key={c.href} style={{ border: '1px solid #222', borderRadius: 10, padding: 12 }}>
              <Link className="underline" href={c.href} target="_blank" rel="noopener noreferrer">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
