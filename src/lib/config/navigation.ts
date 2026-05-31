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
		href: '/rooms',
		description: 'Real-time guidance, execution support, and structured market coverage.',
		children: [
			{ label: 'Overview', href: '/rooms' },
			{ label: 'Day Trading Room', href: '/rooms/day-trading' },
			{ label: 'Swing Trading Room', href: '/rooms/swing-trading' },
			{ label: 'Small Accounts Room', href: '/rooms/small-accounts' }
		]
	},
	{
		label: 'Alert Services',
		href: '/alerts',
		description: 'High-signal trade ideas designed for discipline, speed, and clarity.',
		children: [
			{ label: 'Overview', href: '/alerts' },
			{ label: 'SPX Profit Pulse', href: '/alerts/spx-profit-pulse' },
			{ label: 'Explosive Swings', href: '/alerts/explosive-swings' }
		]
	},
	{
		label: 'Mentorship',
		href: '/mentorship',
		description: 'Coaching, accountability, and trader development programs.'
	},
	{
		label: 'Store',
		href: '/store',
		description: 'Courses, indicators, scanners, and trader-focused learning assets.',
		children: [
			{ label: 'All Products', href: '/store' },
			{ label: 'Courses', href: '/store/courses' },
			{ label: 'Indicators', href: '/store/indicators' },
			{ label: 'Scanners', href: '/store/scanners' }
		]
	},
	{
		label: 'Our Mission',
		href: '/mission',
		description: 'The principles and purpose driving the Revolution Trading Pros platform.'
	},
	{
		label: 'About',
		href: '/about',
		description: 'Team, story, and the operating philosophy behind the brand.'
	},
	{
		label: 'Blogs',
		href: '/blog',
		description: 'Market education, trader psychology, and platform updates.'
	},
	{
		label: 'Resources',
		href: '/resources',
		description: 'Practical calculators, lists, and utilities for daily decision-making.'
	}
];

/** Primary account actions, shared between header and footer. */
export const accountNav = {
	login: { label: 'Member Login', href: '/login' satisfies Pathname },
	join: { label: 'Start Membership', href: '/pricing' satisfies Pathname }
} as const;

/** Legal / compliance links — surfaced in the footer (dedicated routes land in a later phase). */
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
