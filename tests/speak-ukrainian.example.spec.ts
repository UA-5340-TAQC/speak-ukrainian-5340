import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.describe('Перевірка головної сторінки', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await allure.suite('Перевірка головної сторінки');
    await allure.subSuite(`Браузер: ${testInfo.project.name}`);

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
});
