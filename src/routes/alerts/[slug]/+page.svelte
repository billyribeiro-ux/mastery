<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, FeatureList } from '$lib/components/marketing';
	import { Badge, Button, Container, Section } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="alert-hero">
	<div class="hero-glow" aria-hidden="true"></div>
	<Container>
		<div class="hero-inner">
			<Badge>{data.alertService.tagline}</Badge>
			<h1>{data.alertService.name}</h1>
			<p class="lead">{data.alertService.summary}</p>
			<div class="hero-meta">
				<span class="meta-label">Cadence</span>
				<span>{data.alertService.cadence}</span>
			</div>
			<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
		</div>
	</Container>
</section>

<Section eyebrow="What's included" title="Signal, not noise.">
	<FeatureList items={data.alertService.features} />
</Section>

<CtaBand
	title="Act with conviction on every alert."
	copy="Membership delivers high-signal trade ideas directly to you — with the context to execute."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
		<Button href={resolve('/alerts')} size="lg" variant="ghost">All Alert Services</Button>
	{/snippet}
</CtaBand>

<style>
	.alert-hero {
		position: relative;
		overflow: clip;
		padding-block: var(--space-16) var(--space-12);
	}

	.hero-glow {
		position: absolute;
		inset: -30% 0 auto;
		height: 22rem;
		margin: 0 auto;
		max-width: 48rem;
		background: radial-gradient(circle, rgba(240, 222, 139, 0.16), transparent 70%);
		filter: blur(1.5rem);
		pointer-events: none;
		z-index: -1;
	}

	.hero-inner {
		display: grid;
		justify-items: center;
		gap: var(--space-5);
		text-align: center;
	}

	h1 {
		margin: 0;
		max-width: 20ch;
		font-family: var(--font-family-display);
		font-size: clamp(2.25rem, 6vw, 4rem);
		line-height: 1.05;
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	.lead {
		margin: 0;
		max-width: 52ch;
		font-size: clamp(1rem, 2.4vw, 1.25rem);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.hero-meta {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--font-size-step--1);
		color: var(--color-text-tertiary);
	}

	.meta-label {
		font-weight: 700;
		color: var(--color-text-secondary);
	}
</style>
