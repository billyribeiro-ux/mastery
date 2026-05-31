import { alertServices } from '$lib/content/alerts';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => ({ alertServices });
