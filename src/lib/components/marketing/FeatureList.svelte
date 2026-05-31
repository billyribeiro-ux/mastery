<script lang="ts">
	type Props = {
		items: string[];
		title?: string;
	};

	let { items, title }: Props = $props();
</script>

<div class="feature-list">
	{#if title}
		<h2>{title}</h2>
	{/if}
	<ul>
		{#each items as item (item)}
			<li>
				<span class="check" aria-hidden="true">✓</span>
				<span>{item}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.feature-list {
		display: grid;
		gap: var(--space-4);
	}

	h2 {
		margin: 0;
		font-family: var(--font-family-display);
		font-size: var(--font-size-step-2);
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-primary);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-3);
	}

	li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.check {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 1.4rem;
		height: 1.4rem;
		margin-top: 0.1rem;
		border-radius: var(--radius-pill);
		background: var(--color-surface-soft-strong);
		color: var(--color-brand-gold-strong);
		font-size: 0.8rem;
		font-weight: 700;
	}
</style>
