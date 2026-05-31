<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tone?: 'gold' | 'neutral';
		class?: string;
		children: Snippet;
	};

	let { tone = 'gold', class: className, children }: Props = $props();
</script>

<span class={['badge', tone, className]}>
	{@render children()}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-pill);
		border: 1px solid var(--color-border-subtle);
		background: var(--color-surface-soft);
		font-size: var(--font-size-step--1);
		font-weight: 700;
		letter-spacing: var(--tracking-eyebrow);
		text-transform: uppercase;
	}

	.gold {
		color: var(--color-brand-gold-strong);
	}

	.neutral {
		color: var(--color-text-secondary);
	}
</style>
