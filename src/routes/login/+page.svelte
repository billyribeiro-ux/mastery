<script lang="ts">
	import { resolve } from '$app/paths';

	import { Button, Container } from '$lib/components/ui';
	import { accountNav } from '$lib/config/navigation';
</script>

<Container>
	<section class="login-page">
		<div class="login-card">
			<h1>Sign in to Mastery Trading</h1>
			<p class="lead">Access your live rooms, alerts, and resource library.</p>

			<form class="login-form" method="POST" action="/login">
				<div class="field">
					<label for="email">Email address</label>
					<input type="email" id="email" name="email" autocomplete="email" required />
				</div>
				<div class="field">
					<label for="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						autocomplete="current-password"
						required
					/>
				</div>
				<Button type="submit" size="lg" fullWidth>Sign in</Button>
			</form>

			<p class="signup-prompt">
				Not a member yet?
				<a class="signup-link" href={resolve(accountNav.join.href)}>{accountNav.join.label}</a>
			</p>
		</div>
	</section>
</Container>

<style>
	.login-page {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-block: var(--space-12);
	}

	.login-card {
		width: 100%;
		max-width: 24rem;
		display: grid;
		gap: var(--space-6);
	}

	h1 {
		margin: 0;
		font-family: var(--font-family-display);
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 800;
		line-height: 1.15;
		color: var(--color-text-primary);
	}

	.lead {
		margin: 0;
		font-size: var(--font-size-step-0);
		color: var(--color-text-secondary);
		line-height: 1.5;
	}

	.login-form {
		display: grid;
		gap: var(--space-5);
	}

	.field {
		display: grid;
		gap: var(--space-2);
	}

	label {
		font-size: var(--font-size-step--1);
		font-weight: 600;
		color: var(--color-text-secondary);
	}

	input {
		padding: 0.625rem 0.875rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--color-border-neutral);
		background: var(--color-surface-1);
		color: var(--color-text-primary);
		font-size: var(--font-size-step-0);
		font-family: inherit;
		transition: border-color 150ms ease;
		outline: none;
	}

	input:focus-visible {
		border-color: var(--color-brand-gold);
	}

	.signup-prompt {
		margin: 0;
		text-align: center;
		font-size: var(--font-size-step--1);
		color: var(--color-text-tertiary);
	}

	.signup-link {
		color: var(--color-brand-gold);
		font-weight: 600;
		text-decoration: none;
	}

	.signup-link:hover {
		text-decoration: underline;
	}
</style>
