# Revolution Trading Pros

Trader performance platform — live trading rooms, premium alert services, mentorship, and
trader-focused tools. Built with **Svelte 5** and **SvelteKit**, deployed to **Vercel**.

## Tech stack

- **Framework:** SvelteKit + Svelte 5 (runes)
- **Language:** TypeScript (strict)
- **Tooling:** Vite, Vitest (unit + browser), Playwright (e2e), ESLint, Prettier
- **Deployment:** `@sveltejs/adapter-vercel`
- **Package manager:** pnpm

## Getting started

```sh
pnpm install
pnpm dev          # start the dev server
pnpm dev --open   # …and open it in a browser
```

## Project structure

```text
src/
  app.css                     Global resets + token import
  app.html                    Document shell (theme-color, color-scheme)
  lib/
    config/site.ts            Canonical site metadata + SEO defaults
    components/site/          SiteHeader, Seo
    styles/                   Design tokens (tokens.css/ts) + breakpoints
  routes/
    +layout.svelte            App shell, global SEO wiring
    +page.svelte / +page.ts   Marketing landing page (prerendered)
    +error.svelte             Branded error page
e2e/                          Playwright end-to-end specs
docs/                         Architecture & component specs
```

### SEO

Page metadata is centralized. Set site-wide defaults in `src/lib/config/site.ts`, and override
per route by returning `{ seo }` from a `load` function:

```ts
// src/routes/some-page/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
	seo: { title: 'Some Page', description: '…' }
});
```

The root layout renders a single `<Seo>` from `page.data.seo`, so there is always exactly one
canonical `<title>` and one set of Open Graph / Twitter tags.

### Design tokens

All colors, spacing, radii, shadows, motion, and the 9-tier breakpoint ladder live in
`src/lib/styles/tokens.css` (consumed via `var(--token)`) and mirrored in `tokens.ts` for
TypeScript/`matchMedia`. Styling is mobile-first; media queries use `min-width` in `rem`.

## Scripts

```sh
pnpm dev          # dev server
pnpm build        # production build
pnpm preview      # preview the production build
pnpm check        # type-check (svelte-check)
pnpm lint         # prettier --check + eslint
pnpm format       # prettier --write
pnpm test:unit    # vitest (unit + browser)
pnpm test:e2e     # playwright e2e
pnpm test         # unit + e2e
```

## Deployment

The app targets Vercel via `@sveltejs/adapter-vercel`. Push to your connected Vercel project,
or run `pnpm build` and deploy the generated output.
