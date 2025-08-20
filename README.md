# Alberto Site (Next.js + Tailwind)

A fast, SEO-friendly one-page site scaffold using Next.js 14 and Tailwind.

## Quick start
1. Install dependencies
   ```bash
   npm install
   npm run dev
   ```
2. Edit copy in `app/page.tsx` and SEO in `app/layout.tsx`.
3. Deploy to Vercel (recommended).

## Deploy on Vercel
- Create a Vercel account, click **New Project**, import this repo, and deploy.

## Point your GoDaddy domain to Vercel
1. In GoDaddy, go to **My Products → DNS → Manage DNS** for your domain.
2. Add/update records:
   - **A** @ → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
3. In Vercel → **Domains**, add your domain (e.g., example.com). Vercel will verify DNS.
4. Set **www** to redirect or primary as you prefer.

(Records above are the standard Vercel DNS targets. If Vercel shows different values during setup, prefer those.)

## Customizing
- Colors / fonts: use Tailwind classes in `app/page.tsx` and extend theme in `tailwind.config.js`.
- Sections: duplicate/remove section blocks as needed.
- Add pages: create folders in `app/` (e.g., `app/work/page.tsx`).

## Optional CMS later
- Sanity or Contentful can power Services, Work, and Blog without code changes to content.
