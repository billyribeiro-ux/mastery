<script lang="ts">
	import { resolve } from '$app/paths';

	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import { accountNav, footerColumns, legalLinks, socialLinks } from '$lib/config/navigation';
	import { site } from '$lib/config/site';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<Container>
		<div class="footer-top">
			<div class="footer-brand">
				<a class="brand" href={resolve('/')} aria-label="{site.name} home">
					<img
						class="brand-logo"
						src="/brand/revolution-trading-pros-logo-transparent.png"
						alt={site.name}
					/>
				</a>
				<p class="brand-copy">{site.description}</p>
				<Button href={resolve(accountNav.join.href)} arrow>{accountNav.join.label}</Button>
			</div>

			<nav class="footer-nav" aria-label="Footer navigation">
				{#each footerColumns as column (column.title)}
					<div class="footer-column">
						<h2 class="footer-heading">{column.title}</h2>
						<ul>
							{#each column.links as link (link.label)}
								<li>
									<a class="footer-link" href={resolve(link.href)}>{link.label}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</div>

		<div class="footer-social">
			<ul>
				{#each socialLinks as social (social.label)}
					<li>
						<a class="footer-link" href={social.href} target="_blank" rel="noreferrer noopener">
							{social.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<p class="footer-disclaimer">
			Trading involves substantial risk of loss and is not suitable for every investor. All content
			is for educational purposes only and is not financial advice. Past performance does not
			guarantee future results.
		</p>

		<div class="footer-bottom">
			<p class="footer-copy">© {year} {site.name}. All rights reserved.</p>
			<ul class="footer-legal">
				{#each legalLinks as link (link.label)}
					<li>
						<a class="footer-link" href={resolve(link.href)}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</Container>
</footer>

<style>
	.site-footer {
		margin-top: var(--space-16);
		padding-block: var(--space-12) var(--space-8);
		border-top: 1px solid var(--color-border-neutral);
		background:
			radial-gradient(circle at top left, rgba(240, 222, 139, 0.08), transparent 32rem),
			var(--color-surface-canvas);
		color: var(--color-text-secondary);
		font-family: var(--font-family-sans);
	}

	.footer-top {
		display: grid;
		gap: var(--space-10);
	}

	.footer-brand {
		display: grid;
		justify-items: start;
		gap: var(--space-4);
		max-width: 30rem;
	}

	.brand-logo {
		width: clamp(11rem, 40vw, 14rem);
		height: auto;
		filter: drop-shadow(0 0.5rem 1.2rem rgba(0, 0, 0, 0.2));
	}

	.brand-copy {
		margin: 0;
		line-height: 1.6;
	}

	.footer-nav {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-8) var(--space-6);
	}

	.footer-heading {
		margin: 0 0 var(--space-4);
		font-size: var(--font-size-step--1);
		font-weight: 700;
		letter-spacing: var(--tracking-eyebrow);
		text-transform: uppercase;
		color: var(--color-brand-gold-strong);
	}

	.footer-nav ul,
	.footer-social ul,
	.footer-legal {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-3);
	}

	.footer-link {
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-standard);
	}

	.footer-link:hover,
	.footer-link:focus-visible {
		color: var(--color-brand-gold-strong);
		outline: none;
	}

	.footer-social {
		margin-top: var(--space-10);
		padding-top: var(--space-8);
		border-top: 1px solid var(--color-border-neutral);
	}

	.footer-social ul {
		grid-auto-flow: column;
		justify-content: start;
		gap: var(--space-6);
	}

	.footer-disclaimer {
		margin: var(--space-8) 0 0;
		font-size: var(--font-size-step--1);
		line-height: 1.6;
		color: var(--color-text-tertiary);
	}

	.footer-bottom {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		margin-top: var(--space-8);
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border-neutral);
	}

	.footer-copy {
		margin: 0;
		font-size: var(--font-size-step--1);
		color: var(--color-text-tertiary);
	}

	.footer-legal {
		grid-auto-flow: column;
		gap: var(--space-5);
		font-size: var(--font-size-step--1);
	}

	@media (min-width: 48rem) {
		.footer-top {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
			gap: var(--space-12);
		}

		.footer-nav {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.footer-link {
			transition-duration: 0ms;
		}
	}
</style>
