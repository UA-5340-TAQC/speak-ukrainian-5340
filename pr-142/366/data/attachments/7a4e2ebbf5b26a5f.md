# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/club-api.spec.ts >> Club API >> should create club and validate response
- Location: tests/api/club-api.spec.ts:32:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | import { test, expect } from '@/fixtures';
  2   | import * as allure from 'allure-js-commons';
  3   | import { DataBuilderApi } from '@/data';
  4   | import type { APIResponse } from '@playwright/test';
  5   | import type { ClubRequestDto, ClubUpdateRequestDto } from '@/api/dto';
  6   | 
  7   | test.describe('Club API', (): void => {
  8   |   test.beforeEach(async (): Promise<void> => {
  9   |     await allure.epic('API Infrastructure');
  10  |     await allure.feature('Clubs');
  11  |   });
  12  | 
  13  |   test('should return a list of clubs', async ({ clubClient }): Promise<void> => {
  14  |     await allure.story('Get List of All Clubs');
  15  |     await allure.severity('critical');
  16  |     await allure.description(
  17  |       'Verify that the full list of clubs is retrieved successfully and check the total count.'
  18  |     );
  19  | 
  20  |     const response: APIResponse = await clubClient.getClubs();
  21  |     const clubs = await response.json();
  22  | 
  23  |     expect(response.ok()).toBeTruthy();
  24  |     expect(response.status()).toBe(200);
  25  | 
  26  |     await allure.step('Validate response structure and clubs count', async (): Promise<void> => {
  27  |       expect(Array.isArray(clubs)).toBe(true);
  28  |       expect(clubs.length).toBeGreaterThan(0);
  29  |     });
  30  |   });
  31  | 
  32  |   test('should create club and validate response', async ({ clubClient }): Promise<void> => {
  33  |     await allure.severity('critical');
  34  |     await allure.description(
  35  |       'Verify that a new club is created successfully and check the response structure.'
  36  |     );
  37  | 
  38  |     const payload: ClubRequestDto = DataBuilderApi.validClubPayload();
  39  |     const response: APIResponse = await clubClient.createClub(payload);
  40  |     const body = await response.json();
  41  | 
> 42  |     expect(response.ok()).toBeTruthy();
      |                           ^ Error: expect(received).toBeTruthy()
  43  |     expect(response.status()).toBe(201);
  44  | 
  45  |     await allure.step('Validate created club fields', async (): Promise<void> => {
  46  |       expect(body).toMatchObject({
  47  |         name: payload.name,
  48  |         description: payload.description,
  49  |         ageFrom: payload.ageFrom,
  50  |         ageTo: payload.ageTo,
  51  |         isOnline: payload.isOnline,
  52  |         isApproved: payload.isApproved,
  53  |       });
  54  |       expect(body.id).toBeDefined();
  55  |       expect(typeof body.id).toBe('number');
  56  |       expect(Array.isArray(body.categories)).toBe(true);
  57  |       expect(body.categories.length).toBeGreaterThan(0);
  58  |     });
  59  | 
  60  |     await clubClient.deleteClub(body.id);
  61  |   });
  62  | 
  63  |   for (const { id, description } of DataBuilderApi.invalidClubIds()) {
  64  |     test(`should not get club by ${description}`, async ({ clubClient }): Promise<void> => {
  65  |       await allure.severity('critical');
  66  |       await allure.description(
  67  |         'Verify that an error is returned when trying to get a club by an invalid ID.'
  68  |       );
  69  | 
  70  |       const response: APIResponse = await clubClient.getClubById(id);
  71  |       const body = await response.json();
  72  | 
  73  |       await allure.step('Validate response status', async (): Promise<void> => {
  74  |         expect(response.ok()).toBeFalsy();
  75  |         expect(response.status()).toBe(404);
  76  |       });
  77  | 
  78  |       await allure.step('Validate error response body', async (): Promise<void> => {
  79  |         expect(body).toMatchObject({
  80  |           status: 404,
  81  |           message: expect.any(String),
  82  |         });
  83  |         expect(body.message.length).toBeGreaterThan(0);
  84  |       });
  85  |     });
  86  |   }
  87  | 
  88  |   test('should not create a club with a higher early age than a late age', async ({
  89  |     clubClient,
  90  |   }): Promise<void> => {
  91  |     await allure.severity('critical');
  92  |     await allure.description('Verify creating a club with a higher early age than a late age');
  93  | 
  94  |     const agePayload: ClubRequestDto = DataBuilderApi.invalidEarlyAgeClubPayload();
  95  |     const response: APIResponse = await clubClient.createClub(agePayload);
  96  |     const body = await response.json();
  97  | 
  98  |     await allure.step('Validate response status', async (): Promise<void> => {
  99  |       expect(response.ok()).toBeFalsy();
  100 |       expect(response.status()).toBe(400);
  101 |     });
  102 | 
  103 |     await allure.step('Validate error response body structure', async (): Promise<void> => {
  104 |       expect(body).toMatchObject({
  105 |         status: 400,
  106 |         title: 'Bad Request',
  107 |         detail: expect.any(String),
  108 |         instance: '/dev/api/club',
  109 |       });
  110 |       expect(body.detail.length).toBeGreaterThan(0);
  111 |     });
  112 | 
  113 |     await allure.step('Validate no club was created', async (): Promise<void> => {
  114 |       expect(body.id).toBeUndefined();
  115 |       expect(body.name).toBeUndefined();
  116 |     });
  117 |   });
  118 | 
  119 |   test('should not create a club without the empty field "name"', async ({
  120 |     clubClient,
  121 |   }): Promise<void> => {
  122 |     await allure.severity('critical');
  123 |     await allure.description('Verify creating a club without a required field "name"');
  124 | 
  125 |     const namePayload: ClubRequestDto = DataBuilderApi.invalidNameClubPayload();
  126 |     const response: APIResponse = await clubClient.createClub(namePayload);
  127 |     const body = await response.json();
  128 | 
  129 |     await allure.step('Validate response status', async (): Promise<void> => {
  130 |       expect(response.ok()).toBeFalsy();
  131 |       expect(response.status()).toBe(400);
  132 |     });
  133 | 
  134 |     await allure.step('Validate error response body structure', async (): Promise<void> => {
  135 |       expect(body).toMatchObject({
  136 |         status: 400,
  137 |         title: 'Bad Request',
  138 |         detail: expect.any(String),
  139 |         instance: '/dev/api/club',
  140 |       });
  141 |       expect(body.detail.length).toBeGreaterThan(0);
  142 |     });
```