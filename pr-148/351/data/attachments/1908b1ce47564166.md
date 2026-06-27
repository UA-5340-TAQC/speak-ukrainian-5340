# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/login-tests/sign-in-successful-login.spec.ts >> Sign In - Successful Login
- Location: tests/ui/login-tests/sign-in-successful-login.spec.ts:7:1

# Error details

```
TypeError: signInModal.submit is not a function
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
  - generic [ref=e202]:
    - dialog:
      - generic [ref=e203]:
        - button "Close" [ref=e204] [cursor=pointer]:
          - img "close" [ref=e206]:
            - img [ref=e207]
        - generic [ref=e209]:
          - generic [ref=e210]: Вхід
          - generic [ref=e212]:
            - generic [ref=e214]:
              - link "Logo" [ref=e215] [cursor=pointer]:
                - /url: https://speak-ukrainian.org.ua/oauth2/authorize/google?redirect_uri=https://speak-ukrainian.org.ua/oauth2/redirect
                - img "Logo" [ref=e216]
              - link "Logo" [ref=e217] [cursor=pointer]:
                - /url: https://speak-ukrainian.org.ua/oauth2/authorize/facebook?redirect_uri=https://speak-ukrainian.org.ua/oauth2/redirect
                - img "Logo" [ref=e218]
            - generic [ref=e219]:
              - generic [ref=e220]: або
              - generic [ref=e221]:
                - generic [ref=e223]:
                  - generic "Емейл" [ref=e225]: "Емейл:"
                  - generic [ref=e229]:
                    - textbox "Емейл:" [ref=e230]:
                      - /placeholder: Введіть ваш емейл
                      - text: xelaho8788@aspensif.com
                    - generic [ref=e231]:
                      - img "mail" [ref=e232]:
                        - img [ref=e233]
                      - generic:
                        - img "check-circle":
                          - img
                - generic [ref=e236]:
                  - generic "Пароль" [ref=e238]: "Пароль:"
                  - generic [ref=e242]:
                    - textbox "Пароль:" [ref=e243]:
                      - /placeholder: Введіть ваш пароль
                      - text: Qwerty@12345
                    - generic [ref=e244]:
                      - img "eye-invisible" [ref=e245] [cursor=pointer]:
                        - img [ref=e246]
                      - generic:
                        - img "check-circle":
                          - img
              - button "Увійти" [active] [ref=e255] [cursor=pointer]:
                - generic [ref=e256]: Увійти
          - link "Забули пароль?" [ref=e258] [cursor=pointer]:
            - /url: ""
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures/modal-fixture';
  2  | import * as allure from 'allure-js-commons';
  3  | import env from '@/config/env';
  4  | import { SignInModal } from '@/modals/sign-in-modal';
  5  | import { HomePage } from '@/pages/home-page';
  6  | 
  7  | test('Sign In - Successful Login', async ({ page }) => {
  8  |   await allure.epic('Speak Ukrainian');
  9  |   await allure.feature('Authentication');
  10 |   await allure.story(
  11 |     'As a registered user, I want to sign in with my credentials so I can access my account and platform features.'
  12 |   );
  13 |   await allure.severity('critical');
  14 |   await allure.tags('auth', 'sign-in', 'TC-24');
  15 |   await allure.displayName('Sign In - Successful Login');
  16 |   await allure.description(
  17 |     'Verify that a registered user with confirmed email can sign in from the main page, the modal closes, and the header reflects the logged-in state.'
  18 |   );
  19 | 
  20 |   const email = env.TEST_EMAIL;
  21 |   const password = env.TEST_PASSWORD;
  22 | 
  23 |   const homePage = new HomePage(page);
  24 |   const signInModal = new SignInModal(page);
  25 | 
  26 |   await allure.step('Precondition: Open the main page', async () => {
  27 |     await homePage.navigateTo('/');
  28 |   });
  29 | 
  30 |   await allure.step('Step 1: Click Sign In in the dropdown', async () => {
  31 |     await homePage.clickSignInButton();
  32 |     await expect(await signInModal.getRoot()).toBeVisible();
  33 |   });
  34 | 
  35 |   await allure.step('Step 2: Fill in the Email field', async () => {
  36 |     await signInModal.fillEmail(process.env.TEST_EMAIL as string);
  37 |     await expect.poll(async () => signInModal.getEmail()).toBe(email);
  38 |   });
  39 | 
  40 |   await allure.step('Step 3: Fill in the Password field', async () => {
  41 |     await signInModal.fillPassword(process.env.TEST_PASSWORD as string);
  42 |     await expect.poll(async () => signInModal.getPassword()).toBe(password);
  43 |   });
  44 | 
  45 |   await allure.step('Step 4: Click Sign In button', async () => {
> 46 |     await signInModal.submit();
     |                       ^ TypeError: signInModal.submit is not a function
  47 |     await expect(await signInModal.getRoot()).toBeHidden();
  48 |   });
  49 | 
  50 |   await allure.step('Step 5: Verify user is logged in', async () => {
  51 |     await homePage.header.expectUserIsLoggedIn();
  52 |   });
  53 | 
  54 |   await allure.step('Step 6: Verify auth buttons are hidden', async () => {
  55 |     await homePage.header.expectAuthButtonsHidden();
  56 |   });
  57 | });
  58 | 
```