import { BREAKPOINTS, mqUp, type BreakpointName } from './tokens';

/**
 * Stable breakpoint API for components and tests.
 *
 * The canonical values live in `tokens.css` and `tokens.ts`.
 * This file remains as a small compatibility layer for call sites.
 */

export const BP = BREAKPOINTS;

/**
 * Build a canonical `min-width` media-query string for a given tier.
 *
 * @example
 *   if (window.matchMedia(minWidth('lg')).matches) { ... }
 */
export function minWidth(tier: BreakpointName): string {
	return mqUp(tier);
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
