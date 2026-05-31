/**
 * Live trading room catalog.
 *
 * Drives the `/rooms` index and the prerendered `/rooms/[slug]` detail pages.
 */
export type Room = {
	slug: string;
	name: string;
	tagline: string;
	summary: string;
	audience: string;
	cadence: string;
	highlights: string[];
};

export const rooms: Room[] = [
	{
		slug: 'day-trading',
		name: 'Day Trading Room',
		tagline: 'Live market-hours execution',
		summary:
			'Trade alongside experienced moderators with real-time commentary, level-by-level game plans, and disciplined risk management through the open, midday, and close.',
		audience: 'Active intraday traders',
		cadence: 'Live every market session',
		highlights: [
			'Pre-market game plan and key levels',
			'Live trade calls with entries, stops, and targets',
			'Real-time risk management coaching',
			'End-of-day recap and review'
		]
	},
	{
		slug: 'swing-trading',
		name: 'Swing Trading Room',
		tagline: 'Multi-day position ideas',
		summary:
			'A calmer cadence for traders holding positions across days and weeks — curated setups, thesis breakdowns, and structured trade management.',
		audience: 'Part-time and swing traders',
		cadence: 'Daily setups + ongoing management',
		highlights: [
			'Curated multi-day swing setups',
			'Clear thesis, invalidation, and targets',
			'Position sizing for working professionals',
			'Weekly market structure outlook'
		]
	},
	{
		slug: 'small-accounts',
		name: 'Small Accounts Room',
		tagline: 'Grow with discipline',
		summary:
			'Built for traders scaling smaller accounts — emphasis on capital preservation, consistency, and the habits that compound over time.',
		audience: 'New and small-account traders',
		cadence: 'Live sessions + structured curriculum',
		highlights: [
			'Capital-preservation-first framework',
			'Realistic position sizing for small accounts',
			'Habit and process accountability',
			'Step-by-step growth milestones'
		]
	}
];

export function getRoom(slug: string): Room | undefined {
	return rooms.find((room) => room.slug === slug);
}
