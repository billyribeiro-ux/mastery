import { resourceTools } from '$lib/content/resources';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => ({ tools: resourceTools });
