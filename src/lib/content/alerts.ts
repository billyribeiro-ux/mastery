/**
 * Premium alert services.
 *
 * Drives the `/alerts` index and the prerendered `/alerts/[slug]` detail pages.
 */
export type AlertService = {
	slug: string;
	name: string;
	tagline: string;
	summary: string;
	cadence: string;
	features: string[];
};

export const alertServices: AlertService[] = [
	{
		slug: 'spx-profit-pulse',
		name: 'SPX Profit Pulse',
		tagline: 'Index options, high signal',
		summary:
			'Focused SPX options alerts with clearly defined entries, exits, and risk — engineered for traders who want a disciplined, repeatable index strategy.',
		cadence: 'Multiple alerts per session',
		features: [
			'Defined entries, stops, and profit targets',
			'Concise rationale on every alert',
			'Real-time updates and trade management',
			'Performance transparency'
		]
	},
	{
		slug: 'explosive-swings',
		name: 'Explosive Swings',
		tagline: 'Momentum swing alerts',
		summary:
			'Higher-conviction swing trade ideas targeting momentum and catalyst-driven moves, delivered with the context needed to act decisively.',
		cadence: 'Several setups per week',
		features: [
			'Catalyst- and momentum-driven setups',
			'Clear risk/reward on every idea',
			'Entry, scale, and exit guidance',
			'Watchlist and market context'
		]
	}
];

export function getAlertService(slug: string): AlertService | undefined {
	return alertServices.find((service) => service.slug === slug);
}
