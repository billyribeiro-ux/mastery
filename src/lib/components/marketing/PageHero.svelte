<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Badge, Container } from '$lib/components/ui';

	type Props = {
		eyebrow?: string;
		title: string;
		lead?: string;
		actions?: Snippet;
	};

	let { eyebrow, title, lead, actions }: Props = $props();
</script>

<section class="page-hero">
	<div class="hero-glow" aria-hidden="true"></div>
	<Container>
		<div class="hero-inner">
			{#if eyebrow}
				<Badge>{eyebrow}</Badge>
			{/if}
			<h1>{title}</h1>
			{#if lead}
				<p class="lead">{lead}</p>
			{/if}
			{#if actions}
				<div class="actions">{@render actions()}</div>
			{/if}
		</div>
	</Container>
</section>

<style>
	.page-hero {
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

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}
</style>
