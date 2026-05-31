import { storeCategories } from '$lib/content/store';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => ({ categories: storeCategories });
