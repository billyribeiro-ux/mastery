<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		as?: 'div' | 'li' | 'article';
		interactive?: boolean;
		class?: string;
		children: Snippet;
	};

	let { as = 'div', interactive = false, class: className, children }: Props = $props();
</script>

<svelte:element this={as} class={['card', interactive && 'interactive', className]}>
	{@render children()}
</svelte:element>

<style>
	.card {
		display: block;
		padding: var(--space-6);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border-neutral);
		background: linear-gradient(180deg, var(--color-surface-panel), var(--color-surface-soft));
		box-shadow: var(--shadow-soft);
	}

	.interactive {
		transition:
			transform var(--duration-fast) var(--ease-emphasized),
			border-color var(--duration-fast) var(--ease-emphasized);
	}

	.interactive:hover {
		transform: translateY(-0.15rem);
		border-color: var(--color-border-strong);
	}

	@media (prefers-reduced-motion: reduce) {
		.interactive {
			transition-duration: 0ms;
		}
	}
</style>
