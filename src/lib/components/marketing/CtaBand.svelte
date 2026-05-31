<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container } from '$lib/components/ui';

	type Props = {
		title: string;
		copy?: string;
		actions: Snippet;
	};

	let { title, copy, actions }: Props = $props();
</script>

<section class="cta-band">
	<Container>
		<div class="band-inner">
			<h2>{title}</h2>
			{#if copy}
				<p>{copy}</p>
			{/if}
			<div class="band-actions">{@render actions()}</div>
		</div>
	</Container>
</section>

<style>
	.cta-band {
		padding-block: var(--space-12);
	}

	.band-inner {
		display: grid;
		justify-items: center;
		gap: var(--space-5);
		padding: var(--space-12) var(--space-6);
		border-radius: var(--radius-xl);
		border: 1px solid var(--color-border-subtle);
		background:
			radial-gradient(circle at top, rgba(240, 222, 139, 0.12), transparent 60%),
			var(--color-surface-panel-strong);
		text-align: center;
	}

	h2 {
		margin: 0;
		max-width: 24ch;
		font-family: var(--font-family-display);
		font-size: clamp(1.6rem, 4vw, 2.5rem);
		line-height: 1.1;
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	p {
		margin: 0;
		max-width: 46ch;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.band-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
	}
</style>
