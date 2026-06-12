import { test, expect, TestInfo } from '@playwright/test';
import * as allure from 'allure-js-commons';

// Helper function to change Allure hierarchy
async function setupAllure(testName: string, testInfo: TestInfo) {
  // Set the test name as the top-level parent suite
  await allure.parentSuite(testName);
  // Set the browser name as the suite level
  await allure.suite(`Browser: ${testInfo.project.name}`);
  // Clear the sub-suite to avoid unnecessary nesting
  await allure.subSuite('');
}

test.describe('Main Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }, testInfo) => {
    await setupAllure('has title', testInfo);

    await expect(page).toHaveTitle(/Навчай українською/);
  });

  test('get started link', async ({ page }, testInfo) => {
    await setupAllure('get started link', testInfo);

    await page.getByRole('link', { name: 'Гуртки', exact: true }).click();
    const cityHeader = page.locator('h2.city-name', { hasText: 'Гуртки в місті Київ' });
    await expect(cityHeader).toBeVisible();
  });
});
