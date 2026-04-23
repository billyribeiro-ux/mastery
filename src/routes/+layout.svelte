<script lang="ts">
	import '../app.css';

	import SiteHeader from '$lib/components/site/SiteHeader.svelte';

	let { children } = $props();
</script>

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
</div>

<style>
	.app-shell {
		min-height: 100vh;
	}

	.page-shell {
		width: 100%;
	}
</style>
