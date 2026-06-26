# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/club-advanced-search.spec.ts >> club-advanced-search >> should display centres in the particular city
- Location: tests/ui/club-advanced-search.spec.ts:22:3

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('div.ant-modal.modal-login[role="dialog"]')
Expected: hidden
Received: visible
Timeout:  10000ms

Call log:
  - Expect "toBeHidden" with timeout 10000ms
  - waiting for locator('div.ant-modal.modal-login[role="dialog"]')
    6 × locator resolved to <div role="dialog" aria-modal="true" class="ant-modal css-13m256z modal-login ant-zoom-appear ant-zoom-appear-active ant-zoom">…</div>
      - unexpected value "visible"
    18 × locator resolved to <div role="dialog" aria-modal="true" class="ant-modal css-13m256z modal-login">…</div>
       - unexpected value "visible"

```

```yaml
- dialog:
  - button "Close"
  - text: Вхід
  - link "Logo":
    - /url: https://speak-ukrainian.org.ua/oauth2/authorize/google?redirect_uri=https://speak-ukrainian.org.ua/oauth2/redirect
  - link "Logo":
    - /url: https://speak-ukrainian.org.ua/oauth2/authorize/facebook?redirect_uri=https://speak-ukrainian.org.ua/oauth2/redirect
  - text: "або Емейл:"
  - textbox "Емейл:":
    - /placeholder: Введіть ваш емейл
  - img "mail"
  - img "check-circle"
  - text: "Пароль:"
  - textbox "Пароль:":
    - /placeholder: Введіть ваш пароль
  - img "eye-invisible"
  - img "check-circle"
  - button "Увійти"
  - link "Забули пароль?":
    - /url: ""
```

# Test source

```ts
  1   | import { test, expect } from '@/fixtures/modal-fixture';
  2   | import env from '@/config/env';
  3   | import * as allure from 'allure-js-commons';
  4   | import { CitiesUser } from '@/data/cities-user';
  5   | 
  6   | test.describe('club-advanced-search', (): void => {
  7   |   const email = env.TEST_EMAIL!;
  8   |   const password = env.TEST_PASSWORD!;
  9   | 
  10  |   test.beforeEach(async ({ clubPage, signInModal }): Promise<void> => {
  11  |     await clubPage.navigate();
  12  |     await clubPage.waitForPageLoad();
  13  | 
  14  |     await clubPage.header.clickUserMenuItem(/увійти/i);
  15  | 
  16  |     const signInRoot = await signInModal.getRoot();
  17  |     await signInModal.fillCredentials(email, password);
  18  |     await signInModal.submit();
> 19  |     await expect(signInRoot).toBeHidden();
      |                              ^ Error: expect(locator).toBeHidden() failed
  20  |   });
  21  | 
  22  |   test('should display centres in the particular city', async ({ clubPage }): Promise<void> => {
  23  |     test.fail(true, 'Known bug #31');
  24  | 
  25  |     await allure.epic('Speak Ukrainian');
  26  |     await allure.owner('Petro Derlytsia');
  27  |     await allure.feature('Club page');
  28  |     await allure.story('Advanced Search for Centres');
  29  |     await allure.severity('high');
  30  |     await allure.tags('UI', 'Search', 'Centres', 'Filters');
  31  |     await allure.description(
  32  |       'Verify that the user can select a location in the advanced search for a centre type and filter by city and district.'
  33  |     );
  34  |     await allure.issue('https://github.com/UA-5340-TAQC/speak-ukrainian-5340/issues/31');
  35  | 
  36  |     await allure.step('Step 1: Open Advanced Search sidebar', async () => {
  37  |       await clubPage.header.clickAdvancedSearch();
  38  |     });
  39  | 
  40  |     await allure.step('Step 2: Verify that all advanced search elements are present', async () => {
  41  |       await clubPage.waitForPageLoad();
  42  | 
  43  |       expect(await clubPage.isCityDropdownVisible()).toBeTruthy();
  44  |       expect(await clubPage.isDistrictDropdownVisible()).toBeTruthy();
  45  |       expect(await clubPage.isStationDropdownVisible()).toBeTruthy();
  46  | 
  47  |       expect(await clubPage.isAgeFieldVisible()).toBeTruthy();
  48  |       expect(await clubPage.isAgeLabelVisible()).toBeTruthy();
  49  |       expect(await clubPage.isCategoryLabelVisible()).toBeTruthy();
  50  | 
  51  |       expect(await clubPage.isOnlineLabelVisible()).toBeTruthy();
  52  |     });
  53  | 
  54  |     await allure.step('Step 3: Click on the radio button "Центр"', async () => {
  55  |       await clubPage.switchToCentreMode();
  56  |     });
  57  | 
  58  |     await allure.step('Step 4: Verify that elements disappear in the advanced search', async () => {
  59  |       expect(await clubPage.isCategoryLabelVisible()).toBeFalsy();
  60  |       expect(await clubPage.isOnlineLabelVisible()).toBeFalsy();
  61  |       expect(await clubPage.isAgeFieldVisible()).toBeFalsy();
  62  |       expect(await clubPage.isAgeLabelVisible()).toBeFalsy();
  63  |     });
  64  | 
  65  |     await allure.step('Step 5: Select the city "Київ"', async () => {
  66  |       await clubPage.filterByCity(CitiesUser.KYIV);
  67  |       await clubPage.waitForPageLoad();
  68  |     });
  69  | 
  70  |     await allure.step('Step 6: Verify that it is filtered by the city', async () => {
  71  |       const clubs = await clubPage.getClubList();
  72  |       for (const club of clubs) {
  73  |         const address = await club.getClubAddress();
  74  |         expect(address).toMatch(/Київ|Київська область/i);
  75  |       }
  76  |     });
  77  | 
  78  |     await allure.step('Step 7: Select the district "Святошинський"', async () => {
  79  |       await clubPage.filterByDistrict('Святошинський');
  80  |       await clubPage.waitForPageLoad();
  81  |     });
  82  | 
  83  |     await allure.step('Step 8: Verify that it is filtered by the district', async () => {
  84  |       const clubs = await clubPage.getClubList();
  85  |       for (const club of clubs) {
  86  |         const address = await club.getClubAddress();
  87  |         expect(address).toContain('Святошинський');
  88  |       }
  89  |     });
  90  | 
  91  |     await allure.step('Step 9: Close Advanced Search sidebar', async () => {
  92  |       await clubPage.header.clickAdvancedSearch();
  93  |     });
  94  | 
  95  |     await allure.step('Step 10: Refresh the page', async () => {
  96  |       await clubPage.reloadPage();
  97  | 
  98  |       expect(await clubPage.isClubModeSelected()).toBeTruthy();
  99  |     });
  100 |   });
  101 | });
  102 | 
```