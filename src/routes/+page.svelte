<script lang="ts">
	import { resolve } from '$app/paths';

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

<div class="landing">
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-glow" aria-hidden="true"></div>

		<p class="eyebrow">Trader Performance Platform</p>

		<h1 id="hero-title">
			Build your trading <span class="accent">operating system</span>.
		</h1>

		<p class="lead">
			Live rooms, premium alerts, mentorship, and tools — engineered for disciplined execution and
			consistent decision-making in every market.
		</p>

		<div class="cta-row">
			<a class="cta cta-primary" href={resolve('/')}>
				<span>Start Membership</span>
				<span class="cta-arrow" aria-hidden="true">↗</span>
			</a>
			<a class="cta cta-ghost" href={resolve('/')}>Explore Live Rooms</a>
		</div>

		<p class="trust">
			Structured education for active traders — from first contract to full conviction.
		</p>
	</section>

	<section class="stats" aria-label="Platform highlights">
		{#each stats as stat (stat.label)}
			<div class="stat">
				<span class="stat-value">{stat.value}</span>
				<span class="stat-label">{stat.label}</span>
			</div>
		{/each}
	</section>

	<section class="pillars" aria-labelledby="pillars-title">
		<h2 id="pillars-title">Everything a serious trader needs, in one platform.</h2>

		<ul class="pillar-grid">
			{#each pillars as pillar (pillar.title)}
				<li class="pillar-card">
					<h3>{pillar.title}</h3>
					<p>{pillar.copy}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section class="closing" aria-labelledby="closing-title">
		<div class="closing-inner">
			<h2 id="closing-title">Trade with structure, not guesswork.</h2>
			<p>Join a community built around process, risk discipline, and continuous improvement.</p>
			<a class="cta cta-primary" href={resolve('/')}>
				<span>Start Membership</span>
				<span class="cta-arrow" aria-hidden="true">↗</span>
			</a>
		</div>
	</section>
</div>

<style>
	.landing {
		max-width: var(--layout-max-width);
		margin: 0 auto;
		padding: var(--space-12) var(--layout-gutter-inline) var(--space-16);
		display: grid;
		gap: var(--space-16);
	}

	.hero {
		position: relative;
		text-align: center;
		display: grid;
		justify-items: center;
		gap: var(--space-5);
	}

	.hero-glow {
		position: absolute;
		inset: -30% 0 auto;
		height: 18rem;
		margin: 0 auto;
		max-width: 40rem;
		background: radial-gradient(circle, rgba(240, 222, 139, 0.16), transparent 70%);
		filter: blur(1.5rem);
		pointer-events: none;
		z-index: -1;
	}

	.eyebrow {
		margin: 0;
		display: inline-flex;
		align-items: center;
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-pill);
		border: 1px solid var(--color-border-subtle);
		background: var(--color-surface-soft);
		font-size: var(--font-size-step--1);
		font-weight: 700;
		letter-spacing: var(--tracking-eyebrow);
		text-transform: uppercase;
		color: var(--color-brand-gold-strong);
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

	.cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		padding: var(--space-4) var(--space-6);
		border-radius: var(--radius-pill);
		font-weight: 700;
		text-decoration: none;
		transition:
			transform var(--duration-fast) var(--ease-emphasized),
			box-shadow var(--duration-fast) var(--ease-emphasized),
			border-color var(--duration-fast) var(--ease-emphasized),
			background-color var(--duration-fast) var(--ease-emphasized),
			color var(--duration-fast) var(--ease-emphasized);
	}

	.cta-primary {
		color: var(--color-brand-ink);
		background: linear-gradient(135deg, var(--color-brand-gold), var(--color-brand-gold-strong));
		box-shadow: var(--shadow-brand);
	}

	.cta-primary:hover,
	.cta-primary:focus-visible {
		transform: translateY(-0.1rem);
		box-shadow: 0 1.15rem 2.2rem rgba(215, 177, 100, 0.34);
		outline: none;
	}

	.cta-ghost {
		color: var(--color-text-primary);
		border: 1px solid var(--color-border-neutral);
		background: var(--color-surface-soft);
	}

	.cta-ghost:hover,
	.cta-ghost:focus-visible {
		transform: translateY(-0.08rem);
		color: var(--color-brand-gold-strong);
		border-color: var(--color-border-strong);
		outline: none;
	}

	.cta-arrow {
		transition: transform var(--duration-fast) var(--ease-emphasized);
	}

	.cta-primary:hover .cta-arrow,
	.cta-primary:focus-visible .cta-arrow {
		transform: translate(0.08rem, -0.08rem);
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
	}

	.stat {
		display: grid;
		gap: var(--space-1);
		padding: var(--space-5);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border-neutral);
		background: var(--color-surface-panel);
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

	.pillars {
		display: grid;
		gap: var(--space-8);
	}

	.pillars h2,
	.closing h2 {
		margin: 0;
		max-width: 22ch;
		font-family: var(--font-family-display);
		font-size: clamp(1.6rem, 4vw, 2.5rem);
		line-height: 1.1;
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	.pillar-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-4);
	}

	.pillar-card {
		display: grid;
		gap: var(--space-3);
		padding: var(--space-6);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border-neutral);
		background: linear-gradient(180deg, var(--color-surface-panel), var(--color-surface-soft));
		box-shadow: var(--shadow-soft);
		transition:
			transform var(--duration-fast) var(--ease-emphasized),
			border-color var(--duration-fast) var(--ease-emphasized);
	}

	.pillar-card:hover {
		transform: translateY(-0.15rem);
		border-color: var(--color-border-strong);
	}

	.pillar-card h3 {
		margin: 0;
		font-size: var(--font-size-step-1);
		font-weight: 700;
		color: var(--color-brand-gold-strong);
	}

	.pillar-card p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.closing-inner {
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

	.closing-inner p {
		margin: 0;
		max-width: 44ch;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	@media (min-width: 48rem) {
		.landing {
			padding-inline: var(--layout-gutter-inline-md);
		}

		.stats {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.pillar-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		.landing {
			padding-inline: var(--layout-gutter-inline-lg);
		}

		.pillar-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cta,
		.cta-arrow,
		.pillar-card {
			transition-duration: 0ms;
		}
	}
</style>
