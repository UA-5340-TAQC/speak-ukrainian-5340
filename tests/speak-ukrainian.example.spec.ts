import { test, expect, TestInfo } from '@playwright/test';
import * as allure from 'allure-js-commons';

// Universal helper function using allure.labels to fully overwrite the hierarchy
async function setupAllure(describeName: string, testInfo: TestInfo) {
  await allure.labels(
    { name: 'parentSuite', value: describeName },
    { name: 'suite', value: testInfo.title },
    { name: 'subSuite', value: testInfo.project.name }
  );
}

test.describe('Main Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }, testInfo) => {
    await setupAllure('Main Page Tests', testInfo);

    await expect(page).toHaveTitle(/Навчай українською/);
  });

  test('get started link', async ({ page }, testInfo) => {
    await setupAllure('Main Page Tests', testInfo);

    await page.getByRole('link', { name: 'Гуртки', exact: true }).click();
    const cityHeader = page.locator('h2.city-name', { hasText: 'Гуртки в місті Київ' });
    await expect(cityHeader).toBeVisible();
  });

  const navigationLinks = [
    { name: 'Про нас', expectedHeader: 'Про проєкт' },
    { name: 'Послуги', expectedHeader: 'Наші послуги' },
    { name: 'Контакти', expectedHeader: 'Зворотний зв\'язок' }
  ];

  for (const link of navigationLinks) {
    test(`navigation to ${link.name}`, async ({ page }, testInfo) => {
      // The helper automatically takes the dynamic testInfo.title ('navigation to Про нас', etc.)
      await setupAllure('Main Page Tests', testInfo);

      await page.getByRole('link', { name: link.name, exact: true }).click();
      
      const header = page.locator('h1, h2', { hasText: link.expectedHeader });
      await expect(header).toBeVisible();
    });
  
  
});