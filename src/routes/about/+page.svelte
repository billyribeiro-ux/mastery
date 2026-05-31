<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, PageHero } from '$lib/components/marketing';
	import { Button, Container, Section } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
</script>

<PageHero
	eyebrow="About"
	title="Built by traders, for traders."
	lead="Mastery Trading is a community of disciplined traders sharing process, strategy, and accountability."
/>

<Section eyebrow="Our story" title="Where we started.">
	<Container>
		<p class="body-copy">
			Mastery Trading grew out of a simple frustration: good traders rarely teach process. They
			teach setups. They highlight wins. They skip the part that actually produces consistency — the
			habits, the rules, the discipline that compound over time.
		</p>
		<p class="body-copy">
			We built a different kind of trading community. One where the process is the product. Where
			risk management isn't optional. Where accountability and structure are the norm, not the
			exception.
		</p>
	</Container>
</Section>

<CtaBand title="Join the community." copy="Live rooms, alerts, and resources — all in one place.">
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</CtaBand>

<style>
	.body-copy {
		max-width: 70ch;
		line-height: 1.8;
		font-size: clamp(1rem, 2vw, 1.125rem);
		color: var(--color-text-secondary);
		margin: 0 0 var(--space-5);
	}

	.body-copy:last-child {
		margin-bottom: 0;
	}
</style>
