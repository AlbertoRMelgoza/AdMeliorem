'use client';

import React from 'react';
import Link from 'next/link';

const linkStyle: React.CSSProperties = { color: '#f1c40f', textDecoration: 'underline' };

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

// NOTE: no download links here—paid content is “available on request”
const policies = [
  {
    title: 'Psychosocial Risk Management Policy',
    blurb: 'Editable Markdown/Word templates available for clients.',
  },
  {
    title: 'Workplace Culture & Conduct Standard',
    blurb: 'Defines expected behaviours, leadership duties, and measures.',
  },
  {
    title: 'Incident Response & Support Procedure',
    blurb: 'Trigger, immediate actions, investigation, and follow-up.',
  },
];

const codeLinks = [
  { name: 'Queensland Code of Practice (Psychosocial hazards at work)', href: 'https://www.worksafe.qld.gov.au/__data/assets/pdf_file/0025/104857/managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice.pdf' },
  { name: 'NSW Code of Practice (Managing psychosocial hazards)', href: 'https://www.safework.nsw.gov.au/__data/assets/pdf_file/0004/983353/Code-of-Practice_Managing-psychosocial-hazards.pdf' },
  { name: 'WA Code of Practice (Psychosocial hazards in the workplace)', href: 'https://www.worksafe.wa.gov.au/sites/default/files/atoms/files/221154_cp_psychosocialhazards.pdf' },
  { name: 'Safe Work Australia – Model Code (July 2022)', href: 'https://www.safeworkaustralia.gov.au/sites/default/files/2022-08/model_code_of_practice_-_managing_psychosocial_hazards_at_work_25082022_0.pdf' },
];

export default function ResourcesPage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      {/* Header — price removed */}
      <section style={{ border: '1px solid #222', borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span aria-hidden>📚</span>
          <h1 style={{ margin: 0, fontSize: 24 }}>Resource Library</h1>
        </div>
        <p style={{ opacity: 0.85, marginTop: 8 }}>
          FAQs on ISO standards & psychosocial risk, overview of paid policy templates, and official Codes of Practice.
        </p>
      </section>

      {/* FAQs */}
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
          <Link href="https://www.iso.org/standard/64283.html" target="_blank" style={linkStyle}>ISO 45003</Link>,{' '}
          <Link href="https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/06/56/65694.html" target="_blank" style={l_
