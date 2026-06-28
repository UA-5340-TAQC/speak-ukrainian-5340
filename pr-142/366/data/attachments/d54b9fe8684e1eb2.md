# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/filter-tests/search-filter-by-hint.spec.ts >> search-bar >> should search by hint category
- Location: tests/ui/filter-tests/search-filter-by-hint.spec.ts:102:3

# Error details

```
TypeError: this.searchBar.getSearchInputText is not a function
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
          - generic [ref=e64]:
            - generic [ref=e65] [cursor=pointer]:
              - generic [ref=e66]:
                - img
              - generic [ref=e67]: "IT освіта: курси \"ГРАНД\""
            - generic [ref=e71]: Програмування, робототехніка, STEM
            - paragraph [ref=e72]: Ми вивчаємо все, що можна уявити в ІТ і навіть більше. Загалом ми вчимо 20 тем. Всі ці теми ми вивчаємо в одному курсі, бо всі сучасні грамотні люди мають це знати. Ми набираємо учнів 5-10 класів. Окремі диференційовані групи для молодших і старших учнів. Повірте, такі речі треба знати всім, незалежно від професії. Ви будете вигідно відрізнятися від інших – це ключ до успіху. Прийдіть і переконайтеся – Ви будете приємно здивовані. Ви зможете робити проекти і творити свої історії успіху.
            - generic [ref=e73]:
              - img "desktop" [ref=e74]:
                - img [ref=e75]
              - generic [ref=e77]: Гурток онлайн
            - radiogroup [ref=e78]:
              - listitem [ref=e79]:
                - radio "star star" [checked] [ref=e80]:
                  - img "star" [ref=e82]:
                    - img [ref=e83]
                  - img "star" [ref=e86]:
                    - img [ref=e87]
              - listitem [ref=e89]:
                - radio "star star" [checked] [ref=e90]:
                  - img "star" [ref=e92]:
                    - img [ref=e93]
                  - img "star" [ref=e96]:
                    - img [ref=e97]
              - listitem [ref=e99]:
                - radio "star star" [checked] [ref=e100]:
                  - img "star" [ref=e102]:
                    - img [ref=e103]
                  - img "star" [ref=e106]:
                    - img [ref=e107]
              - listitem [ref=e109]:
                - radio "star star" [checked] [ref=e110]:
                  - img "star" [ref=e112]:
                    - img [ref=e113]
                  - img "star" [ref=e116]:
                    - img [ref=e117]
              - listitem [ref=e119]:
                - radio "star star" [checked] [ref=e120]:
                  - img "star" [ref=e122]:
                    - img [ref=e123]
                  - img "star" [ref=e126]:
                    - img [ref=e127]
            - img "environment" [ref=e130]:
              - img [ref=e131]
            - link "Детальніше" [ref=e133] [cursor=pointer]:
              - /url: /club/27
              - link "Детальніше" [ref=e134]:
                - /url: /club/27
          - generic [ref=e137]:
            - generic [ref=e138] [cursor=pointer]:
              - generic [ref=e139]:
                - img
              - generic [ref=e140]: Школа лідерства і бізнесу KIDBI
            - generic [ref=e142]:
              - generic [ref=e144]: Інше
              - generic [ref=e146]: Програмування, робототехніка, STEM
            - paragraph [ref=e147]: "За 6 років ми створили нове бачення освіти для підлітків в Україні і наша місія — створювати покоління за поколінням успішних і щасливих дітей. Школа Програмування: вивчення основ конструювання та програмування, мови С++ та C#, онлайн та офлайн групи. Бізнес-школа: трирічний навчальний курс з розвитку лідерських навичок, фінансової грамотності, впевненості і харизми."
            - generic [ref=e148]:
              - img "desktop" [ref=e149]:
                - img [ref=e150]
              - generic [ref=e152]: Гурток онлайн
            - radiogroup [ref=e153]:
              - listitem [ref=e154]:
                - radio "star star" [ref=e155]:
                  - img "star" [ref=e157]:
                    - img [ref=e158]
                  - img "star" [ref=e161]:
                    - img [ref=e162]
              - listitem [ref=e164]:
                - radio "star star" [ref=e165]:
                  - img "star" [ref=e167]:
                    - img [ref=e168]
                  - img "star" [ref=e171]:
                    - img [ref=e172]
              - listitem [ref=e174]:
                - radio "star star" [ref=e175]:
                  - img "star" [ref=e177]:
                    - img [ref=e178]
                  - img "star" [ref=e181]:
                    - img [ref=e182]
              - listitem [ref=e184]:
                - radio "star star" [ref=e185]:
                  - img "star" [ref=e187]:
                    - img [ref=e188]
                  - img "star" [ref=e191]:
                    - img [ref=e192]
              - listitem [ref=e194]:
                - radio "star star" [ref=e195]:
                  - img "star" [ref=e197]:
                    - img [ref=e198]
                  - img "star" [ref=e201]:
                    - img [ref=e202]
            - generic [ref=e204]:
              - img "environment" [ref=e205]:
                - img [ref=e206]
              - generic [ref=e208] [cursor=pointer]: Київ, пр-т Степана Бандери, 34В, ТРЦ “Блокбастер”, IC Coworking 2-й поверх
            - link "Детальніше" [ref=e209] [cursor=pointer]:
              - /url: /club/51
              - link "Детальніше" [ref=e210]:
                - /url: /club/51
          - generic [ref=e213]:
            - generic [ref=e214] [cursor=pointer]:
              - generic [ref=e215]:
                - img
              - generic [ref=e216]: Школа робототехніки та програмування для дітей ROBOCODE
            - generic [ref=e220]: Програмування, робототехніка, STEM
            - paragraph [ref=e221]: "Онлайн-школа RobocodeНавчання онлайн, яке дозволить познайомитися з веб-програмуванням, навчитися розробці ігор та ПЗ. Напрямки: робототехніка, розробка програмного забезпечення, розробка ігор, веб-програмування"
            - generic [ref=e222]:
              - img "desktop" [ref=e223]:
                - img [ref=e224]
              - generic [ref=e226]: Гурток онлайн
            - radiogroup [ref=e227]:
              - listitem [ref=e228]:
                - radio "star star" [ref=e229]:
                  - img "star" [ref=e231]:
                    - img [ref=e232]
                  - img "star" [ref=e235]:
                    - img [ref=e236]
              - listitem [ref=e238]:
                - radio "star star" [ref=e239]:
                  - img "star" [ref=e241]:
                    - img [ref=e242]
                  - img "star" [ref=e245]:
                    - img [ref=e246]
              - listitem [ref=e248]:
                - radio "star star" [ref=e249]:
                  - img "star" [ref=e251]:
                    - img [ref=e252]
                  - img "star" [ref=e255]:
                    - img [ref=e256]
              - listitem [ref=e258]:
                - radio "star star" [ref=e259]:
                  - img "star" [ref=e261]:
                    - img [ref=e262]
                  - img "star" [ref=e265]:
                    - img [ref=e266]
              - listitem [ref=e268]:
                - radio "star star" [ref=e269]:
                  - img "star" [ref=e271]:
                    - img [ref=e272]
                  - img "star" [ref=e275]:
                    - img [ref=e276]
            - img "environment" [ref=e279]:
              - img [ref=e280]
            - link "Детальніше" [ref=e282] [cursor=pointer]:
              - /url: /club/97
              - link "Детальніше" [ref=e283]:
                - /url: /club/97
          - generic [ref=e286]:
            - generic [ref=e287] [cursor=pointer]:
              - generic [ref=e288]:
                - img
              - generic [ref=e289]: Центр технічної творчости та професійної орієнтації
            - generic [ref=e290]:
              - generic [ref=e291]:
                - generic [ref=e293]: Художня студія, мистецтво, дизайн
                - generic [ref=e295]: Журналістика, дитяче телебачення, монтаж відео
              - generic [ref=e296]: і ще 1...
            - paragraph [ref=e297]: "Центр технічної творчости та професійної орієнтації шкільної молоді Дарницького району має такі відділи: відділ початково технічного моделювання (“Моделювання та пошив одягу”, “Художнє випалювання на деревині”, “Юний моделіст”, ЗХК “Орігамі та паперопластика”, ЗХК “Паперова майстерня”, “Юний еколог”, ТО “Світлячок”, ТО “Бджілка”, ТО “Зіроньки”, ТО “АБВГДейка”, ТО “Талановита малеча”, “Арт-інтелект”, “Ліплення”, Дитяча творча студія “SMARTIK”) Науково-технічний відділ (“Основи Web-дизайну”, “Основи сайтобудівництва”, Фізико-математична студія, Відеостудія “Веселка”, “Різьблення деревини”, “Комп`ютерна анімація”, “Програмування”, “Авіамоделювання”, “Цікава математика”, “Електрорадіоконструювання”, “Стендове моделювання”, Відділ художньо-технічної творчості, художній колектив ТО “Берегиня”, художній колектив ТО “Світ іграшки”, художній колектив “М’яка іграшка”, “Декоративне мистецтво”, “Писанкарство”, “Дизайн одягу”, “Креативне рукоділля”, “Гончари”, “Вишивка стрічками”, “Образотворче мистецтво”, “Юний скульптор”), Гуманітарний відділ (“Майбутній журналіст”, “Розмовляємо англійською”, “Англійська малюкам”, “SMART ENGLISH”, “Креативний інтелект”, “Логіка”, “Музична скарбничка”, “Театральний”). Центр працює 7 днів на тиждень з 9:00 до 20:00 . Режим роботи адміністрації: 9:00-18:00, заняття у гуртках проводяться згідно затвердженого розкладу з 13:00 до 20:00."
            - radiogroup [ref=e298]:
              - listitem [ref=e299]:
                - radio "star star" [ref=e300]:
                  - img "star" [ref=e302]:
                    - img [ref=e303]
                  - img "star" [ref=e306]:
                    - img [ref=e307]
              - listitem [ref=e309]:
                - radio "star star" [ref=e310]:
                  - img "star" [ref=e312]:
                    - img [ref=e313]
                  - img "star" [ref=e316]:
                    - img [ref=e317]
              - listitem [ref=e319]:
                - radio "star star" [ref=e320]:
                  - img "star" [ref=e322]:
                    - img [ref=e323]
                  - img "star" [ref=e326]:
                    - img [ref=e327]
              - listitem [ref=e329]:
                - radio "star star" [ref=e330]:
                  - img "star" [ref=e332]:
                    - img [ref=e333]
                  - img "star" [ref=e336]:
                    - img [ref=e337]
              - listitem [ref=e339]:
                - radio "star star" [ref=e340]:
                  - img "star" [ref=e342]:
                    - img [ref=e343]
                  - img "star" [ref=e346]:
                    - img [ref=e347]
            - generic [ref=e349]:
              - img "environment" [ref=e350]:
                - img [ref=e351]
              - generic [ref=e353] [cursor=pointer]: Київ, вулиця Юрія Пасхаліна, 15
            - link "Детальніше" [ref=e354] [cursor=pointer]:
              - /url: /club/111
              - link "Детальніше" [ref=e355]:
                - /url: /club/111
          - generic [ref=e358]:
            - generic [ref=e359] [cursor=pointer]:
              - generic [ref=e360]:
                - img
              - generic [ref=e361]: Станція юних техніків – Центр науково-технічної творчості молоді
            - generic [ref=e362]:
              - generic [ref=e363]:
                - generic [ref=e365]: Художня студія, мистецтво, дизайн
                - generic [ref=e367]: Акторська майстерність, театр
              - generic [ref=e368]: і ще 2...
            - paragraph [ref=e369]: "Станція юних техніків - Центр науково-технічної творчості молоді - комплексний позашкільний навчальний заклад, що віднесений до найбільших позашкільних закладів освіти України. Гордістю закладу є Народні художні колективи: ''Конструювання м'якої іграшки'', ''Чарівні візерунки'', ''Декоративно ужиткове і образотворче мистецтво ''Оранта'' і Зразкові художні колективи: ''Ліпка із солоного тіста'', ''Бісер чарівний'', ''Керамічна майстерня: декор'' і ''Художня кераміка''. Гуртковою роботою охоплено близько 1300 вихованців, які навчаються в понад 90 гуртках за такими напрямами: науково-технічний, художньо-естетичний, еколого-натуралістичний, соціально-реабілітаційний."
            - radiogroup [ref=e370]:
              - listitem [ref=e371]:
                - radio "star star" [ref=e372]:
                  - img "star" [ref=e374]:
                    - img [ref=e375]
                  - img "star" [ref=e378]:
                    - img [ref=e379]
              - listitem [ref=e381]:
                - radio "star star" [ref=e382]:
                  - img "star" [ref=e384]:
                    - img [ref=e385]
                  - img "star" [ref=e388]:
                    - img [ref=e389]
              - listitem [ref=e391]:
                - radio "star star" [ref=e392]:
                  - img "star" [ref=e394]:
                    - img [ref=e395]
                  - img "star" [ref=e398]:
                    - img [ref=e399]
              - listitem [ref=e401]:
                - radio "star star" [ref=e402]:
                  - img "star" [ref=e404]:
                    - img [ref=e405]
                  - img "star" [ref=e408]:
                    - img [ref=e409]
              - listitem [ref=e411]:
                - radio "star star" [ref=e412]:
                  - img "star" [ref=e414]:
                    - img [ref=e415]
                  - img "star" [ref=e418]:
                    - img [ref=e419]
            - generic [ref=e421]:
              - img "environment" [ref=e422]:
                - img [ref=e423]
              - generic [ref=e425] [cursor=pointer]: Київ, вул. М. Кибальчича, 12А
            - link "Детальніше" [ref=e426] [cursor=pointer]:
              - /url: /club/148
              - link "Детальніше" [ref=e427]:
                - /url: /club/148
          - generic [ref=e430]:
            - generic [ref=e431] [cursor=pointer]:
              - generic [ref=e432]:
                - img
              - generic [ref=e433]: Позашкільний навчальний заклад «Центр технічної і художньо-естетичної творчості для дітей та юнацтва «Зміна» м. Києва»
            - generic [ref=e434]:
              - generic [ref=e435]:
                - generic [ref=e437]: Художня студія, мистецтво, дизайн
                - generic [ref=e439]: Журналістика, дитяче телебачення, монтаж відео
              - generic [ref=e440]: і ще 4...
            - paragraph [ref=e441]: танці, хореографія, студія раннього розвитку, програмування, робототехніка, STEM, художня студія, мистецтво, дизайн, вокальна студія, музика, музичні інструменти, акторська майстерність, театр, розвивальні (розвиток лідерських якостей, підприємництво для підлітків тощо), журналістика, дитяче телебачення, монтаж відео, влогів, школа автограмоти, шахи, англійська мова
            - radiogroup [ref=e442]:
              - listitem [ref=e443]:
                - radio "star star" [ref=e444]:
                  - img "star" [ref=e446]:
                    - img [ref=e447]
                  - img "star" [ref=e450]:
                    - img [ref=e451]
              - listitem [ref=e453]:
                - radio "star star" [ref=e454]:
                  - img "star" [ref=e456]:
                    - img [ref=e457]
                  - img "star" [ref=e460]:
                    - img [ref=e461]
              - listitem [ref=e463]:
                - radio "star star" [ref=e464]:
                  - img "star" [ref=e466]:
                    - img [ref=e467]
                  - img "star" [ref=e470]:
                    - img [ref=e471]
              - listitem [ref=e473]:
                - radio "star star" [ref=e474]:
                  - img "star" [ref=e476]:
                    - img [ref=e477]
                  - img "star" [ref=e480]:
                    - img [ref=e481]
              - listitem [ref=e483]:
                - radio "star star" [ref=e484]:
                  - img "star" [ref=e486]:
                    - img [ref=e487]
                  - img "star" [ref=e490]:
                    - img [ref=e491]
            - generic [ref=e493]:
              - img "environment" [ref=e494]:
                - img [ref=e495]
              - generic [ref=e497] [cursor=pointer]: Київ, вул. Краківська, 20
            - link "Детальніше" [ref=e498] [cursor=pointer]:
              - /url: /club/150
              - link "Детальніше" [ref=e499]:
                - /url: /club/150
          - generic [ref=e502]:
            - generic [ref=e503] [cursor=pointer]:
              - generic [ref=e504]:
                - img
              - generic [ref=e505]: Навчально-виховний комплекс №141 «ОРТ»
            - generic [ref=e509]: Програмування, робототехніка, STEM
            - paragraph [ref=e510]: Навчально-виховний комплекс №141 «ОРТ» м.Києва – це заклад з поглибленим вивченням інформаційних технологій та іноземних мов. Заклад було відкрито у 2015 році. Цей масштабний соціальний проект був реалізований завдяки плідному співробітництву міської і районної влади та Всесвітнього ОРТ, який запропонував проект відновлення існуючої школи, надавши благодійну допомогу та перетворивши її в сучасний навчальний комплекс. Комплекс пропонує такі сучасні напрями спеціалізації як веб-дизайн, архітектурне та ландшафтне проектування, інформаційні технології в економіці та бізнесі, тривимірне проектування, програмування, робототехніка та мікроелектроніка дають можливість учням отримати найсучаснішу освіту в області технологій.
            - radiogroup [ref=e511]:
              - listitem [ref=e512]:
                - radio "star star" [ref=e513]:
                  - img "star" [ref=e515]:
                    - img [ref=e516]
                  - img "star" [ref=e519]:
                    - img [ref=e520]
              - listitem [ref=e522]:
                - radio "star star" [ref=e523]:
                  - img "star" [ref=e525]:
                    - img [ref=e526]
                  - img "star" [ref=e529]:
                    - img [ref=e530]
              - listitem [ref=e532]:
                - radio "star star" [ref=e533]:
                  - img "star" [ref=e535]:
                    - img [ref=e536]
                  - img "star" [ref=e539]:
                    - img [ref=e540]
              - listitem [ref=e542]:
                - radio "star star" [ref=e543]:
                  - img "star" [ref=e545]:
                    - img [ref=e546]
                  - img "star" [ref=e549]:
                    - img [ref=e550]
              - listitem [ref=e552]:
                - radio "star star" [ref=e553]:
                  - img "star" [ref=e555]:
                    - img [ref=e556]
                  - img "star" [ref=e559]:
                    - img [ref=e560]
            - generic [ref=e562]:
              - img "environment" [ref=e563]:
                - img [ref=e564]
              - generic [ref=e566] [cursor=pointer]: Київ, бул. Ігоря Шамо 5
            - link "Детальніше" [ref=e567] [cursor=pointer]:
              - /url: /club/151
              - link "Детальніше" [ref=e568]:
                - /url: /club/151
          - generic [ref=e571]:
            - generic [ref=e572] [cursor=pointer]:
              - generic [ref=e573]:
                - img
              - generic [ref=e574]: Київський палац дітей та юнацтва
            - generic [ref=e575]:
              - generic [ref=e576]:
                - generic [ref=e578]: Художня студія, мистецтво, дизайн
                - generic [ref=e580]: Журналістика, дитяче телебачення, монтаж відео
              - generic [ref=e581]: і ще 5...
            - paragraph [ref=e582]: "Центр має такі напрями: гуманітарний, дослідницько-експериментальний, дошкільна освіта, еколого-натуралістичний, науково-технічний, соціально-реабілітаційний, спортивний, туристсько-краєзнавчий, художньо-естетичний. Пропонується навчання у відділах: відділ STEM-освіти, відділ художньої творчості, відділ соціальних ініціатив і партнерства, відділ народної творчості, відділ туризму, краєзнавства та спорту, відділ івент-менеджменту та арт-проектів, інформаційно-творче агентство «ЮН-ПРЕС», відділ біології, відділ PR-технологій та медіавиробництва, авіаційно-космічний центр, Центр розвитку дошкільнят “Джерельце''"
            - radiogroup [ref=e583]:
              - listitem [ref=e584]:
                - radio "star star" [ref=e585]:
                  - img "star" [ref=e587]:
                    - img [ref=e588]
                  - img "star" [ref=e591]:
                    - img [ref=e592]
              - listitem [ref=e594]:
                - radio "star star" [ref=e595]:
                  - img "star" [ref=e597]:
                    - img [ref=e598]
                  - img "star" [ref=e601]:
                    - img [ref=e602]
              - listitem [ref=e604]:
                - radio "star star" [ref=e605]:
                  - img "star" [ref=e607]:
                    - img [ref=e608]
                  - img "star" [ref=e611]:
                    - img [ref=e612]
              - listitem [ref=e614]:
                - radio "star star" [ref=e615]:
                  - img "star" [ref=e617]:
                    - img [ref=e618]
                  - img "star" [ref=e621]:
                    - img [ref=e622]
              - listitem [ref=e624]:
                - radio "star star" [ref=e625]:
                  - img "star" [ref=e627]:
                    - img [ref=e628]
                  - img "star" [ref=e631]:
                    - img [ref=e632]
            - generic [ref=e634]:
              - img "environment" [ref=e635]:
                - img [ref=e636]
              - generic [ref=e638] [cursor=pointer]: Київ, вул. І.Мазепи, 13
            - link "Детальніше" [ref=e639] [cursor=pointer]:
              - /url: /club/152
              - link "Детальніше" [ref=e640]:
                - /url: /club/152
        - list [ref=e641]:
          - listitem "Previous Page" [ref=e642]:
            - button "left" [disabled] [ref=e643]:
              - img "left" [ref=e644]:
                - img [ref=e645]
          - listitem "1" [ref=e647] [cursor=pointer]:
            - generic [ref=e648]: "1"
          - listitem "2" [ref=e649] [cursor=pointer]:
            - generic [ref=e650]: "2"
          - listitem "3" [ref=e651] [cursor=pointer]:
            - generic [ref=e652]: "3"
          - listitem "Next Page" [ref=e653] [cursor=pointer]:
            - button "right" [ref=e654]:
              - img "right" [ref=e655]:
                - img [ref=e656]
  - contentinfo [ref=e658]:
    - generic [ref=e659]:
      - link [ref=e660] [cursor=pointer]:
        - /url: ""
      - generic [ref=e663]:
        - generic [ref=e664]: Нам небайдуже майбутнє
        - generic [ref=e665]: дітей та української мови
      - generic [ref=e667]:
        - link "facebook" [ref=e668] [cursor=pointer]:
          - /url: https://www.facebook.com/teach.in.ukrainian
          - img "facebook":
            - img
        - link "youtube" [ref=e669] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
          - img "youtube":
            - img
        - link "instagram" [ref=e670] [cursor=pointer]:
          - /url: https://www.instagram.com/yedyni.ruh/
          - img "instagram":
            - img
        - link:
          - /url: ""
      - generic [ref=e671]: ©2021-2022 Design by Qubstudio & Development by SoftServe
    - generic [ref=e672]:
      - generic [ref=e673]: Наші партнери
      - generic [ref=e674]:
        - link "soft_serve" [ref=e675] [cursor=pointer]:
          - /url: https://www.softserveinc.com/uk-ua
          - img "soft_serve" [ref=e676]
        - link "Mova_obyednue" [ref=e677] [cursor=pointer]:
          - /url: https://www.facebook.com/zakonpromovu5670
          - img "Mova_obyednue" [ref=e678]
        - link "EDERA" [ref=e679] [cursor=pointer]:
          - /url: https://www.ed-era.com
          - img "EDERA" [ref=e680]
        - link "e-mova" [ref=e681] [cursor=pointer]:
          - /url: https://emova.language-ua.online
          - img "e-mova" [ref=e682]
        - link "Kraina_FM" [ref=e683] [cursor=pointer]:
          - /url: https://krainafm.com.ua
          - img "Kraina_FM" [ref=e684]
        - link "ucf" [ref=e685] [cursor=pointer]:
          - /url: https://ucf.in.ua
          - img "ucf" [ref=e686]
        - link "prostir_svobodi" [ref=e687] [cursor=pointer]:
          - /url: https://prostirsvobody.org
          - img "prostir_svobodi" [ref=e688]
    - generic [ref=e689]:
      - generic [ref=e690]: Як допомогти проєкту?
      - generic [ref=e691]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
      - link "Допомогти проєкту" [ref=e692] [cursor=pointer]:
        - /url: https://secure.wayforpay.com/payment/s0f2891d77061
        - button "Допомогти проєкту" [ref=e693]:
          - generic [ref=e694]: Допомогти проєкту
