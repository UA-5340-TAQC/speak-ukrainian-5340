# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/club-tests/tc-004-add-new-club.spec.ts >> tc-004-add-new-club >> should add a new club with required data
- Location: tests/ui/club-tests/tc-004-add-new-club.spec.ts:27:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('body').locator('.ant-message-success').filter({ hasText: 'Гурток успішно створено' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('body').locator('.ant-message-success').filter({ hasText: 'Гурток успішно створено' })

```

```yaml
- banner:
  - link:
    - /url: /
  - menu:
    - menuitem "apartment Гуртки":
      - img "apartment"
      - link "Гуртки":
        - /url: /clubs
    - menuitem "crown Челендж":
      - img "crown"
      - text: Челендж
    - menuitem "folder-open Новини":
      - img "folder-open"
      - link "Новини":
        - /url: /news
    - menuitem "container Про нас":
      - img "container"
      - link "Про нас":
        - /url: /about
    - menuitem "folder-open Послуги українською":
      - img "folder-open"
      - link "Послуги українською":
        - /url: /service
  - img "environment"
  - text: Київ
  - img "caret-down"
  - button "Додати гурток"
  - img "user"
  - img "caret-down"
- main:
  - heading "Ініціатива “Навчай українською”" [level=2]
  - combobox
  - text: Який гурток шукаєте?
  - img "search"
  - img "control"
  - img "arrow-left"
  - heading "Про гуртки українською" [level=2]
  - text: На нашому сайті ви можете обрати для вашої дитини гурток, де навчають українською мовою.
  - link "Детальніше":
    - /url: /clubs
    - button "Детальніше"
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
  - img "arrow-right"
  - heading "Оберіть напрям гуртків" [level=2]
  - link "Всі гуртки":
    - /url: /clubs
    - button "Всі гуртки"
  - img "arrow-left"
  - img "arrow-right"
  - link "Спортивні секції Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо Переглянути arrow-right":
    - /url: /clubs
    - img
    - text: Спортивні секції Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо Переглянути
    - img "arrow-right"
  - link "Танці, хореографія Класичні і народні танці, брейк-данс, степ, контемп, балет та ін. Переглянути arrow-right":
    - /url: /clubs
    - img
    - text: Танці, хореографія Класичні і народні танці, брейк-данс, степ, контемп, балет та ін. Переглянути
    - img "arrow-right"
  - link "Студії раннього розвитку Центри раннього розвитку, заняття для малюків, розвиток мовлення Переглянути arrow-right":
    - /url: /clubs
    - img
    - text: Студії раннього розвитку Центри раннього розвитку, заняття для малюків, розвиток мовлення Переглянути
    - img "arrow-right"
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
    - listitem:
      - button "4"
  - heading "Челендж \"Навчай українською\"" [level=2]
  - text: Ми допоможемо вам перейти на українську мову викладання. Тут ви можете знайти мотиваційні та практичні вебінари з експертами, корисні матеріали, які вдосконалять ваші знання та навички викладати українською.
  - link "Дізнатись більше":
    - /url: /challenge
    - button "Дізнатись більше"
  - img
  - link "Клуб української мови \"Розмовляй\"":
    - /url: /speakingclub
    - heading "Клуб української мови \"Розмовляй\"" [level=2]
  - link:
    - /url: ""
  - link:
    - /url: https://www.facebook.com/events/2754499954695563
    - img
- contentinfo:
  - link:
    - /url: ""
  - text: Нам небайдуже майбутнє дітей та української мови
  - link "facebook":
    - /url: https://www.facebook.com/teach.in.ukrainian
    - img "facebook"
  - link "youtube":
    - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
    - img "youtube"
  - link "instagram":
    - /url: https://www.instagram.com/yedyni.ruh/
    - img "instagram"
  - link:
    - /url: ""
  - text: ©2021-2022 Design by Qubstudio & Development by SoftServe Наші партнери
  - link "soft_serve":
    - /url: https://www.softserveinc.com/uk-ua
    - img "soft_serve"
  - link "Mova_obyednue":
    - /url: https://www.facebook.com/zakonpromovu5670
    - img "Mova_obyednue"
  - link "EDERA":
    - /url: https://www.ed-era.com
    - img "EDERA"
  - link "e-mova":
    - /url: https://emova.language-ua.online
    - img "e-mova"
  - link "Kraina_FM":
    - /url: https://krainafm.com.ua
    - img "Kraina_FM"
  - link "ucf":
    - /url: https://ucf.in.ua
    - img "ucf"
  - link "prostir_svobodi":
    - /url: https://prostirsvobody.org
    - img "prostir_svobodi"
  - text: Як допомогти проєкту? Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
  - link "Допомогти проєкту":
    - /url: https://secure.wayforpay.com/payment/s0f2891d77061
    - button "Допомогти проєкту"
- dialog:
  - button "Close":
    - img "close"
  - complementary:
    - img "check"
    - text: Основна інформація
    - img "check"
    - text: Контакти 3 Опис
  - main:
    - text: Додати гурток Логотип
    - button "upload Завантажити лого":
      - img "upload"
      - text: Завантажити лого
    - img "paper-clip"
    - text: test-logo.jpg
    - button "delete":
      - img "delete"
    - text: Обкладинка
    - button "upload Завантажити обкладинку":
      - img "upload"
      - text: Завантажити обкладинку
    - text: Галерея
    - button "plus Додати":
      - img "plus"
      - text: Додати
    - text: Опис
    - textbox "Додайте опис гуртка": Цей гурток створений виключно для цілей автоматизованого тестування. Він має достатню довжину для проходження валідації.
    - img "check-circle"
    - button "Назад"
    - button "Завершити"
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  | import { BaseComponent } from '@/components/base-component';
  3  | 
  4  | export class MessageComponent extends BaseComponent {
  5  |   private readonly successMessage: Locator;
  6  |   private readonly validationErrors: Locator;
  7  | 
  8  |   static getRootLocator(page: Page): Locator {
  9  |     return page.locator('body');
  10 |   }
  11 | 
  12 |   constructor(rootLocator: Locator) {
  13 |     super(rootLocator);
  14 |     this.successMessage = this.root.locator('.ant-message-success');
  15 |     this.validationErrors = this.root.locator('.ant-form-item-has-error');
  16 |   }
  17 | 
  18 |   async expectSuccessMessageVisible(text: string): Promise<void> {
> 19 |     await expect(this.successMessage.filter({ hasText: text })).toBeVisible({ timeout: 15000 });
     |                                                                 ^ Error: expect(locator).toBeVisible() failed
  20 |   }
  21 | 
  22 |   async expectNoValidationErrors(): Promise<void> {
  23 |     await expect(this.validationErrors).toHaveCount(0);
  24 |   }
  25 | }
  26 | 
```