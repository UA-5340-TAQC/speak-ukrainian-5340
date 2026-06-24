# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sign-up-button.spec.ts >> Challenge Page >> [TC-044]
- Location: tests/sign-up-button.spec.ts:5:3

# Error details

```
Error: expect(received).resolves.toBeTruthy()

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
  - main [ref=e38]:
    - generic [ref=e40]:
      - generic [ref=e41]:
        - heading "Ініціатива “Навчай українською”" [level=2] [ref=e43]
        - generic [ref=e44]:
          - generic [ref=e46]:
            - combobox [ref=e48]
            - generic: Який гурток шукаєте?
          - generic [ref=e49]:
            - img "search" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
            - img "control" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
      - generic [ref=e57]: Клуб української мови "Розмовляй"
      - generic [ref=e58]:
        - generic [ref=e59]:
          - generic [ref=e60]: Наші контакти
          - generic [ref=e61]:
            - link "facebook" [ref=e62] [cursor=pointer]:
              - /url: https://www.facebook.com/teach.in.ukrainian
              - img "facebook":
                - img
            - link "youtube" [ref=e63] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
              - img "youtube":
                - img
            - link "instagram" [ref=e64] [cursor=pointer]:
              - /url: https://www.instagram.com/yedyni.ruh/
              - img "instagram":
                - img
            - link "mail" [ref=e65] [cursor=pointer]:
              - /url: mailto:teach.in.ukrainian@gmail.com
              - img "mail":
                - img
        - link "Допомогти проєкту" [ref=e67] [cursor=pointer]:
          - /url: https://secure.wayforpay.com/payment/s0f2891d77061
          - button "Допомогти проєкту" [ref=e68]:
            - generic [ref=e69]: Допомогти проєкту
      - generic [ref=e70]:
        - heading "Клуб української мови \"Розмовляй\"" [level=1] [ref=e71]:
          - strong [ref=e72]: Клуб української мови "Розмовляй"
        - heading "Клуб української мови \"Розмовляй\"" [level=3] [ref=e73]:
          - strong [ref=e74]:
            - emphasis [ref=e75]: Клуб української мови "Розмовляй"
        - paragraph [ref=e76]: Клуб української мови "Розмовляй" допоможе опанувати мовні практики, здолати мовні бар’єри, створити середовище підтримки та обміну досвідом між батьками дошкільнят, здобути необхідну лексичну базу українською мовою для повсякденного спілкування з дітьми.
        - paragraph [ref=e77]
        - paragraph [ref=e78]: Організатори - Ініціатива "Навчай українською" за підтримки Міністерства молоді та спорту України
        - paragraph [ref=e79]
        - paragraph [ref=e80]:
          - link "https://speak-ukrainian.org.ua/" [ref=e81] [cursor=pointer]:
            - /url: https://speak-ukrainian.org.ua/
        - paragraph [ref=e82]:
          - link "https://www.facebook.com/teach.in.ukrainian" [ref=e83] [cursor=pointer]:
            - /url: https://www.facebook.com/teach.in.ukrainian
        - paragraph [ref=e84]:
          - link "teach.in.ukrainian@gmail.com" [ref=e85] [cursor=pointer]:
            - /url: mailto:teach.in.ukrainian@gmail.com
        - paragraph [ref=e86]: Українська гуманітарна платформа
      - button "Записатись на челендж" [disabled] [ref=e89]:
        - generic: Записатись на челендж
      - link "Зареєструватись" [ref=e91] [cursor=pointer]:
        - /url: /challenges/registration/4
        - button "Зареєструватись" [ref=e92]:
          - generic [ref=e93]: Зареєструватись
  - contentinfo [ref=e94]:
    - generic [ref=e95]:
      - link [ref=e96] [cursor=pointer]:
        - /url: ""
      - generic [ref=e99]:
        - generic [ref=e100]: Нам небайдуже майбутнє
        - generic [ref=e101]: дітей та української мови
      - generic [ref=e103]:
        - link "facebook" [ref=e104] [cursor=pointer]:
          - /url: https://www.facebook.com/teach.in.ukrainian
          - img "facebook":
            - img
        - link "youtube" [ref=e105] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
          - img "youtube":
            - img
        - link "instagram" [ref=e106] [cursor=pointer]:
          - /url: https://www.instagram.com/yedyni.ruh/
          - img "instagram":
            - img
        - link:
          - /url: ""
      - generic [ref=e107]: ©2021-2022 Design by Qubstudio & Development by SoftServe
    - generic [ref=e108]:
      - generic [ref=e109]: Наші партнери
      - generic [ref=e110]:
        - link "soft_serve" [ref=e111] [cursor=pointer]:
          - /url: https://www.softserveinc.com/uk-ua
          - img "soft_serve" [ref=e112]
        - link "Mova_obyednue" [ref=e113] [cursor=pointer]:
          - /url: https://www.facebook.com/zakonpromovu5670
          - img "Mova_obyednue" [ref=e114]
        - link "EDERA" [ref=e115] [cursor=pointer]:
          - /url: https://www.ed-era.com
          - img "EDERA" [ref=e116]
        - link "e-mova" [ref=e117] [cursor=pointer]:
          - /url: https://emova.language-ua.online
          - img "e-mova" [ref=e118]
        - link "Kraina_FM" [ref=e119] [cursor=pointer]:
          - /url: https://krainafm.com.ua
          - img "Kraina_FM" [ref=e120]
        - link "ucf" [ref=e121] [cursor=pointer]:
          - /url: https://ucf.in.ua
          - img "ucf" [ref=e122]
        - link "prostir_svobodi" [ref=e123] [cursor=pointer]:
          - /url: https://prostirsvobody.org
          - img "prostir_svobodi" [ref=e124]
    - generic [ref=e125]:
      - generic [ref=e126]: Як допомогти проєкту?
      - generic [ref=e127]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
      - link "Допомогти проєкту" [ref=e128] [cursor=pointer]:
        - /url: https://secure.wayforpay.com/payment/s0f2891d77061
        - button "Допомогти проєкту" [ref=e129]:
          - generic [ref=e130]: Допомогти проєкту
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures/modal-fixture';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | test.describe('Challenge Page', () => {
  5  |   test('[TC-044]', async ({ challengePage }) => {
  6  |     allure.feature('Challenge Page');
  7  |     allure.owner('Lesia Liashko');
  8  |     allure.description('Verify the "Зареєструватись" button visibility and routing');
  9  | 
  10 |     await allure.step('Navigate to the challenge page and ', async () => {
  11 |       await challengePage.goto(4);
  12 |     });
  13 | 
  14 |     await allure.step('Scroll down to the action buttons section', async () => {
> 15 |       await expect(challengePage.isRegisterButtonVisible()).resolves.toBeTruthy();
     |                                                                      ^ Error: expect(received).resolves.toBeTruthy()
  16 |       await challengePage.waitForPageLoad();
  17 |     });
  18 | 
  19 |     await allure.step('Click the "Зареєструватись" button', async () => {
  20 |       await challengePage.clickRegisterButton();
  21 |     });
  22 | 
  23 |     await allure.step('Verify the redirection', async () => {
  24 |       await expect(challengePage.getCurrentUrl()).resolves.toContain(
  25 |         'https://speak-ukrainian.org.ua/challenges/registration/4'
  26 |       );
  27 |     });
  28 |   });
  29 | });
  30 | 
```