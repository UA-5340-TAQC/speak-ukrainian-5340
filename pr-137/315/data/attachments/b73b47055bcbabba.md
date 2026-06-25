# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/help-tests/payment-challenge.spec.ts >> Payment Challenge >> Verify that the "Єдині" challenge page contains "Допомогти проєкту" button with redirecting to the payment modal
- Location: tests/ui/help-tests/payment-challenge.spec.ts:21:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('div.payments').locator('.help-block').getByText('Невiрна картка') to be visible

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
      - generic [ref=e57]: "\"Єдині\" - це 28 днів підтримки у переході на українську"
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
          - button "Допомогти проєкту" [active] [ref=e68]:
            - generic [ref=e69]: Допомогти проєкту
      - generic [ref=e70]:
        - paragraph [ref=e71]: Мова - це зброя. Інструмент, який об'єднує українців. Це крок до захисту України. Ми допомагаємо відчути себе переможцем і докласти зусиль до перемоги України на інформаційному та культурному фронтах.
        - paragraph [ref=e72]: Проєкт "Єдині" - це 28 днів підтримки у переході на українську. Триває реєстрація учасників на шостий курс.
        - paragraph [ref=e73]: "Кожен учасник курсу отримує:"
        - list [ref=e74]:
          - listitem [ref=e75]: щоденні завдання та навчальні матеріали
          - listitem [ref=e76]: вебінари та онлайн лекції
          - listitem [ref=e77]: розмовні клуби у зручному форматі (онлайн чи офлайн).
          - listitem [ref=e78]: аудіоматеріали для кращого засвоєння знань
          - listitem [ref=e79]: спеціальні відзначки для найактивніших учасників спільноти
          - listitem [ref=e80]: Friendly-чати для спілкування українською у вузькому колі.
        - paragraph [ref=e81]:
          - strong [ref=e82]: Як взяти участь?
        - paragraph [ref=e83]: Старт нового курсу 5 грудня!
        - paragraph [ref=e84]: Долучитися може кожен з будь-якої точки світу.
        - paragraph [ref=e85]: Участь - абсолютно безкоштовна!
        - paragraph [ref=e86]: "Форма реєстрації:"
        - paragraph [ref=e87]: https://yedyni.org/
        - paragraph [ref=e88]
        - paragraph [ref=e89]: Рух створений за участі Ініціативи Навчай українською та за підтримки ГО «Українська гуманітарна платформа».
        - paragraph [ref=e90]
        - paragraph [ref=e91]: "Партнери проєкту:"
        - paragraph [ref=e92]: Уповноважений із захисту державної мови
        - paragraph [ref=e93]: Міністерство молоді та спорту України
        - paragraph [ref=e94]: Western NIS Enterprise Fund (WNISEF) — перший в Україні та Молдові регіональний фонд прямих інвестицій, який має понад 20 років досвіду успішного інвестування у підприємства малого та середнього бізнесу.
        - paragraph [ref=e95]: Студія онлайн-освіти EdEra; Vodafone Ukraine, Українсько-польський центр освіти “UniverPL”, Київський міський Центр гендерної рівності, запобігання та протидії насильству; Young Business club — бізнес-клуб для молодих підприємців, Центр підтримки «Я — Маріуполь», ВГО Українська бібліотечна асоціація, Київський міський Центр гендерної рівності, запобігання та протидії насильству, Call center Adelina, ДУ «Центр Пробації».
        - paragraph [ref=e96]
        - paragraph [ref=e97]: "Зірки, які підтримали проєкт: Марічка Падалко, Соломія Вітвіцька, Павло Вишебаба, Ірена Карпа, Світлана Ройз, Євген Клопотенко, Юлія Янчар, Анна Трінчер, Аліна Шаманська, Ліда Лі, Наталка Карпа, Маша Себова, Аня Оліцька, Жан Беленюк, Ірма Вітовська."
      - button "Записатись на челендж" [disabled] [ref=e100]:
        - generic: Записатись на челендж
      - generic [ref=e101]:
        - heading "Завдання челенджу" [level=2] [ref=e103]
        - generic [ref=e104]:
          - img "arrow-left" [ref=e105] [cursor=pointer]:
            - img [ref=e106]
          - img "arrow-right" [ref=e108] [cursor=pointer]:
            - img [ref=e109]
          - generic [ref=e113]:
            - generic [ref=e115]:
              - link "День 12. Мовна практика Переглянути arrow-right" [ref=e119] [cursor=pointer]:
                - /url: /challenges/task/73
                - generic [ref=e120]:
                  - generic [ref=e121]:
                    - img
                  - generic [ref=e122]: День 12. Мовна практика
                - generic [ref=e124]:
                  - text: Переглянути
                  - img "arrow-right" [ref=e125]:
                    - img [ref=e126]
              - link "День 15. Жартуємо українською Переглянути arrow-right" [ref=e131] [cursor=pointer]:
                - /url: /challenges/task/76
                - generic [ref=e132]:
                  - generic [ref=e133]:
                    - img
                  - generic [ref=e134]: День 15. Жартуємо українською
                - generic [ref=e135]:
                  - text: Переглянути
                  - img "arrow-right" [ref=e136]:
                    - img [ref=e137]
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/84
                      - generic:
                        - generic:
                          - img
                        - generic: День 21. Поглиблюйте свої знання про історичних діячів
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/57
                      - generic:
                        - generic:
                          - img
                        - generic: День 1. Мотивація
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/58
                      - generic:
                        - generic:
                          - img
                        - generic: День 2. Знайомство
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/61
                      - generic:
                        - generic:
                          - img
                        - generic: День 3. Помилки
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/62
                      - generic:
                        - generic:
                          - img
                        - generic: День 4. Українська музика
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/63
                      - generic:
                        - generic:
                          - img
                        - generic: День 5. Подолання мовного бар'єру
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/64
                      - generic:
                        - generic:
                          - img
                        - generic: День 6. Українські фільми для дітей та дорослих
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/67
                      - generic:
                        - generic:
                          - img
                        - generic: День 7. Підтримка
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/75
                      - generic:
                        - generic:
                          - img
                        - generic: День 14. Долучення до спільноти
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/68
                      - generic:
                        - generic:
                          - img
                        - generic: День 8. Мовна стійкість
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/69
                      - generic:
                        - generic:
                          - img
                        - generic: День 9. Запам'ятовуємо українською
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/70
                      - generic:
                        - generic:
                          - img
                        - generic: День 10. Мовлення
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/71
                      - generic:
                        - generic:
                          - img
                        - generic: День 11. Ігри українською
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/72
                      - generic:
                        - generic:
                          - img
                        - generic: День 12. Мовна практика
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/74
                      - generic:
                        - generic:
                          - img
                        - generic: День 13. Збагачення словникового запасу
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/77
                      - generic:
                        - generic:
                          - img
                        - generic: День 15. Жартуємо українською
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/78
                      - generic:
                        - generic:
                          - img
                        - generic: День 16. Працюємо з дітьми
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/79
                      - generic:
                        - generic:
                          - img
                        - generic: День 17. Значення української мови в культурі
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/80
                      - generic:
                        - generic:
                          - img
                        - generic: День 18. Читаємо українською
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/81
                      - generic:
                        - generic:
                          - img
                        - generic: День 19. Вивчайте українську історію
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/82
                      - generic:
                        - generic:
                          - img
                        - generic: День 20. Пізнавайте українську культуру
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/83
                      - generic:
                        - generic:
                          - img
                        - generic: День 21. Поглиблюйте свої знання про українських
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/85
                      - generic:
                        - generic:
                          - img
                        - generic: День 22. Створення середовища та спільноти
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/86
                      - generic:
                        - generic:
                          - img
                        - generic: День 23. Читайте новини українською
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/87
                      - generic:
                        - generic:
                          - img
                        - generic: День 24. Український ютуб
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/88
                      - generic:
                        - generic:
                          - img
                        - generic: День 25. Натхнення
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/89
                      - generic:
                        - generic:
                          - img
                        - generic: День 26. Збережіть свою суперсилу
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/90
                      - generic:
                        - generic:
                          - img
                        - generic: День 27. Корисне з курсу
                      - generic:
                        - text: Переглянути
                        - img:
                          - img
              - generic:
                - generic:
                  - generic:
                    - link:
                      - /url: /challenges/task/91
                      - generic:
                        - generic:
                          - img
                        - generic: День 28. Спільна ініціатива
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
              - listitem [ref=e148]:
                - button "5" [ref=e149] [cursor=pointer]
              - listitem [ref=e150]:
                - button "6" [ref=e151] [cursor=pointer]
              - listitem [ref=e152]:
                - button "7" [ref=e153] [cursor=pointer]
              - listitem [ref=e154]:
                - button "8" [ref=e155] [cursor=pointer]
              - listitem [ref=e156]:
                - button "9" [ref=e157] [cursor=pointer]
              - listitem [ref=e158]:
                - button "10" [ref=e159] [cursor=pointer]
              - listitem [ref=e160]:
                - button "11" [ref=e161] [cursor=pointer]
              - listitem [ref=e162]:
                - button "12" [ref=e163] [cursor=pointer]
              - listitem [ref=e164]:
                - button "13" [ref=e165] [cursor=pointer]
              - listitem [ref=e166]:
                - button "14" [ref=e167] [cursor=pointer]
              - listitem [ref=e168]:
                - button "15" [ref=e169] [cursor=pointer]
              - listitem [ref=e170]:
                - button "16" [ref=e171] [cursor=pointer]
  - contentinfo [ref=e172]:
    - generic [ref=e173]:
      - link [ref=e174] [cursor=pointer]:
        - /url: ""
      - generic [ref=e177]:
        - generic [ref=e178]: Нам небайдуже майбутнє
        - generic [ref=e179]: дітей та української мови
      - generic [ref=e181]:
        - link "facebook" [ref=e182] [cursor=pointer]:
          - /url: https://www.facebook.com/teach.in.ukrainian
          - img "facebook":
            - img
        - link "youtube" [ref=e183] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
          - img "youtube":
            - img
        - link "instagram" [ref=e184] [cursor=pointer]:
          - /url: https://www.instagram.com/yedyni.ruh/
          - img "instagram":
            - img
        - link:
          - /url: ""
      - generic [ref=e185]: ©2021-2022 Design by Qubstudio & Development by SoftServe
    - generic [ref=e186]:
      - generic [ref=e187]: Наші партнери
      - generic [ref=e188]:
        - link "soft_serve" [ref=e189] [cursor=pointer]:
          - /url: https://www.softserveinc.com/uk-ua
          - img "soft_serve" [ref=e190]
        - link "Mova_obyednue" [ref=e191] [cursor=pointer]:
          - /url: https://www.facebook.com/zakonpromovu5670
          - img "Mova_obyednue" [ref=e192]
        - link "EDERA" [ref=e193] [cursor=pointer]:
          - /url: https://www.ed-era.com
          - img "EDERA" [ref=e194]
        - link "e-mova" [ref=e195] [cursor=pointer]:
          - /url: https://emova.language-ua.online
          - img "e-mova" [ref=e196]
        - link "Kraina_FM" [ref=e197] [cursor=pointer]:
          - /url: https://krainafm.com.ua
          - img "Kraina_FM" [ref=e198]
        - link "ucf" [ref=e199] [cursor=pointer]:
          - /url: https://ucf.in.ua
          - img "ucf" [ref=e200]
        - link "prostir_svobodi" [ref=e201] [cursor=pointer]:
          - /url: https://prostirsvobody.org
          - img "prostir_svobodi" [ref=e202]
    - generic [ref=e203]:
      - generic [ref=e204]: Як допомогти проєкту?
      - generic [ref=e205]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
      - link "Допомогти проєкту" [ref=e206] [cursor=pointer]:
        - /url: https://secure.wayforpay.com/payment/s0f2891d77061
        - button "Допомогти проєкту" [ref=e207]:
          - generic [ref=e208]: Допомогти проєкту
