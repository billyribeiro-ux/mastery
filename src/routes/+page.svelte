<script lang="ts">
	import { resolve } from '$app/paths';

	import { Badge, Button, Card, Container, Section } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';

	type Pillar = {
		title: string;
		copy: string;
	};

	type Stat = {
		value: string;
		label: string;
	};

	const stats: Stat[] = [
		{ value: 'Live', label: 'Market-hours trading rooms' },
		{ value: '2', label: 'Premium alert services' },
		{ value: '1:1', label: 'Mentorship & accountability' },
		{ value: '24/7', label: 'Education & resource library' }
	];

	const pillars: Pillar[] = [
		{
			title: 'Live Trading Rooms',
			copy: 'Real-time guidance, execution support, and structured market coverage for day, swing, and small-account traders.'
		},
		{
			title: 'Alert Services',
			copy: 'High-signal trade ideas — SPX Profit Pulse and Explosive Swings — built for discipline, speed, and clarity.'
		},
		{
			title: 'Mentorship',
			copy: 'Coaching, accountability, and trader development programs that turn process into consistent execution.'
		},
		{
			title: 'Tools & Resources',
			copy: 'Options calculators, curated lists, scanners, and indicators for sharper daily decision-making.'
		}
	];
</script>

<Container>
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-glow" aria-hidden="true"></div>

		<Badge>Trader Performance Platform</Badge>

		<h1 id="hero-title">
			Build your trading <span class="accent">operating system</span>.
		</h1>

		<p class="lead">
			Live rooms, premium alerts, mentorship, and tools — engineered for disciplined execution and
			consistent decision-making in every market.
		</p>

		<div class="cta-row">
			<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
			<Button href={resolve('/')} size="lg" variant="ghost">Explore Live Rooms</Button>
		</div>

		<p class="trust">
			Structured education for active traders — from first contract to full conviction.
		</p>
	</section>

	<section class="stats" aria-label="Platform highlights">
		{#each stats as stat (stat.label)}
			<Card>
				<div class="stat">
					<span class="stat-value">{stat.value}</span>
					<span class="stat-label">{stat.label}</span>
				</div>
			</Card>
		{/each}
	</section>
</Container>

<Section eyebrow="Platform" title="Everything a serious trader needs, in one platform.">
	<ul class="pillar-grid">
		{#each pillars as pillar (pillar.title)}
			<Card as="li" interactive>
				<h3 class="pillar-title">{pillar.title}</h3>
				<p class="pillar-copy">{pillar.copy}</p>
			</Card>
		{/each}
	</ul>
</Section>

<Section align="center">
	<div class="closing">
		<h2 class="closing-title">Trade with structure, not guesswork.</h2>
		<p class="closing-copy">
			Join a community built around process, risk discipline, and continuous improvement.
		</p>
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	</div>
</Section>

<style>
	.hero {
		position: relative;
		text-align: center;
		display: grid;
		justify-items: center;
		gap: var(--space-5);
		padding-block: var(--space-12) var(--space-10);
	}

	.hero-glow {
		position: absolute;
		inset: -20% 0 auto;
		height: 18rem;
		margin: 0 auto;
		max-width: 40rem;
		background: radial-gradient(circle, rgba(240, 222, 139, 0.16), transparent 70%);
		filter: blur(1.5rem);
		pointer-events: none;
		z-index: -1;
	}

	h1 {
		margin: 0;
		max-width: 18ch;
		font-family: var(--font-family-display);
		font-size: clamp(2.25rem, 7vw, 4.5rem);
		line-height: 1.04;
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	.accent {
		background: linear-gradient(135deg, var(--color-brand-gold), var(--color-brand-gold-strong));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.lead {
		margin: 0;
		max-width: 46ch;
		font-size: clamp(1rem, 2.4vw, 1.25rem);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.cta-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
		margin-top: var(--space-2);
	}

	.trust {
		margin: 0;
		font-size: var(--font-size-step--1);
		color: var(--color-text-tertiary);
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-3);
		padding-bottom: var(--space-8);
	}

	.stat {
		display: grid;
		gap: var(--space-1);
		text-align: center;
	}

	.stat-value {
		font-family: var(--font-family-display);
		font-size: var(--font-size-step-2);
		font-weight: 750;
		color: var(--color-brand-gold-strong);
	}

	.stat-label {
		font-size: var(--font-size-step--1);
		line-height: 1.4;
		color: var(--color-text-secondary);
	}

	.pillar-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-4);
	}

	.pillar-title {
		margin: 0 0 var(--space-3);
		font-size: var(--font-size-step-1);
		font-weight: 700;
		color: var(--color-brand-gold-strong);
	}

	.pillar-copy {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.closing {
		display: grid;
		justify-items: center;
		gap: var(--space-5);
		padding: var(--space-12) var(--space-6);
		border-radius: var(--radius-xl);
		border: 1px solid var(--color-border-subtle);
		background:
			radial-gradient(circle at top, rgba(240, 222, 139, 0.12), transparent 60%),
			var(--color-surface-panel-strong);
	}

	.closing-title {
		margin: 0;
		max-width: 22ch;
		font-family: var(--font-family-display);
		font-size: clamp(1.6rem, 4vw, 2.5rem);
		line-height: 1.1;
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	.closing-copy {
		margin: 0;
		max-width: 44ch;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	@media (min-width: 48rem) {
		.stats {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.pillar-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		.pillar-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
