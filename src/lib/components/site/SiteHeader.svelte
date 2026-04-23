<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	type AppPath = Pathname;

	type NavLeaf = {
		label: string;
		href: AppPath;
	};

	type NavGroup = {
		label: string;
		href?: AppPath;
		children?: NavLeaf[];
	};

	// NOTE: Placeholder `href: '/'` values will be replaced with real route paths
	// once those routes exist. SvelteKit's `resolve()` requires a root-relative
	// pathname (`/...`), not `'#'`, so we standardize on `/` as the temporary target.
	const navItems: NavGroup[] = [
		{
			label: 'Live Trading Rooms',
			children: [
				{ label: 'Day Trading Room', href: '/' },
				{ label: 'Swing Trading Room', href: '/' },
				{ label: 'Small Accounts Room', href: '/' }
			]
		},
		{
			label: 'Alert Services',
			children: [
				{ label: 'SPX Profit Pulse', href: '/' },
				{ label: 'Explosive Swings', href: '/' }
			]
		},
		{ label: 'Mentorship', href: '/' },
		{
			label: 'Store',
			children: [
				{ label: 'Courses', href: '/' },
				{ label: 'Indicators', href: '/' },
				{ label: 'Scanners', href: '/' }
			]
		},
		{ label: 'Our Mission', href: '/' },
		{ label: 'About', href: '/' },
		{ label: 'Blogs', href: '/' },
		{
			label: 'Resources',
			children: [
				{ label: 'Options Calculator', href: '/' },
				{ label: 'ETF Stocks List', href: '/' },
				{ label: 'Stock Indexes List', href: '/' }
			]
		}
	];

	let mobileMenuOpen = $state(false);
	let openMobileGroup: string | null = $state(null);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;

		if (!mobileMenuOpen) {
			openMobileGroup = null;
		}
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		openMobileGroup = null;
	}

	function toggleMobileGroup(label: string) {
		openMobileGroup = openMobileGroup === label ? null : label;
	}
</script>

<svelte:body class:mobile-menu-open={mobileMenuOpen} />

