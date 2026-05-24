# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun run dev` — dev server at http://localhost:4321
- `bun run build` — production build (outputs to `.vercel/output/`)
- `bun run preview` — serve the build locally
- `bunx astro check` — TypeScript / Astro type-check (there is no test suite)

Package manager is **bun** (`bun.lock`). If `bun` is not on `PATH` it lives at `~/.bun/bin/bun`; as a last resort run `node_modules/.bin/astro <cmd>`.

## Architecture

Astro 4 site, `output: 'hybrid'`, using the **Vercel serverless adapter** (`astro.config.mjs`). Note the README still describes Netlify, but the configured adapter is Vercel. Styling is **Tailwind v4** wired through `@tailwindcss/vite` — there is no `tailwind.config.js`; all theme config is CSS-first.

### Content is static, not from a CMS
All page content — products and per-product detail, services, stats, testimonials, company info, and image URLs — lives in **`src/lib/data.ts`**, the single source of truth. To change copy, products, pricing, or imagery, edit this file. A Sanity client and GROQ queries exist in `src/lib/sanity.ts` but **are not consumed by any page**; don't assume content flows from Sanity.

### Rendering model (hybrid)
- `src/pages/index.astro` is the entire marketing site: one page composing section components (`Hero`, `SectorsBand`, `Stats`, `Manifesto`, `Services`, `Products`, `WhyUs`, `Contact`, `Footer`) in order, navigated by in-page anchors (`#accueil`, `#services`, `#produits`, `#contact`, …).
- `src/pages/produit/[slug].astro` — product detail pages, **prerendered** via `getStaticPaths()` over `PRODUCTS`. `Contact.astro` is reused at the bottom.
- `src/pages/api/{contact,devis}.ts` — the only SSR routes (`export const prerender = false`), deployed as serverless functions.

### Forms
Zod schemas in **`src/lib/validate.ts`** are shared between client-side validation and the API routes. Each API route parses `FormData`, validates with its schema (returns 422 on failure), then forwards to **Formspree** only when `FORMSPREE_ID` is set — without that var the endpoint still returns success but sends nothing. The devis form is `multipart/form-data` to carry an optional file upload.

### Design system (`src/styles/global.css`)
A Tailwind v4 **`@theme` block** defines the palette and typography as CSS custom properties (`--color-ink`, `--color-gold`, `--color-whatsapp`, the font families, `--tracking-mono`). Every `--color-X` token automatically generates `text-X` / `bg-X` / `border-X` utilities — **to introduce a brand color, add a token here** rather than hardcoding hex in markup. The aesthetic is "editorial": sharp corners enforced globally (`border-radius: 0 !important`), maximum contrast, monospace labels, gold as the single accent.

Scroll-reveal: elements tagged with `reveal` (plus stagger variants like `reveal-d2`) are animated in by an IntersectionObserver living in `src/layouts/Layout.astro`. That layout also owns all SEO (meta, Open Graph, Twitter Card, JSON-LD `LocalBusiness`) and the floating WhatsApp button.

### Environment variables
Server/build-time only (no `PUBLIC_` prefix): `SANITY_PROJECT_ID`, `SANITY_DATASET` (read via `process.env` in `sanity.ts`) and `FORMSPREE_ID` (read via `import.meta.env` in the API routes). See `.env.example`.
