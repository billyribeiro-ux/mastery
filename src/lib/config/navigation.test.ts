import { describe, expect, it } from 'vitest';

import { footerColumns, primaryNav } from './navigation';

describe('navigation config', () => {
	it('derives a footer column for every grouped nav item', () => {
		const groupTitles = primaryNav.filter((item) => item.children).map((item) => item.label);

		for (const title of groupTitles) {
			expect(footerColumns.map((column) => column.title)).toContain(title);
		}
	});

	it('collects standalone destinations into a Company column', () => {
		const company = footerColumns.find((column) => column.title === 'Company');

		expect(company?.links.map((link) => link.label)).toEqual([
			'Mentorship',
			'Our Mission',
			'About',
			'Blogs',
			'Resources'
		]);
	});

	it('never produces an empty footer column', () => {
		expect(footerColumns.every((column) => column.links.length > 0)).toBe(true);
	});
});