```

# Test source

```ts
  109 |   async setExpirationField(value: string): Promise<void> {
  110 |     await allure.step(`Set expiration field to "${value}"`, async (): Promise<void> => {
  111 |       await this.expirationField.fill(value);
  112 |     });
  113 |   }
  114 | 
  115 |   async getCvcField(): Promise<string> {
  116 |     return await this.cvcField.inputValue();
  117 |   }
  118 | 
  119 |   async setCvcField(value: string): Promise<void> {
  120 |     await allure.step('Set CVC field', async (): Promise<void> => {
  121 |       await this.cvcField.fill(value);
  122 |     });
  123 |   }
  124 | 
  125 |   async getNameField(): Promise<string> {
  126 |     return await this.nameField.inputValue();
  127 |   }
  128 | 
  129 |   async setNameField(value: string): Promise<void> {
  130 |     await allure.step(`Set name field to "${value}"`, async (): Promise<void> => {
  131 |       await this.nameField.fill(value);
  132 |     });
  133 |   }
  134 | 
  135 |   async getNumberField(): Promise<string> {
  136 |     return await this.numberField.inputValue();
  137 |   }
  138 | 
  139 |   async setNumberField(value: string): Promise<void> {
  140 |     await allure.step(`Set phone number field to "${value}"`, async (): Promise<void> => {
  141 |       await this.numberField.fill(value);
  142 |     });
  143 |   }
  144 | 
  145 |   async getEmailField(): Promise<string> {
  146 |     return await this.emailField.inputValue();
  147 |   }
  148 | 
  149 |   async setEmailField(value: string): Promise<void> {
  150 |     await allure.step(`Set email field to "${value}"`, async (): Promise<void> => {
  151 |       await this.emailField.fill(value);
  152 |     });
  153 |   }
  154 | 
  155 |   async clickPayButton(): Promise<void> {
  156 |     await allure.step('Click pay button', async (): Promise<void> => {
  157 |       await this.payButton.click();
  158 |     });
  159 |   }
  160 | 
  161 |   async isPayButtonEnabled(): Promise<boolean> {
  162 |     return await this.payButton.isEnabled();
  163 |   }
  164 | 
  165 |   async isPayButtonVisible(): Promise<boolean> {
  166 |     return await this.payButton.isVisible();
  167 |   }
  168 | 
  169 |   async isEmailFieldVisible(): Promise<boolean> {
  170 |     return await this.emailField.isVisible();
  171 |   }
  172 | 
  173 |   async isNumberFieldVisible(): Promise<boolean> {
  174 |     return await this.numberField.isVisible();
  175 |   }
  176 | 
  177 |   async isNameFieldVisible(): Promise<boolean> {
  178 |     return await this.nameField.isVisible();
  179 |   }
  180 | 
  181 |   async isCvcFieldVisible(): Promise<boolean> {
  182 |     return await this.cvcField.isVisible();
  183 |   }
  184 | 
  185 |   async isExpirationFieldVisible(): Promise<boolean> {
  186 |     return await this.expirationField.isVisible();
  187 |   }
  188 | 
  189 |   async isCardFieldVisible(): Promise<boolean> {
  190 |     return await this.cardField.isVisible();
  191 |   }
  192 | 
  193 |   async isOtherPayMethodVisible(): Promise<boolean> {
  194 |     return await this.otherPayMethod.isVisible();
  195 |   }
  196 | 
  197 |   async isGooglePayButtonVisible(): Promise<boolean> {
  198 |     return await this.googlePayButton.isVisible();
  199 |   }
  200 | 
  201 |   async isApplePayButtonVisible(): Promise<boolean> {
  202 |     return await this.applePayButton.isVisible();
  203 |   }
  204 |   async isSumErrorMessageVisible(): Promise<boolean> {
  205 |     await this.sumErrorMessage.waitFor({ state: 'visible' });
  206 |     return await this.sumErrorMessage.isVisible();
  207 |   }
  208 |   async isCardErrorMessageVisible(): Promise<boolean> {
> 209 |     await this.cardErrorMessage.waitFor({ state: 'visible' });
      |                                 ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  210 |     return await this.cardErrorMessage.isVisible();
  211 |   }
  212 |   async isExpirationErrorMessageVisible(): Promise<boolean> {
  213 |     await this.expirationErrorMessage.waitFor({ state: 'visible' });
  214 |     return await this.expirationErrorMessage.isVisible();
  215 |   }
  216 |   async isEmailErrorMessageVisible(): Promise<boolean> {
  217 |     await this.emailErrorMessage.waitFor({ state: 'visible' });
  218 |     return await this.emailErrorMessage.isVisible();
  219 |   }
  220 |   async isNumberErrorMessageVisible(): Promise<boolean> {
  221 |     await this.numberErrorMessage.waitFor({ state: 'visible' });
  222 |     return await this.numberErrorMessage.isVisible();
  223 |   }
  224 | }
  225 | 
```