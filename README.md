# Best Puff Tobacco — Website

Modern marketing site for **Best Puff Tobacco & Exotic Snacks** in Kalamazoo, MI.
Migrated from the original Google Sites page. Built with Next.js + Tailwind CSS,
designed for free deployment on Vercel.

## Tech

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS 3](https://tailwindcss.com/)
- TypeScript
- Zero runtime dependencies beyond React/Next

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel (free)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Accept the defaults — Vercel auto-detects Next.js.
4. Click **Deploy**. The free Hobby plan covers this site.

A custom domain can be added later in the Vercel project's **Domains** tab.

## Editing content

All site content lives in `components/` and is plain JSX/TSX:

- `components/Hero.tsx` — headline, intro, highlights card
- `components/About.tsx` — story / value props
- `components/Products.tsx` — product categories grid
- `components/Brands.tsx` — brand list
- `components/Hours.tsx` — store hours table
- `components/Visit.tsx` — address, phone, embedded map
- `components/Footer.tsx` — footer columns
- `components/AgeGate.tsx` — 21+ age verification overlay

Tailwind theme tokens (colors, fonts) are in `tailwind.config.ts`.

## Business info

- **Address:** 635 N 9th St, Suite E, Kalamazoo, MI 49009 (next to Walmart)
- **Phone:** (269) 254-8351
- **Hours:** Mon–Thu & Sun 9a–10p · Fri–Sat 9a–11p
- **21+ only**
