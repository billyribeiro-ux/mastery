# Site Header Audit And Specification

## Objective

Upgrade the site header into a polished, enterprise-grade navigation system that:

- respects the existing 9-tier PE7 breakpoint ladder
- uses a shared token system that works cleanly in both CSS and TypeScript
- feels premium and brand-aligned with the provided dark-and-gold identity
- stays readable and touch-friendly on phones
- introduces stronger desktop information architecture without becoming crowded
- documents the implementation decisions so future iterations stay consistent

## Audit Summary

### Strengths Found

- The repo already had a clean breakpoint token system in `src/lib/styles/tokens.css`.
- The header was already using mobile-first CSS and a brand-consistent dark palette.
- Navigation data was centralized, which made refinement straightforward.

### Gaps Addressed

- The desktop navigation only appeared at `xl`, which left `lg` devices in an awkward in-between state.
- The header used only part of the breakpoint ladder, so large desktop tiers were not intentionally tuned.
- Mobile and desktop navigation states did not fully coordinate around outside clicks and `Escape`.
- Dropdown panels and motion polish were serviceable, but not yet at the level of a premium product surface.
- Header styling depended too heavily on component-local values instead of reusable semantic tokens.
- There was no durable specification document explaining why the header behaved the way it did.

## Token System

### Files

- `src/lib/styles/tokens.css`
- `src/lib/styles/tokens.ts`
- `src/lib/styles/breakpoints.ts`

### Structure

- `tokens.css` is the global source for CSS custom properties.
- `tokens.ts` mirrors those values for SvelteKit loaders, `matchMedia`, tests, and future inline-style use cases.
- `breakpoints.ts` remains a lightweight compatibility layer so existing imports stay stable.

### Token Families

- Breakpoints and container sizes
- Layout widths and gutters
- Surface, text, border, and brand colors
- Typography stacks and type steps
- Space scale
- Radius scale
- Shadow scale
- Motion durations and easing

### Svelte 5 / SvelteKit Compatibility Notes

- Components consume tokens with plain CSS variables, so scoped styles stay framework-native.
- TypeScript can import the same values from `tokens.ts` for runtime logic.
- The system avoids a styling runtime and stays easy to tree-shake and test.

## Responsive Specification

### `xs` (`20rem` to under `30rem`)

- Compact sticky header with logo and hamburger only.
- Full navigation stays in the mobile drawer.
- Drawer prioritizes high-contrast touch targets and single-column reading order.

### `sm` (`30rem` to under `48rem`)

- Slightly larger logo and more drawer breathing room.
- Mobile CTA row shifts to a two-column action layout for better conversion density.

### `md` (`48rem` to under `64rem`)

- Brand support copy becomes visible.
- Primary CTA becomes visible in the header row.
- A contextual support band appears below the main row to reinforce positioning and quality.

### `lg` (`64rem` to under `80rem`)

- Header shifts into a two-row desktop pattern.
- Row 1: brand + actions.
- Row 2: full desktop navigation.
- Hamburger is removed because this tier has enough horizontal real estate for a professional nav system.
- Context band is hidden again to keep the sticky header compact.

### `xl` (`80rem` to under `96rem`)

- Header collapses into a single-row desktop layout.
- Navigation tightens spacing slightly so the entire IA feels deliberate rather than stretched.

### `xl2` (`96rem` to under `120rem`)

- Logo, action spacing, and nav padding all increase modestly.
- This is the primary “comfortable desktop” tier.

### `xl3` (`120rem` to under `160rem`)

- Header width expands to the project’s `--layout-max-width-xl`.
- Dropdown panels widen for more premium information density.

### `xl4` (`160rem` to under `240rem`)

- Inline padding increases to prevent the header from feeling underscaled on very wide displays.

### `xl5` (`240rem` and up)

- Additional spacing expansion keeps the chrome intentional on ultra-wide displays without turning prose into long unreadable lines.

## Information Architecture

- Primary nav remains data-driven from a single `navItems` array.
- Grouped destinations use dropdown panels with short descriptive copy to improve scanning speed.
- Single-link destinations remain direct links for simplicity.
- Mobile drawer opens into a short narrative intro plus clear action buttons before the nav list.

## Motion And Interaction Rules

- Major UI transitions use a premium ease: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Mobile drawer opens with a vertical `slide` transition.
- Buttons, pills, and links use subtle lift and highlight rather than exaggerated motion.
- Dropdown panels animate with opacity + translate for a more refined feel.
- `Escape` closes open menus.
- Pointer-down outside the header closes open menus.
- `prefers-reduced-motion: reduce` disables ornamental transitions.

## Visual Direction

- Background: layered midnight navy with subtle gold radial glow.
- Accent: warm metallic gold reserved for calls to action, active emphasis, and quality signals.
- Surface language: soft translucent panels, rounded pill controls, and restrained shadows.
- Tone: professional trading platform, not consumer-generic SaaS.
- Logo source: transparent production logo asset for cleaner compositing on dark glass surfaces.

## Files Updated

- `src/lib/components/site/SiteHeader.svelte`
- `src/lib/styles/tokens.css`
- `src/lib/styles/tokens.ts`
- `src/lib/styles/breakpoints.ts`
- `src/app.css`
- `docs/site-header-spec.md`
