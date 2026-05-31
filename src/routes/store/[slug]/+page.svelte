<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand } from '$lib/components/marketing';
	import { Badge, Button, Card, Container, Section } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="store-hero">
	<div class="hero-glow" aria-hidden="true"></div>
	<Container>
		<div class="hero-inner">
			<Badge>{data.category.tagline}</Badge>
			<h1>{data.category.name}</h1>
			<p class="lead">{data.category.summary}</p>
		</div>
	</Container>
</section>

<Section eyebrow="Products" title="What's in this category.">
	<ul class="product-grid">
		{#each data.category.products as product (product.name)}
			<Card as="li">
				<div class="product">
					<div class="product-head">
						<h2>{product.name}</h2>
						<span class="product-price">{product.price}</span>
					</div>
					<p>{product.blurb}</p>
				</div>
			</Card>
		{/each}
	</ul>
</Section>

<CtaBand
	title="Members get the best pricing."
	copy="Join to unlock member pricing across every course, indicator, and scanner."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
		<Button href={resolve('/store')} size="lg" variant="ghost">All Products</Button>
	{/snippet}
</CtaBand>

<style>
	.store-hero {
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

	.product-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-4);
	}

	.product {
		display: grid;
		gap: var(--space-3);
	}

	.product-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-3);
		flex-wrap: wrap;
	}

	h2 {
		margin: 0;
		font-size: var(--font-size-step-1);
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.product-price {
		font-family: var(--font-family-display);
		font-size: var(--font-size-step-1);
		font-weight: 750;
		color: var(--color-brand-gold-strong);
		white-space: nowrap;
	}

	p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	@media (min-width: 48rem) {
		.product-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		.product-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
