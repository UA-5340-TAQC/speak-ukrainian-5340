# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/help-tests/payment-challenge.spec.ts >> Payment Challenge >> Verify that the "Єдині" challenge page contains "Допомогти проєкту" button with redirecting to the payment modal
- Location: tests/ui/help-tests/payment-challenge.spec.ts:21:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('ul.ant-dropdown-menu').locator('span.ant-dropdown-menu-title-content').filter({ hasText: 'Єдині' })

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
          - generic [ref=e62]:
            - generic [ref=e64]:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=2]: Навчай Українською
                        - generic: Ініціатива "Навчай українською" - це небайдужі громадяни, які об'єдналися, щоб популяризувати українську мову у сфері освіти.
                        - link:
                          - /url: /about
                          - button:
                            - generic: Детальніше
              - generic [ref=e69]:
                - heading "\"Єдині\"" [level=2] [ref=e70]
                - generic [ref=e71]: 28 днів підтримки у переході на українську мову
                - link "Детальніше" [ref=e72] [cursor=pointer]:
                  - /url: /challenges/5
                  - button "Детальніше" [ref=e73]:
                    - generic [ref=e74]: Детальніше
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=2]: Про гуртки українською
                        - generic: На нашому сайті ви можете обрати для вашої дитини гурток, де навчають українською мовою.
                        - link:
                          - /url: /clubs
                          - button:
                            - generic: Детальніше
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=2]: Навчай Українською
                        - generic: Ініціатива "Навчай українською" - це небайдужі громадяни, які об'єдналися, щоб популяризувати українську мову у сфері освіти.
                        - link:
                          - /url: /about
                          - button:
                            - generic: Детальніше
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=2]: "\"Єдині\""
                        - generic: 28 днів підтримки у переході на українську мову
                        - link:
                          - /url: /challenges/5
                          - button:
                            - generic: Детальніше
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=2]: Про гуртки українською
                        - generic: На нашому сайті ви можете обрати для вашої дитини гурток, де навчають українською мовою.
                        - link:
                          - /url: /clubs
                          - button:
                            - generic: Детальніше
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - heading [level=2]: Навчай Українською
                        - generic: Ініціатива "Навчай українською" - це небайдужі громадяни, які об'єдналися, щоб популяризувати українську мову у сфері освіти.
                        - link:
                          - /url: /about
                          - button:
                            - generic: Детальніше
            - list [ref=e75]:
              - listitem [ref=e76]:
                - button "1" [ref=e77] [cursor=pointer]
              - listitem [ref=e78]:
                - button "2" [ref=e79] [cursor=pointer]
              - listitem [ref=e80]:
                - button "3" [ref=e81] [cursor=pointer]
          - img "arrow-right" [ref=e82] [cursor=pointer]:
            - img [ref=e83]
        - generic [ref=e85]:
          - generic [ref=e86]:
            - heading "Оберіть напрям гуртків" [level=2] [ref=e87]
            - link "Всі гуртки" [ref=e88] [cursor=pointer]:
              - /url: /clubs
              - button "Всі гуртки" [ref=e89]:
                - generic [ref=e90]: Всі гуртки
          - generic [ref=e91]:
            - img "arrow-left" [ref=e92] [cursor=pointer]:
              - img [ref=e93]
            - img "arrow-right" [ref=e95] [cursor=pointer]:
              - img [ref=e96]
            - generic [ref=e100]:
              - generic [ref=e102]:
                - link "Спортивні секції Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо Переглянути arrow-right" [ref=e106] [cursor=pointer]:
                  - /url: /clubs
                  - generic [ref=e107]:
                    - generic [ref=e108]:
                      - img
                    - generic [ref=e109]: Спортивні секції
                  - generic [ref=e110]: Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо
                  - generic [ref=e111]:
                    - text: Переглянути
                    - img "arrow-right" [ref=e112]:
                      - img [ref=e113]
                - link "Танці, хореографія Класичні і народні танці, брейк-данс, степ, контемп, балет та ін. Переглянути arrow-right" [ref=e118] [cursor=pointer]:
                  - /url: /clubs
                  - generic [ref=e119]:
                    - generic [ref=e120]:
                      - img
                    - generic [ref=e121]: Танці, хореографія
                  - generic [ref=e122]: Класичні і народні танці, брейк-данс, степ, контемп, балет та ін.
                  - generic [ref=e123]:
                    - text: Переглянути
                    - img "arrow-right" [ref=e124]:
                      - img [ref=e125]
                - link "Студії раннього розвитку Центри раннього розвитку, заняття для малюків, розвиток мовлення Переглянути arrow-right" [ref=e130] [cursor=pointer]:
                  - /url: /clubs
                  - generic [ref=e131]:
                    - generic [ref=e132]:
                      - img
                    - generic [ref=e133]: Студії раннього розвитку
                  - generic [ref=e134]: Центри раннього розвитку, заняття для малюків, розвиток мовлення
                  - generic [ref=e135]:
                    - text: Переглянути
                    - img "arrow-right" [ref=e136]:
                      - img [ref=e137]
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Програмування, робототехніка, STEM
                        - generic: Вивчення природничих наук, технологій, інженерії та математики, STEM-освіта
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Художня студія, мистецтво, дизайн
                        - generic: Образотворче мистецтво, дизайн, комп'ютерна графіка
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Вокальна студія, музика, музичні інструменти
                        - generic: Музична школа, хор, ансамбль, гра на музичних інструментах, звукорежисерський гурток та ін.
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Акторська майстерність, театр
                        - generic: Театральна студія, ляльковий театр, акторська майстерність
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Особистісний розвиток
                        - generic: Розвиток лідерських якостей, підприємництво для підлітків, фінансова грамотність
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Журналістика, дитяче телебачення, монтаж відео, влогів
                        - generic: Курси журналістики, дитяче телебачення і радіомовлення, монтаж відео, школа блогінгу
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Центр розвитку
                        - generic: Підприємництво для підлітків, фінансова грамотність
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Журналістика, дитяче телебачення, монтаж відео
                        - generic: Курси журналістики, дитяче телебачення і радіомовлення, монтаж відео, школа блогінгу
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
                - generic:
                  - generic:
                    - generic:
                      - link:
                        - /url: /clubs
                        - generic:
                          - generic:
                            - img
                          - generic: Інше
                        - generic: Тут є цікаві гуртки, які не потрапили в інші категорії
                        - generic:
                          - text: Переглянути
                          - img:
                            - img
              - list [ref=e139]:
                - listitem [ref=e140]:
                  - button "1" [ref=e141] [cursor=pointer]
                - listitem [ref=e142]:
                  - button "2" [ref=e143] [cursor=pointer]
                - listitem [ref=e144]:
                  - button "3" [ref=e145] [cursor=pointer]
                - listitem [ref=e146]:
                  - button "4" [ref=e147] [cursor=pointer]
        - generic [ref=e148]:
          - generic [ref=e149]:
            - generic [ref=e150]:
              - heading "Челендж \"Навчай українською\"" [level=2] [ref=e151]
              - generic [ref=e152]: Ми допоможемо вам перейти на українську мову викладання. Тут ви можете знайти мотиваційні та практичні вебінари з експертами, корисні матеріали, які вдосконалять ваші знання та навички викладати українською.
              - link "Дізнатись більше" [ref=e153] [cursor=pointer]:
                - /url: /challenge
                - button "Дізнатись більше" [ref=e154]:
                  - generic [ref=e155]: Дізнатись більше
            - img [ref=e157]
          - link "Клуб української мови \"Розмовляй\"" [ref=e160] [cursor=pointer]:
            - /url: /speakingclub
            - heading "Клуб української мови \"Розмовляй\"" [level=2] [ref=e161]
        - generic [ref=e162]:
          - link:
            - /url: ""
          - link [ref=e163] [cursor=pointer]:
            - /url: https://www.facebook.com/events/2754499954695563
            - img [ref=e164]
    - contentinfo [ref=e165]:
      - generic [ref=e166]:
        - link [ref=e167] [cursor=pointer]:
          - /url: ""
        - generic [ref=e170]:
          - generic [ref=e171]: Нам небайдуже майбутнє
          - generic [ref=e172]: дітей та української мови
        - generic [ref=e174]:
          - link "facebook" [ref=e175] [cursor=pointer]:
            - /url: https://www.facebook.com/teach.in.ukrainian
            - img "facebook":
              - img
          - link "youtube" [ref=e176] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
            - img "youtube":
              - img
          - link "instagram" [ref=e177] [cursor=pointer]:
            - /url: https://www.instagram.com/yedyni.ruh/
            - img "instagram":
              - img
          - link:
            - /url: ""
        - generic [ref=e178]: ©2021-2022 Design by Qubstudio & Development by SoftServe
      - generic [ref=e179]:
        - generic [ref=e180]: Наші партнери
        - generic [ref=e181]:
          - link "soft_serve" [ref=e182] [cursor=pointer]:
            - /url: https://www.softserveinc.com/uk-ua
            - img "soft_serve" [ref=e183]
          - link "Mova_obyednue" [ref=e184] [cursor=pointer]:
            - /url: https://www.facebook.com/zakonpromovu5670
            - img "Mova_obyednue" [ref=e185]
          - link "EDERA" [ref=e186] [cursor=pointer]:
            - /url: https://www.ed-era.com
            - img "EDERA" [ref=e187]
          - link "e-mova" [ref=e188] [cursor=pointer]:
            - /url: https://emova.language-ua.online
            - img "e-mova" [ref=e189]
          - link "Kraina_FM" [ref=e190] [cursor=pointer]:
            - /url: https://krainafm.com.ua
            - img "Kraina_FM" [ref=e191]
          - link "ucf" [ref=e192] [cursor=pointer]:
            - /url: https://ucf.in.ua
            - img "ucf" [ref=e193]
          - link "prostir_svobodi" [ref=e194] [cursor=pointer]:
            - /url: https://prostirsvobody.org
            - img "prostir_svobodi" [ref=e195]
      - generic [ref=e196]:
        - generic [ref=e197]: Як допомогти проєкту?
        - generic [ref=e198]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
        - link "Допомогти проєкту" [ref=e199] [cursor=pointer]:
          - /url: https://secure.wayforpay.com/payment/s0f2891d77061
          - button "Допомогти проєкту" [ref=e200]:
            - generic [ref=e201]: Допомогти проєкту
  - menu [ref=e203]:
    - menuitem "Єдині" [ref=e204] [cursor=pointer]:
      - link "Єдині" [ref=e206]:
        - /url: /challenges/5
    - menuitem "Клуб української мови \"Розмовляй\"" [ref=e207] [cursor=pointer]:
      - link "Клуб української мови \"Розмовляй\"" [ref=e209]:
        - /url: /challenges/4
    - menuitem "Навчай українською челендж" [ref=e210] [cursor=pointer]:
      - link "Навчай українською челендж" [ref=e212]:
        - /url: /challenges/3
    - menuitem "Мовомаратон" [ref=e213] [cursor=pointer]:
      - link "Мовомаратон" [ref=e215]:
        - /url: /challenges/1
    - menuitem "Навчай українською" [ref=e216] [cursor=pointer]:
      - link "Навчай українською" [ref=e218]:
        - /url: /challenges/2
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
  19 |     await this.challengesDropdown.filter({ hasText: new RegExp(`^${escaped}$`) }).click();
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
> 48 |       await this.dropdownMenuOptions.filter({ hasText: option }).click();
     |                                                                  ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  49 |     });
  50 |   }
  51 | 
  52 |   async getOptionsText(): Promise<string[]> {
  53 |     return await this.dropdownOptions.allInnerTexts();
  54 |   }
  55 | }
  56 | 
```