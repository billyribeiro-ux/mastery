<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, FeatureList, PageHero } from '$lib/components/marketing';
	import { Button } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
</script>

<PageHero
	eyebrow="Mentorship"
	title="Accelerate your development."
	lead="One-on-one coaching to close the gaps between knowledge and consistent execution."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</PageHero>

<FeatureList
	title="What mentorship covers."
	items={[
		'Trade review and plan critiques',
		'Risk management frameworks tailored to your account',
		'Execution habits and journal discipline',
		'Strategy development and back-testing',
		'Weekly accountability sessions'
	]}
/>

<CtaBand
	title="Ready to accelerate your growth?"
	copy="Limited spots available. Applications reviewed on a rolling basis."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>Apply for Mentorship</Button>
	{/snippet}
</CtaBand>
