<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, FeatureList } from '$lib/components/marketing';
	import { Badge, Button, Container, Section } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="room-hero">
	<div class="hero-glow" aria-hidden="true"></div>
	<Container>
		<div class="hero-inner">
			<Badge>{data.room.tagline}</Badge>
			<h1>{data.room.name}</h1>
			<p class="lead">{data.room.summary}</p>
			<div class="hero-meta">
				<span class="meta-item">
					<span class="meta-label">Audience</span>
					<span>{data.room.audience}</span>
				</span>
				<span class="meta-divider" aria-hidden="true">·</span>
				<span class="meta-item">
					<span class="meta-label">Cadence</span>
					<span>{data.room.cadence}</span>
				</span>
			</div>
			<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
		</div>
	</Container>
</section>

<Section eyebrow="What's included" title="Built for disciplined execution.">
	<FeatureList items={data.room.highlights} />
</Section>

<CtaBand
	title="Ready to trade with structure?"
	copy="Join a live room and trade alongside experienced moderators with real-time guidance."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
		<Button href={resolve('/rooms')} size="lg" variant="ghost">All Rooms</Button>
	{/snippet}
</CtaBand>

<style>
	.room-hero {
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
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
		font-size: var(--font-size-step--1);
		color: var(--color-text-tertiary);
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.meta-label {
		font-weight: 700;
		color: var(--color-text-secondary);
	}

	.meta-divider {
		color: var(--color-border-neutral);
	}
</style>
