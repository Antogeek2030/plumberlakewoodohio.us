# Plumber Lakewood Ohio — Astro Website

Production-ready, SEO-optimized static site for a local plumbing business in Lakewood, Ohio.

**Domain:** plumberlakewoodohio.us  
**Stack:** Astro (static output), Cloudflare Pages compatible  
**Form:** Web3Forms  

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy the `dist` folder to Cloudflare Pages (or connect the repo and set build command `npm run build`, output directory `dist`).

### Cloudflare Pages settings

- Framework preset: Astro (or None)
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 18 or 20 recommended

## Configuration before going live

1. **Phone number** — Update `src/data/site.ts` (`phone` and `phoneHref`).
2. **Web3Forms** — Create a free access key at https://web3forms.com and set `web3formsAccessKey` in `src/data/site.ts`.
3. **Email** — Confirm `email` in the same file.
4. Optional: add real OG image at `public/og-default.png` (recommended 1200×630).

## Project structure

```
src/
  components/     Header, Footer, StickyCall
  content/blog/   Markdown posts
  data/site.ts    Business info, 20 services, service areas
  layouts/        BaseLayout with SEO tags
  pages/          All routes (home, services, areas, blog, legal, 404)
  styles/         global.css
public/
  robots.txt
  llms.txt
  favicon.*
```

## SEO features

- Unique title + meta description on every page
- Canonical URLs, Open Graph, Twitter cards
- `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt` allowing major search and AI crawlers
- `llms.txt` for language-model guidance
- Semantic HTML, skip link, focus styles, WCAG-oriented structure
- Sticky click-to-call bar on mobile
- Clean hyphenated URLs, no trailing slashes

## Notes

- No fabricated reviews, stats, licenses, or credentials.
- Price ranges are placeholders for discussion, not quotes.
- Content is original and written for local homeowners.
