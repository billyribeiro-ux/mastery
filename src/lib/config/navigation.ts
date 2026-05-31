import type { Pathname } from '$app/types';

/**
 * Single source of truth for site navigation.
 *
 * Consumed by `SiteHeader` (primary nav) and `SiteFooter` (derived columns).
 * Internal `href` values are typed as `Pathname`, so adding a destination
 * that doesn't yet exist as a route is a compile-time error — update the
 * routes and these links together.
 */

export type NavLeaf = {
	label: string;
	href: Pathname;
};

export type NavGroup = {
	label: string;
	href?: Pathname;
	description?: string;
	children?: NavLeaf[];
};

export const primaryNav: NavGroup[] = [
	{
		label: 'Live Trading Rooms',
		description: 'Real-time guidance, execution support, and structured market coverage.',
		children: [
			{ label: 'Day Trading Room', href: '/' },
			{ label: 'Swing Trading Room', href: '/' },
			{ label: 'Small Accounts Room', href: '/' }
		]
	},
	{
		label: 'Alert Services',
		description: 'High-signal trade ideas designed for discipline, speed, and clarity.',
		children: [
			{ label: 'SPX Profit Pulse', href: '/' },
			{ label: 'Explosive Swings', href: '/' }
		]
	},
	{
		label: 'Mentorship',
		href: '/',
		description: 'Coaching, accountability, and trader development programs.'
	},
	{
		label: 'Store',
		description: 'Courses, indicators, scanners, and trader-focused learning assets.',
		children: [
			{ label: 'Courses', href: '/' },
			{ label: 'Indicators', href: '/' },
			{ label: 'Scanners', href: '/' }
		]
	},
	{
		label: 'Our Mission',
		href: '/',
		description: 'The principles and purpose driving the Revolution Trading Pros platform.'
	},
	{
		label: 'About',
		href: '/',
		description: 'Team, story, and the operating philosophy behind the brand.'
	},
	{
		label: 'Blogs',
		href: '/',
		description: 'Market education, trader psychology, and platform updates.'
	},
	{
		label: 'Resources',
		description: 'Practical calculators, lists, and utilities for daily decision-making.',
		children: [
			{ label: 'Options Calculator', href: '/' },
			{ label: 'ETF Stocks List', href: '/' },
			{ label: 'Stock Indexes List', href: '/' }
		]
	}
];

/** Primary account actions, shared between header and footer. */
export const accountNav = {
	login: { label: 'Member Login', href: '/' satisfies Pathname },
	join: { label: 'Start Membership', href: '/' satisfies Pathname }
} as const;

/** Legal / compliance links — surfaced in the footer. */
export const legalLinks: NavLeaf[] = [
	{ label: 'Terms of Service', href: '/' },
	{ label: 'Privacy Policy', href: '/' },
	{ label: 'Risk Disclaimer', href: '/' }
];

export type SocialLink = {
	label: string;
	/** External URL. */
	href: string;
};

export const socialLinks: SocialLink[] = [
	{ label: 'X', href: 'https://x.com' },
	{ label: 'YouTube', href: 'https://youtube.com' },
	{ label: 'Discord', href: 'https://discord.com' },
	{ label: 'Instagram', href: 'https://instagram.com' }
];

/**
 * Footer link columns derived from {@link primaryNav}.
 *
 * Grouped nav items (those with `children`) become their own column.
 * Standalone destinations are collected into a single "Company" column so the
 * footer stays balanced without duplicating the nav data.
 */
export type FooterColumn = {
	title: string;
	links: NavLeaf[];
};

export const footerColumns: FooterColumn[] = [
	...primaryNav
		.filter((item): item is NavGroup & { children: NavLeaf[] } => Boolean(item.children))
		.map((item) => ({ title: item.label, links: item.children })),
	{
		title: 'Company',
		links: primaryNav
			.filter((item): item is NavGroup & { href: Pathname } => Boolean(item.href && !item.children))
			.map((item) => ({ label: item.label, href: item.href }))
	}
];
