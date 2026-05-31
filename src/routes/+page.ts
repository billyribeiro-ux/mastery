import type { PageLoad } from './$types';

// The marketing landing page is fully static — prerender it for instant loads.
export const prerender = true;

export const load: PageLoad = () => ({
	seo: {
		title: 'Live Trading Rooms, Alerts & Mentorship',
		description:
			'Revolution Trading Pros delivers live trading rooms, high-signal alert services, mentorship, and trader tools engineered for disciplined execution.'
	}
});
