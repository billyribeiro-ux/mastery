import { error } from '@sveltejs/kit';

import { alertServices, getAlertService } from '$lib/content/alerts';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => alertServices.map((s) => ({ slug: s.slug }));

export const load: PageLoad = ({ params }) => {
	const alertService = getAlertService(params.slug);
	if (!alertService) error(404, `Alert service "${params.slug}" not found`);
	return { alertService };
};
