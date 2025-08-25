'use client'


const policies = [
{
title: 'Psychosocial Risk Management Policy',
filename: 'psychosocial-risk-policy.md',
body: `# Psychosocial Risk Management Policy\n\n**Purpose** — Set commitments to eliminate or minimise psychosocial risks as far as reasonably practicable.\n\n**Scope** — All workers, contractors and visitors.\n\n**Principles** — Consultation, prevention-first, trauma‑informed response, confidentiality.\n\n**Roles & Responsibilities** — Officers, managers, workers, HSRs.\n\n**Risk Management** — Identify hazards (work design, environment, behaviours), assess risks, implement controls, verify effectiveness.\n\n**Reporting & Support** — No detriment for reporting; early access to support and adjustments.\n\n**Review** — Annual review or after any notifiable incident.\n`}
,{
title: 'Workplace Culture & Conduct Standard',
filename: 'culture-conduct-standard.md',
body: `# Workplace Culture & Conduct Standard\n\n**Expected behaviours** — Respect, inclusion, zero tolerance for bullying/harassment.\n\n**Leadership duties** — Model behaviours, act on early signals, ensure psychological safety.\n\n**Consultation** — Genuine and regular; workers can raise concerns without fear.\n\n**Measurement** — Track lead/lag indicators: workload, role clarity, EAP usage, time off, claims.\n`}
,{
title: 'Incident Response & Support Procedure',
filename: 'incident-response-procedure.md',
body: `# Incident Response & Support Procedure\n\n**When to activate** — Any psychosocial hazard exposure or complaint.\n\n**Immediate actions** — Ensure safety, listen, document, offer supports (EAP, medical, adjustments).\n\n**Investigation** — Impartial, timely, respect confidentiality.\n\n**Follow-up** — Monitor harm, test control effectiveness, close the loop with workers.\n`}
]


const codeLinks = [
{ name: 'Queensland Code of Practice (commences 1 Apr 2023)', href: 'https://www.worksafe.qld.gov.au/__data/assets/pdf_file/0025/104857/managing-the-risk-of-psychosocial-hazards-at-work-code-of-practice.pdf' },
{ name: 'NSW Code of Practice (Managing psychosocial hazards at work)', href: 'https://www.safework.nsw.gov.au/__data/assets/pdf_file/0004/983353/Code-of-Practice_Managing-psychosocial-hazards.pdf' },
{ name: 'WA Code of Practice (Psychosocial hazards in the workplace)', href: 'https://www.worksafe.wa.gov.au/sites/default/files/atoms/files/221154_cp_psychosocialhazards.pdf' },
{ name: 'Safe Work Australia – Model Code of Practice (July 2022)', href: 'https://www.safeworkaustralia.gov.au/sites/default/files/2022-08/model_code_of_practice_-_managing_psychosocial_hazards_at_work_25082022_0.pdf' },
{ name: 'Commonwealth Code of Practice (2024) – WHS Act jurisdictions', href: 'https://www.legislation.gov.au/F2024L01380/asmade/2024-11-01/text/original/pdf' },
{ name: 'Victoria – Psychological health regulations overview', href: 'https://www.worksafe.vic.gov.au/occupational-health-and-safety-psychological-health-regulations' }
]


function downloadText(filename: string, text: string) {
const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' })
const url = URL.createObjectURL(blob)
const link = document.createElement('a')
link.href = url
link.download = filename
link.click()
URL.revokeObjectURL(url)
}


export default function ResourcesPage() {
return (
<main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
<section className="rounded-2xl border p-6 shadow-sm bg-white">
<div className="flex items-center gap-3">
<FileText className="h-6 w-6"/>
<h1 className="text-2xl font-semibold">Resource Library</h1>
</div>
<p className="mt-2 text-muted-foreground">Access FAQs, ready-to-use policy templates, and official Codes of Practice. <span className="font-medium">Price:</span> {PRICE_AUD} (AUD)</p>
</section>


<section className="rounded-2xl border p-6 shadow-sm bg-white">
<div className="flex items-center gap-3 mb-4">
<HelpCircle className="h-5 w-5"/> <h2 className="text-xl font-semibold">FAQs (ISOs & psychosocial risk)</h2>
</div>
<ul className="space-y-4">
{faq.map((f, i) => (
<li key={i} className="rounded-xl border p-4">
<p className="font-medium">{f.q}</p>
<p className="text-sm text-muted-foreground mt-1">{f.a}</p>
</li>
))}
</ul>
<div className="mt-4 text-sm">
<p>Key standards: <Link className="underline" href="https://www.iso.org/standard/64283.html" target="_blank">ISO 45003</Link>, <Link className="underline" href="https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/06/56/65694.html" target="_blank">ISO 31000</Link>, <Link className="underline" href="https://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=63787" target="_blank">ISO 45001</Link>.</p>
</div>
</section>


<section className="rounded-2xl border p-6 shadow-sm bg-white">
<div className="flex items-center gap-3 mb-4">
<ShieldQuestion className="h-5 w-5"/> <h2 className="text-xl font-semibold">Sample policies & standards</h2>
</div>
<div className="grid sm:grid-cols-2 gap-4">
{policies.map((p) => (
<article key={p.filename} className="rounded-xl border p-4 flex flex-col justify-between">
<div>
<h3 className="font-medium">{p.title}</h3>
<p className="text-sm text-muted-foreground mt-1">Editable Markdown template</p>
</div>
<button onClick={() => downloadText(p.filename, p.body)} className="mt-4 inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm hover:bg-gray-50">
<FileWarning className="h-4 w-4 mr-2"/> Download .md
</button>
</article>
))}
</div>
<p className="text-xs text-muted-foreground mt-3">Disclaimer: These templates are general guidance only and not legal advice. Adapt to your jurisdiction and consult a competent professional.</p>
</section>


<section className="rounded-2xl border p-6 shadow-sm bg-white">
<div className="flex items-center gap-3 mb-4">
<ExternalLink className="h-5 w-5"/> <h2 className="text-xl font-semibold">Codes of Practice & official guidance</h2>
</div>
<ul className="grid sm:grid-cols-2 gap-3">
{codeLinks.map((c) => (
<li key={c.href} className="rounded-xl border p-4 hover:bg-gray-50">
<Link className="underline" href={c.href} target="_blank" rel="noopener noreferrer">{c.name}</Link>
</li>
))}
</ul>
</section>
</main>
)
}
