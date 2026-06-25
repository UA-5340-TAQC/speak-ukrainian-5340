# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/club-tests/club-details-page.spec.ts >> Club details page >> should display contact information
- Location: tests/ui/club-tests/club-details-page.spec.ts:31:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
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
  - main [ref=e38]
  - contentinfo [ref=e41]:
    - generic [ref=e42]:
      - link [ref=e43] [cursor=pointer]:
        - /url: ""
      - generic [ref=e46]:
        - generic [ref=e47]: Нам небайдуже майбутнє
        - generic [ref=e48]: дітей та української мови
      - generic [ref=e50]:
        - link "facebook" [ref=e51] [cursor=pointer]:
          - /url: https://www.facebook.com/teach.in.ukrainian
          - img "facebook":
            - img
        - link "youtube" [ref=e52] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
          - img "youtube":
            - img
        - link "instagram" [ref=e53] [cursor=pointer]:
          - /url: https://www.instagram.com/yedyni.ruh/
          - img "instagram":
            - img
        - link:
          - /url: ""
      - generic [ref=e54]: ©2021-2022 Design by Qubstudio & Development by SoftServe
    - generic [ref=e55]:
      - generic [ref=e56]: Наші партнери
      - generic [ref=e57]:
        - link "soft_serve" [ref=e58] [cursor=pointer]:
          - /url: https://www.softserveinc.com/uk-ua
          - img "soft_serve" [ref=e59]
        - link "Mova_obyednue" [ref=e60] [cursor=pointer]:
          - /url: https://www.facebook.com/zakonpromovu5670
          - img "Mova_obyednue" [ref=e61]
        - link "EDERA" [ref=e62] [cursor=pointer]:
          - /url: https://www.ed-era.com
          - img "EDERA" [ref=e63]
        - link "e-mova" [ref=e64] [cursor=pointer]:
          - /url: https://emova.language-ua.online
          - img "e-mova" [ref=e65]
        - link "Kraina_FM" [ref=e66] [cursor=pointer]:
          - /url: https://krainafm.com.ua
          - img "Kraina_FM" [ref=e67]
        - link "ucf" [ref=e68] [cursor=pointer]:
          - /url: https://ucf.in.ua
          - img "ucf" [ref=e69]
        - link "prostir_svobodi" [ref=e70] [cursor=pointer]:
          - /url: https://prostirsvobody.org
          - img "prostir_svobodi" [ref=e71]
    - generic [ref=e72]:
      - generic [ref=e73]: Як допомогти проєкту?
      - generic [ref=e74]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
      - link "Допомогти проєкту" [ref=e75] [cursor=pointer]:
        - /url: https://secure.wayforpay.com/payment/s0f2891d77061
        - button "Допомогти проєкту" [ref=e76]:
          - generic [ref=e77]: Допомогти проєкту
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | import { ClubDetailsPage } from '@/pages';
  4  | 
  5  | test.describe('Club details page', () => {
  6  |   test('should display main club details', async ({ page }) => {
  7  |     const clubDetailsPage = new ClubDetailsPage(page);
  8  | 
  9  |     await clubDetailsPage.navigateToClub(26);
  10 | 
  11 |     await expect(page).toHaveURL(/\/club\/26/);
  12 | 
  13 |     expect(await clubDetailsPage.isClubDetailsDisplayed()).toBeTruthy();
  14 |     expect(await clubDetailsPage.getClubTitle()).toContain('American Gymnastics Club');
  15 |     expect(await clubDetailsPage.getClubDescription()).not.toHaveLength(0);
  16 |     expect(await clubDetailsPage.getClubRating()).toBeGreaterThan(0);
  17 |     expect(await clubDetailsPage.getClubAddress()).toContain('Київ');
  18 |   });
  19 | 
  20 |   test('should display club action buttons and comments section', async ({ page }) => {
  21 |     const clubDetailsPage = new ClubDetailsPage(page);
  22 | 
  23 |     await clubDetailsPage.navigateToClub(26);
  24 | 
  25 |     expect(await clubDetailsPage.description.isEnrollButtonVisible()).toBeTruthy();
  26 |     expect(await clubDetailsPage.description.isDownloadButtonVisible()).toBeTruthy();
  27 |     expect(await clubDetailsPage.hero.isMessageManagerButtonVisible()).toBeTruthy();
  28 |     expect(await clubDetailsPage.comments.isCommentsSectionDisplayed()).toBeTruthy();
  29 |   });
  30 | 
  31 |   test('should display contact information', async ({ page }) => {
  32 |     const clubDetailsPage = new ClubDetailsPage(page);
  33 | 
  34 |     await clubDetailsPage.navigateToClub(26);
  35 | 
> 36 |     expect(await clubDetailsPage.contactInfo.isMapDisplayed()).toBeTruthy();
     |                                                                ^ Error: expect(received).toBeTruthy()
  37 |     expect(await clubDetailsPage.contactInfo.getAudienceAge()).toContain('Вік аудиторії');
  38 |     expect(await clubDetailsPage.contactInfo.getWebsiteLink()).toContain('agclub.com.ua');
  39 |     expect(await clubDetailsPage.contactInfo.getPhoneNumber()).toContain('+380');
  40 |   });
  41 | 
  42 |   test('should display comments section', async ({ page }) => {
  43 |     const clubDetailsPage = new ClubDetailsPage(page);
  44 | 
  45 |     await clubDetailsPage.navigateToClub(26);
  46 | 
  47 |     expect(await clubDetailsPage.comments.isCommentsSectionDisplayed()).toBeTruthy();
  48 |   });
  49 | });
  50 | 
```