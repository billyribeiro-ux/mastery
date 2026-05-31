<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';

	import Seo from '$lib/components/site/Seo.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';

	let { children } = $props();
</script>

<Seo {...page.data.seo ?? {}} />

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="alternate icon" href="/favicon.ico" sizes="any" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</svelte:head>

<div class="app-shell">
	<SiteHeader />

	<main class="page-shell">
		{@render children()}
	</main>

	<SiteFooter />
</div>

<style>
	.app-shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.page-shell {
		flex: 1;
		width: 100%;
	}
</style>
