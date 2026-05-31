import { error } from '@sveltejs/kit';

import { getRoom, rooms } from '$lib/content/rooms';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => rooms.map((room) => ({ slug: room.slug }));

export const load: PageLoad = ({ params }) => {
	const room = getRoom(params.slug);
	if (!room) error(404, `Room "${params.slug}" not found`);
	return { room };
};
