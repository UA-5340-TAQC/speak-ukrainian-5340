# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/filter-tests/search-filter-by-hint.spec.ts >> search-bar >> should search by exact hint name
- Location: tests/ui/filter-tests/search-filter-by-hint.spec.ts:37:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
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
    - generic [ref=e39]:
      - generic [ref=e40]:
        - generic [ref=e41]:
          - heading "Гуртки в місті Київ" [level=2] [ref=e43]
          - button "Показати на мапі" [ref=e44] [cursor=pointer]:
            - generic [ref=e45]: Показати на мапі
        - generic [ref=e47]:
          - generic [ref=e49]:
            - combobox [ref=e51]
            - generic: Який гурток шукаєте?
          - generic [ref=e52]:
            - img "search" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
            - img "control" [ref=e56] [cursor=pointer]:
              - img [ref=e57]
      - main [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]: За критеріями пошуку гуртків не знайдено
          - generic [ref=e63]: Заохочуйте гуртки до викладання українською мовою та доєднання до платформи.
          - button "Заохотити гуртки" [ref=e64] [cursor=pointer]:
            - generic [ref=e65]: Заохотити гуртки
  - contentinfo [ref=e66]:
    - generic [ref=e67]:
      - link [ref=e68] [cursor=pointer]:
        - /url: ""
      - generic [ref=e71]:
        - generic [ref=e72]: Нам небайдуже майбутнє
        - generic [ref=e73]: дітей та української мови
      - generic [ref=e75]:
        - link "facebook" [ref=e76] [cursor=pointer]:
          - /url: https://www.facebook.com/teach.in.ukrainian
          - img "facebook":
            - img
        - link "youtube" [ref=e77] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
          - img "youtube":
            - img
        - link "instagram" [ref=e78] [cursor=pointer]:
          - /url: https://www.instagram.com/yedyni.ruh/
          - img "instagram":
            - img
        - link:
          - /url: ""
      - generic [ref=e79]: ©2021-2022 Design by Qubstudio & Development by SoftServe
    - generic [ref=e80]:
      - generic [ref=e81]: Наші партнери
      - generic [ref=e82]:
        - link "soft_serve" [ref=e83] [cursor=pointer]:
          - /url: https://www.softserveinc.com/uk-ua
          - img "soft_serve" [ref=e84]
        - link "Mova_obyednue" [ref=e85] [cursor=pointer]:
          - /url: https://www.facebook.com/zakonpromovu5670
          - img "Mova_obyednue" [ref=e86]
        - link "EDERA" [ref=e87] [cursor=pointer]:
          - /url: https://www.ed-era.com
          - img "EDERA" [ref=e88]
        - link "e-mova" [ref=e89] [cursor=pointer]:
          - /url: https://emova.language-ua.online
          - img "e-mova" [ref=e90]
        - link "Kraina_FM" [ref=e91] [cursor=pointer]:
          - /url: https://krainafm.com.ua
          - img "Kraina_FM" [ref=e92]
        - link "ucf" [ref=e93] [cursor=pointer]:
          - /url: https://ucf.in.ua
          - img "ucf" [ref=e94]
        - link "prostir_svobodi" [ref=e95] [cursor=pointer]:
          - /url: https://prostirsvobody.org
          - img "prostir_svobodi" [ref=e96]
    - generic [ref=e97]:
      - generic [ref=e98]: Як допомогти проєкту?
      - generic [ref=e99]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
      - link "Допомогти проєкту" [ref=e100] [cursor=pointer]:
        - /url: https://secure.wayforpay.com/payment/s0f2891d77061
        - button "Допомогти проєкту" [ref=e101]:
          - generic [ref=e102]: Допомогти проєкту
