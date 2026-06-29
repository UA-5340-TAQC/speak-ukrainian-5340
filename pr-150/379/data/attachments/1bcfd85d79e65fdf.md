# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/club-tests/club-advanced-search.spec.ts >> club-advanced-search >> should display centres in the particular city
- Location: tests/ui/club-tests/club-advanced-search.spec.ts:22:3

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('header.header').locator('svg[data-icon="control"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
                - generic [ref=e67]: American Gymnastics Club
              - generic [ref=e71]: Спортивні секції
              - paragraph [ref=e72]: Американський гімнастичний клуб (American Gymnastics Club) – перша та єдина в країні мережа унікальних спортивних клубів, яка базується на Розвивальній Гімнастиці. Крім щоденних занять, в Американському гімнастичному Клубі проходять «Показові виступи» та різноманітні тематичні вечірки, які допомагають зібрати активних однодумців і популяризувати та прививати любов до спорту, перетворюючи його в стиль життя.
              - radiogroup [ref=e73]:
                - listitem [ref=e74]:
                  - radio "star star" [checked] [ref=e75]:
                    - img "star" [ref=e77]:
                      - img [ref=e78]
                    - img "star" [ref=e81]:
                      - img [ref=e82]
                - listitem [ref=e84]:
                  - radio "star star" [checked] [ref=e85]:
                    - img "star" [ref=e87]:
                      - img [ref=e88]
                    - img "star" [ref=e91]:
                      - img [ref=e92]
                - listitem [ref=e94]:
                  - radio "star star" [checked] [ref=e95]:
                    - img "star" [ref=e97]:
                      - img [ref=e98]
                    - img "star" [ref=e101]:
                      - img [ref=e102]
                - listitem [ref=e104]:
                  - radio "star star" [checked] [ref=e105]:
                    - img "star" [ref=e107]:
                      - img [ref=e108]
                    - img "star" [ref=e111]:
                      - img [ref=e112]
                - listitem [ref=e114]:
                  - radio "star star" [checked] [ref=e115]:
                    - img "star" [ref=e117]:
                      - img [ref=e118]
                    - img "star" [ref=e121]:
                      - img [ref=e122]
              - generic [ref=e124]:
                - img "environment" [ref=e125]:
                  - img [ref=e126]
                - generic [ref=e128] [cursor=pointer]: Київ, вулиця Фізкультури 1, корпус 3
              - link "Детальніше" [ref=e129] [cursor=pointer]:
                - /url: /club/26
                - link "Детальніше" [ref=e130]:
                  - /url: /club/26
            - generic [ref=e133]:
              - generic [ref=e134] [cursor=pointer]:
                - generic [ref=e135]:
                  - img
                - generic [ref=e136]: "IT освіта: курси \"ГРАНД\""
              - generic [ref=e140]: Програмування, робототехніка, STEM
              - paragraph [ref=e141]: Ми вивчаємо все, що можна уявити в ІТ і навіть більше. Загалом ми вчимо 20 тем. Всі ці теми ми вивчаємо в одному курсі, бо всі сучасні грамотні люди мають це знати. Ми набираємо учнів 5-10 класів. Окремі диференційовані групи для молодших і старших учнів. Повірте, такі речі треба знати всім, незалежно від професії. Ви будете вигідно відрізнятися від інших – це ключ до успіху. Прийдіть і переконайтеся – Ви будете приємно здивовані. Ви зможете робити проекти і творити свої історії успіху.
              - generic [ref=e142]:
                - img "desktop" [ref=e143]:
                  - img [ref=e144]
                - generic [ref=e146]: Гурток онлайн
              - radiogroup [ref=e147]:
                - listitem [ref=e148]:
                  - radio "star star" [checked] [ref=e149]:
                    - img "star" [ref=e151]:
                      - img [ref=e152]
                    - img "star" [ref=e155]:
                      - img [ref=e156]
                - listitem [ref=e158]:
                  - radio "star star" [checked] [ref=e159]:
                    - img "star" [ref=e161]:
                      - img [ref=e162]
                    - img "star" [ref=e165]:
                      - img [ref=e166]
                - listitem [ref=e168]:
                  - radio "star star" [checked] [ref=e169]:
                    - img "star" [ref=e171]:
                      - img [ref=e172]
                    - img "star" [ref=e175]:
                      - img [ref=e176]
                - listitem [ref=e178]:
                  - radio "star star" [checked] [ref=e179]:
                    - img "star" [ref=e181]:
                      - img [ref=e182]
                    - img "star" [ref=e185]:
                      - img [ref=e186]
                - listitem [ref=e188]:
                  - radio "star star" [checked] [ref=e189]:
                    - img "star" [ref=e191]:
                      - img [ref=e192]
                    - img "star" [ref=e195]:
                      - img [ref=e196]
              - img "environment" [ref=e199]:
                - img [ref=e200]
              - link "Детальніше" [ref=e202] [cursor=pointer]:
                - /url: /club/27
                - link "Детальніше" [ref=e203]:
                  - /url: /club/27
            - generic [ref=e206]:
              - generic [ref=e207] [cursor=pointer]:
                - generic [ref=e208]:
                  - img
                - generic [ref=e209]: Онлайн-школа точних наук YOUSTUD
              - generic [ref=e213]: Інше
              - paragraph [ref=e214]: YOUSTUD - це перша в Україні онлайн-школа точних наук. Ми допомагаємо дітям зрозуміти, що точні науки - це не страшно, а навіть дуже цікаво. Таким чином діти набагато краще сприймають інформацію. Підготовка до ЗНО/ДПА, підвищення рівня знань з точних наук
              - generic [ref=e215]:
                - img "desktop" [ref=e216]:
                  - img [ref=e217]
                - generic [ref=e219]: Гурток онлайн
              - radiogroup [ref=e220]:
                - listitem [ref=e221]:
                  - radio "star star" [checked] [ref=e222]:
                    - img "star" [ref=e224]:
                      - img [ref=e225]
                    - img "star" [ref=e228]:
                      - img [ref=e229]
                - listitem [ref=e231]:
                  - radio "star star" [checked] [ref=e232]:
                    - img "star" [ref=e234]:
                      - img [ref=e235]
                    - img "star" [ref=e238]:
                      - img [ref=e239]
                - listitem [ref=e241]:
                  - radio "star star" [checked] [ref=e242]:
                    - img "star" [ref=e244]:
                      - img [ref=e245]
                    - img "star" [ref=e248]:
                      - img [ref=e249]
                - listitem [ref=e251]:
                  - radio "star star" [checked] [ref=e252]:
                    - img "star" [ref=e254]:
                      - img [ref=e255]
                    - img "star" [ref=e258]:
                      - img [ref=e259]
                - listitem [ref=e261]:
                  - radio "star star" [checked] [ref=e262]:
                    - img "star" [ref=e264]:
                      - img [ref=e265]
                    - img "star" [ref=e268]:
                      - img [ref=e269]
              - img "environment" [ref=e272]:
                - img [ref=e273]
              - link "Детальніше" [ref=e275] [cursor=pointer]:
                - /url: /club/32
                - link "Детальніше" [ref=e276]:
                  - /url: /club/32
            - generic [ref=e279]:
              - generic [ref=e280] [cursor=pointer]:
                - generic [ref=e281]:
                  - img
                - generic [ref=e282]: Театральна Студія "Зоряні Діти''
              - generic [ref=e286]: Акторська майстерність, театр
              - paragraph [ref=e287]: Кожна людина талановита, але страхи та зажими блокують розвиток особистості! Наші заняття спрямовані на підвищення самооцінки. Мотивують до відкритості та самодисципліни. Психофізичний тренінг допоможе звільнитись від внутрішніх зажимів, а вправи на розвиток уваги та фантазії, розкриють внутрішній світ вашої дитини!
              - radiogroup [ref=e288]:
                - listitem [ref=e289]:
                  - radio "star star" [ref=e290]:
                    - img "star" [ref=e292]:
                      - img [ref=e293]
                    - img "star" [ref=e296]:
                      - img [ref=e297]
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
              - generic [ref=e339]:
                - img "environment" [ref=e340]:
                  - img [ref=e341]
                - generic [ref=e343] [cursor=pointer]: Київ, вул. Дмитрівська 69, Центр Унікум
              - link "Детальніше" [ref=e344] [cursor=pointer]:
                - /url: /club/33
                - link "Детальніше" [ref=e345]:
                  - /url: /club/33
            - generic [ref=e348]:
              - generic [ref=e349] [cursor=pointer]:
                - generic [ref=e350]:
                  - img
                - generic [ref=e351]: Студія танцю "Несамовиті"
              - generic [ref=e355]: Танці, хореографія
              - paragraph [ref=e356]: Студія сучасного танцю «Несамовиті» для дітей віком від 3-х років. Наша велика місія — дати кожній дитині змогу знайти свій талант та розкритись як особистість.
              - radiogroup [ref=e357]:
                - listitem [ref=e358]:
                  - radio "star star" [ref=e359]:
                    - img "star" [ref=e361]:
                      - img [ref=e362]
                    - img "star" [ref=e365]:
                      - img [ref=e366]
                - listitem [ref=e368]:
                  - radio "star star" [ref=e369]:
                    - img "star" [ref=e371]:
                      - img [ref=e372]
                    - img "star" [ref=e375]:
                      - img [ref=e376]
                - listitem [ref=e378]:
                  - radio "star star" [ref=e379]:
                    - img "star" [ref=e381]:
                      - img [ref=e382]
                    - img "star" [ref=e385]:
                      - img [ref=e386]
                - listitem [ref=e388]:
                  - radio "star star" [ref=e389]:
                    - img "star" [ref=e391]:
                      - img [ref=e392]
                    - img "star" [ref=e395]:
                      - img [ref=e396]
                - listitem [ref=e398]:
                  - radio "star star" [ref=e399]:
                    - img "star" [ref=e401]:
                      - img [ref=e402]
                    - img "star" [ref=e405]:
                      - img [ref=e406]
              - generic [ref=e408]:
                - img "environment" [ref=e409]:
                  - img [ref=e410]
                - generic [ref=e412] [cursor=pointer]: Київ, вулиця Василя Стуса, № 22/1
              - link "Детальніше" [ref=e413] [cursor=pointer]:
                - /url: /club/34
                - link "Детальніше" [ref=e414]:
                  - /url: /club/34
            - generic [ref=e417]:
              - generic [ref=e418] [cursor=pointer]:
                - generic [ref=e419]:
                  - img
                - generic [ref=e420]: LESKIV-SCHOOL
              - generic [ref=e424]: Спортивні секції
              - paragraph [ref=e425]: Спорт - гірські та водні лижі, водні лижі та вейкборд, ролики, петанк
              - radiogroup [ref=e426]:
                - listitem [ref=e427]:
                  - radio "star star" [checked] [ref=e428]:
                    - img "star" [ref=e430]:
                      - img [ref=e431]
                    - img "star" [ref=e434]:
                      - img [ref=e435]
                - listitem [ref=e437]:
                  - radio "star star" [checked] [ref=e438]:
                    - img "star" [ref=e440]:
                      - img [ref=e441]
                    - img "star" [ref=e444]:
                      - img [ref=e445]
                - listitem [ref=e447]:
                  - radio "star star" [checked] [ref=e448]:
                    - img "star" [ref=e450]:
                      - img [ref=e451]
                    - img "star" [ref=e454]:
                      - img [ref=e455]
                - listitem [ref=e457]:
                  - radio "star star" [checked] [ref=e458]:
                    - img "star" [ref=e460]:
                      - img [ref=e461]
                    - img "star" [ref=e464]:
                      - img [ref=e465]
                - listitem [ref=e467]:
                  - radio "star star" [checked] [ref=e468]:
                    - img "star" [ref=e470]:
                      - img [ref=e471]
                    - img "star" [ref=e474]:
                      - img [ref=e475]
              - generic [ref=e477]:
                - img "environment" [ref=e478]:
                  - img [ref=e479]
                - generic [ref=e481] [cursor=pointer]: Київ, вул. Генерала Родимцева, 6
              - link "Детальніше" [ref=e482] [cursor=pointer]:
                - /url: /club/35
                - link "Детальніше" [ref=e483]:
                  - /url: /club/35
            - generic [ref=e486]:
              - generic [ref=e487] [cursor=pointer]:
                - generic [ref=e488]:
                  - img
                - generic [ref=e489]: Професійний клуб Айкідо Йошинкан в Києві - MISOGI
              - generic [ref=e493]: Спортивні секції
              - paragraph [ref=e494]: "Філософія Айкідо — відсутність агресії, відновлення гармонії в навколишньому світі. Це єдина техніка східних єдиноборств, спрямована виключно на самозахист. Клуб MISOGI пропонує: найбільш інтелектуальний вид східних єдиноборств без обмежень за віком і рівнем фізичної підготовки; фізичний розвиток, що загартовує, зміцнює організм та стимулює вести здоровий спосіб життя. Заняття айкідо покращують реакцію, координацію, спритність, а також вдосконалюють духовно, знайомлять з елементами японської культури, вчать відчувати, що відбувається навколо, розвивають інтелектуально та знайомлять з практичною анатомією людини, біомеханікою."
              - radiogroup [ref=e495]:
                - listitem [ref=e496]:
                  - radio "star star" [ref=e497]:
                    - img "star" [ref=e499]:
                      - img [ref=e500]
                    - img "star" [ref=e503]:
                      - img [ref=e504]
                - listitem [ref=e506]:
                  - radio "star star" [ref=e507]:
                    - img "star" [ref=e509]:
                      - img [ref=e510]
                    - img "star" [ref=e513]:
                      - img [ref=e514]
                - listitem [ref=e516]:
                  - radio "star star" [ref=e517]:
                    - img "star" [ref=e519]:
                      - img [ref=e520]
                    - img "star" [ref=e523]:
                      - img [ref=e524]
                - listitem [ref=e526]:
                  - radio "star star" [ref=e527]:
                    - img "star" [ref=e529]:
                      - img [ref=e530]
                    - img "star" [ref=e533]:
                      - img [ref=e534]
                - listitem [ref=e536]:
                  - radio "star star" [ref=e537]:
                    - img "star" [ref=e539]:
                      - img [ref=e540]
                    - img "star" [ref=e543]:
                      - img [ref=e544]
              - generic [ref=e546]:
                - img "environment" [ref=e547]:
                  - img [ref=e548]
                - generic [ref=e550] [cursor=pointer]: Київ, вул.Тургенівська 3/9
              - link "Детальніше" [ref=e551] [cursor=pointer]:
                - /url: /club/36
                - link "Детальніше" [ref=e552]:
                  - /url: /club/36
            - generic [ref=e555]:
              - generic [ref=e556] [cursor=pointer]:
                - generic [ref=e557]:
                  - img
                - generic [ref=e558]: Школа танців Dream Team
              - generic [ref=e562]: Танці, хореографія
              - paragraph [ref=e563]: Професійні хореографи у різних танцювальних стилях завжди готові передати свій досвід нашим учням будь-якої вікової категорії та рівня підготовки. У нас Ви знайдете більше двадцяти найпопулярніших стилів танцю. Комфортні умови, дружня та драйвова атмосфера, грандіозні концерти, виступи, змагання, майстер-класи, зустрічі зі знаменитостями, дискотеки, фотосесії, участь у зйомках відеокліпів та ще безліч усього цікавого чекає на Вас у “Dream Team”!
              - radiogroup [ref=e564]:
                - listitem [ref=e565]:
                  - radio "star star" [ref=e566]:
                    - img "star" [ref=e568]:
                      - img [ref=e569]
                    - img "star" [ref=e572]:
                      - img [ref=e573]
                - listitem [ref=e575]:
                  - radio "star star" [ref=e576]:
                    - img "star" [ref=e578]:
                      - img [ref=e579]
                    - img "star" [ref=e582]:
                      - img [ref=e583]
                - listitem [ref=e585]:
                  - radio "star star" [ref=e586]:
                    - img "star" [ref=e588]:
                      - img [ref=e589]
                    - img "star" [ref=e592]:
                      - img [ref=e593]
                - listitem [ref=e595]:
                  - radio "star star" [ref=e596]:
                    - img "star" [ref=e598]:
                      - img [ref=e599]
                    - img "star" [ref=e602]:
                      - img [ref=e603]
                - listitem [ref=e605]:
                  - radio "star star" [ref=e606]:
                    - img "star" [ref=e608]:
                      - img [ref=e609]
                    - img "star" [ref=e612]:
                      - img [ref=e613]
              - generic [ref=e615]:
                - img "environment" [ref=e616]:
                  - img [ref=e617]
                - generic [ref=e619] [cursor=pointer]: Київ, Оболонський проспект 21Б , ТРЦ DREAM TOWN 2
              - link "Детальніше" [ref=e620] [cursor=pointer]:
                - /url: /club/43
                - link "Детальніше" [ref=e621]:
                  - /url: /club/43
          - list [ref=e622]:
            - listitem "Previous Page" [ref=e623]:
              - button "left" [disabled] [ref=e624]:
                - img "left" [ref=e625]:
                  - img [ref=e626]
            - listitem "1" [ref=e628] [cursor=pointer]:
              - generic [ref=e629]: "1"
            - listitem "2" [ref=e630] [cursor=pointer]:
              - generic [ref=e631]: "2"
            - listitem "3" [ref=e632] [cursor=pointer]:
              - generic [ref=e633]: "3"
            - listitem "4" [ref=e634] [cursor=pointer]:
              - generic [ref=e635]: "4"
            - listitem "5" [ref=e636] [cursor=pointer]:
              - generic [ref=e637]: "5"
            - listitem "Next 5 Pages" [ref=e638] [cursor=pointer]:
              - generic [ref=e640]:
                - img "double-right" [ref=e641]:
                  - img [ref=e642]
                - generic [ref=e644]: •••
            - listitem "9" [ref=e645] [cursor=pointer]:
              - generic [ref=e646]: "9"
            - listitem "Next Page" [ref=e647] [cursor=pointer]:
              - button "right" [ref=e648]:
                - img "right" [ref=e649]:
                  - img [ref=e650]
    - contentinfo [ref=e652]:
      - generic [ref=e653]:
        - link [ref=e654] [cursor=pointer]:
          - /url: ""
        - generic [ref=e657]:
          - generic [ref=e658]: Нам небайдуже майбутнє
          - generic [ref=e659]: дітей та української мови
        - generic [ref=e661]:
          - link "facebook" [ref=e662] [cursor=pointer]:
            - /url: https://www.facebook.com/teach.in.ukrainian
            - img "facebook":
              - img
          - link "youtube" [ref=e663] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
            - img "youtube":
              - img
          - link "instagram" [ref=e664] [cursor=pointer]:
            - /url: https://www.instagram.com/yedyni.ruh/
            - img "instagram":
              - img
          - link:
            - /url: ""
        - generic [ref=e665]: ©2021-2022 Design by Qubstudio & Development by SoftServe
      - generic [ref=e666]:
        - generic [ref=e667]: Наші партнери
        - generic [ref=e668]:
          - link "soft_serve" [ref=e669] [cursor=pointer]:
            - /url: https://www.softserveinc.com/uk-ua
            - img "soft_serve" [ref=e670]
          - link "Mova_obyednue" [ref=e671] [cursor=pointer]:
            - /url: https://www.facebook.com/zakonpromovu5670
            - img "Mova_obyednue" [ref=e672]
          - link "EDERA" [ref=e673] [cursor=pointer]:
            - /url: https://www.ed-era.com
            - img "EDERA" [ref=e674]
          - link "e-mova" [ref=e675] [cursor=pointer]:
            - /url: https://emova.language-ua.online
            - img "e-mova" [ref=e676]
          - link "Kraina_FM" [ref=e677] [cursor=pointer]:
            - /url: https://krainafm.com.ua
            - img "Kraina_FM" [ref=e678]
          - link "ucf" [ref=e679] [cursor=pointer]:
            - /url: https://ucf.in.ua
            - img "ucf" [ref=e680]
          - link "prostir_svobodi" [ref=e681] [cursor=pointer]:
            - /url: https://prostirsvobody.org
            - img "prostir_svobodi" [ref=e682]
      - generic [ref=e683]:
        - generic [ref=e684]: Як допомогти проєкту?
        - generic [ref=e685]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
        - link "Допомогти проєкту" [ref=e686] [cursor=pointer]:
          - /url: https://secure.wayforpay.com/payment/s0f2891d77061
          - button "Допомогти проєкту" [ref=e687]:
            - generic [ref=e688]: Допомогти проєкту
  - generic:
    - generic: ": :"
```

# Test source

```ts
  45  |     this.searchButton = this.root.locator('svg[data-icon="search"]');
  46  |     this.advancedSearchButton = this.root.locator('svg[data-icon="control"]');
  47  |     this.challengeDropdownMenu = this.page.locator(
  48  |       'ul.ant-menu-sub.ant-menu-vertical[id*="challenge"]'
  49  |     );
  50  |     this.challengeDropdownItems = this.page.locator(
  51  |       'ul.ant-menu-sub.ant-menu-vertical[id*="challenge"] .subItem'
  52  |     );
  53  |     this.dropdownLocator = this.root.page().locator('ul.ant-dropdown-menu');
  54  |     this.dropdown = new DropdownComponent(this.dropdownLocator);
  55  |     this.challengeDropdownLocator = this.root
  56  |       .page()
  57  |       .locator('div.ant-menu-submenu-popup')
  58  |       .filter({ visible: true });
  59  |     this.challengeDropdown = new DropdownComponent(this.challengeDropdownLocator);
  60  |     this.addClubButton = this.root.locator('button.add-club-button');
  61  |   }
  62  | 
  63  |   async clickClubs(): Promise<void> {
  64  |     await allure.step('Click on "Гуртки" link', async (): Promise<void> => {
  65  |       await this.clubsLink.click();
  66  |     });
  67  |   }
  68  | 
  69  |   async clickChallenge(): Promise<void> {
  70  |     await allure.step('Click on "Челендж" link', async (): Promise<void> => {
  71  |       await this.challengeLink.click();
  72  |     });
  73  |   }
  74  |   async selectChallenge(challenge: Challenges): Promise<void> {
  75  |     await this.clickChallenge();
  76  |     await this.challengeDropdownLocator.waitFor({ state: 'visible' });
  77  |     await this.challengeDropdown.selectChallengeOption(challenge);
  78  |   }
  79  | 
  80  |   async clickNews(): Promise<void> {
  81  |     await allure.step('Click on "Новини" link', async (): Promise<void> => {
  82  |       await this.newsLink.click();
  83  |     });
  84  |   }
  85  | 
  86  |   async clickAboutUs(): Promise<void> {
  87  |     await allure.step('Click on "Про нас" link', async (): Promise<void> => {
  88  |       await this.aboutUsLink.click();
  89  |     });
  90  |   }
  91  | 
  92  |   async clickServices(): Promise<void> {
  93  |     await allure.step('Click on "Послуги українською" link', async (): Promise<void> => {
  94  |       await this.servicesLink.click();
  95  |     });
  96  |   }
  97  | 
  98  |   async selectCity(city: CitiesUser): Promise<void> {
  99  |     await allure.step(`Select city "${city}" from header dropdown`, async (): Promise<void> => {
  100 |       await this.citySelector.click();
  101 |       await this.dropdown.selectMenuOption(city);
  102 |     });
  103 |   }
  104 | 
  105 |   async hasCitySelected(city: CitiesUser): Promise<void> {
  106 |     await expect(this.citySelector).toHaveText(city);
  107 |   }
  108 | 
  109 |   async openUserMenu(): Promise<void> {
  110 |     await allure.step('Open user menu', async (): Promise<void> => {
  111 |       await this.userMenuButton.click();
  112 |     });
  113 |   }
  114 | 
  115 |   async clickUserMenuItem(itemRegex: RegExp): Promise<void> {
  116 |     await allure.step(`Click user menu item matching "${itemRegex}"`, async (): Promise<void> => {
  117 |       await this.openUserMenu();
  118 |       const menuItem = this.userMenuItems.filter({ hasText: itemRegex }).first();
  119 |       await menuItem.waitFor({ state: 'visible' });
  120 |       await menuItem.click();
  121 |     });
  122 |   }
  123 | 
  124 |   async isUserMenuButtonVisible(): Promise<boolean> {
  125 |     return this.userMenuButton.isVisible();
  126 |   }
  127 | 
  128 |   async expectUserIsLoggedIn(): Promise<void> {
  129 |     await expect(this.userMenuButton).toBeVisible();
  130 |     await this.openUserMenu();
  131 |     await expect(this.userMenuItems.filter({ hasText: /вийти/i })).toBeVisible();
  132 |   }
  133 | 
  134 |   async expectAuthButtonsHidden(): Promise<void> {
  135 |     await expect(this.userMenuItems.filter({ hasText: /увійти/i })).toHaveCount(0);
  136 |     await expect(this.userMenuItems.filter({ hasText: /зареєструват/i })).toHaveCount(0);
  137 |   }
  138 | 
  139 |   async getSelectedCity(): Promise<string> {
  140 |     return (await this.citySelector.textContent()) || '';
  141 |   }
  142 | 
  143 |   async clickAdvancedSearch(): Promise<void> {
  144 |     await allure.step('Click advanced search button', async (): Promise<void> => {
> 145 |       await this.advancedSearchButton.click();
      |                                       ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  146 |     });
  147 |   }
  148 | 
  149 |   async clickLogo(): Promise<void> {
  150 |     await allure.step('Click on logo', async (): Promise<void> => {
  151 |       await this.logo.click();
  152 |     });
  153 |   }
  154 | 
  155 |   async fillSearch(text: string): Promise<void> {
  156 |     await allure.step(`Fill search input with "${text}"`, async (): Promise<void> => {
  157 |       await this.searchInput.fill(text);
  158 |     });
  159 |   }
  160 | 
  161 |   async clickSearchButton(): Promise<void> {
  162 |     await allure.step('Click search button', async (): Promise<void> => {
  163 |       await this.searchButton.click();
  164 |     });
  165 |   }
  166 | 
  167 |   async search(text: string): Promise<void> {
  168 |     await allure.step(`Search for "${text}"`, async (): Promise<void> => {
  169 |       await this.fillSearch(text);
  170 |       await this.clickSearchButton();
  171 |     });
  172 |   }
  173 | 
  174 |   async isLogoVisible(): Promise<boolean> {
  175 |     return await this.logo.isVisible();
  176 |   }
  177 | 
  178 |   async isSearchVisible(): Promise<boolean> {
  179 |     return await this.searchInput.isVisible();
  180 |   }
  181 | 
  182 |   async getSearchInputValue(): Promise<string> {
  183 |     return (await this.searchInput.inputValue()) || '';
  184 |   }
  185 | 
  186 |   async clickChallengeDropdownItem(itemText: string): Promise<void> {
  187 |     await allure.step(`Click on "${itemText}" in challenge dropdown`, async (): Promise<void> => {
  188 |       const menuItem = this.challengeDropdownItems.filter({ hasText: itemText });
  189 |       await menuItem.waitFor({ state: 'visible', timeout: 10000 });
  190 |       await menuItem.click();
  191 |     });
  192 |   }
  193 | 
  194 |   async waitForChallengeDropdown(): Promise<void> {
  195 |     await this.challengeDropdownMenu.waitFor({ state: 'visible', timeout: 10000 });
  196 |   }
  197 | 
  198 |   async clickAddClubButton(): Promise<void> {
  199 |     await allure.step('Click on "Додати гурток" button', async (): Promise<void> => {
  200 |       await this.addClubButton.click();
  201 |     });
  202 |   }
  203 | }
  204 | 
```