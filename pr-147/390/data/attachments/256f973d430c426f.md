# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/user-signup-api.spec.ts >> User Registration API >> POST /api/signup should register a new user and return SuccessRegistration
- Location: tests/api/user-signup-api.spec.ts:6:3

# Error details

```
TypeError: DataBuilderApi.signupPayload is not a function
```

# Test source

```ts
  1  | import { test as base, expect as baseExpect } from './base-fixture';
  2  | import { UserClient } from '@/api/user-client';
  3  | import { DataBuilderApi } from '@/data/data-builders/data-builder-api';
  4  | import type { SignupRequestDto } from '@/api/dto/user-registration.dto';
  5  | import env from '@/config/env';
  6  | 
  7  | type UserApiFixture = {
  8  |   userClient: UserClient;
  9  |   signupPayload: SignupRequestDto;
  10 | };
  11 | 
  12 | export const test = base.extend<UserApiFixture>({
  13 |   userClient: async ({ playwright }, use): Promise<void> => {
  14 |     const apiContext = await playwright.request.newContext({
  15 |       baseURL: env.BASE_URL_API,
  16 |     });
  17 | 
  18 |     await use(new UserClient(apiContext));
  19 | 
  20 |     await apiContext.dispose();
  21 |   },
  22 | 
  23 |   // eslint-disable-next-line no-empty-pattern -- fixture without Playwright dependencies
  24 |   signupPayload: async ({}, use): Promise<void> => {
> 25 |     await use(DataBuilderApi.signupPayload());
     |                              ^ TypeError: DataBuilderApi.signupPayload is not a function
  26 |   },
  27 | });
  28 | 
  29 | export { baseExpect as expect };
  30 | 
```