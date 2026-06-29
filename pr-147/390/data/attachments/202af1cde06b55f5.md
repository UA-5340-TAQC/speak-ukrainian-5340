# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/club-registration-api.spec.ts >> Club Registration API >> should not approve a registration with non-existent id
- Location: tests/api/club-registration-api.spec.ts:162:5

# Error details

```
Error: Backend bug: API returns 200 OK when approving non-existent registrations

expect(received).toBeFalsy()

Received: true
```

# Test source

```ts
  70  |     clubRegistrationClient,
  71  |   }): Promise<void> => {
  72  |     await allure.story('Register User to Club - Role Restriction');
  73  |     await allure.severity('normal');
  74  |     await allure.description(
  75  |       'Verify that a user with a Manager role receives a 403 Forbidden when trying to register for a club.'
  76  |     );
  77  | 
  78  |     const payload: ClubRegistrationUserRequestDto = DataBuilderApi.validClubRegistrationUserPayload(
  79  |       testClubId,
  80  |       testUserId
  81  |     );
  82  |     const response: APIResponse = await clubRegistrationClient.registerUser(payload);
  83  |     const body = await response.json();
  84  | 
  85  |     await allure.step('Validate response status is 403 Forbidden', async (): Promise<void> => {
  86  |       expect(response.ok()).toBeFalsy();
  87  |       expect(response.status()).toBe(403);
  88  |     });
  89  | 
  90  |     await allure.step('Validate role restriction error message', async (): Promise<void> => {
  91  |       expect(body).toMatchObject({
  92  |         status: 403,
  93  |         message: 'You have no necessary permissions (role)',
  94  |       });
  95  |     });
  96  |   });
  97  | 
  98  |   test.fixme('should approve a club registration', async ({
  99  |     playwright,
  100 |     clubRegistrationClient,
  101 |   }): Promise<void> => {
  102 |     await allure.severity('critical');
  103 |     await allure.description(
  104 |       'Verify that a manager can approve a club registration created by a standard user.'
  105 |     );
  106 | 
  107 |     await allure.step('Setup: Authenticate as a standard user', async (): Promise<void> => {
  108 |       const userContext = await playwright.request.newContext({ baseURL: config.BASE_URL_API });
  109 |       const loginResponse = await userContext.post('/dev/api/signin', {
  110 |         headers: { 'Content-Type': 'application/json' },
  111 |         data: { email: config.TEST_EMAIL, password: config.TEST_PASSWORD },
  112 |       });
  113 | 
  114 |       expect(loginResponse.ok()).toBeTruthy();
  115 | 
  116 |       const userBody = await loginResponse.json();
  117 |       const standardUserId = userBody.id;
  118 |       const userToken = userBody.accessToken;
  119 | 
  120 |       const userRegistrationClient = new ClubRegistrationClient(userContext, userToken);
  121 | 
  122 |       // Step 1: Create Registration as Standard User
  123 |       const payload = DataBuilderApi.validClubRegistrationUserPayload(testClubId, standardUserId);
  124 |       const postResponse = await userRegistrationClient.registerUser(payload);
  125 | 
  126 |       expect(postResponse.ok()).toBeTruthy();
  127 | 
  128 |       const postBody = await postResponse.json();
  129 |       const registrationId = postBody.id;
  130 | 
  131 |       // Step 2: Approve Registration as Manager (using the injected fixture)
  132 |       const approveResponse = await clubRegistrationClient.approveRegistration(registrationId);
  133 |       const approveBody = await approveResponse.json();
  134 | 
  135 |       await allure.step('Validate approval response status', async (): Promise<void> => {
  136 |         expect(approveResponse.ok()).toBeTruthy();
  137 |         expect(approveResponse.status()).toBe(200);
  138 |       });
  139 | 
  140 |       await allure.step('Validate registration is approved', async (): Promise<void> => {
  141 |         expect(approveBody).toMatchObject({
  142 |           id: registrationId,
  143 |           approved: true,
  144 |         });
  145 |       });
  146 | 
  147 |       await userContext.dispose();
  148 |     });
  149 |   });
  150 | 
  151 |   test('should not allow unauthorized user to get registrations', async ({
  152 |     unauthClubRegistrationClient,
  153 |   }): Promise<void> => {
  154 |     const response: APIResponse =
  155 |       await unauthClubRegistrationClient.getRegistrationsByManagerId(testUserId);
  156 |     const body = await response.json();
  157 |     expect(response.status()).toBe(401);
  158 |     expect(body.message).toBe('You are not authenticated');
  159 |   });
  160 | 
  161 |   for (const { id, description } of DataBuilderApi.invalidClubIds()) {
  162 |     test(`should not approve a registration with ${description}`, async ({
  163 |       clubRegistrationClient,
  164 |     }): Promise<void> => {
  165 |       const response: APIResponse = await clubRegistrationClient.approveRegistration(id);
  166 | 
  167 |       expect(
  168 |         response.ok(),
  169 |         'Backend bug: API returns 200 OK when approving non-existent registrations'
> 170 |       ).toBeFalsy();
      |         ^ Error: Backend bug: API returns 200 OK when approving non-existent registrations
  171 |     });
  172 |   }
  173 | });
  174 | 
```