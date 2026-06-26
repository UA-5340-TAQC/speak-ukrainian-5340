# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/club-api.spec.ts >> Club API >> should create club and validate response
- Location: tests/api/club-api.spec.ts:35:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | import * as allure from 'allure-js-commons';
  3  | import { DataBuilderApi } from '@/data';
  4  | import type { APIResponse } from '@playwright/test';
  5  | import type { ClubRequestDto } from '@/api/dto';
  6  | 
  7  | test.describe('Club API', (): void => {
  8  |   const payload: ClubRequestDto = DataBuilderApi.validClubPayload();
  9  | 
  10 |   test.beforeEach(async (): Promise<void> => {
  11 |     await allure.epic('API Infrastructure');
  12 |     await allure.feature('Clubs');
  13 |   });
  14 | 
  15 |   test('should return a list of clubs', async ({ clubClient }): Promise<void> => {
  16 |     await allure.story('Get List of All Clubs');
  17 |     await allure.severity('critical');
  18 |     await allure.description(
  19 |       'Verify that the full list of clubs is retrieved successfully and check the total count.'
  20 |     );
  21 | 
  22 |     const response = await clubClient.getClubs();
  23 | 
  24 |     expect(response.ok()).toBeTruthy();
  25 |     expect(response.status()).toBe(200);
  26 | 
  27 |     const clubs = await response.json();
  28 | 
  29 |     await allure.step('Validate response structure and clubs count', async (): Promise<void> => {
  30 |       expect(Array.isArray(clubs)).toBe(true);
  31 |       expect(clubs.length).toBeGreaterThan(0);
  32 |     });
  33 |   });
  34 | 
  35 |   test('should create club and validate response', async ({ clubClient }) => {
  36 |     await allure.severity('critical');
  37 |     await allure.description(
  38 |       'Verify that a new club is created successfully and check the response structure.'
  39 |     );
  40 | 
  41 |     const response: APIResponse = await clubClient.createClub(payload);
> 42 |     expect(response.ok()).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  43 | 
  44 |     const body = await response.json();
  45 | 
  46 |     expect(body.name).toBe(payload.name);
  47 |     expect(body.description).toBe(payload.description);
  48 |   });
  49 | 
  50 |   for (const { id, description } of DataBuilderApi.invalidClubIds()) {
  51 |     test(`should not get club by ${description}`, async ({ clubClient }): Promise<void> => {
  52 |       await allure.severity('critical');
  53 |       await allure.description(
  54 |         'Verify that an error is returned when trying to get a club by an invalid ID.'
  55 |       );
  56 | 
  57 |       const response: APIResponse = await clubClient.getClubById(id);
  58 |       const body = await response.json();
  59 | 
  60 |       await allure.step('Validate response status', async () => {
  61 |         expect(response.ok()).toBeFalsy();
  62 |         expect(response.status()).toBe(404);
  63 |       });
  64 | 
  65 |       await allure.step('Validate error response body', async () => {
  66 |         expect(body).toBeDefined();
  67 |         expect(body.status).toBe(404);
  68 |         expect(typeof body.message).toBe('string');
  69 |         expect(body.message.length).toBeGreaterThan(0);
  70 |       });
  71 |     });
  72 |   }
  73 | });
  74 | 
```