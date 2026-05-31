import { error } from '@sveltejs/kit';

import { getStoreCategory, storeCategories } from '$lib/content/store';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => storeCategories.map((c) => ({ slug: c.slug }));

export const load: PageLoad = ({ params }) => {
	const category = getStoreCategory(params.slug);
	if (!category) error(404, `Store category "${params.slug}" not found`);
	return { category };
};
