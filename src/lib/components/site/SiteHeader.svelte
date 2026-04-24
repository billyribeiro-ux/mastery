<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import { minWidth } from '$lib/styles/breakpoints';

	type AppPath = Pathname;

	type NavLeaf = {
		label: string;
		href: AppPath;
	};

	type NavGroup = {
		label: string;
		href?: AppPath;
		description?: string;
		children?: NavLeaf[];
	};

	const navItems: NavGroup[] = [
		{
			label: 'Live Trading Rooms',
			description: 'Real-time guidance, execution support, and structured market coverage.',
			children: [
				{ label: 'Day Trading Room', href: '/' },
				{ label: 'Swing Trading Room', href: '/' },
				{ label: 'Small Accounts Room', href: '/' }
			]
		},
		{
			label: 'Alert Services',
			description: 'High-signal trade ideas designed for discipline, speed, and clarity.',
			children: [
				{ label: 'SPX Profit Pulse', href: '/' },
				{ label: 'Explosive Swings', href: '/' }
			]
		},
		{
			label: 'Mentorship',
			href: '/',
			description: 'Coaching, accountability, and trader development programs.'
		},
		{
			label: 'Store',
			description: 'Courses, indicators, scanners, and trader-focused learning assets.',
			children: [
				{ label: 'Courses', href: '/' },
				{ label: 'Indicators', href: '/' },
				{ label: 'Scanners', href: '/' }
			]
		},
		{
			label: 'Our Mission',
			href: '/',
			description: 'The principles and purpose driving the Revolution Trading Pros platform.'
		},
		{
			label: 'About',
			href: '/',
			description: 'Team, story, and the operating philosophy behind the brand.'
		},
		{
			label: 'Blogs',
			href: '/',
			description: 'Market education, trader psychology, and platform updates.'
		},
		{
			label: 'Resources',
			description: 'Practical calculators, lists, and utilities for daily decision-making.',
			children: [
				{ label: 'Options Calculator', href: '/' },
				{ label: 'ETF Stocks List', href: '/' },
				{ label: 'Stock Indexes List', href: '/' }
			]
		}
	];

	let mobileMenuOpen = $state(false);
	let openMobileGroup: string | null = $state(null);
	let openDesktopGroup: string | null = $state(null);
	let headerElement: HTMLElement | null = null;

	function menuIdFor(label: string) {
		return `site-header-menu-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
	}

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

	function openDesktopGroupPanel(label: string) {
		openDesktopGroup = label;
	}

	function closeDesktopGroupPanel() {
		openDesktopGroup = null;
	}

	function toggleDesktopGroup(label: string) {
		openDesktopGroup = openDesktopGroup === label ? null : label;
	}

	function closeAllMenus() {
		closeMobileMenu();
		closeDesktopGroupPanel();
	}

	function handleDesktopFocusOut(event: FocusEvent) {
		if (!(event.currentTarget instanceof HTMLElement)) {
			return;
		}

		const nextTarget = event.relatedTarget;

		if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
			closeDesktopGroupPanel();
		}
	}

	onMount(() => {
		const desktopQuery = window.matchMedia(minWidth('lg'));

		const syncHeaderMode = () => {
			if (desktopQuery.matches) {
				closeMobileMenu();
				return;
			}

			closeDesktopGroupPanel();
		};

		const handlePointerDown = (event: PointerEvent) => {
			if (headerElement && !headerElement.contains(event.target as Node)) {
				closeAllMenus();
			}
		};

		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeAllMenus();
			}
		};

		syncHeaderMode();
		desktopQuery.addEventListener('change', syncHeaderMode);
		window.addEventListener('pointerdown', handlePointerDown);
		window.addEventListener('keydown', handleKeydown);

		return () => {
			desktopQuery.removeEventListener('change', syncHeaderMode);
			window.removeEventListener('pointerdown', handlePointerDown);
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:body class:mobile-menu-open={mobileMenuOpen} />

<header bind:this={headerElement} class="site-header">
	<div class="site-header-glow" aria-hidden="true"></div>

	<div class="header-shell">
		<div class="brand-cluster">
			<a
				class="brand"
				href={resolve('/')}
				aria-label="Revolution Trading Pros home"
				onclick={closeAllMenus}
			>
				<img
					class="brand-logo"
					src="/brand/revolution-trading-pros-logo-transparent.png"
					alt="Revolution Trading Pros"
				/>
			</a>

			<div class="brand-copy">
				<span class="brand-eyebrow">Trader Performance Platform</span>
				<p>Live rooms, mentorship, alerts, and tools engineered for disciplined execution.</p>
			</div>
		</div>

		<nav class="desktop-nav" aria-label="Primary navigation">
			<ul class="desktop-list">
				{#each navItems as item (item.label)}
					<li class="desktop-item">
						{#if item.children}
							<div
								class="desktop-dropdown"
								role="presentation"
								onmouseenter={() => openDesktopGroupPanel(item.label)}
								onmouseleave={closeDesktopGroupPanel}
								onfocusin={() => openDesktopGroupPanel(item.label)}
								onfocusout={handleDesktopFocusOut}
							>
								<button
									class="desktop-trigger"
									type="button"
									aria-haspopup="true"
									aria-expanded={openDesktopGroup === item.label}
									aria-controls={menuIdFor(item.label)}
									onclick={() => toggleDesktopGroup(item.label)}
								>
									<span>{item.label}</span>
									<span
										class:chevron-open={openDesktopGroup === item.label}
										class="chevron"
										aria-hidden="true"
									>
										▾
									</span>
								</button>

								<div
									id={menuIdFor(item.label)}
									class:desktop-panel-open={openDesktopGroup === item.label}
									class="desktop-panel"
								>
									<p class="desktop-panel-title">{item.label}</p>
									{#if item.description}
										<p class="desktop-panel-copy">{item.description}</p>
									{/if}

									<ul class="submenu-list">
										{#each item.children as child (child.label)}
											<li>
												<a
													class="submenu-link"
													href={resolve(child.href)}
													onclick={closeDesktopGroupPanel}
												>
													{child.label}
												</a>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{:else}
							<a
								class="desktop-link"
								href={resolve(item.href ?? '/')}
								onclick={closeDesktopGroupPanel}
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>

		<div class="header-actions">
			<a class="utility-link desktop-utility" href={resolve('/')} onclick={closeAllMenus}>
				Member Login
			</a>

			<a class="cta-button header-cta" href={resolve('/')} onclick={closeAllMenus}>
				<span>Start Membership</span>
				<span class="cta-arrow" aria-hidden="true">↗</span>
			</a>

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

		<div class="header-context">
			<div class="context-pill">
				<span class="context-dot" aria-hidden="true"></span>
				<span>Structured education for active traders</span>
			</div>

			<p class="context-copy">
				Responsive from mobile drawer to desktop command navigation with brand-consistent polish at
				every enterprise tier.
			</p>
		</div>
	</div>

	{#if mobileMenuOpen}
		<nav
			id="mobile-navigation"
			class="mobile-nav"
			aria-label="Mobile navigation"
			transition:slide={{ axis: 'y', duration: 220 }}
		>
			<div class="mobile-intro">
				<p class="mobile-kicker">Navigation</p>
				<h2>Build your trading operating system.</h2>
				<p>
					Move between live rooms, premium alerts, mentorship, and resources with a drawer designed
					for speed, clarity, and touch-first navigation.
				</p>

				<div class="mobile-cta-row">
					<a class="utility-link mobile-utility" href={resolve('/')} onclick={closeAllMenus}>
						Member Login
					</a>

					<a class="cta-button mobile-cta" href={resolve('/')} onclick={closeAllMenus}>
						<span>Start Membership</span>
						<span class="cta-arrow" aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<ul class="mobile-list">
				{#each navItems as item (item.label)}
					<li class="mobile-item">
						{#if item.children}
							<button
								class="mobile-group-trigger"
								type="button"
								aria-expanded={openMobileGroup === item.label}
								aria-controls={menuIdFor(item.label)}
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
								<ul id={menuIdFor(item.label)} class="mobile-submenu">
									{#each item.children as child (child.label)}
										<li>
											<a
												class="mobile-submenu-link"
												href={resolve(child.href)}
												onclick={closeAllMenus}
											>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						{:else}
							<a class="mobile-link" href={resolve(item.href ?? '/')} onclick={closeAllMenus}>
								<span>{item.label}</span>
								<span class="mobile-link-detail">{item.description}</span>
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	:global(body.mobile-menu-open) {
		overflow: hidden;
	}

	.site-header {
		--header-bg: var(--color-surface-backdrop);
		--header-bg-strong: var(--color-surface-backdrop-strong);
		--header-surface: var(--color-surface-panel);
		--header-surface-strong: var(--color-surface-panel-strong);
		--header-surface-soft: var(--color-surface-soft-strong);
		--header-border: var(--color-border-subtle);
		--header-border-strong: var(--color-border-strong);
		--header-text: var(--color-text-primary);
		--header-text-muted: var(--color-text-secondary);
		--header-accent: var(--color-brand-gold);
		--header-accent-strong: var(--color-brand-gold-strong);
		--header-shadow: var(--shadow-floating);
		--header-ease: var(--ease-emphasized);
		--header-max-width: var(--layout-max-width);

		position: sticky;
		top: 0;
		z-index: 1000;
		overflow: clip;
		background:
			linear-gradient(180deg, rgba(10, 15, 30, 0.97), rgba(10, 15, 30, 0.9)),
			radial-gradient(circle at top left, rgba(240, 222, 139, 0.14), transparent 32rem);
		backdrop-filter: blur(1.25rem);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: var(--header-shadow);
		font-family: var(--font-family-sans);
	}

	.site-header-glow {
		position: absolute;
		inset: -40% auto auto 8%;
		width: 16rem;
		height: 16rem;
		border-radius: 999rem;
		background: radial-gradient(circle, rgba(240, 222, 139, 0.24), transparent 68%);
		filter: blur(1.25rem);
		pointer-events: none;
	}

	.header-shell {
		position: relative;
		max-width: var(--header-max-width);
		margin: 0 auto;
		padding: 0.85rem var(--layout-gutter-inline) 1rem;
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.85rem 0.9rem;
	}

	.brand-cluster {
		min-width: 0;
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}

	.brand {
		position: relative;
		display: inline-flex;
		align-items: center;
		text-decoration: none;
	}

	.brand::after {
		content: '';
		position: absolute;
		inset: auto 0 -0.35rem;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(240, 222, 139, 0),
			rgba(240, 222, 139, 0.85),
			rgba(240, 222, 139, 0)
		);
		transform: scaleX(0.2);
		transform-origin: center;
		opacity: 0;
		transition:
			transform var(--duration-standard) var(--header-ease),
			opacity var(--duration-standard) var(--header-ease);
	}

	.brand:hover::after,
	.brand:focus-visible::after {
		transform: scaleX(1);
		opacity: 1;
	}

	.brand-logo {
		display: block;
		width: clamp(10.5rem, 34vw, 16rem);
		height: auto;
		filter: drop-shadow(0 0.5rem 1.2rem rgba(0, 0, 0, 0.2));
	}

	.brand-copy {
		display: none;
		min-width: 0;
		font-family: var(--font-family-display);
	}

	.brand-eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--header-accent-strong);
	}

	.brand-copy p {
		margin: 0.3rem 0 0;
		max-width: 28rem;
		font-size: 0.9rem;
		line-height: 1.45;
		color: var(--header-text-muted);
	}

	.desktop-nav {
		display: none;
	}

	.desktop-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.35rem;
	}

	.desktop-item {
		position: relative;
	}

	.desktop-dropdown {
		position: relative;
	}

	.desktop-link,
	.desktop-trigger {
		appearance: none;
		border: 1px solid transparent;
		background: transparent;
		color: var(--header-text);
		text-decoration: none;
		font: inherit;
		font-size: 0.83rem;
		font-weight: 650;
		letter-spacing: 0.01em;
		padding: 0.78rem 0.8rem;
		border-radius: 999rem;
		display: inline-flex;
		align-items: center;
		gap: 0.42rem;
		cursor: pointer;
		white-space: nowrap;
		transition:
			border-color var(--duration-fast) var(--header-ease),
			background-color var(--duration-fast) var(--header-ease),
			color var(--duration-fast) var(--header-ease),
			transform var(--duration-fast) var(--header-ease);
	}

	.desktop-link:hover,
	.desktop-link:focus-visible,
	.desktop-trigger:hover,
	.desktop-trigger:focus-visible {
		color: var(--header-accent-strong);
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(240, 222, 139, 0.16);
		transform: translateY(-0.05rem);
		outline: none;
	}

	.chevron {
		font-size: 0.8rem;
		opacity: 0.8;
		transition: transform var(--duration-fast) var(--header-ease);
	}

	.chevron-open {
		transform: rotate(180deg);
	}

	.desktop-panel {
		position: absolute;
		top: calc(100% + 0.65rem);
		left: 0;
		width: min(22rem, 78vw);
		padding: 1rem;
		border-radius: 1.2rem;
		background:
			linear-gradient(180deg, rgba(18, 26, 46, 0.98), rgba(14, 21, 38, 0.98)),
			radial-gradient(circle at top right, rgba(240, 222, 139, 0.12), transparent 50%);
		border: 1px solid var(--header-border);
		box-shadow: 0 1.6rem 3rem rgba(0, 0, 0, 0.35);
		opacity: 0;
		visibility: hidden;
		transform: translateY(0.65rem);
		pointer-events: none;
		transition:
			opacity var(--duration-fast) var(--header-ease),
			transform var(--duration-fast) var(--header-ease),
			visibility var(--duration-fast) var(--header-ease);
	}

	.desktop-item:nth-last-child(-n + 3) .desktop-panel {
		left: auto;
		right: 0;
	}

	.desktop-panel-open {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
		pointer-events: auto;
	}

	.desktop-panel-title {
		margin: 0;
		font-size: 0.98rem;
		font-weight: 750;
		color: var(--header-text);
	}

	.desktop-panel-copy {
		margin: 0.45rem 0 0.85rem;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--header-text-muted);
	}

	.submenu-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.3rem;
	}

	.submenu-link {
		display: block;
		padding: 0.8rem 0.9rem;
		border-radius: 0.9rem;
		text-decoration: none;
		color: var(--header-text-muted);
		font-weight: 550;
		transition:
			background-color var(--duration-fast) var(--header-ease),
			color var(--duration-fast) var(--header-ease),
			transform var(--duration-fast) var(--header-ease);
	}

	.submenu-link:hover,
	.submenu-link:focus-visible {
		background: rgba(255, 255, 255, 0.05);
		color: var(--header-accent-strong);
		transform: translateX(0.08rem);
		outline: none;
	}

	.header-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.7rem;
	}

	.desktop-utility,
	.header-cta {
		display: none;
	}

	.utility-link,
	.cta-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		border-radius: 999rem;
		font-weight: 700;
		letter-spacing: 0.01em;
		transition:
			transform var(--duration-fast) var(--header-ease),
			box-shadow var(--duration-fast) var(--header-ease),
			border-color var(--duration-fast) var(--header-ease),
			background-color var(--duration-fast) var(--header-ease),
			color var(--duration-fast) var(--header-ease);
	}

	.utility-link {
		padding: 0.82rem 1rem;
		color: var(--header-text);
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.03);
	}

	.utility-link:hover,
	.utility-link:focus-visible {
		transform: translateY(-0.08rem);
		color: var(--header-accent-strong);
		border-color: rgba(240, 222, 139, 0.28);
		outline: none;
	}

	.cta-button {
		gap: 0.45rem;
		padding: 0.84rem 1.1rem;
		color: var(--color-brand-ink);
		background: linear-gradient(135deg, var(--header-accent), var(--header-accent-strong));
		box-shadow: var(--shadow-brand);
	}

	.cta-button:hover,
	.cta-button:focus-visible {
		transform: translateY(-0.1rem);
		box-shadow: 0 1.15rem 2.2rem rgba(215, 177, 100, 0.34);
		outline: none;
	}

	.cta-arrow {
		font-size: 0.92rem;
		transition: transform var(--duration-fast) var(--header-ease);
	}

	.cta-button:hover .cta-arrow,
	.cta-button:focus-visible .cta-arrow {
		transform: translate(0.08rem, -0.08rem);
	}

	.mobile-toggle {
		width: 3rem;
		height: 3rem;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.04);
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.28rem;
		cursor: pointer;
		padding: 0;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
		transition:
			background-color var(--duration-fast) var(--header-ease),
			border-color var(--duration-fast) var(--header-ease),
			transform var(--duration-fast) var(--header-ease);
	}

	.mobile-toggle:hover,
	.mobile-toggle:focus-visible {
		background: rgba(255, 255, 255, 0.07);
		border-color: rgba(240, 222, 139, 0.24);
		transform: translateY(-0.08rem);
		outline: none;
	}

	.mobile-toggle span {
		display: block;
		width: 1.2rem;
		height: 0.12rem;
		background: var(--header-text);
		border-radius: 999rem;
		transition:
			transform var(--duration-fast) var(--header-ease),
			opacity var(--duration-fast) var(--header-ease);
	}

	.bar-hidden {
		opacity: 0;
	}

	.bar-rotated-top {
		transform: translateY(0.4rem) rotate(45deg);
	}

	.bar-rotated-bottom {
		transform: translateY(-0.4rem) rotate(-45deg);
	}

	.header-context {
		display: none;
		grid-column: 1 / -1;
		align-items: center;
		justify-content: space-between;
		gap: 0.85rem;
		padding: 0.8rem 1rem;
		border-radius: 1.1rem;
		background: linear-gradient(135deg, var(--header-surface-soft), rgba(255, 255, 255, 0.02));
		border: 1px solid rgba(255, 255, 255, 0.07);
	}

	.context-pill {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--header-accent-strong);
	}

	.context-dot {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--header-accent), var(--header-accent-strong));
		box-shadow: 0 0 0.8rem rgba(240, 222, 139, 0.65);
	}

	.context-copy {
		margin: 0;
		max-width: 36rem;
		font-size: 0.92rem;
		line-height: 1.45;
		color: var(--header-text-muted);
		text-align: right;
	}

	.mobile-nav {
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		background:
			linear-gradient(180deg, rgba(9, 14, 28, 0.985), rgba(9, 14, 28, 0.975)),
			radial-gradient(circle at top right, rgba(240, 222, 139, 0.12), transparent 28rem);
		max-height: calc(100dvh - 4.4rem);
		overflow-y: auto;
		overscroll-behavior: contain;
		padding: 0 0 1rem;
	}

	.mobile-intro {
		padding: 1rem 1rem 0.55rem;
	}

	.mobile-kicker {
		margin: 0;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--header-accent-strong);
	}

	.mobile-intro h2 {
		margin: 0.4rem 0 0;
		font-size: clamp(1.45rem, 4vw, 1.9rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		color: var(--header-text);
	}

	.mobile-intro p {
		margin: 0.7rem 0 0;
		max-width: 34rem;
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--header-text-muted);
	}

	.mobile-cta-row {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.7rem;
		margin-top: 1rem;
	}

	.mobile-list {
		list-style: none;
		margin: 0;
		padding: 0.5rem 1rem 0;
		display: grid;
		gap: 0.4rem;
	}

	.mobile-item {
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.025);
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.mobile-link,
	.mobile-group-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.9rem;
		text-decoration: none;
		color: var(--header-text);
		background: transparent;
		border: 0;
		font: inherit;
		font-weight: 650;
		padding: 1rem 1rem;
		cursor: pointer;
		border-radius: 1rem;
		transition:
			background-color var(--duration-fast) var(--header-ease),
			color var(--duration-fast) var(--header-ease);
	}

	.mobile-link {
		align-items: flex-start;
		flex-direction: column;
	}

	.mobile-link:hover,
	.mobile-link:focus-visible,
	.mobile-group-trigger:hover,
	.mobile-group-trigger:focus-visible {
		color: var(--header-accent-strong);
		background: rgba(255, 255, 255, 0.04);
		outline: none;
	}

	.mobile-link-detail {
		font-size: 0.88rem;
		font-weight: 500;
		line-height: 1.45;
		color: var(--header-text-muted);
	}

	.mobile-submenu {
		list-style: none;
		margin: 0;
		padding: 0 0.7rem 0.8rem;
		display: grid;
		gap: 0.3rem;
	}

	.mobile-submenu-link {
		display: block;
		padding: 0.82rem 0.9rem;
		border-radius: 0.85rem;
		text-decoration: none;
		color: var(--header-text-muted);
		background: rgba(255, 255, 255, 0.025);
		transition:
			background-color var(--duration-fast) var(--header-ease),
			color var(--duration-fast) var(--header-ease),
			transform var(--duration-fast) var(--header-ease);
	}

	.mobile-submenu-link:hover,
	.mobile-submenu-link:focus-visible {
		background: rgba(255, 255, 255, 0.06);
		color: var(--header-accent-strong);
		transform: translateX(0.08rem);
		outline: none;
	}

	.mobile-chevron {
		font-size: 0.9rem;
		transition: transform var(--duration-fast) var(--header-ease);
	}

	.mobile-chevron-open {
		transform: rotate(180deg);
	}

	@media (min-width: 30rem) {
		.header-shell {
			padding: 0.95rem var(--layout-gutter-inline) 1rem;
		}

		.brand-logo {
			width: clamp(12rem, 32vw, 17rem);
		}

		.mobile-intro,
		.mobile-list {
			padding-inline: 1.1rem;
		}

		.mobile-cta-row {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 48rem) {
		.header-shell {
			padding: 1rem var(--layout-gutter-inline-md) 1.1rem;
			gap: 1rem 1.1rem;
		}

		.brand-logo {
			width: clamp(13rem, 28vw, 18rem);
		}

		.header-cta {
			display: inline-flex;
		}

		.header-context {
			display: flex;
		}
	}

	@media (min-width: 64rem) {
		.header-shell {
			padding: 1rem var(--layout-gutter-inline-lg) 1.15rem;
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: start;
		}

		.brand-logo {
			width: clamp(14rem, 22vw, 19rem);
		}

		.desktop-nav {
			display: block;
			grid-column: 1 / -1;
		}

		.desktop-utility {
			display: inline-flex;
		}

		.mobile-toggle,
		.mobile-nav,
		.header-context {
			display: none;
		}
	}

	@media (min-width: 80rem) {
		.header-shell {
			grid-template-columns: auto minmax(0, 1fr) auto;
			align-items: center;
			gap: 1rem 1.5rem;
		}

		.desktop-nav {
			grid-column: auto;
		}

		.desktop-list {
			flex-wrap: nowrap;
			justify-content: center;
			gap: 0.18rem;
		}

		.desktop-link,
		.desktop-trigger {
			font-size: 0.84rem;
			padding: 0.8rem 0.72rem;
		}
	}

	@media (min-width: 96rem) {
		.brand-logo {
			width: clamp(15rem, 18vw, 20rem);
		}

		.desktop-list {
			gap: 0.3rem;
		}

		.desktop-link,
		.desktop-trigger {
			font-size: 0.92rem;
			padding: 0.82rem 0.92rem;
		}

		.header-actions {
			gap: 0.8rem;
		}
	}

	@media (min-width: 120rem) {
		.site-header {
			--header-max-width: var(--layout-max-width-xl);
		}

		.header-shell {
			padding-block: 1.1rem 1.2rem;
		}

		.desktop-list {
			gap: 0.4rem;
		}

		.desktop-link,
		.desktop-trigger {
			padding: 0.86rem 1rem;
		}

		.desktop-panel {
			width: 24rem;
		}
	}

	@media (min-width: 160rem) {
		.header-shell {
			padding-inline: 3rem;
		}

		.desktop-link,
		.desktop-trigger {
			padding-inline: 1.08rem;
		}
	}

	@media (min-width: 240rem) {
		.header-shell {
			padding-inline: 4rem;
			gap: 1.25rem 2rem;
		}

		.desktop-list {
			gap: 0.55rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			scroll-behavior: auto;
		}

		.brand::after,
		.desktop-link,
		.desktop-trigger,
		.desktop-panel,
		.submenu-link,
		.utility-link,
		.cta-button,
		.cta-arrow,
		.mobile-toggle,
		.mobile-toggle span,
		.mobile-link,
		.mobile-group-trigger,
		.mobile-submenu-link,
		.mobile-chevron {
			transition-duration: 0ms;
			animation-duration: 0ms;
		}
	}
</style>
