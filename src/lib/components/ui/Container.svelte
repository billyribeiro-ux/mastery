<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		size?: 'default' | 'xl';
		class?: string;
		children: Snippet;
	};

	let { size = 'default', class: className, children }: Props = $props();
</script>

<div class={['container', size, className]}>
	{@render children()}
</div>

<style>
	.container {
		width: 100%;
		margin-inline: auto;
		max-width: var(--layout-max-width);
		padding-inline: var(--layout-gutter-inline);
	}

	.xl {
		max-width: var(--layout-max-width-xl);
	}

	@media (min-width: 48rem) {
		.container {
			padding-inline: var(--layout-gutter-inline-md);
		}
	}

	@media (min-width: 64rem) {
		.container {
			padding-inline: var(--layout-gutter-inline-lg);
		}
	}
</style>
