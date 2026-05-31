import { expect, test } from '@playwright/test';

test.describe('home page', () => {
	test('renders the hero and primary call to action', async ({ page }) => {
		await page.goto('/');

		await expect(page.getByRole('heading', { level: 1 })).toContainText('Build your trading');
		await expect(page.getByRole('link', { name: 'Start Membership' }).first()).toBeVisible();
	});

	test('exposes a descriptive, branded document title', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle(/Revolution Trading Pros/);
	});
});

test('unknown routes render the branded error page with a 404 status', async ({ page }) => {
	const response = await page.goto('/this-route-does-not-exist');

	expect(response?.status()).toBe(404);
	await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Back to safety' })).toBeVisible();
});
