"use client";
import { useState } from "react";

const nav = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
              <span className="font-semibold tracking-tight">Alberto R Melgoza</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              {nav.map(n => (
                <button key={n.id} onClick={() => scrollToId(n.id)} className="hover:text-white transition-colors">
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollToId('contact')} className="rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium shadow-sm hover:shadow">
                Let’s talk
              </button>
            </nav>
            <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-white/5" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="space-y-1 px-4 py-3">
              {nav.map(n => (
                <button key={n.id} onClick={() => (scrollToId(n.id), setMobileOpen(false))} className="block w-full text-left rounded-lg px-3 py-2 text-neutral-300 hover:bg-white/5 hover:text-white">
                  {n.label}
                </button>
              ))}
              <button onClick={() => (scrollToId('contact'), setMobileOpen(false))} className="mt-2 w-full rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium shadow-sm">
                Let’s talk
              </button>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Crafting clear, effective websites for ambitious businesses
              </h1>
              <p className="mt-4 text-neutral-300 max-w-xl">
                I help founders and teams turn messy ideas into fast, elegant web experiences that convert. Strategy-first. Results-focused.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button onClick={() => scrollToId('work')} className="rounded-xl px-5 py-3 bg-white text-neutral-900 font-medium shadow-sm">
                  See recent work
                </button>
                <button onClick={() => scrollToId('contact')} className="rounded-xl px-5 py-3 border border-white/20 hover:bg-white/5">
                  Get a quote
                </button>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
                {["10+ yrs", "50+ sites", "AU based"].map(stat => (
                  <div key={stat} className="rounded-2xl border border-white/10 bg-white/5 py-3 text-sm">{stat}</div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-2">
              <div className="aspect-[4/3] w-full rounded-2xl bg-neutral-900 grid place-items-center text-neutral-400">
                <span className="text-sm">Project collage / hero image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Services</h2>
            <button onClick={() => scrollToId('contact')} className="text-sm text-neutral-300 hover:text-white">Need something custom?</button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Strategy & UX", desc: "Site architecture, messaging, wireframes, and content planning to align with your goals." },
              { title: "Web Development", desc: "Next.js / React builds, high-performance static sites, accessibility and SEO baked in." },
              { title: "Identity & Art Direction", desc: "Lightweight brand systems, color/type, and visual language that feels like you." },
              { title: "Optimisation", desc: "Analytics, A/B tests, and speed improvements to lift conversion and engagement." },
              { title: "Ongoing Care", desc: "Hosting, updates, backups, and small improvements on a monthly plan." },
              { title: "Content & CMS", desc: "Headless CMS setup (Sanity/Contentful) or simple Markdown workflow." },
            ].map(card => (
              <div key={card.title} className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <h3 className="font-medium">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold">Selected Work</h2>
            <p className="mt-2 text-neutral-300 text-sm">Swap these with your real case studies.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map(i => (
              <article key={i} className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5">
                <div className="aspect-[4/3] w-full bg-neutral-900" />
                <div className="p-4">
                  <h3 className="font-medium">Project {i}</h3>
                  <p className="mt-1 text-sm text-neutral-300">1–2 sentence win-focused summary goes here.</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                    <span>Role: Design & Dev</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity underline">View →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold">About Alberto</h2>
              <p className="mt-3 text-neutral-300">
                Short bio about your expertise, approach, and what makes working with you easy. Mention industries you serve and outcomes you’ve delivered.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-300 list-disc pl-5">
                <li>Based in Brisbane (AEST). Available for global clients.</li>
                <li>Specialising in fast, SEO-friendly sites that are simple to maintain.</li>
                <li>Transparent pricing and clear communication.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h3 className="font-medium">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>→ 40% avg. speed improvement</li>
                <li>→ +20–60% lead uplift post-launch</li>
                <li>→ 100 Lighthouse performance target</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Let’s build something great</h2>
            <p className="mt-2 text-neutral-300 text-sm">Tell me a bit about your project and I’ll get back to you.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! I’ll reply shortly.'); }} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl bg-neutral-900 border border-white/10 p-3" placeholder="Your name" required />
              <input className="rounded-xl bg-neutral-900 border border-white/10 p-3" placeholder="Email" type="email" required />
            </div>
            <input className="rounded-xl bg-neutral-900 border border-white/10 p-3" placeholder="Company (optional)" />
            <textarea className="rounded-xl bg-neutral-900 border border-white/10 p-3 min-h-[120px]" placeholder="What are you trying to achieve? Timeline/budget?" />
            <div className="flex items-center gap-3">
              <button className="rounded-xl px-5 py-3 bg-white text-neutral-900 font-medium shadow-sm" type="submit">Send message</button>
              <span className="text-xs text-neutral-400">Avg response: within 1 business day</span>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alberto R Melgoza. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
