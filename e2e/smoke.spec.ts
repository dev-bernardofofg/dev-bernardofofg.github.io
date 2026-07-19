import { expect, test } from '@playwright/test';

test.describe('routes render', () => {
	test('home', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('heading', { level: 1 })).toContainText(
			'Full-stack',
		);
		await expect(page.locator('#stack')).toBeVisible();
		await expect(page.locator('#sobre')).toBeVisible();
		await expect(page.locator('#contato')).toBeVisible();
	});

	test('blog lists posts and filters by category', async ({ page }) => {
		await page.goto('/blog');
		await expect(page.getByRole('heading', { level: 1 })).toHaveText('Blog');
		const posts = page.locator('a[href^="/blog/"]');
		await expect(posts.first()).toBeVisible();
		const total = await posts.count();

		await page.getByRole('button', { name: 'til' }).click();
		await expect(page).toHaveURL(/\?cat=til/);
		await expect(posts.first()).toBeVisible();
		expect(await posts.count()).toBeLessThan(total);
	});

	test('blog filter is restored from the URL', async ({ page }) => {
		await page.goto('/blog?cat=deep-dive');
		const posts = page.locator('a[href^="/blog/"]');
		await expect(posts.first()).toBeVisible();
		for (const cat of await page
			.locator('span.text-accent-a', { hasText: /DEEP DIVE|PATTERN|TIL/ })
			.allTextContents()) {
			expect(cat).toBe('DEEP DIVE');
		}
	});

	test('post opens with highlighted code', async ({ page }) => {
		await page.goto('/blog/zod');
		await expect(page.getByRole('heading', { level: 1 })).toContainText('Zod');
		await expect(page.locator('.code-highlight pre').first()).toBeVisible();
	});

	test('projects list and case study open', async ({ page }) => {
		await page.goto('/projetos');
		await expect(page.locator('a[href="/projetos/moneyly"]')).toBeVisible();

		await page.goto('/projetos/moneyly');
		await expect(page.getByRole('heading', { level: 1 })).toHaveText('Moneyly');
		await expect(
			page.locator('a[href*="github.com/dev-bernardofofg/moneyly-back"]'),
		).toBeVisible();
	});
});

test('english locale renders at /en', async ({ page }) => {
	await page.goto('/en');
	await expect(page.getByRole('heading', { level: 1 })).toContainText(
		'Full-stack',
	);
	await expect(
		page.getByRole('navigation').getByRole('link', { name: 'Projects' }),
	).toBeVisible();
});

test('theme toggle switches dark mode', async ({ page }) => {
	await page.goto('/');
	const html = page.locator('html');
	const wasDark = await html.evaluate((el) => el.classList.contains('dark'));

	await page.getByRole('button', { name: /tema|theme/i }).click();
	await expect(html).toHaveClass(wasDark ? /^(?!.*dark).*$/ : /dark/);
});

test('sitemap and robots respond', async ({ request }) => {
	const sitemap = await request.get('/sitemap.xml');
	expect(sitemap.ok()).toBeTruthy();
	expect(await sitemap.text()).toContain('/blog/zod');

	const robots = await request.get('/robots.txt');
	expect(robots.ok()).toBeTruthy();
});

test('rss feed and og image respond', async ({ request }) => {
	const feed = await request.get('/feed.xml');
	expect(feed.ok()).toBeTruthy();
	const xml = await feed.text();
	expect(xml).toContain('<rss');
	expect(xml).toContain('/blog/zod');

	const og = await request.get('/blog/zod/opengraph-image');
	expect(og.ok()).toBeTruthy();
	expect(og.headers()['content-type']).toContain('image/png');
});
