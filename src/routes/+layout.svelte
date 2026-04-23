<script lang="ts">
	import '$lib/styles/tokens.css';

	import SiteHeader from '$lib/components/site/SiteHeader.svelte';

	let { children } = $props();
</script>

<div class="app-shell">
	<SiteHeader />

	<main class="page-shell">
		{@render children()}
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family:
			Inter,
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
		background: #0b1120;
		color: #f8fafc;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.app-shell {
		min-height: 100vh;
	}

	.page-shell {
		width: 100%;
	}
</style>
