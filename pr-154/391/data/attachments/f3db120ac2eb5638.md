# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/challenge-tests/challenge-task-page.spec.ts >> Challenge Task Page content pressnce >> Verify task details and embedded videos for task 73
- Location: tests/ui/challenge-tests/challenge-task-page.spec.ts:4:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
=========================== logs ===========================
  "load" event fired
============================================================
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
      - generic [ref=e29] [cursor=pointer]:
        - img "user" [ref=e31]:
          - img [ref=e32]
        - img "caret-down" [ref=e34]:
          - img [ref=e35]
  - main [ref=e38]:
    - main [ref=e40]:
      - generic [ref=e41]:
        - img [ref=e42]
        - generic [ref=e43]:
          - generic [ref=e44]: День 12. Мовна практика
          - generic [ref=e46]:
            - paragraph [ref=e47]: "🟢Навчальні матеріали:"
            - paragraph [ref=e48]: Із цих відео освітньої платформи Є-мова ви дізнаєтесь, що в українській мові слова біль, нежить, тюль, ступінь, дріб, степ та літопис належать до чоловічого роду, а слово путь до жіночого.
            - paragraph [ref=e49]: "І не лише про це у лекціях вчительки української мови і літератури Оксани Гордійчук:"
            - paragraph [ref=e50]: ✅Морфологія та синтаксис, або Як приборкати дракона граматики? (Частина 1)
            - iframe [ref=e51]:
              - generic [active] [ref=f1e1]:
                - generic "YouTube Video Player" [ref=f1e3]
                - generic [ref=f1e5]:
                  - generic:
                    - generic:
                      - button "Play video" [ref=f1e10] [cursor=pointer]:
                        - generic [ref=f1e13]:
                          - img
                      - button "Hide player controls" [ref=f1e14] [cursor=pointer]
                      - generic [ref=f1e21]:
                        - generic [ref=f1e22]:
                          - link "Морфологія та синтаксис, або Як приборкати дракона граматики? (Частина 1)" [ref=f1e23]:
                            - /url: https://www.youtube.com/watch?v=QLHFk8zyN4U
                          - link "eMova" [ref=f1e24]:
                            - /url: /channel/UCM2S_jXd0YpQC7sgSKzNmeA
                            - generic [ref=f1e25]: eMova
                        - generic [ref=f1e26]:
                          - button [ref=f1e27] [cursor=pointer]
                          - generic [ref=f1e29]:
                            - generic: eMova
                            - generic: 3.28K subscribers
            - paragraph [ref=e52]
            - paragraph [ref=e53]: ✅Морфологія та синтаксис, або Як приборкати дракона граматики? (Частина 2)
            - iframe [ref=e54]:
              - generic [active] [ref=f2e1]:
                - generic "YouTube Video Player" [ref=f2e3]
                - generic [ref=f2e5]:
                  - generic:
                    - generic:
                      - button "Play video" [ref=f2e10] [cursor=pointer]:
                        - generic [ref=f2e13]:
                          - img
                      - button "Hide player controls" [ref=f2e14] [cursor=pointer]
                      - generic [ref=f2e21]:
                        - generic [ref=f2e22]:
                          - link "Морфологія та синтаксис, або Як приборкати дракона граматики? (Частина 2)" [ref=f2e23]:
                            - /url: https://www.youtube.com/watch?v=O80ejaPbw0U
                          - link "eMova" [ref=f2e24]:
                            - /url: /channel/UCM2S_jXd0YpQC7sgSKzNmeA
                            - generic [ref=f2e25]: eMova
                        - generic [ref=f2e26]:
                          - button [ref=f2e27] [cursor=pointer]
                          - generic [ref=f2e29]:
                            - generic: eMova
                            - generic: 3.28K subscribers
            - paragraph [ref=e55]
            - paragraph [ref=e56]: "🟢 Завдання:"
            - paragraph [ref=e57]: "Подумайте, як саме вам легше практикувати українську: розмовляти на побутові теми, ділитися досвідом з іншими чи вчити напам'ять тексти українською (вірші, пісні)? Поділіться знахідками в чаті підтримки або під час розмовного клубу."
            - paragraph [ref=e58]: Розгорніть словник на будь-якій сторінці, виберіть кілька слів. Спробуйте пояснити українською, в якому контексті їх найчастіше вживають.
      - paragraph [ref=e62]: "Проєкт \"Єдині\": 28 днів підтримки в переході на українську"
  - contentinfo [ref=e63]:
    - generic [ref=e64]:
      - link [ref=e65] [cursor=pointer]:
        - /url: ""
      - generic [ref=e68]:
        - generic [ref=e69]: Нам небайдуже майбутнє
        - generic [ref=e70]: дітей та української мови
      - generic [ref=e72]:
        - link "facebook" [ref=e73] [cursor=pointer]:
          - /url: https://www.facebook.com/teach.in.ukrainian
          - img "facebook":
            - img
        - link "youtube" [ref=e74] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
          - img "youtube":
            - img
        - link "instagram" [ref=e75] [cursor=pointer]:
          - /url: https://www.instagram.com/yedyni.ruh/
          - img "instagram":
            - img
        - link:
          - /url: ""
      - generic [ref=e76]: ©2021-2022 Design by Qubstudio & Development by SoftServe
    - generic [ref=e77]:
      - generic [ref=e78]: Наші партнери
      - generic [ref=e79]:
        - link "soft_serve" [ref=e80] [cursor=pointer]:
          - /url: https://www.softserveinc.com/uk-ua
          - img "soft_serve" [ref=e81]
        - link "Mova_obyednue" [ref=e82] [cursor=pointer]:
          - /url: https://www.facebook.com/zakonpromovu5670
          - img "Mova_obyednue" [ref=e83]
        - link "EDERA" [ref=e84] [cursor=pointer]:
          - /url: https://www.ed-era.com
          - img "EDERA" [ref=e85]
        - link "e-mova" [ref=e86] [cursor=pointer]:
          - /url: https://emova.language-ua.online
          - img "e-mova" [ref=e87]
        - link "Kraina_FM" [ref=e88] [cursor=pointer]:
          - /url: https://krainafm.com.ua
          - img "Kraina_FM" [ref=e89]
        - link "ucf" [ref=e90] [cursor=pointer]:
          - /url: https://ucf.in.ua
          - img "ucf" [ref=e91]
        - link "prostir_svobodi" [ref=e92] [cursor=pointer]:
          - /url: https://prostirsvobody.org
          - img "prostir_svobodi" [ref=e93]
    - generic [ref=e94]:
      - generic [ref=e95]: Як допомогти проєкту?
      - generic [ref=e96]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
      - link "Допомогти проєкту" [ref=e97] [cursor=pointer]:
        - /url: https://secure.wayforpay.com/payment/s0f2891d77061
        - button "Допомогти проєкту" [ref=e98]:
          - generic [ref=e99]: Допомогти проєкту
