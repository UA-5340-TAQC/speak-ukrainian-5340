# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/help-tests/payment-challenge.spec.ts >> Payment Challenge >> Verify that the "Навчай українською" challenge page contains "Допомогти проєкту" button with redirecting to the payment modal
- Location: tests/ui/help-tests/payment-challenge.spec.ts:21:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('div.ant-menu-submenu-popup').filter({ visible: true }).locator('li.ant-menu-item-only-child span').filter({ hasText: /^Навчай українською$/ })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: /
      - menu [ref=e10]:
        - menuitem "apartment Гуртки" [ref=e11] [cursor=pointer]:
          - img "apartment":
            - img
          - link "Гуртки" [ref=e13]:
            - /url: /clubs
        - menuitem "crown Челендж" [expanded] [active] [ref=e14] [cursor=pointer]:
          - img "crown":
            - img
          - text: Челендж
        - menuitem "folder-open Новини" [ref=e15] [cursor=pointer]:
          - img "folder-open":
            - img
          - link "Новини" [ref=e17]:
            - /url: /news
        - menuitem "container Про нас" [ref=e18] [cursor=pointer]:
          - img "container":
            - img
          - link "Про нас" [ref=e20]:
            - /url: /about
        - menuitem "folder-open Послуги українською" [ref=e21] [cursor=pointer]:
          - img "folder-open":
            - img
          - link "Послуги українською" [ref=e23]:
            - /url: /service
        - menuitem [disabled]:
          - img:
            - img
      - generic [ref=e24]:
        - generic [ref=e25] [cursor=pointer]:
          - img "environment":
            - img
          - text: Київ
          - img "caret-down" [ref=e26]:
            - img [ref=e27]
        - button "Додати гурток" [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Додати гурток
        - generic [ref=e31] [cursor=pointer]:
          - img "user" [ref=e33]:
            - img [ref=e34]
          - img "caret-down" [ref=e36]:
            - img [ref=e37]
    - main [ref=e40]:
      - generic [ref=e41]:
        - generic [ref=e42]:
          - heading "Ініціатива “Навчай українською”" [level=2] [ref=e44]
          - generic [ref=e45]:
            - generic [ref=e47]:
              - combobox [ref=e49]
              - generic: Який гурток шукаєте?
            - generic [ref=e50]:
              - img "search" [ref=e51] [cursor=pointer]:
                - img [ref=e52]
              - img "control" [ref=e54] [cursor=pointer]:
                - img [ref=e55]
        - generic [ref=e57]:
          - img "arrow-left" [ref=e58] [cursor=pointer]:
            - img [ref=e59]
          - img "arrow-right" [ref=e63] [cursor=pointer]:
            - img [ref=e64]
        - generic [ref=e66]:
          - generic [ref=e67]:
            - heading "Оберіть напрям гуртків" [level=2] [ref=e68]
            - link "Всі гуртки" [ref=e69] [cursor=pointer]:
              - /url: /clubs
              - button "Всі гуртки" [ref=e70]:
                - generic [ref=e71]: Всі гуртки
          - generic:
            - img "arrow-left" [ref=e72] [cursor=pointer]:
              - img [ref=e73]
            - img "arrow-right" [ref=e75] [cursor=pointer]:
              - img [ref=e76]
        - generic [ref=e78]:
          - generic [ref=e79]:
            - generic [ref=e80]:
              - heading "Челендж \"Навчай українською\"" [level=2] [ref=e81]
              - generic [ref=e82]: Ми допоможемо вам перейти на українську мову викладання. Тут ви можете знайти мотиваційні та практичні вебінари з експертами, корисні матеріали, які вдосконалять ваші знання та навички викладати українською.
              - link "Дізнатись більше" [ref=e83] [cursor=pointer]:
                - /url: /challenge
                - button "Дізнатись більше" [ref=e84]:
                  - generic [ref=e85]: Дізнатись більше
            - img [ref=e87]
          - link "Клуб української мови \"Розмовляй\"" [ref=e90] [cursor=pointer]:
            - /url: /speakingclub
            - heading "Клуб української мови \"Розмовляй\"" [level=2] [ref=e91]
        - generic [ref=e92]:
          - link:
            - /url: ""
          - link [ref=e93] [cursor=pointer]:
            - /url: https://www.facebook.com/events/2754499954695563
            - img [ref=e94]
    - contentinfo [ref=e95]:
      - generic [ref=e96]:
        - link [ref=e97] [cursor=pointer]:
          - /url: ""
        - generic [ref=e100]:
          - generic [ref=e101]: Нам небайдуже майбутнє
          - generic [ref=e102]: дітей та української мови
        - generic [ref=e104]:
          - link "facebook" [ref=e105] [cursor=pointer]:
            - /url: https://www.facebook.com/teach.in.ukrainian
            - img "facebook":
              - img
          - link "youtube" [ref=e106] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
            - img "youtube":
              - img
          - link "instagram" [ref=e107] [cursor=pointer]:
            - /url: https://www.instagram.com/yedyni.ruh/
            - img "instagram":
              - img
          - link:
            - /url: ""
        - generic [ref=e108]: ©2021-2022 Design by Qubstudio & Development by SoftServe
      - generic [ref=e109]:
        - generic [ref=e110]: Наші партнери
        - generic [ref=e111]:
          - link "soft_serve" [ref=e112] [cursor=pointer]:
            - /url: https://www.softserveinc.com/uk-ua
            - img "soft_serve" [ref=e113]
          - link "Mova_obyednue" [ref=e114] [cursor=pointer]:
            - /url: https://www.facebook.com/zakonpromovu5670
            - img "Mova_obyednue" [ref=e115]
          - link "EDERA" [ref=e116] [cursor=pointer]:
            - /url: https://www.ed-era.com
            - img "EDERA" [ref=e117]
          - link "e-mova" [ref=e118] [cursor=pointer]:
            - /url: https://emova.language-ua.online
            - img "e-mova" [ref=e119]
          - link "Kraina_FM" [ref=e120] [cursor=pointer]:
            - /url: https://krainafm.com.ua
            - img "Kraina_FM" [ref=e121]
          - link "ucf" [ref=e122] [cursor=pointer]:
            - /url: https://ucf.in.ua
            - img "ucf" [ref=e123]
          - link "prostir_svobodi" [ref=e124] [cursor=pointer]:
            - /url: https://prostirsvobody.org
            - img "prostir_svobodi" [ref=e125]
      - generic [ref=e126]:
        - generic [ref=e127]: Як допомогти проєкту?
        - generic [ref=e128]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
        - link "Допомогти проєкту" [ref=e129] [cursor=pointer]:
          - /url: https://secure.wayforpay.com/payment/s0f2891d77061
          - button "Допомогти проєкту" [ref=e130]:
            - generic [ref=e131]: Допомогти проєкту
  - generic [ref=e132]:
    - menu
```

# Test source

```ts
  1  | import type { Locator } from '@playwright/test';
  2  | import { BaseComponent } from '@/components/base-component';
  3  | import { Challenges } from '@/data/challenges';
  4  | import * as allure from 'allure-js-commons';
  5  | 
  6  | export class DropdownComponent extends BaseComponent {
  7  |   private readonly dropdownOptions: Locator;
  8  |   private readonly dropdownMenuOptions: Locator;
  9  |   private readonly challengesDropdown: Locator;
  10 | 
  11 |   constructor(rootLocator: Locator) {
  12 |     super(rootLocator);
  13 |     this.dropdownOptions = this.root.locator('.ant-select-item-option-content');
  14 |     this.dropdownMenuOptions = this.root.locator('span.ant-dropdown-menu-title-content');
  15 |     this.challengesDropdown = this.root.locator('li.ant-menu-item-only-child span');
  16 |   }
  17 |   async selectChallengeOption(challenge: Challenges): Promise<void> {
  18 |     const escaped = challenge.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
> 19 |     await this.challengesDropdown.filter({ hasText: new RegExp(`^${escaped}$`) }).click();
     |                                                                                   ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  20 |   }
  21 | 
  22 |   async isVisible(): Promise<boolean> {
  23 |     return await this.root.isVisible();
  24 |   }
  25 | 
  26 |   async clickFirstOption(): Promise<void> {
  27 |     await allure.step('Click first dropdown option', async (): Promise<void> => {
  28 |       await this.dropdownOptions.first().click();
  29 |     });
  30 |   }
  31 | 
  32 |   async getFirstOptionText(): Promise<string> {
  33 |     return await this.dropdownOptions.first().innerText();
  34 |   }
  35 | 
  36 |   async isHidden(): Promise<boolean> {
  37 |     return await this.root.isHidden();
  38 |   }
  39 | 
  40 |   async select(option: string): Promise<void> {
  41 |     await allure.step(`Select dropdown option "${option}"`, async (): Promise<void> => {
  42 |       await this.dropdownOptions.filter({ hasText: option }).click();
  43 |     });
  44 |   }
  45 | 
  46 |   async selectMenuOption(option: string): Promise<void> {
  47 |     await allure.step(`Select menu option "${option}"`, async (): Promise<void> => {
  48 |       await this.dropdownMenuOptions.filter({ hasText: option }).click();
  49 |     });
  50 |   }
  51 | 
  52 |   async getOptionsText(): Promise<string[]> {
  53 |     return await this.dropdownOptions.allInnerTexts();
  54 |   }
  55 | }
  56 | 
```