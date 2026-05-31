<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, PageHero } from '$lib/components/marketing';
	import { Button } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
</script>

<PageHero
	eyebrow="Blog"
	title="Insights for disciplined traders."
	lead="Strategy breakdowns, process deep-dives, and lessons from live trading — published regularly."
/>

<section class="coming-soon">
	<p>Articles coming soon.</p>
</section>

<CtaBand
	title="Get notified when we publish."
	copy="Join the community for real-time insights delivered in the live rooms and alert services."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</CtaBand>

<style>
	.coming-soon {
		display: flex;
		justify-content: center;
		padding-block: var(--space-16);
		font-size: var(--font-size-step-1);
		color: var(--color-text-tertiary);
	}
</style>