```

# Test source

```ts
  1  | import type { BrowserContext, Page, Locator } from '@playwright/test';
  2  | import { HeaderComponent } from '@/components/common/header-component';
  3  | import { FooterComponent } from '@/components/common/footer-component';
  4  | import { SearchBarComponent } from '@/components/common/search-bar-component';
  5  | import { PaginationComponent } from '@/components/common/pagination-component';
  6  | import { MessageComponent } from '@/components/common/message-component';
  7  | 
  8  | export abstract class BasePage {
  9  |   protected page: Page;
  10 |   protected context: BrowserContext;
  11 |   private readonly headerLocator: Locator;
  12 |   readonly header: HeaderComponent;
  13 |   private readonly footerLocator: Locator;
  14 |   readonly footer: FooterComponent;
  15 |   private readonly searchBarLocator: Locator;
  16 |   private readonly paginationLocator: Locator;
  17 | 
  18 |   protected pagination: PaginationComponent;
  19 |   protected searchBar: SearchBarComponent;
  20 |   public readonly message: MessageComponent;
  21 | 
  22 |   protected constructor(page: Page) {
  23 |     this.page = page;
  24 |     this.searchBarLocator = page.locator("xpath=//div[@class='search']");
  25 |     this.searchBar = new SearchBarComponent(this.searchBarLocator);
  26 |     this.headerLocator = page.locator('header.header');
  27 |     this.header = new HeaderComponent(this.headerLocator);
  28 |     this.footerLocator = page.locator('footer.footer');
  29 |     this.footer = new FooterComponent(this.footerLocator);
  30 |     this.paginationLocator = page.locator('ul.ant-pagination');
  31 |     this.pagination = new PaginationComponent(this.paginationLocator);
  32 |     this.message = new MessageComponent(MessageComponent.getRootLocator(page));
  33 |     this.context = page.context();
  34 |   }
  35 | 
  36 |   async navigateTo(url: string): Promise<void> {
  37 |     await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  38 |   }
  39 | 
  40 |   async getTitle(): Promise<string> {
  41 |     return await this.page.title();
  42 |   }
  43 | 
  44 |   async waitForPageLoad(): Promise<void> {
  45 |     await this.page.waitForLoadState('load');
  46 |   }
  47 | 
  48 |   async waitForNetworkIdle(): Promise<void> {
> 49 |     await this.page.waitForLoadState('networkidle');
     |                     ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  50 |   }
  51 | 
  52 |   async waitForVisible(locator: Locator, timeout: number = 10000): Promise<void> {
  53 |     await locator.waitFor({ state: 'visible', timeout });
  54 |   }
  55 | 
  56 |   async waitForHidden(locator: Locator, timeout: number = 10000): Promise<void> {
  57 |     await locator.waitFor({ state: 'hidden', timeout });
  58 |   }
  59 | 
  60 |   async switchToNewTab(): Promise<Page> {
  61 |     const [newPage] = await Promise.all([this.context.waitForEvent('page')]);
  62 |     await newPage.waitForLoadState();
  63 |     return newPage;
  64 |   }
  65 | 
  66 |   async getAllPage(): Promise<Page[]> {
  67 |     return this.context.pages();
  68 |   }
  69 | 
  70 |   async switchToTabByIndex(index: number): Promise<Page> {
  71 |     const pages: Page[] = this.context.pages();
  72 |     await pages[index].bringToFront();
  73 |     return pages[index];
  74 |   }
  75 | 
  76 |   async closeCurrentTab(): Promise<void> {
  77 |     await this.page.close();
  78 |   }
  79 |   async reloadPage(): Promise<void> {
  80 |     await this.page.reload();
  81 |     await this.waitForPageLoad();
  82 |   }
  83 | }
  84 | 
```