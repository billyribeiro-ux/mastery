import { rooms } from '$lib/content/rooms';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => ({ rooms });
