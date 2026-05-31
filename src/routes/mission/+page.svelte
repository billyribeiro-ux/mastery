<script lang="ts">
	import { resolve } from '$app/paths';

	import { CtaBand, PageHero } from '$lib/components/marketing';
	import { Button, Container, Section } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
</script>

<PageHero
	eyebrow="Our Mission"
	title="Fewer trades. Better results."
	lead="We exist to help traders stop overtrading and start executing with discipline, structure, and conviction."
/>

<Section eyebrow="The problem" title="Why most traders fail.">
	<Container>
		<p class="body-copy">
			Most trading education teaches strategies without building the habits required to execute
			them. Traders learn setups but not process. They understand risk in theory but violate it in
			practice. The result is a cycle of inconsistency — profitable stretches followed by drawdowns
			that erase the gains.
		</p>
		<p class="body-copy">
			Mastery Trading was built to break that cycle. Every room, alert, and resource is designed
			around a single outcome: consistent, disciplined execution.
		</p>
	</Container>
</Section>

<CtaBand
	title="Ready to trade differently?"
	copy="Join traders who have committed to the process — not just the profits."
>
	{#snippet actions()}
		<Button href={resolve(accountNav.join.href)} size="lg" arrow>{accountNav.join.label}</Button>
	{/snippet}
</CtaBand>

<style>
	.body-copy {
		max-width: 70ch;
		line-height: 1.8;
		font-size: clamp(1rem, 2vw, 1.125rem);
		color: var(--color-text-secondary);
		margin: 0 0 var(--space-5);
	}

	.body-copy:last-child {
		margin-bottom: 0;
	}
</style>
