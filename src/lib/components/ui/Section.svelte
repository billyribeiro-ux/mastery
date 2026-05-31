<script lang="ts">
	import type { Snippet } from 'svelte';

	import Container from './Container.svelte';

	type Props = {
		id?: string;
		eyebrow?: string;
		title?: string;
		lead?: string;
		align?: 'start' | 'center';
		containerSize?: 'default' | 'xl';
		children: Snippet;
	};

	let {
		id,
		eyebrow,
		title,
		lead,
		align = 'start',
		containerSize = 'default',
		children
	}: Props = $props();

	const headingId = $derived(
		title ? `section-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined
	);
</script>

<section {id} class={['section', align]} aria-labelledby={headingId}>
	<Container size={containerSize}>
		{#if eyebrow || title || lead}
			<header class="section-header">
				{#if eyebrow}
					<p class="section-eyebrow">{eyebrow}</p>
				{/if}
				{#if title}
					<h2 id={headingId} class="section-title">{title}</h2>
				{/if}
				{#if lead}
					<p class="section-lead">{lead}</p>
				{/if}
			</header>
		{/if}

		{@render children()}
	</Container>
</section>

<style>
	.section {
		padding-block: var(--space-12);
	}

	.section-header {
		display: grid;
		gap: var(--space-3);
		margin-bottom: var(--space-8);
		max-width: 52ch;
	}

	.center {
		text-align: center;
	}

	.center .section-header {
		margin-inline: auto;
		justify-items: center;
	}

	.section-eyebrow {
		margin: 0;
		font-size: var(--font-size-step--1);
		font-weight: 700;
		letter-spacing: var(--tracking-eyebrow);
		text-transform: uppercase;
		color: var(--color-brand-gold-strong);
	}

	.section-title {
		margin: 0;
		font-family: var(--font-family-display);
		font-size: clamp(1.6rem, 4vw, 2.5rem);
		line-height: 1.1;
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	.section-lead {
		margin: 0;
		font-size: var(--font-size-step-1);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}
</style>
