<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		variant?: 'primary' | 'ghost' | 'subtle';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		fullWidth?: boolean;
		arrow?: boolean;
		target?: string;
		rel?: string;
		class?: string;
		'aria-label'?: string;
		onclick?: (event: MouseEvent) => void;
		children: Snippet;
	};

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		disabled = false,
		fullWidth = false,
		arrow = false,
		target,
		rel,
		class: className,
		'aria-label': ariaLabel,
		onclick,
		children
	}: Props = $props();
</script>

{#if href}
	<a
		class={['btn', variant, size, fullWidth && 'full', className]}
		{href}
		{target}
		{rel}
		aria-label={ariaLabel}
		{onclick}
	>
		{@render children()}
		{#if arrow}
			<span class="arrow" aria-hidden="true">↗</span>
		{/if}
	</a>
{:else}
	<button
		class={['btn', variant, size, fullWidth && 'full', className]}
		{type}
		{disabled}
		aria-label={ariaLabel}
		{onclick}
	>
		{@render children()}
		{#if arrow}
			<span class="arrow" aria-hidden="true">↗</span>
		{/if}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		border: 1px solid transparent;
		border-radius: var(--radius-pill);
		font: inherit;
		font-weight: 700;
		letter-spacing: 0.01em;
		text-decoration: none;
		cursor: pointer;
		white-space: nowrap;
		transition:
			transform var(--duration-fast) var(--ease-emphasized),
			box-shadow var(--duration-fast) var(--ease-emphasized),
			border-color var(--duration-fast) var(--ease-emphasized),
			background-color var(--duration-fast) var(--ease-emphasized),
			color var(--duration-fast) var(--ease-emphasized);
	}

	.btn:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}

	.sm {
		padding: var(--space-2) var(--space-4);
		font-size: var(--font-size-step--1);
	}

	.md {
		padding: var(--space-3) var(--space-5);
	}

	.lg {
		padding: var(--space-4) var(--space-6);
	}

	.full {
		width: 100%;
	}

	.primary {
		color: var(--color-brand-ink);
		background: linear-gradient(135deg, var(--color-brand-gold), var(--color-brand-gold-strong));
		box-shadow: var(--shadow-brand);
	}

	.primary:hover:not(:disabled),
	.primary:focus-visible {
		transform: translateY(-0.1rem);
		box-shadow: 0 1.15rem 2.2rem rgba(215, 177, 100, 0.34);
		outline: none;
	}

	.ghost {
		color: var(--color-text-primary);
		border-color: var(--color-border-neutral);
		background: var(--color-surface-soft);
	}

	.ghost:hover:not(:disabled),
	.ghost:focus-visible {
		transform: translateY(-0.08rem);
		color: var(--color-brand-gold-strong);
		border-color: var(--color-border-strong);
		outline: none;
	}

	.subtle {
		color: var(--color-text-secondary);
		background: transparent;
	}

	.subtle:hover:not(:disabled),
	.subtle:focus-visible {
		color: var(--color-brand-gold-strong);
		outline: none;
	}

	.arrow {
		transition: transform var(--duration-fast) var(--ease-emphasized);
	}

	.btn:hover .arrow,
	.btn:focus-visible .arrow {
		transform: translate(0.08rem, -0.08rem);
	}

	@media (prefers-reduced-motion: reduce) {
		.btn,
		.arrow {
			transition-duration: 0ms;
		}
	}
</style>
