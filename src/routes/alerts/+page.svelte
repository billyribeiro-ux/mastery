<script lang="ts">
	import { resolve } from '$app/paths';

	import {
		CollectionGrid,
		CtaBand,
		PageHero,
		type CollectionItem
	} from '$lib/components/marketing';
	import { Button } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const items: CollectionItem[] = $derived(
		data.alertServices.map((service) => ({
			title: service.name,
			copy: service.summary,
			href: resolve('/alerts/[slug]', { slug: service.slug }),
			badge: service.tagline,
			meta: service.cadence
		}))
	);
</script>

<PageHero
	eyebrow="Alert Services"
	title="High-signal trade ideas."
	lead="Clearly defined entries, exits, and risk — delivered with the context you need to act with conviction."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</PageHero>

<CollectionGrid {items} columns={2} />

<CtaBand
	title="Trade alongside a disciplined process."
	copy="Membership unlocks every alert service, live room, and the full resource library."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</CtaBand>