<header class="site-header">
	<div class="header-shell">
		<a class="brand" href={resolve('/')} aria-label="Revolution Trading Pros home" onclick={closeMobileMenu}>
			<img
				class="brand-logo"
				src="/brand/revolution-trading-pros-logo.png"
				alt="Revolution Trading Pros"
			/>
		</a>

		<nav class="desktop-nav" aria-label="Primary navigation">
			<ul class="desktop-list">
				{#each navItems as item (item.label)}
					<li class="desktop-item">
						{#if item.children}
							<div class="desktop-dropdown">
								<button class="desktop-trigger" type="button" aria-haspopup="true">
									<span>{item.label}</span>
									<span class="chevron" aria-hidden="true">▾</span>
								</button>

								<div class="desktop-panel">
									<ul class="submenu-list">
										{#each item.children as child (child.label)}
											<li>
												<a class="submenu-link" href={resolve(child.href)}>
													{child.label}
												</a>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{:else}
							<a class="desktop-link" href={resolve(item.href ?? '/')}>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>

		<div class="header-actions">
			<a class="login-button desktop-login" href={resolve('/')}>Login</a>

			<button
				class="mobile-toggle"
				type="button"
				aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-navigation"
				onclick={toggleMobileMenu}
			>
				<span class:bar-hidden={mobileMenuOpen}></span>
				<span class:bar-rotated-top={mobileMenuOpen}></span>
				<span class:bar-rotated-bottom={mobileMenuOpen}></span>
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
			<ul class="mobile-list">
				{#each navItems as item (item.label)}
					<li class="mobile-item">
						{#if item.children}
							<button
								class="mobile-group-trigger"
								type="button"
								aria-expanded={openMobileGroup === item.label}
								onclick={() => toggleMobileGroup(item.label)}
							>
								<span>{item.label}</span>
								<span
									class:mobile-chevron-open={openMobileGroup === item.label}
									class="mobile-chevron"
									aria-hidden="true"
								>
									▾
								</span>
							</button>

							{#if openMobileGroup === item.label}
								<ul class="mobile-submenu">
									{#each item.children as child (child.label)}
										<li>
											<a class="mobile-submenu-link" href={resolve(child.href)} onclick={closeMobileMenu}>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						{:else}
							<a class="mobile-link" href={resolve(item.href ?? '/')} onclick={closeMobileMenu}>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}

				<li class="mobile-login-row">
					<a class="login-button mobile-login" href={resolve('/')} onclick={closeMobileMenu}>Login</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	/* ─── Component-local tokens (brand + header chrome) ─────────────────
	 * NOTE: Layout breakpoints are the PE7 9-tier system, defined in
	 * src/lib/styles/tokens.css. This component uses `min-width` only,
	 * rem only, mobile-first. Tier ladder used here: sm, md, lg.
	 */
	:global(body.mobile-menu-open) {
		overflow: hidden;
	}

	.site-header {
		--header-bg: #121a2f;
		--header-surface: #1a2440;
		--header-border: rgba(255, 255, 255, 0.1);
		--header-text: #f5f7fb;
		--header-text-muted: rgba(245, 247, 251, 0.82);
		--header-accent: #d7b164;
		--header-accent-strong: #f0de8b;
		--header-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);

		position: sticky;
		top: 0;
		z-index: 1000;
		background: linear-gradient(180deg, rgba(18, 26, 47, 0.98), rgba(18, 26, 47, 0.94));
		backdrop-filter: blur(14px);
		border-bottom: 1px solid var(--header-border);
		box-shadow: var(--header-shadow);
	}

	/* ─── Mobile-first base (xs tier, < 30rem) ────────────────────────── */
	.header-shell {
		max-width: var(--layout-max-width);
		margin: 0 auto;
		padding: 0.8rem var(--layout-gutter-inline);
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 1rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		min-width: 0;
	}

	.brand-logo {
		display: block;
		width: min(100%, 13.5rem);
		height: auto;
	}

	.desktop-nav,
	.desktop-login {
		display: none;
	}

	.mobile-toggle {
		width: 3rem;
		height: 3rem;
		border-radius: 0.95rem;
		border: 1px solid var(--header-border);
		background: rgba(255, 255, 255, 0.04);
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.28rem;
		cursor: pointer;
		padding: 0;
	}

	.mobile-toggle span {
		display: block;
		width: 1.2rem;
		height: 2px;
		background: var(--header-text);
		border-radius: 999px;
		transition:
			transform 160ms ease,
			opacity 160ms ease;
	}

	.bar-hidden {
		opacity: 0;
	}

	.bar-rotated-top {
		transform: translateY(0.38rem) rotate(45deg);
	}

	.bar-rotated-bottom {
		transform: translateY(-0.38rem) rotate(-45deg);
	}

	.header-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.75rem;
	}

	/* Mobile drawer nav (shown when mobileMenuOpen === true) */
	.mobile-nav {
		border-top: 1px solid var(--header-border);
		background: rgba(13, 20, 37, 0.98);
		max-height: calc(100dvh - 5rem);
		overflow-y: auto;
		overscroll-behavior: contain;
	}

	.mobile-list {
		list-style: none;
		margin: 0;
		padding: 0.65rem 0.8rem 0.9rem;
		display: grid;
		gap: 0.35rem;
	}

	.mobile-item {
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		padding-bottom: 0.35rem;
	}

	.mobile-link,
	.mobile-group-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		color: var(--header-text);
		background: transparent;
		border: 0;
		font: inherit;
		font-weight: 700;
		padding: 0.95rem 0.2rem;
		cursor: pointer;
	}

	.mobile-link:hover,
	.mobile-link:focus-visible,
	.mobile-group-trigger:hover,
	.mobile-group-trigger:focus-visible {
		color: var(--header-accent-strong);
		outline: none;
	}

	.mobile-submenu {
		list-style: none;
		margin: 0;
		padding: 0 0 0.7rem 0.65rem;
		display: grid;
		gap: 0.15rem;
	}

	.mobile-submenu-link {
		display: block;
		text-decoration: none;
		color: var(--header-text-muted);
		padding: 0.7rem 0.4rem;
		border-radius: 0.7rem;
	}

	.mobile-submenu-link:hover,
	.mobile-submenu-link:focus-visible {
		color: var(--header-accent-strong);
		outline: none;
	}

	.mobile-chevron {
		transition: transform 160ms ease;
	}

	.mobile-chevron-open {
		transform: rotate(180deg);
	}

	.mobile-login-row {
		padding-top: 0.8rem;
	}

	.mobile-login {
		width: 100%;
	}

	/* Shared "Login" pill (mobile variant visible by default) */
	.login-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		font-weight: 800;
		letter-spacing: 0.01em;
		color: #111827;
		background: linear-gradient(135deg, var(--header-accent), var(--header-accent-strong));
		border-radius: 999px;
		padding: 0.82rem 1.15rem;
		box-shadow: 0 10px 24px rgba(215, 177, 100, 0.28);
		transition:
			transform 160ms ease,
			box-shadow 160ms ease,
			filter 160ms ease;
	}

	.login-button:hover,
	.login-button:focus-visible {
		transform: translateY(-1px);
		box-shadow: 0 14px 30px rgba(215, 177, 100, 0.36);
		filter: brightness(1.03);
		outline: none;
	}

	/* Desktop-nav primitives (collapsed on mobile; revealed at lg+) */
	.desktop-list {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		margin: 0;
		padding: 0;
	}

	.desktop-item {
		position: relative;
	}

	.desktop-link,
	.desktop-trigger {
		appearance: none;
		border: 0;
		background: transparent;
		color: var(--header-text);
		text-decoration: none;
		font: inherit;
		font-weight: 600;
		letter-spacing: 0.01em;
		padding: 0.8rem 0.95rem;
		border-radius: 0.85rem;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		cursor: pointer;
		transition:
			background-color 160ms ease,
			color 160ms ease,
			transform 160ms ease;
	}

	.desktop-link:hover,
	.desktop-link:focus-visible,
	.desktop-trigger:hover,
	.desktop-trigger:focus-visible {
		background: rgba(255, 255, 255, 0.06);
		color: var(--header-accent-strong);
		outline: none;
	}

	.chevron {
		font-size: 0.8rem;
		opacity: 0.85;
	}

	.desktop-dropdown {
		position: relative;
	}

	.desktop-panel {
		position: absolute;
		top: calc(100% + 0.65rem);
		left: 0;
		min-width: 16rem;
		padding: 0.55rem;
		border-radius: 1rem;
		background: rgba(20, 29, 52, 0.98);
		border: 1px solid var(--header-border);
		box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
		opacity: 0;
		visibility: hidden;
		transform: translateY(0.5rem);
		transition:
			opacity 160ms ease,
			transform 160ms ease,
			visibility 160ms ease;
	}

	.desktop-item:nth-last-child(-n+3) .desktop-panel {
		left: auto;
		right: 0;
	}

	.desktop-dropdown:hover .desktop-panel,
	.desktop-dropdown:focus-within .desktop-panel {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.submenu-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.25rem;
	}

	.submenu-link {
		display: block;
		text-decoration: none;
		color: var(--header-text-muted);
		padding: 0.8rem 0.9rem;
		border-radius: 0.8rem;
		font-weight: 550;
		transition:
			background-color 160ms ease,
			color 160ms ease;
	}

	.submenu-link:hover,
	.submenu-link:focus-visible {
		background: rgba(255, 255, 255, 0.06);
		color: var(--header-accent-strong);
		outline: none;
	}

	/* ═══════════════════════════════════════════════════════════════════
	 * PE7 responsive ladder (mobile-first, min-width, rem only).
	 * Tiers used by this component: sm → md → lg → xl → xl3.
	 * ═══════════════════════════════════════════════════════════════════ */

	/* ─── sm and up (>= 30rem): breathing room for stacked layout ─────── */
	@media (min-width: 30rem) {
		.header-shell {
			padding: 0.9rem var(--layout-gutter-inline);
		}

		.brand-logo {
			width: min(100%, 16rem);
		}

		.mobile-list {
			padding: 0.75rem 1rem 1rem;
		}
	}

	/* ─── md and up (>= 48rem): wider gutters, bigger brand ───────────── */
	@media (min-width: 48rem) {
		.header-shell {
			padding: 0.95rem var(--layout-gutter-inline-md);
		}

		.brand-logo {
			width: min(100%, 18rem);
		}
	}

	/* ─── lg and up (>= 64rem): wider gutters, larger logo ────────────────── *
	 * Still using mobile drawer nav because of the large number of nav items.
	 */
	@media (min-width: 64rem) {
		.header-shell {
			padding: 1rem var(--layout-gutter-inline-lg);
			gap: 1.25rem;
		}
	}

	/* ─── xl and up (>= 80rem): desktop patterns emerge ───────────────── *
	 * Flip to 3-column grid, show desktop nav + login, hide burger drawer.
	 */
	@media (min-width: 80rem) {
		.header-shell {
			grid-template-columns: auto 1fr auto;
		}

		.desktop-nav {
			display: block;
			min-width: 0;
		}

		.desktop-login {
			display: inline-flex;
		}

		.mobile-toggle,
		.mobile-nav {
			display: none;
		}

		/* Tighter spacing to fit 8 items at 1280px */
		.desktop-list {
			gap: 0.15rem;
		}

		.desktop-link,
		.desktop-trigger {
			font-size: 0.9rem;
			padding: 0.6rem 0.7rem;
			gap: 0.35rem;
		}
	}

	/* ─── xl2 and up (>= 96rem): standard desktop target ───────────────── */
	@media (min-width: 96rem) {
		.brand-logo {
			width: min(100%, 20rem);
		}

		.desktop-list {
			gap: 0.25rem;
		}

		.desktop-link,
		.desktop-trigger {
			font-size: 0.95rem;
			padding: 0.75rem 0.9rem;
		}
	}

	/* ─── xl3 and up (>= 120rem): ultra-wide — expand chrome, not prose */
	@media (min-width: 120rem) {
		.header-shell {
			max-width: var(--layout-max-width-xl);
		}

		.desktop-list {
			gap: 0.4rem;
		}

		.desktop-link,
		.desktop-trigger {
			font-size: 1rem;
			padding: 0.85rem 1.05rem;
		}
	}
</style>