```

# Test source

```ts
  1   | import type { Locator, Page } from '@playwright/test';
  2   | import { FilterClubListComponent } from '@/components/filters/filter-club-list-component';
  3   | import { ClubBannerTitleComponent } from '@/components/club/club-banner-title-component';
  4   | import { AdvancedSearchComponent } from '@/components/filters/advanced-search-component';
  5   | import { ListClubCardComponent } from '@/components/club/list-club-card-component';
  6   | import { ClubCategory } from '@/data/club-category';
  7   | import { CitiesUser } from '@/data/cities-user';
  8   | import { ClubCardComponent } from '@/components/club/club-card-component';
  9   | import { BasePage } from '@/pages/base-page';
  10  | import { DropdownComponent } from '@/components/common/dropdown-component';
  11  | import { TagsComponent } from '@/components/common/tags-component';
  12  | import * as allure from 'allure-js-commons';
  13  | 
  14  | export class ClubPage extends BasePage {
  15  |   private readonly filterClubListLocator: Locator;
  16  |   private readonly clubBannerTitleLocator: Locator;
  17  |   private readonly advancedSearchLocator: Locator;
  18  |   private readonly listCardLocator: Locator;
  19  |   private readonly firstClubLink: Locator;
  20  |   private readonly cardLocator: Locator;
  21  | 
  22  |   protected clubBannerTitle: ClubBannerTitleComponent;
  23  |   protected advancedSearch: AdvancedSearchComponent;
  24  |   protected clubList: ListClubCardComponent;
  25  |   protected filterClubList: FilterClubListComponent;
  26  | 
  27  |   constructor(page: Page) {
  28  |     super(page);
  29  |     this.clubBannerTitleLocator = page.locator("//div[@class='city-name-box']");
  30  |     this.advancedSearchLocator = page.locator("//div[@class='ant-layout-sider-children']");
  31  |     this.listCardLocator = page.locator('main.club-list-content');
  32  |     this.firstClubLink = this.listCardLocator.locator('a[href*="/club/"]').first();
  33  |     this.clubBannerTitle = new ClubBannerTitleComponent(this.clubBannerTitleLocator);
  34  |     this.advancedSearch = new AdvancedSearchComponent(this.advancedSearchLocator);
  35  |     this.clubList = new ListClubCardComponent(this.listCardLocator);
  36  |     this.filterClubListLocator = this.page.locator("xpath=//*[@class='club-list-control']");
  37  |     this.cardLocator = this.page.locator('div.ant-card');
  38  |     this.filterClubList = new FilterClubListComponent(this.filterClubListLocator);
  39  |   }
  40  | 
  41  |   async navigate(): Promise<void> {
  42  |     await allure.step('Navigate to clubs page', async (): Promise<void> => {
  43  |       await this.page.goto('/clubs');
  44  |     });
  45  |   }
  46  | 
  47  |   async waitForPageLoad(): Promise<void> {
> 48  |     await this.page.waitForLoadState('networkidle');
      |                     ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  49  |     await this.listCardLocator.waitFor({ state: 'visible' });
  50  |   }
  51  | 
  52  |   async openFirstClubPage(): Promise<void> {
  53  |     await allure.step('Open first club page', async (): Promise<void> => {
  54  |       await this.firstClubLink.waitFor({ state: 'visible' });
  55  |       await this.firstClubLink.click();
  56  |     });
  57  |   }
  58  | 
  59  |   async searchByText(text: string): Promise<ClubPage> {
  60  |     return await allure.step(`Search clubs by text "${text}"`, async (): Promise<ClubPage> => {
  61  |       await this.searchBar.fillSearchInput(text);
  62  |       await this.searchBar.clickSearchButton();
  63  |       await this.waitUntilCardLoads();
  64  |       return this;
  65  |     });
  66  |   }
  67  | 
  68  |   async filterByCity(city: CitiesUser): Promise<ClubPage> {
  69  |     return await allure.step(`Filter clubs by city "${city}"`, async (): Promise<ClubPage> => {
  70  |       await this.advancedSearch.selectCity(city);
  71  |       return this;
  72  |     });
  73  |   }
  74  | 
  75  |   async getFirstCategory(): Promise<string> {
  76  |     const searchInput: DropdownComponent = await this.searchBar.clickSearchInput();
  77  |     return await searchInput.getFirstOptionText();
  78  |   }
  79  | 
  80  |   async getClubList(): Promise<ClubCardComponent[]> {
  81  |     return await this.clubList.getClubs();
  82  |   }
  83  | 
  84  |   async filterByDistrict(district: string): Promise<ClubPage> {
  85  |     return await allure.step(
  86  |       `Filter clubs by district "${district}"`,
  87  |       async (): Promise<ClubPage> => {
  88  |         await this.advancedSearch.selectDistrict(district);
  89  |         return this;
  90  |       }
  91  |     );
  92  |   }
  93  | 
  94  |   async filterByStation(station: string): Promise<ClubPage> {
  95  |     return await allure.step(
  96  |       `Filter clubs by closest station "${station}"`,
  97  |       async (): Promise<ClubPage> => {
  98  |         await this.advancedSearch.selectClosestStation(station);
  99  |         return this;
  100 |       }
  101 |     );
  102 |   }
  103 | 
  104 |   async getClubCount(): Promise<number> {
  105 |     await this.cardLocator.first().waitFor({ state: 'visible' });
  106 |     return await this.clubList.getClubCardCount();
  107 |   }
  108 | 
  109 |   async waitForClubsResponse(): Promise<void> {
  110 |     await this.page.waitForResponse(
  111 |       (response) =>
  112 |         response.url().includes('/api/clubs/search?clubName') && response.status() === 200
  113 |     );
  114 |   }
  115 | 
  116 |   async filterByAge(age: string): Promise<ClubPage> {
  117 |     return await allure.step(`Filter clubs by age "${age}"`, async (): Promise<ClubPage> => {
  118 |       await this.advancedSearch.fillAgeField(age);
  119 |       return this;
  120 |     });
  121 |   }
  122 | 
  123 |   async filterByCategory(category: ClubCategory): Promise<ClubPage> {
  124 |     return await allure.step(
  125 |       `Filter clubs by category "${category}"`,
  126 |       async (): Promise<ClubPage> => {
  127 |         await this.advancedSearch.clickCategoryButton(category);
  128 |         return this;
  129 |       }
  130 |     );
  131 |   }
  132 | 
  133 |   async enableRemoteFilter(): Promise<ClubPage> {
  134 |     return await allure.step('Enable remote filter', async (): Promise<ClubPage> => {
  135 |       await this.advancedSearch.clickRemoteButton();
  136 |       return this;
  137 |     });
  138 |   }
  139 | 
  140 |   async switchToClubMode(): Promise<ClubPage> {
  141 |     return await allure.step('Switch to club mode', async (): Promise<ClubPage> => {
  142 |       await this.advancedSearch.clickClubRadioButton();
  143 |       return this;
  144 |     });
  145 |   }
  146 | 
  147 |   async switchToCentreMode(): Promise<ClubPage> {
  148 |     return await allure.step('Switch to centre mode', async (): Promise<ClubPage> => {
```