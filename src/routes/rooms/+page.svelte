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
		data.rooms.map((room) => ({
			title: room.name,
			copy: room.summary,
			href: resolve('/rooms/[slug]', { slug: room.slug }),
			badge: room.tagline,
			meta: room.cadence
		}))
	);
</script>

<PageHero
	eyebrow="Live Trading Rooms"
	title="Trade live, with structure."
	lead="Real-time guidance, execution support, and disciplined risk management across day, swing, and small-account strategies."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</PageHero>

<CollectionGrid {items} columns={3} />

<CtaBand
	title="Find the room that fits your strategy."
	copy="Membership unlocks every live room, alert service, and the full resource library."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</CtaBand>
