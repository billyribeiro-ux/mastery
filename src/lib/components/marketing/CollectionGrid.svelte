<script lang="ts">
	import { Card, Container } from '$lib/components/ui';

	import type { CollectionItem } from './types';

	type Props = {
		items: CollectionItem[];
		columns?: 2 | 3;
	};

	let { items, columns = 3 }: Props = $props();
</script>

<Container>
	<ul class={['grid', `cols-${columns}`]}>
		{#each items as item (item.href)}
			<Card as="li" interactive>
				<!-- Hrefs are resolved by the caller via resolve(); this grid is presentational. -->
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="card-link" href={item.href}>
					<span class="card-head">
						{#if item.badge}
							<span class="card-badge">{item.badge}</span>
						{/if}
						<span class="card-arrow" aria-hidden="true">↗</span>
					</span>
					<h2>{item.title}</h2>
					<p>{item.copy}</p>
					{#if item.meta}
						<span class="card-meta">{item.meta}</span>
					{/if}
				</a>
			</Card>
		{/each}
	</ul>
</Container>

<style>
	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-4);
	}

	.card-link {
		display: grid;
		gap: var(--space-2);
		height: 100%;
		text-decoration: none;
		color: inherit;
	}

	.card-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		min-height: 1.5rem;
	}

	.card-badge {
		font-size: var(--font-size-step--1);
		font-weight: 700;
		letter-spacing: var(--tracking-eyebrow);
		text-transform: uppercase;
		color: var(--color-brand-gold-strong);
	}

	.card-arrow {
		margin-left: auto;
		color: var(--color-brand-gold-strong);
		transition: transform var(--duration-fast) var(--ease-emphasized);
	}

	.card-link:hover .card-arrow,
	.card-link:focus-visible .card-arrow {
		transform: translate(0.12rem, -0.12rem);
	}

	h2 {
		margin: 0;
		font-size: var(--font-size-step-1);
		font-weight: 700;
		color: var(--color-text-primary);
	}

	p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.card-meta {
		margin-top: var(--space-1);
		font-size: var(--font-size-step--1);
		color: var(--color-text-tertiary);
	}

	@media (min-width: 48rem) {
		.cols-2,
		.cols-3 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		.cols-3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card-arrow {
			transition-duration: 0ms;
		}
	}
</style>
