# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/club-tests/club-details-page.spec.ts >> Club details page >> should display club action buttons and comments section
- Location: tests/ui/club-tests/club-details-page.spec.ts:20:3

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
  - main [ref=e38]:
    - generic [ref=e39]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]:
            - generic [ref=e45]:
              - img
            - generic [ref=e46]: American Gymnastics Club
          - generic [ref=e49]: Спортивні секції
        - button "Написати менеджеру" [ref=e51] [cursor=pointer]:
          - generic [ref=e52]: Написати менеджеру
      - generic [ref=e53]:
        - main [ref=e54]:
          - generic [ref=e55]:
            - radiogroup [ref=e56]:
              - listitem [ref=e57]:
                - radio "star star" [checked] [ref=e58]:
                  - img "star" [ref=e60]:
                    - img [ref=e61]
                  - img "star" [ref=e64]:
                    - img [ref=e65]
              - listitem [ref=e67]:
                - radio "star star" [checked] [ref=e68]:
                  - img "star" [ref=e70]:
                    - img [ref=e71]
                  - img "star" [ref=e74]:
                    - img [ref=e75]
              - listitem [ref=e77]:
                - radio "star star" [checked] [ref=e78]:
                  - img "star" [ref=e80]:
                    - img [ref=e81]
                  - img "star" [ref=e84]:
                    - img [ref=e85]
              - listitem [ref=e87]:
                - radio "star star" [checked] [ref=e88]:
                  - img "star" [ref=e90]:
                    - img [ref=e91]
                  - img "star" [ref=e94]:
                    - img [ref=e95]
              - listitem [ref=e97]:
                - radio "star star" [checked] [ref=e98]:
                  - img "star" [ref=e100]:
                    - img [ref=e101]
                  - img "star" [ref=e104]:
                    - img [ref=e105]
            - generic [ref=e107] [cursor=pointer]: 163 відгуків
          - generic [ref=e108]: Американський гімнастичний клуб (American Gymnastics Club) – перша та єдина в країні мережа унікальних спортивних клубів, яка базується на Розвивальній Гімнастиці. Крім щоденних занять, в Американському гімнастичному Клубі проходять «Показові виступи» та різноманітні тематичні вечірки, які допомагають зібрати активних однодумців і популяризувати та прививати любов до спорту, перетворюючи його в стиль життя.
          - button "Записатись на гурток" [disabled] [ref=e111]:
            - generic: Записатись на гурток
          - button "Завантажити file-pdf" [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: Завантажити
            - img "file-pdf" [ref=e115]:
              - img [ref=e116]
        - complementary [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img "environment" [ref=e121]:
                - img [ref=e122]
              - generic [ref=e124]: Київ, вулиця Фізкультури 1, корпус 3
            - generic [ref=e127]:
              - generic:
                - button "Keyboard shortcuts"
              - region "Map" [ref=e128]
              - generic [ref=e129]:
                - button [ref=e150] [cursor=pointer]
                - iframe [ref=e151]:
                  
                - generic [ref=e153] [cursor=pointer]:
                  - button "Zoom in" [ref=e154]
                  - button "Zoom out" [ref=e156]
                - link "Open this area in Google Maps (opens a new window)" [ref=e158] [cursor=pointer]:
                  - /url: https://maps.google.com/maps?ll=50.43173,30.517704&z=15&t=m&hl=en-US&gl=US&mapclient=apiv3
                  - img "Google" [ref=e160]
                - generic [ref=e161]:
                  - button "Keyboard shortcuts" [ref=e167] [cursor=pointer]
                  - generic [ref=e172]: Map data ©2026 Google
                  - link "Terms (opens in new tab)" [ref=e177] [cursor=pointer]:
                    - /url: https://www.google.com/intl/en-US_US/help/terms_maps.html
                    - text: Terms
                  - link "Report a map error (opens in new tab)" [ref=e182] [cursor=pointer]:
                    - /url: https://www.google.com/maps/@50.4317299,30.5177036,15z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3
                    - text: Report a map error
            - generic [ref=e183]:
              - text: "Вік аудиторії:"
              - generic [ref=e184]: від 0 до 16 років
            - generic [ref=e185]:
              - generic [ref=e186]: Зв’яжіться з гуртком
              - generic [ref=e187]:
                - link "https://agclub.com.ua/" [ref=e190] [cursor=pointer]:
                  - /url: https://agclub.com.ua/
                - generic [ref=e192]: "+380443337101"
            - paragraph [ref=e194]: Схожі гуртки у місті Київ
      - main [ref=e195]:
        - generic [ref=e196]:
          - generic [ref=e197]:
            - generic [ref=e199]:
              - generic [ref=e200]: Коментарі
              - button "Залишити коментар" [ref=e201] [cursor=pointer]:
                - generic [ref=e202]: Залишити коментар
            - list [ref=e205]:
              - listitem [ref=e206]:
                - generic [ref=e209]:
                  - generic [ref=e212]:
                    - img "avatar" [ref=e213]
                    - generic [ref=e214]:
                      - generic [ref=e215]: Тест Тест
                      - generic [ref=e216]: 2026-06-24 14:38:07
                    - radiogroup [ref=e217]:
                      - listitem [ref=e218]:
                        - radio "star star" [checked] [ref=e219]:
                          - img "star" [ref=e221]:
                            - img [ref=e222]
                          - img "star" [ref=e225]:
                            - img [ref=e226]
                      - listitem [ref=e228]:
                        - radio "star star" [checked] [ref=e229]:
                          - img "star" [ref=e231]:
                            - img [ref=e232]
                          - img "star" [ref=e235]:
                            - img [ref=e236]
                      - listitem [ref=e238]:
                        - radio "star star" [checked] [ref=e239]:
                          - img "star" [ref=e241]:
                            - img [ref=e242]
                          - img "star" [ref=e245]:
                            - img [ref=e246]
                      - listitem [ref=e248]:
                        - radio "star star" [checked] [ref=e249]:
                          - img "star" [ref=e251]:
                            - img [ref=e252]
                          - img "star" [ref=e255]:
                            - img [ref=e256]
                      - listitem [ref=e258]:
                        - radio "star star" [checked] [ref=e259]:
                          - img "star" [ref=e261]:
                            - img [ref=e262]
                          - img "star" [ref=e265]:
                            - img [ref=e266]
                  - generic [ref=e268]:
                    - paragraph [ref=e269]: Test Comment 11:37:45
                    - button "enter Відповісти" [ref=e270] [cursor=pointer]:
                      - img "enter" [ref=e271]:
                        - img [ref=e272]
                      - paragraph [ref=e274]: Відповісти
              - listitem [ref=e275]:
                - generic [ref=e278]:
                  - generic [ref=e281]:
                    - img "avatar" [ref=e282]
                    - generic [ref=e283]:
                      - generic [ref=e284]: Тест Тест
                      - generic [ref=e285]: 2026-06-24 14:36:33
                    - radiogroup [ref=e286]:
                      - listitem [ref=e287]:
                        - radio "star star" [checked] [ref=e288]:
                          - img "star" [ref=e290]:
                            - img [ref=e291]
                          - img "star" [ref=e294]:
                            - img [ref=e295]
                      - listitem [ref=e297]:
                        - radio "star star" [checked] [ref=e298]:
                          - img "star" [ref=e300]:
                            - img [ref=e301]
                          - img "star" [ref=e304]:
                            - img [ref=e305]
                      - listitem [ref=e307]:
                        - radio "star star" [checked] [ref=e308]:
                          - img "star" [ref=e310]:
                            - img [ref=e311]
                          - img "star" [ref=e314]:
                            - img [ref=e315]
                      - listitem [ref=e317]:
                        - radio "star star" [checked] [ref=e318]:
                          - img "star" [ref=e320]:
                            - img [ref=e321]
                          - img "star" [ref=e324]:
                            - img [ref=e325]
                      - listitem [ref=e327]:
                        - radio "star star" [checked] [ref=e328]:
                          - img "star" [ref=e330]:
                            - img [ref=e331]
                          - img "star" [ref=e334]:
                            - img [ref=e335]
                  - generic [ref=e337]:
                    - paragraph [ref=e338]: Test Comment 11:36:22
                    - button "enter Відповісти" [ref=e339] [cursor=pointer]:
                      - img "enter" [ref=e340]:
                        - img [ref=e341]
                      - paragraph [ref=e343]: Відповісти
              - listitem [ref=e344]:
                - generic [ref=e347]:
                  - generic [ref=e350]:
                    - img "avatar" [ref=e351]
                    - generic [ref=e352]:
                      - generic [ref=e353]: Тест Тест
                      - generic [ref=e354]: 2026-06-24 14:36:25
                    - radiogroup [ref=e355]:
                      - listitem [ref=e356]:
                        - radio "star star" [checked] [ref=e357]:
                          - img "star" [ref=e359]:
                            - img [ref=e360]
                          - img "star" [ref=e363]:
                            - img [ref=e364]
                      - listitem [ref=e366]:
                        - radio "star star" [checked] [ref=e367]:
                          - img "star" [ref=e369]:
                            - img [ref=e370]
                          - img "star" [ref=e373]:
                            - img [ref=e374]
                      - listitem [ref=e376]:
                        - radio "star star" [checked] [ref=e377]:
                          - img "star" [ref=e379]:
                            - img [ref=e380]
                          - img "star" [ref=e383]:
                            - img [ref=e384]
                      - listitem [ref=e386]:
                        - radio "star star" [checked] [ref=e387]:
                          - img "star" [ref=e389]:
                            - img [ref=e390]
                          - img "star" [ref=e393]:
                            - img [ref=e394]
                      - listitem [ref=e396]:
                        - radio "star star" [checked] [ref=e397]:
                          - img "star" [ref=e399]:
                            - img [ref=e400]
                          - img "star" [ref=e403]:
                            - img [ref=e404]
                  - generic [ref=e406]:
                    - paragraph [ref=e407]: Test Comment 11:36:15
                    - button "enter Відповісти" [ref=e408] [cursor=pointer]:
                      - img "enter" [ref=e409]:
                        - img [ref=e410]
                      - paragraph [ref=e412]: Відповісти
              - listitem [ref=e413]:
                - generic [ref=e416]:
                  - generic [ref=e419]:
                    - img "avatar" [ref=e420]
                    - generic [ref=e421]:
                      - generic [ref=e422]: Тест Тест
                      - generic [ref=e423]: 2026-06-24 14:20:12
                    - radiogroup [ref=e424]:
                      - listitem [ref=e425]:
                        - radio "star star" [checked] [ref=e426]:
                          - img "star" [ref=e428]:
                            - img [ref=e429]
                          - img "star" [ref=e432]:
                            - img [ref=e433]
                      - listitem [ref=e435]:
                        - radio "star star" [checked] [ref=e436]:
                          - img "star" [ref=e438]:
                            - img [ref=e439]
                          - img "star" [ref=e442]:
                            - img [ref=e443]
                      - listitem [ref=e445]:
                        - radio "star star" [checked] [ref=e446]:
                          - img "star" [ref=e448]:
                            - img [ref=e449]
                          - img "star" [ref=e452]:
                            - img [ref=e453]
                      - listitem [ref=e455]:
                        - radio "star star" [checked] [ref=e456]:
                          - img "star" [ref=e458]:
                            - img [ref=e459]
                          - img "star" [ref=e462]:
                            - img [ref=e463]
                      - listitem [ref=e465]:
                        - radio "star star" [checked] [ref=e466]:
                          - img "star" [ref=e468]:
                            - img [ref=e469]
                          - img "star" [ref=e472]:
                            - img [ref=e473]
                  - generic [ref=e475]:
                    - paragraph [ref=e476]: Test Comment 11:19:53
                    - button "enter Відповісти" [ref=e477] [cursor=pointer]:
                      - img "enter" [ref=e478]:
                        - img [ref=e479]
                      - paragraph [ref=e481]: Відповісти
              - listitem [ref=e482]:
                - generic [ref=e485]:
                  - generic [ref=e488]:
                    - img "avatar" [ref=e489]
                    - generic [ref=e490]:
                      - generic [ref=e491]: Тест Тест
                      - generic [ref=e492]: 2026-06-24 14:18:01
                    - radiogroup [ref=e493]:
                      - listitem [ref=e494]:
                        - radio "star star" [checked] [ref=e495]:
                          - img "star" [ref=e497]:
                            - img [ref=e498]
                          - img "star" [ref=e501]:
                            - img [ref=e502]
                      - listitem [ref=e504]:
                        - radio "star star" [checked] [ref=e505]:
                          - img "star" [ref=e507]:
                            - img [ref=e508]
                          - img "star" [ref=e511]:
                            - img [ref=e512]
                      - listitem [ref=e514]:
                        - radio "star star" [checked] [ref=e515]:
                          - img "star" [ref=e517]:
                            - img [ref=e518]
                          - img "star" [ref=e521]:
                            - img [ref=e522]
                      - listitem [ref=e524]:
                        - radio "star star" [checked] [ref=e525]:
                          - img "star" [ref=e527]:
                            - img [ref=e528]
                          - img "star" [ref=e531]:
                            - img [ref=e532]
                      - listitem [ref=e534]:
                        - radio "star star" [checked] [ref=e535]:
                          - img "star" [ref=e537]:
                            - img [ref=e538]
                          - img "star" [ref=e541]:
                            - img [ref=e542]
                  - generic [ref=e544]:
                    - paragraph [ref=e545]: Test Comment 11:17:45
                    - button "enter Відповісти" [ref=e546] [cursor=pointer]:
                      - img "enter" [ref=e547]:
                        - img [ref=e548]
                      - paragraph [ref=e550]: Відповісти
          - button "Показати більше arrow-down" [ref=e551] [cursor=pointer]:
            - paragraph [ref=e552]: Показати більше
            - img "arrow-down" [ref=e553]:
              - img [ref=e554]
  - contentinfo [ref=e556]:
    - generic [ref=e557]:
      - link [ref=e558] [cursor=pointer]:
        - /url: ""
      - generic [ref=e561]:
        - generic [ref=e562]: Нам небайдуже майбутнє
        - generic [ref=e563]: дітей та української мови
      - generic [ref=e565]:
        - link "facebook" [ref=e566] [cursor=pointer]:
          - /url: https://www.facebook.com/teach.in.ukrainian
          - img "facebook":
            - img
        - link "youtube" [ref=e567] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCP38C0jxC8aNbW34eBoQKJw
          - img "youtube":
            - img
        - link "instagram" [ref=e568] [cursor=pointer]:
          - /url: https://www.instagram.com/yedyni.ruh/
          - img "instagram":
            - img
        - link:
          - /url: ""
      - generic [ref=e569]: ©2021-2022 Design by Qubstudio & Development by SoftServe
    - generic [ref=e570]:
      - generic [ref=e571]: Наші партнери
      - generic [ref=e572]:
        - link "soft_serve" [ref=e573] [cursor=pointer]:
          - /url: https://www.softserveinc.com/uk-ua
          - img "soft_serve" [ref=e574]
        - link "Mova_obyednue" [ref=e575] [cursor=pointer]:
          - /url: https://www.facebook.com/zakonpromovu5670
          - img "Mova_obyednue" [ref=e576]
        - link "EDERA" [ref=e577] [cursor=pointer]:
          - /url: https://www.ed-era.com
          - img "EDERA" [ref=e578]
        - link "e-mova" [ref=e579] [cursor=pointer]:
          - /url: https://emova.language-ua.online
          - img "e-mova" [ref=e580]
        - link "Kraina_FM" [ref=e581] [cursor=pointer]:
          - /url: https://krainafm.com.ua
          - img "Kraina_FM" [ref=e582]
        - link "ucf" [ref=e583] [cursor=pointer]:
          - /url: https://ucf.in.ua
          - img "ucf" [ref=e584]
        - link "prostir_svobodi" [ref=e585] [cursor=pointer]:
          - /url: https://prostirsvobody.org
          - img "prostir_svobodi" [ref=e586]
    - generic [ref=e587]:
      - generic [ref=e588]: Як допомогти проєкту?
      - generic [ref=e589]: Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.
      - link "Допомогти проєкту" [ref=e590] [cursor=pointer]:
        - /url: https://secure.wayforpay.com/payment/s0f2891d77061
        - button "Допомогти проєкту" [ref=e591]:
          - generic [ref=e592]: Допомогти проєкту
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
> 25 |     expect(await clubDetailsPage.description.isEnrollButtonVisible()).toBeTruthy();
     |                                                                       ^ Error: expect(received).toBeTruthy()
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
  36 |     expect(await clubDetailsPage.contactInfo.isMapDisplayed()).toBeTruthy();
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