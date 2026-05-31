// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Seo } from '$lib/config/site';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			seo?: Seo;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
