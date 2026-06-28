# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/club-api.spec.ts >> Club API >> should update club with valid data
- Location: tests/api/club-api.spec.ts:150:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
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
  143 | 
  144 |     await allure.step('Validate no club was created', async (): Promise<void> => {
  145 |       expect(body.id).toBeUndefined();
  146 |       expect(body.name).toBeUndefined();
  147 |     });
  148 |   });
  149 | 
  150 |   test('should update club with valid data', async ({ clubClient }): Promise<void> => {
  151 |     await allure.severity('critical');
  152 |     await allure.description('Verify updating a club with valid data');
  153 | 
  154 |     const payload: ClubRequestDto = DataBuilderApi.validClubPayload();
  155 |     const postResponse: APIResponse = await clubClient.createClub(payload);
  156 |     const postBody = await postResponse.json();
  157 | 
  158 |     await allure.step('Validate club was created', async (): Promise<void> => {
> 159 |       expect(postResponse.ok()).toBeTruthy();
      |                                 ^ Error: expect(received).toBeTruthy()
  160 |       expect(postResponse.status()).toBe(201);
  161 |     });
  162 | 
  163 |     const updatePayload: ClubUpdateRequestDto = DataBuilderApi.validUpdateClubPayload({
  164 |       id: postBody.id,
  165 |     });
  166 | 
  167 |     const response: APIResponse = await clubClient.editClub(postBody.id, updatePayload);
  168 |     const body = await response.json();
  169 | 
  170 |     await allure.step('Validate response status', async (): Promise<void> => {
  171 |       expect(response.ok()).toBeTruthy();
  172 |       expect(response.status()).toBe(200);
  173 |     });
  174 | 
  175 |     await allure.step('Validate updated club fields', async (): Promise<void> => {
  176 |       expect(body).toMatchObject({
  177 |         id: postBody.id,
  178 |         name: updatePayload.name,
  179 |         description: updatePayload.description,
  180 |         ageFrom: updatePayload.ageFrom,
  181 |       });
  182 |     });
  183 | 
  184 |     await clubClient.deleteClub(postBody.id);
  185 |   });
  186 | 
  187 |   test('should delete by existing id', async ({ clubClient }): Promise<void> => {
  188 |     await allure.severity('critical');
  189 |     await allure.description('Verify deleting a club by existing ID');
  190 | 
  191 |     const payload: ClubRequestDto = DataBuilderApi.validClubPayload();
  192 |     const postResponse: APIResponse = await clubClient.createClub(payload);
  193 |     const postBody = await postResponse.json();
  194 | 
  195 |     await allure.step('Validate club was created', async (): Promise<void> => {
  196 |       expect(postResponse.ok()).toBeTruthy();
  197 |       expect(postResponse.status()).toBe(201);
  198 |     });
  199 | 
  200 |     const response: APIResponse = await clubClient.deleteClub(postBody.id);
  201 | 
  202 |     await allure.step('Validate response status', async (): Promise<void> => {
  203 |       expect(response.ok()).toBeTruthy();
  204 |       expect(response.status()).toBe(200);
  205 |     });
  206 |   });
  207 | 
  208 |   for (const { id, description } of DataBuilderApi.invalidClubIds()) {
  209 |     test(`should not delete a club by ${description}`, async ({ clubClient }): Promise<void> => {
  210 |       await allure.severity('critical');
  211 |       await allure.description('Verify deleting a club by non-existing ID');
  212 | 
  213 |       const response: APIResponse = await clubClient.deleteClub(id);
  214 |       const body = await response.json();
  215 | 
  216 |       await allure.step('Validate response status', async (): Promise<void> => {
  217 |         expect(response.ok()).toBeFalsy();
  218 |         expect(response.status()).toBe(404);
  219 |       });
  220 | 
  221 |       await allure.step('Validate error response body', async (): Promise<void> => {
  222 |         expect(body).toMatchObject({
  223 |           status: 404,
  224 |           message: expect.any(String),
  225 |         });
  226 |         expect(body.message.length).toBeGreaterThan(0);
  227 |       });
  228 |     });
  229 |   }
  230 | 
  231 |   test('should not create a club with an unauthorized user', async ({
  232 |     unauthClubClient,
  233 |   }): Promise<void> => {
  234 |     await allure.severity('critical');
  235 |     await allure.description('Verify that an unauthorized user cannot create a club');
  236 | 
  237 |     const payload: ClubRequestDto = DataBuilderApi.validClubPayload();
  238 |     const response: APIResponse = await unauthClubClient.createClub(payload);
  239 |     const body = await response.json();
  240 | 
  241 |     await allure.step('Validate response status', async (): Promise<void> => {
  242 |       expect(response.ok()).toBeFalsy();
  243 |       expect(response.status()).toBe(401);
  244 |     });
  245 | 
  246 |     await allure.step('Validate error response body', async (): Promise<void> => {
  247 |       expect(body).toMatchObject({
  248 |         status: 401,
  249 |         message: expect.any(String),
  250 |       });
  251 |       expect(body.message.length).toBeGreaterThan(0);
  252 |     });
  253 | 
  254 |     await allure.step('Validate no club was created', async (): Promise<void> => {
  255 |       expect(body.id).toBeUndefined();
  256 |       expect(body.name).toBeUndefined();
  257 |     });
  258 |   });
  259 | 
```