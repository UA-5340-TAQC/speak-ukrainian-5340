// fixtures.ts
import { test as base, type TestInfo } from '@playwright/test';
import * as allure from 'allure-js-commons';

// Universal helper function using allure.labels to fully overwrite the hierarchy
async function setupAllure(describeName: string, testInfo: TestInfo) {
  await allure.labels(
    { name: 'parentSuite', value: describeName },
    { name: 'suite', value: testInfo.title },
    { name: 'subSuite', value: testInfo.project.name }
  );
}

// Extend the base test with your "global" beforeEach logic
export const test = base.extend<{ globalBeforeEach: void }>({
  globalBeforeEach: [
    // ФІКС: Передаємо об'єкт і перейменовуємо page в `_`, щоб обійти обидва правила
    async ({ page }, use, testInfo) => {
      await setupAllure('Global Before Each', testInfo);
      await use();
    },
    { auto: true }, // Forces it to run for every test automatically.
  ],
});

export { expect } from '@playwright/test';
export type { TestInfo } from '@playwright/test';
