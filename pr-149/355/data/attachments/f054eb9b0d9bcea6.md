# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/certificate-by-template-api.spec.ts >> Certificate By Template API >> should upload excel file via Base64 string payload
- Location: tests/api/certificate-by-template-api.spec.ts:66:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures/api-fixture';
  2  | import * as allure from 'allure-js-commons';
  3  | import { DataBuilderApi } from '@/data';
  4  | import type { APIResponse } from '@playwright/test';
  5  | import type {
  6  |   CertificateByTemplateTransferDto,
  7  |   CertificateTemplatePreviewDto,
  8  | } from '@/api/dto/certificate-by-template';
  9  | 
  10 | test.describe('Certificate By Template API', (): void => {
  11 |   test.beforeEach(async (): Promise<void> => {
  12 |     await allure.epic('API Infrastructure');
  13 |     await allure.feature('Certificate By Template');
  14 |   });
  15 | 
  16 |   test('should restrict Manager from validating excel data (Expect 403)', async ({
  17 |     certificateClient,
  18 |   }): Promise<void> => {
  19 |     await allure.story('Security - Role Restriction');
  20 |     await allure.severity('normal');
  21 |     await allure.description(
  22 |       'Verify that a non-admin (Manager) gets 403 Forbidden when trying to validate certificate data.'
  23 |     );
  24 | 
  25 |     const payload: CertificateByTemplateTransferDto =
  26 |       DataBuilderApi.validCertificateTransferPayload();
  27 |     const response: APIResponse = await certificateClient.validateExcel(payload);
  28 | 
  29 |     await allure.step('Validate response status is 403', async (): Promise<void> => {
  30 |       expect(response.ok()).toBeFalsy();
  31 |       expect(response.status()).toBe(403);
  32 |     });
  33 |   });
  34 | 
  35 |   test('should restrict Manager from generating PDF transfer data (Expect 403)', async ({
  36 |     certificateClient,
  37 |   }): Promise<void> => {
  38 |     await allure.story('Security - Role Restriction');
  39 |     await allure.severity('normal');
  40 | 
  41 |     const payload: CertificateTemplatePreviewDto = DataBuilderApi.validCertificatePreviewPayload();
  42 |     const response: APIResponse = await certificateClient.generatePdf(payload);
  43 | 
  44 |     await allure.step('Validate response status is 403', async (): Promise<void> => {
  45 |       expect(response.ok()).toBeFalsy();
  46 |       expect(response.status()).toBe(403);
  47 |     });
  48 |   });
  49 | 
  50 |   test('should return 401 when unauthenticated user tries to save Google Form results', async ({
  51 |     unauthCertificateClient,
  52 |   }): Promise<void> => {
  53 |     await allure.story('Security - Authentication');
  54 |     await allure.severity('critical');
  55 | 
  56 |     const payload: CertificateByTemplateTransferDto =
  57 |       DataBuilderApi.validCertificateTransferPayload();
  58 |     const response: APIResponse = await unauthCertificateClient.saveGoogleForm(payload);
  59 | 
  60 |     await allure.step('Validate response is 401 Unauthorized', async (): Promise<void> => {
  61 |       expect(response.ok()).toBeFalsy();
  62 |       expect(response.status()).toBe(401);
  63 |     });
  64 |   });
  65 | 
  66 |   test('should upload excel file via Base64 string payload', async ({
  67 |     certificateClient,
  68 |   }): Promise<void> => {
  69 |     // We expect this to fail because the backend currently throws a 500 error
  70 |     // instead of a 400 Bad Request when given an invalid/mock Excel string.
  71 |     test.fail(
  72 |       true,
  73 |       'Backend Bug: Returns 500 Internal Server Error instead of 400 for invalid base64 excel files.'
  74 |     );
  75 | 
  76 |     await allure.story('Upload Excel File');
  77 |     await allure.severity('critical');
  78 | 
  79 |     const base64Payload = { 'excel-file': 'UEsDBBQAAAAIA...' };
  80 | 
  81 |     const response: APIResponse = await certificateClient.uploadExcel(base64Payload);
  82 | 
  83 |     await allure.step('Validate response status', async (): Promise<void> => {
> 84 |       expect(response.ok()).toBeTruthy();
     |                             ^ Error: expect(received).toBeTruthy()
  85 |       expect(response.status()).toBe(200);
  86 |     });
  87 |   });
  88 | });
  89 | 
```