<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const status = $derived(page.status);
	const message = $derived(page.error?.message ?? 'Something went wrong.');
</script>

<section class="error" aria-labelledby="error-title">
	<p class="status">{status}</p>
	<h1 id="error-title">
		{#if status === 404}
			This page took a different trade.
		{:else}
			Unexpected market conditions.
		{/if}
	</h1>
	<p class="message">{message}</p>
	<a class="cta" href={resolve('/')}>Back to safety</a>
</section>

<style>
	.error {
		max-width: 40rem;
		margin: 0 auto;
		padding: var(--space-16) var(--layout-gutter-inline);
		min-height: 60vh;
		display: grid;
		justify-items: center;
		align-content: center;
		gap: var(--space-4);
		text-align: center;
	}

	.status {
		margin: 0;
		font-family: var(--font-family-display);
		font-size: clamp(3rem, 12vw, 6rem);
		font-weight: 750;
		line-height: 1;
		background: linear-gradient(135deg, var(--color-brand-gold), var(--color-brand-gold-strong));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	h1 {
		margin: 0;
		font-family: var(--font-family-display);
		font-size: clamp(1.5rem, 5vw, 2.5rem);
		line-height: 1.1;
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	.message {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.cta {
		margin-top: var(--space-2);
		display: inline-flex;
		align-items: center;
		padding: var(--space-4) var(--space-6);
		border-radius: var(--radius-pill);
		font-weight: 700;
		text-decoration: none;
		color: var(--color-brand-ink);
		background: linear-gradient(135deg, var(--color-brand-gold), var(--color-brand-gold-strong));
		box-shadow: var(--shadow-brand);
		transition:
			transform var(--duration-fast) var(--ease-emphasized),
			box-shadow var(--duration-fast) var(--ease-emphasized);
	}

	.cta:hover,
	.cta:focus-visible {
		transform: translateY(-0.1rem);
		box-shadow: 0 1.15rem 2.2rem rgba(215, 177, 100, 0.34);
		outline: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.cta {
			transition-duration: 0ms;
		}
	}
</style>