```

# Test source

```ts
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
  208 |       const searchInput: DropdownComponent = await this.searchBar.clickSearchInput();
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
> 264 |     return await this.searchBar.getSearchInputText();
      |                                 ^ TypeError: this.searchBar.getSearchInputText is not a function
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
  309 |         return addresses;
  310 |       }
  311 |     );
  312 |   }
  313 | 
  314 |   async getAllTags(): Promise<string[]> {
  315 |     const tags: string[] = [];
  316 |     const totalPages: number = await this.pagination.getTotalPages();
  317 | 
  318 |     for (let i: number = 1; i <= totalPages; i++) {
  319 |       await this.pagination.goToPage(i);
  320 |       await this.waitUntilCardLoads();
  321 | 
  322 |       const tagsComponent: TagsComponent = await this.clubList.getClubTags();
  323 |       const pageTags: string[] = await tagsComponent.getAllCategoryTags();
  324 |       tags.push(...pageTags);
  325 | 
  326 |       const isLast = await this.pagination.isNextDisabled();
  327 |       if (isLast) break;
  328 |     }
  329 | 
  330 |     return tags;
  331 |   }
  332 | 
  333 |   async selectCategory(category: ClubCategory): Promise<ClubPage> {
  334 |     await this.advancedSearch.clickCategoryButton(category);
  335 |     return this;
  336 |   }
  337 |   async isCaregoryButtonChecked(category: ClubCategory): Promise<boolean> {
  338 |     return await allure.step(
  339 |       `Check if category button "${category}" is checked`,
  340 |       async (): Promise<boolean> => {
  341 |         return await this.advancedSearch.isCategoryButtonChecked(category);
  342 |       }
  343 |     );
  344 |   }
  345 | }
  346 | 
```