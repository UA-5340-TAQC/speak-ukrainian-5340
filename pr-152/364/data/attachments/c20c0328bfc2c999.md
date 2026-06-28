# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/filter-tests/search-filter-by-hint.spec.ts >> search-bar >> should search by hint category and exact name
- Location: tests/ui/filter-tests/search-filter-by-hint.spec.ts:139:3

# Error details

```
TypeError: this.searchBar.clickSearchInput is not a function
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
  149 |       await this.advancedSearch.clickCentreRadioButton();
  150 |       return this;
  151 |     });
  152 |   }
  153 | 
  154 |   async isClubModeSelected(): Promise<boolean> {
  155 |     return await this.advancedSearch.isClubRadioButtonChecked();
  156 |   }
  157 | 
  158 |   async isCentreModeSelected(): Promise<boolean> {
  159 |     return await this.advancedSearch.isCentreRadioButtonChecked();
  160 |   }
  161 | 
  162 |   async waitUntilCityLoads(city: CitiesUser): Promise<void> {
  163 |     await allure.step(`Wait until clubs for city "${city}" are loaded`, async (): Promise<void> => {
  164 |       await this.page.waitForResponse(
  165 |         (response) =>
  166 |           response.url().includes('/api/clubs/search') &&
  167 |           response.url().includes(encodeURIComponent(city)) &&
  168 |           response.status() === 200
  169 |       );
  170 |     });
  171 |   }
  172 | 
  173 |   async isRemoteFilterChecked(): Promise<boolean> {
  174 |     return await this.advancedSearch.isRemoteButtonChecked();
  175 |   }
  176 | 
  177 |   async getClubTags(): Promise<TagsComponent> {
  178 |     return await this.clubList.getClubTags();
  179 |   }
  180 | 
  181 |   async isTagEmpty(): Promise<boolean> {
  182 |     const tags: TagsComponent = await this.getClubTags();
  183 |     return await tags.isTagEmpty();
  184 |   }
  185 | 
  186 |   async isAgeFieldVisible(): Promise<boolean> {
  187 |     return await this.advancedSearch.isAgeFieldVisible();
  188 |   }
  189 | 
  190 |   async getAgeFieldValue(): Promise<string> {
  191 |     return await this.advancedSearch.getAgeFieldText();
  192 |   }
  193 | 
  194 |   async isCityDropdownVisible(): Promise<boolean> {
  195 |     return await this.advancedSearch.isCityDropdownVisible();
  196 |   }
  197 | 
  198 |   async isDistrictDropdownVisible(): Promise<boolean> {
  199 |     return await this.advancedSearch.isDistrictDropdownVisible();
  200 |   }
  201 | 
  202 |   async isStationDropdownVisible(): Promise<boolean> {
  203 |     return await this.advancedSearch.isClosestStationDropdownVisible();
  204 |   }
  205 | 
  206 |   async selectSearchBarHint(text: string): Promise<void> {
  207 |     await allure.step(`Select search bar hint "${text}"`, async (): Promise<void> => {
> 208 |       const searchInput: DropdownComponent = await this.searchBar.clickSearchInput();
      |                                                                   ^ TypeError: this.searchBar.clickSearchInput is not a function
  209 |       await searchInput.select(text);
  210 |       await this.waitUntilCardLoads();
  211 |     });
  212 |   }
  213 | 
  214 |   async selectFirstCategory(): Promise<void> {
  215 |     await allure.step('Select first category from search bar', async (): Promise<void> => {
  216 |       const searchInput: DropdownComponent = await this.searchBar.clickSearchInput();
  217 |       await searchInput.clickFirstOption();
  218 |       await this.waitUntilCardLoads();
  219 |     });
  220 |   }
  221 | 
  222 |   async getAllCategories(): Promise<string[]> {
  223 |     return await allure.step(
  224 |       'Select all categories from search bar',
  225 |       async (): Promise<string[]> => {
  226 |         const searchInput: DropdownComponent = await this.searchBar.clickSearchInput();
  227 |         const categories: string[] = await searchInput.getOptionsText();
  228 |         for (const category of categories) {
  229 |           await searchInput.select(category);
  230 |           await this.waitUntilCardLoads();
  231 |         }
  232 |         return categories;
  233 |       }
  234 |     );
  235 |   }
  236 | 
  237 |   async waitUntilCardLoads(): Promise<void> {
  238 |     await this.cardLocator.first().waitFor({ state: 'visible' });
  239 |   }
  240 | 
  241 |   async isOnlineLabelVisible(): Promise<boolean> {
  242 |     return await this.advancedSearch.isOnlineLabelVisible();
  243 |   }
  244 | 
  245 |   async isAgeLabelVisible(): Promise<boolean> {
  246 |     return await this.advancedSearch.isAgeLabelVisible();
  247 |   }
  248 | 
  249 |   async isCategoryLabelVisible(): Promise<boolean> {
  250 |     return await this.advancedSearch.isCategoryLabelVisible();
  251 |   }
  252 | 
  253 |   async getFirstClubCard(): Promise<ClubCardComponent> {
  254 |     return await this.clubList.getClubCardByIndex(0);
  255 |   }
  256 | 
  257 |   async getClubByTitle(title: string): Promise<ClubCardComponent> {
  258 |     const card: ClubCardComponent | undefined = await this.clubList.getClubCardByTitle(title);
  259 |     if (!card) throw new Error(`Club "${title}" not found`);
  260 |     return card;
  261 |   }
  262 | 
  263 |   async getSearchInput(): Promise<string> {
  264 |     return await this.searchBar.getSearchInputText();
  265 |   }
  266 | 
  267 |   async selectCity(city: CitiesUser): Promise<ClubPage> {
  268 |     return await allure.step(`Select city "${city}" in header`, async (): Promise<ClubPage> => {
  269 |       await this.header.selectCity(city);
  270 |       return this;
  271 |     });
  272 |   }
  273 | 
  274 |   async getBanner(): Promise<ClubBannerTitleComponent> {
  275 |     return await allure.step(
  276 |       'Get club banner title component',
  277 |       async (): Promise<ClubBannerTitleComponent> => {
  278 |         return this.clubBannerTitle;
  279 |       }
  280 |     );
  281 |   }
  282 | 
  283 |   async hasCitySelected(city: CitiesUser): Promise<void> {
  284 |     await allure.step(`Check if city "${city}" is selected in header`, async (): Promise<void> => {
  285 |       await this.header.hasCitySelected(city);
  286 |     });
  287 |   }
  288 | 
  289 |   async getAllAddresses(): Promise<string[]> {
  290 |     return await allure.step(
  291 |       'Get all club addresses from the list',
  292 |       async (): Promise<string[]> => {
  293 |         const addresses: string[] = [];
  294 |         const totalPages: number = await this.pagination.getTotalPages();
  295 |         for (let i: number = 1; i <= totalPages; i++) {
  296 |           await this.pagination.goToPage(i);
  297 |           await this.waitUntilCardLoads();
  298 | 
  299 |           const clubs: ClubCardComponent[] = await this.getClubList();
  300 |           for (const club of clubs) {
  301 |             const address: string = await club.getClubAddress();
  302 |             addresses.push(address);
  303 |           }
  304 |           const isLastPage: boolean = await this.pagination.isNextDisabled();
  305 |           if (isLastPage) {
  306 |             break;
  307 |           }
  308 |         }
```