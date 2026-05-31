<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, PageHero } from '$lib/components/marketing';
	import { Badge, Button, Card, Container } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<PageHero
	eyebrow="Resources"
	title="Free tools for active traders."
	lead="Practical calculators and reference lists to support sharper daily decisions."
/>

<Container>
	<ul class="grid">
		{#each data.tools as tool (tool.slug)}
			<Card as="li">
				<div class="tool">
					<Badge>{tool.status === 'available' ? 'Available' : 'Coming soon'}</Badge>
					<h2>{tool.name}</h2>
					<p>{tool.summary}</p>
				</div>
			</Card>
		{/each}
	</ul>
</Container>

<CtaBand
	title="Want the full toolkit?"
	copy="Membership unlocks live rooms, alerts, and premium tools in one place."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</CtaBand>

<style>
	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-4);
		padding-bottom: var(--space-8);
	}

	.tool {
		display: grid;
		gap: var(--space-3);
		justify-items: start;
	}

	h2 {
		margin: 0;
		font-size: var(--font-size-step-1);
		font-weight: 700;
		color: var(--color-text-primary);
	}

	p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	@media (min-width: 48rem) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
