export const BREAKPOINTS = {
	xs: '20rem',
	sm: '30rem',
	md: '48rem',
	lg: '64rem',
	xl: '80rem',
	xl2: '96rem',
	xl3: '120rem',
	xl4: '160rem',
	xl5: '240rem'
} as const;

export const CONTAINER_QUERIES = {
	xs: '20rem',
	sm: '30rem',
	md: '48rem',
	lg: '64rem',
	xl: '80rem'
} as const;

export const TOKEN_VALUES = {
	breakpoint: BREAKPOINTS,
	container: CONTAINER_QUERIES,
	layout: {
		maxWidth: '90rem',
		maxWidthXl: '120rem',
		gutterInline: '1rem',
		gutterInlineMd: '1.5rem',
		gutterInlineLg: '2rem'
	},
	color: {
		surfaceCanvas: '#050810',
		surfaceCanvasAlt: '#0b1120',
		surfaceBackdrop: 'rgba(10, 15, 30, 0.84)',
		surfaceBackdropStrong: 'rgba(9, 14, 28, 0.96)',
		surfacePanel: 'rgba(18, 26, 46, 0.88)',
		surfacePanelStrong: 'rgba(20, 29, 51, 0.98)',
		surfaceSoft: 'rgba(255, 255, 255, 0.04)',
		surfaceSoftStrong: 'rgba(255, 255, 255, 0.08)',
		borderSubtle: 'rgba(240, 222, 139, 0.18)',
		borderStrong: 'rgba(240, 222, 139, 0.34)',
		borderNeutral: 'rgba(255, 255, 255, 0.1)',
		textPrimary: '#f8fafc',
		textSecondary: 'rgba(248, 250, 252, 0.72)',
		textTertiary: 'rgba(248, 250, 252, 0.55)',
		brandGold: '#d7b164',
		brandGoldStrong: '#f0de8b',
		brandInk: '#101722',
		focusRing: '#f0de8b'
	},
	font: {
		sans: "Inter, 'Avenir Next', 'Segoe UI', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
		display:
			"'Avenir Next', Inter, 'Segoe UI', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
	},
	space: {
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		7: '1.75rem',
		8: '2rem',
		10: '2.5rem',
		12: '3rem',
		16: '4rem'
	},
	radius: {
		sm: '0.75rem',
		md: '1rem',
		lg: '1.25rem',
		xl: '1.5rem',
		pill: '999rem'
	},
	shadow: {
		soft: '0 1rem 2rem rgba(1, 6, 16, 0.22)',
		raised: '0 1.15rem 2.3rem rgba(1, 6, 16, 0.28)',
		floating: '0 1.5rem 3rem rgba(1, 6, 16, 0.34)',
		brand: '0 0.9rem 1.8rem rgba(215, 177, 100, 0.26)'
	},
	motion: {
		durationFast: '180ms',
		durationStandard: '220ms',
		durationSlow: '320ms',
		easeStandard: 'ease',
		easeEmphasized: 'cubic-bezier(0.22, 1, 0.36, 1)'
	}
} as const;

export const TOKEN_VAR_NAMES = {
	color: {
		surfaceCanvas: '--color-surface-canvas',
		surfaceCanvasAlt: '--color-surface-canvas-alt',
		surfaceBackdrop: '--color-surface-backdrop',
		surfaceBackdropStrong: '--color-surface-backdrop-strong',
		surfacePanel: '--color-surface-panel',
		surfacePanelStrong: '--color-surface-panel-strong',
		surfaceSoft: '--color-surface-soft',
		surfaceSoftStrong: '--color-surface-soft-strong',
		borderSubtle: '--color-border-subtle',
		borderStrong: '--color-border-strong',
		borderNeutral: '--color-border-neutral',
		textPrimary: '--color-text-primary',
		textSecondary: '--color-text-secondary',
		textTertiary: '--color-text-tertiary',
		brandGold: '--color-brand-gold',
		brandGoldStrong: '--color-brand-gold-strong',
		brandInk: '--color-brand-ink',
		focusRing: '--color-focus-ring'
	},
	layout: {
		maxWidth: '--layout-max-width',
		maxWidthXl: '--layout-max-width-xl',
		gutterInline: '--layout-gutter-inline',
		gutterInlineMd: '--layout-gutter-inline-md',
		gutterInlineLg: '--layout-gutter-inline-lg'
	},
	motion: {
		durationFast: '--duration-fast',
		durationStandard: '--duration-standard',
		durationSlow: '--duration-slow',
		easeStandard: '--ease-standard',
		easeEmphasized: '--ease-emphasized'
	},
	radius: {
		sm: '--radius-sm',
		md: '--radius-md',
		lg: '--radius-lg',
		xl: '--radius-xl',
		pill: '--radius-pill'
	},
	shadow: {
		soft: '--shadow-soft',
		raised: '--shadow-raised',
		floating: '--shadow-floating',
		brand: '--shadow-brand'
	},
	font: {
		sans: '--font-family-sans',
		display: '--font-family-display'
	}
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;
type TokenGroup = keyof typeof TOKEN_VAR_NAMES;

export function cssVar<Group extends TokenGroup, Key extends keyof (typeof TOKEN_VAR_NAMES)[Group]>(
	group: Group,
	key: Key
) {
	return `var(${TOKEN_VAR_NAMES[group][key]})`;
}

export function mqUp(tier: BreakpointName) {
	return `(min-width: ${BREAKPOINTS[tier]})`;
}
