/**
 * Canonical site metadata.
 *
 * Single source of truth for branding, SEO defaults, and social cards.
 * Consumed by the `Seo` component and anywhere else that needs site-level
 * constants. Keep environment-specific values (e.g. the production origin)
 * here so they are easy to audit and update.
 */
export const site = {
	name: 'Revolution Trading Pros',
	shortName: 'RTP',
	url: 'https://revolutiontradingpros.com',
	description:
		'Live trading rooms, premium alert services, mentorship, and trader tools engineered for disciplined execution.',
	themeColor: '#0b1120',
	locale: 'en_US',
	ogImage: '/brand/revolution-trading-pros-logo.png'
} as const;

/**
 * Per-route SEO overrides. Surfaced via `+page(.server).ts` `load`
 * functions as `{ seo }` and merged with {@link site} defaults by the
 * `Seo` component.
 */
export type Seo = {
	/** Page title, composed as `${title} • ${site.name}`. Omit for the bare brand name. */
	title?: string;
	description?: string;
	/** Absolute canonical URL. Defaults to the current request URL. */
	canonical?: string;
	/** Path or absolute URL to the social share image. */
	ogImage?: string;
	/** When true, emits `noindex, nofollow`. */
	noindex?: boolean;
};
