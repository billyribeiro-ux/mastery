/**
 * Free trader resources and tools.
 *
 * Drives the `/resources` index. Interactive implementations land in a later
 * phase; `status` lets the index communicate availability today.
 */
export type ResourceStatus = 'available' | 'coming-soon';

export type ResourceTool = {
	slug: string;
	name: string;
	summary: string;
	status: ResourceStatus;
};

export const resourceTools: ResourceTool[] = [
	{
		slug: 'options-calculator',
		name: 'Options Calculator',
		summary:
			'Model option pricing, breakevens, and risk/reward before you place a single trade.',
		status: 'coming-soon'
	},
	{
		slug: 'etf-stocks-list',
		name: 'ETF Stocks List',
		summary: 'A curated, searchable reference of major ETFs and their underlying exposure.',
		status: 'coming-soon'
	},
	{
		slug: 'stock-indexes-list',
		name: 'Stock Indexes List',
		summary: 'Track the major U.S. and global indexes traders watch most closely.',
		status: 'coming-soon'
	}
];

export function getResourceTool(slug: string): ResourceTool | undefined {
	return resourceTools.find((tool) => tool.slug === slug);
}
