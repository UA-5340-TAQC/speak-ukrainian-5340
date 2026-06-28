# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/club-registration-api.spec.ts >> Club Registration API >> should not approve a registration with non-existent id
- Location: tests/api/club-registration-api.spec.ts:177:5

# Error details

```
Error: Backend bug: API returns 200 OK when approving non-existent registrations

expect(received).toBeFalsy()

Received: true
```

# Test source

```ts
  85  |     clubRegistrationClient,
  86  |   }): Promise<void> => {
  87  |     await allure.story('Register User to Club - Role Restriction');
  88  |     await allure.severity('normal');
  89  |     await allure.description(
  90  |       'Verify that a user with a Manager role receives a 403 Forbidden when trying to register for a club.'
  91  |     );
  92  | 
  93  |     const payload: ClubRegistrationUserRequestDto = DataBuilderApi.validClubRegistrationUserPayload(
  94  |       testClubId,
  95  |       testUserId
  96  |     );
  97  |     const response: APIResponse = await clubRegistrationClient.registerUser(payload);
  98  |     const body = await response.json();
  99  | 
  100 |     await allure.step('Validate response status is 403 Forbidden', async (): Promise<void> => {
  101 |       expect(response.ok()).toBeFalsy();
  102 |       expect(response.status()).toBe(403);
  103 |     });
  104 | 
  105 |     await allure.step('Validate role restriction error message', async (): Promise<void> => {
  106 |       expect(body).toMatchObject({
  107 |         status: 403,
  108 |         message: 'You have no necessary permissions (role)',
  109 |       });
  110 |     });
  111 |   });
  112 | 
  113 |   test.skip('should approve a club registration', async ({
  114 |     playwright,
  115 |     clubRegistrationClient,
  116 |   }): Promise<void> => {
  117 |     await allure.severity('critical');
  118 |     await allure.description(
  119 |       'Verify that a manager can approve a club registration created by a standard user.'
  120 |     );
  121 | 
  122 |     await allure.step('Setup: Authenticate as a standard user', async (): Promise<void> => {
  123 |       const userContext = await playwright.request.newContext({ baseURL: config.BASE_URL_API });
  124 |       const loginResponse = await userContext.post('/dev/api/signin', {
  125 |         headers: { 'Content-Type': 'application/json' },
  126 |         data: { email: config.TEST_EMAIL, password: config.TEST_PASSWORD },
  127 |       });
  128 | 
  129 |       expect(loginResponse.ok()).toBeTruthy();
  130 | 
  131 |       const userBody = await loginResponse.json();
  132 |       const standardUserId = userBody.id;
  133 |       const userToken = userBody.accessToken;
  134 | 
  135 |       const userRegistrationClient = new ClubRegistrationClient(userContext, userToken);
  136 | 
  137 |       // Step 1: Create Registration as Standard User
  138 |       const payload = DataBuilderApi.validClubRegistrationUserPayload(testClubId, standardUserId);
  139 |       const postResponse = await userRegistrationClient.registerUser(payload);
  140 | 
  141 |       expect(postResponse.ok()).toBeTruthy();
  142 | 
  143 |       const postBody = await postResponse.json();
  144 |       const registrationId = postBody.id;
  145 | 
  146 |       // Step 2: Approve Registration as Manager (using the injected fixture)
  147 |       const approveResponse = await clubRegistrationClient.approveRegistration(registrationId);
  148 |       const approveBody = await approveResponse.json();
  149 | 
  150 |       await allure.step('Validate approval response status', async (): Promise<void> => {
  151 |         expect(approveResponse.ok()).toBeTruthy();
  152 |         expect(approveResponse.status()).toBe(200);
  153 |       });
  154 | 
  155 |       await allure.step('Validate registration is approved', async (): Promise<void> => {
  156 |         expect(approveBody).toMatchObject({
  157 |           id: registrationId,
  158 |           approved: true,
  159 |         });
  160 |       });
  161 | 
  162 |       await userContext.dispose();
  163 |     });
  164 |   });
  165 | 
  166 |   test('should not allow unauthorized user to get registrations', async ({
  167 |     unauthClubRegistrationClient,
  168 |   }): Promise<void> => {
  169 |     const response: APIResponse =
  170 |       await unauthClubRegistrationClient.getRegistrationsByManagerId(testUserId);
  171 |     const body = await response.json();
  172 |     expect(response.status()).toBe(401);
  173 |     expect(body.message).toBe('You are not authenticated');
  174 |   });
  175 | 
  176 |   for (const { id, description } of DataBuilderApi.invalidClubIds()) {
  177 |     test(`should not approve a registration with ${description}`, async ({
  178 |       clubRegistrationClient,
  179 |     }): Promise<void> => {
  180 |       const response: APIResponse = await clubRegistrationClient.approveRegistration(id);
  181 | 
  182 |       expect(
  183 |         response.ok(),
  184 |         'Backend bug: API returns 200 OK when approving non-existent registrations'
> 185 |       ).toBeFalsy();
      |         ^ Error: Backend bug: API returns 200 OK when approving non-existent registrations
  186 |     });
  187 |   }
  188 | });
  189 | 
```