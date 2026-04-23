/**
 * PE7 9-tier breakpoint system — JS/TS mirror of `tokens.css`.
 *
 * Use this for `window.matchMedia(...)`, JS-driven layout switches, and tests.
 * DO NOT hardcode breakpoint numbers anywhere else.
 *
 * Rules:
 *   • Mobile-first. Only use `min-width`.
 *   • Rem only. Never px in media queries.
 *   • Prefer container queries for component-internal responsiveness.
 *   • Use media queries for page-level layout shifts.
 */

export const BP = {
	xs: '20rem',
	sm: '30rem',
	md: '48rem',
	lg: '64rem',
	xl: '80rem',
	xl2: '96rem',
	xl3: '120rem',
	xl4: '160rem',
	xl5: '240rem'
} as const satisfies Record<BreakpointName, `${number}rem`>;

export type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5';

/**
 * Build a canonical `min-width` media-query string for a given tier.
 *
 * @example
 *   if (window.matchMedia(minWidth('lg')).matches) { ... }
 */
export function minWidth(tier: BreakpointName): string {
	return `(min-width: ${BP[tier]})`;
}

/**
 * Tier guidance — informational, referenced in code reviews.
 */
export const BP_GUIDANCE = {
	xs: 'stacked layouts, hamburger, drawer nav',
	sm: 'stacked layouts, hamburger, drawer nav',
	md: 'two-column can start',
	lg: 'desktop patterns emerge',
	xl: 'standard desktop target',
	xl2: 'standard desktop target',
	xl3: 'ultra-wide — expand dashboards, not prose',
	xl4: 'ultra-wide — expand dashboards, not prose',
	xl5: 'ultra-wide — expand dashboards, not prose'
} as const satisfies Record<BreakpointName, string>;
