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
		data.categories.map((category) => ({
			title: category.name,
			copy: category.summary,
			href: resolve('/store/[slug]', { slug: category.slug }),
			badge: category.tagline,
			meta: `${category.products.length} products`
		}))
	);
</script>

<PageHero
	eyebrow="Store"
	title="Tools that sharpen your edge."
	lead="Courses, indicators, and scanners built to make your daily decisions faster and more disciplined."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</PageHero>

<CollectionGrid {items} columns={3} />

<CtaBand
	title="Everything compounds with membership."
	copy="Members get the best pricing across courses, indicators, and scanners."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</CtaBand>
