<script lang="ts">
	import { page } from '$app/state';
	import { site, type Seo } from '$lib/config/site';

	let {
		title,
		description = site.description,
		canonical,
		ogImage = site.ogImage,
		noindex = false
	}: Seo = $props();

	const fullTitle = $derived(title ? `${title} • ${site.name}` : site.name);
	const canonicalUrl = $derived(canonical ?? new URL(page.url.pathname, site.url).href);
	const ogImageUrl = $derived(new URL(ogImage, site.url).href);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:locale" content={site.locale} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />
</svelte:head>
