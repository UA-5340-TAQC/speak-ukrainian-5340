import { test, expect } from '@/fixtures';

test.describe('Main Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Навчай українською/);
  });

  test('get started link', async ({ page }) => {
    await page.getByRole('link', { name: 'Гуртки', exact: true }).click();
    const cityHeader = page.locator('h2.city-name', { hasText: 'Гуртки в місті Київ' });
    await expect(cityHeader).toBeVisible();
  });

  const navigationLinks = [
    { name: 'Про нас', expectedHeader: 'Про проєкт' },
    { name: 'Послуги', expectedHeader: 'Наші послуги' },
    { name: 'Контакти', expectedHeader: "Зворотний зв'язок" },
  ];

  for (const link of navigationLinks) {
    test(`navigation to ${link.name}`, async ({ page }) => {
      // The helper automatically takes the dynamic testInfo.title ('navigation to Про нас', etc.)
      await page.getByRole('link', { name: link.name, exact: true }).click();

      const header = page.locator('h1, h2', { hasText: link.expectedHeader });
      await expect(header).toBeVisible();
    });
  }
});
