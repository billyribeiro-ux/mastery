<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, FeatureList, PageHero } from '$lib/components/marketing';
	import { Button, Card, Container, Section } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
</script>

<PageHero
	eyebrow="Pricing"
	title="One membership. Everything included."
	lead="A single subscription unlocks every live room, alert service, and the full resource library."
/>

<Section eyebrow="What's included" title="Your full toolkit.">
	<FeatureList
		items={[
			'Access to all live trading rooms (Day Trading, Swing Trading, Small Accounts)',
			'All active alert services with full trade context',
			'Complete resource library: calculators, tools, and references',
			'Community access and trade review threads',
			'New rooms and resources as they launch'
		]}
	/>
</Section>

<Container>
	<div class="plan-grid">
		<Card>
			<div class="plan">
				<p class="plan-label">Monthly</p>
				<p class="plan-price">
					<span class="plan-amount">$97</span><span class="plan-per">/mo</span>
				</p>
				<p class="plan-copy">Cancel any time. Full access from day one.</p>
				<Button href={resolve(accountNav.join.href)} size="lg" fullWidth arrow>
					{accountNav.join.label}
				</Button>
			</div>
		</Card>
		<Card>
			<div class="plan plan--annual">
				<p class="plan-label">Annual <span class="plan-badge">Best value</span></p>
				<p class="plan-price">
					<span class="plan-amount">$797</span><span class="plan-per">/yr</span>
				</p>
				<p class="plan-copy">Two months free. Billed once per year.</p>
				<Button href={resolve(accountNav.join.href)} size="lg" fullWidth arrow>
					{accountNav.join.label}
				</Button>
			</div>
		</Card>
	</div>
</Container>

<CtaBand
	title="Questions?"
	copy="Reach out before joining — we want to make sure it's the right fit."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>Get Started</Button>
	{/snippet}
</CtaBand>

<style>
	.plan-grid {
		display: grid;
		gap: var(--space-5);
		padding-block: var(--space-8);
	}

	.plan {
		display: grid;
		gap: var(--space-4);
	}

	.plan-label {
		margin: 0;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--font-size-step--1);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-text-tertiary);
	}

	.plan-badge {
		padding: 0.1em 0.5em;
		border-radius: var(--radius-sm);
		background: var(--color-brand-gold-muted);
		color: var(--color-brand-gold-strong);
		font-size: var(--font-size-step--2);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.plan-price {
		margin: 0;
		display: flex;
		align-items: baseline;
		gap: 0.25em;
	}

	.plan-amount {
		font-family: var(--font-family-display);
		font-size: clamp(2.5rem, 6vw, 3.5rem);
		font-weight: 800;
		line-height: 1;
		color: var(--color-text-primary);
	}

	.plan-per {
		font-size: var(--font-size-step-0);
		color: var(--color-text-tertiary);
	}

	.plan-copy {
		margin: 0;
		font-size: var(--font-size-step--1);
		color: var(--color-text-secondary);
		line-height: 1.5;
	}

	@media (min-width: 48rem) {
		.plan-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			max-width: 56rem;
			margin-inline: auto;
		}
	}
</style>
