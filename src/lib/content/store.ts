/**
 * Store catalog, organized by category.
 *
 * Drives the `/store` index and the prerendered `/store/[slug]` category pages.
 */
export type StoreProduct = {
	name: string;
	blurb: string;
	price: string;
};

export type StoreCategory = {
	slug: string;
	name: string;
	tagline: string;
	summary: string;
	products: StoreProduct[];
};

export const storeCategories: StoreCategory[] = [
	{
		slug: 'courses',
		name: 'Courses',
		tagline: 'Structured trader education',
		summary:
			'Self-paced programs that build a complete trading foundation — from market mechanics to strategy, psychology, and risk.',
		products: [
			{
				name: 'Foundations of Trading',
				blurb: 'Market structure, order types, and the core mechanics every trader needs.',
				price: '$199'
			},
			{
				name: 'Options Mastery',
				blurb: 'Pricing, greeks, and repeatable options strategies with defined risk.',
				price: '$299'
			},
			{
				name: 'Trading Psychology',
				blurb: 'Build the discipline, routines, and mindset behind consistent execution.',
				price: '$149'
			}
		]
	},
	{
		slug: 'indicators',
		name: 'Indicators',
		tagline: 'Signal, not noise',
		summary:
			'Purpose-built indicators that surface high-probability conditions without cluttering your charts.',
		products: [
			{
				name: 'Momentum Pulse',
				blurb: 'Trend and momentum confirmation tuned for intraday and swing timeframes.',
				price: '$89'
			},
			{
				name: 'Volatility Bands',
				blurb: 'Adaptive volatility envelopes for entries, exits, and risk placement.',
				price: '$79'
			}
		]
	},
	{
		slug: 'scanners',
		name: 'Scanners',
		tagline: 'Find setups faster',
		summary:
			'Scanners that filter the market down to the names that match your strategy in real time.',
		products: [
			{
				name: 'Breakout Scanner',
				blurb: 'Surface consolidations resolving into high-volume breakouts.',
				price: '$129'
			},
			{
				name: 'Relative Strength Scanner',
				blurb: 'Rank leaders and laggards versus the broader market in real time.',
				price: '$119'
			}
		]
	}
];

export function getStoreCategory(slug: string): StoreCategory | undefined {
	return storeCategories.find((category) => category.slug === slug);
}
