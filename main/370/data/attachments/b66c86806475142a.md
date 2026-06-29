# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/filter-tests/filter-check-test.spec.ts >> Right redirection from home page >> [TC-6]
- Location: tests/ui/filter-tests/filter-check-test.spec.ts:6:3

# Error details

```
ReferenceError: test is not defined
```

# Page snapshot

```yaml
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
      - menuitem "crown Челендж" [ref=e14] [cursor=pointer]:
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
            - generic [ref=e69]:
              - heading "Про гуртки українською" [level=2] [ref=e70]
              - generic [ref=e71]: На нашому сайті ви можете обрати для вашої дитини гурток, де навчають українською мовою.
              - link "Детальніше" [ref=e72] [cursor=pointer]:
                - /url: /clubs
                - button "Детальніше" [ref=e73]:
                  - generic [ref=e74]: Детальніше
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
```

# Test source

```ts
  1  | import type { Locator, Page } from '@playwright/test';
  2  | import { ClubCategoryCardComponent } from '@/components/club/club-category-card-component';
  3  | import { BasePage } from '@/pages/base-page';
  4  | import { ClubCategory } from '@/data/club-category';
  5  | 
  6  | export class HomePage extends BasePage {
  7  |   private readonly initiativeText: Locator;
  8  |   private readonly allClubsButton: Locator;
  9  |   private readonly categoryCards: Locator;
  10 |   private readonly categoriesNextArrow: Locator;
  11 |   private readonly categoriesPrevArrow: Locator;
  12 |   private readonly categoriesDots: Locator;
  13 |   private readonly challengeLearnMoreButton: Locator;
  14 |   private readonly promoBanner: Locator;
  15 |   private readonly userProfileDropdown: Locator;
  16 |   private readonly loginMenuItem: Locator;
  17 | 
  18 |   constructor(page: Page) {
  19 |     super(page);
  20 | 
  21 |     this.initiativeText = page.locator('.city-name');
  22 |     this.allClubsButton = page.locator('div.categories-header > a > button.ant-btn');
  23 |     this.categoryCards = page.locator('.content');
  24 |     this.categoriesNextArrow = page.locator(
  25 |       'div.categories-carousel-block > span.anticon-arrow-right > svg'
  26 |     );
  27 |     this.categoriesPrevArrow = page.locator(
  28 |       'div.categories-carousel-block > span.anticon-arrow-left > svg'
  29 |     );
  30 |     this.categoriesDots = page.locator('.categories-cards .slick-dots');
  31 |     this.challengeLearnMoreButton = page.getByText('Дізнатись більше', { exact: true });
  32 |     this.promoBanner = page.locator('.banner-image');
  33 |     this.userProfileDropdown = page.locator('.user-profile');
  34 |     this.loginMenuItem = page.locator('.ant-dropdown-menu-item').filter({ hasText: 'Увійти' });
  35 |   }
  36 | 
  37 |   async goto(): Promise<void> {
  38 |     await this.navigateTo('/');
  39 |   }
  40 | 
  41 |   async getInitiativeText(): Promise<string | null> {
  42 |     return await this.initiativeText.textContent();
  43 |   }
  44 | 
  45 |   async clickAllClubsButton(): Promise<void> {
  46 |     await this.allClubsButton.click();
  47 |   }
  48 | 
  49 |   async getCategoryCardsCount(): Promise<number> {
  50 |     return await this.categoryCards.count();
  51 |   }
  52 | 
  53 |   async clickCategory(categoryName: ClubCategory): Promise<void> {
> 54 |     await test.step(`Click on category: "${categoryName}"`, async () => {
     |     ^ ReferenceError: test is not defined
  55 |       await this.categoryCards.filter({ hasText: categoryName }).click();
  56 |     });
  57 |   }
  58 | 
  59 |   getCategoryCardComponentByName(categoryName: string): ClubCategoryCardComponent {
  60 |     const categoryCardLocator = this.categoryCards.filter({ hasText: categoryName });
  61 |     return new ClubCategoryCardComponent(categoryCardLocator);
  62 |   }
  63 | 
  64 |   async clickCategoriesNextArrow(): Promise<void> {
  65 |     await this.categoriesNextArrow.click();
  66 |   }
  67 | 
  68 |   async clickCategoriesPrevArrow(): Promise<void> {
  69 |     await this.categoriesPrevArrow.click();
  70 |   }
  71 | 
  72 |   async clickCategoryDot(index: number): Promise<void> {
  73 |     await this.categoriesDots.getByRole('button', { name: `${index}` }).click();
  74 |   }
  75 | 
  76 |   async clickChallengeLearnMoreButton(): Promise<void> {
  77 |     await this.challengeLearnMoreButton.click();
  78 |   }
  79 | 
  80 |   async isPromoBannerVisible(): Promise<boolean> {
  81 |     return await this.promoBanner.isVisible();
  82 |   }
  83 | 
  84 |   async clickPromoBanner(): Promise<void> {
  85 |     await this.promoBanner.click();
  86 |   }
  87 | 
  88 |   async clickSignInButton(): Promise<void> {
  89 |     await this.userProfileDropdown.click();
  90 | 
  91 |     await this.loginMenuItem.waitFor({
  92 |       state: 'visible',
  93 |     });
  94 | 
  95 |     await this.loginMenuItem.click();
  96 |   }
  97 | }
  98 | 
```