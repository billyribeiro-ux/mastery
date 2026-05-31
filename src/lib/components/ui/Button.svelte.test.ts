import { createRawSnippet } from 'svelte';
import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

import Button from './Button.svelte';

const label = (text: string) =>
	createRawSnippet(() => ({
		render: () => `<span>${text}</span>`
	}));

describe('Button.svelte', () => {
	it('renders an anchor when href is provided', async () => {
		render(Button, { href: '/join', children: label('Join') });

		const link = page.getByRole('link', { name: 'Join' });
		await expect.element(link).toBeVisible();
		await expect.element(link).toHaveAttribute('href', '/join');
	});

	it('renders a button element when no href is provided', async () => {
		render(Button, { children: label('Submit') });

		await expect.element(page.getByRole('button', { name: 'Submit' })).toBeVisible();
	});
});
