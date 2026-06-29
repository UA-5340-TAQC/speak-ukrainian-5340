# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/category-api.spec.ts >> Category API >> DELETE /category/{id} >> should delete an existing category
- Location: tests/api/category-api.spec.ts:99:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  6   | test.describe('Category API', () => {
  7   |   test.describe('GET /categories', () => {
  8   |     test('should return a list of categories', async ({ categoryClient }) => {
  9   |       await allure.description(
  10  |         'Verify that the categories endpoint returns a valid list of categories with status 200.'
  11  |       );
  12  | 
  13  |       const response = await categoryClient.getCategories();
  14  | 
  15  |       expect(response.ok()).toBeTruthy();
  16  |       expect(response.status()).toBe(200);
  17  | 
  18  |       const categories = await response.json();
  19  | 
  20  |       await test.step('Validate response structure is an array', async () => {
  21  |         expect(Array.isArray(categories)).toBe(true);
  22  |         expect(categories.length).toBeGreaterThan(0);
  23  |       });
  24  |     });
  25  | 
  26  |     test('should return a specific category by ID', async ({ categoryClient }) => {
  27  |       await allure.description(
  28  |         'Verify that the endpoint returns the correct category object when queried by a valid ID.'
  29  |       );
  30  | 
  31  |       const allCategoriesResponse = await categoryClient.getCategories();
  32  |       expect(allCategoriesResponse.status()).toBe(200);
  33  | 
  34  |       const allCategories = await allCategoriesResponse.json();
  35  |       expect(allCategories.length).toBeGreaterThan(0);
  36  | 
  37  |       const { id: targetId, name: categoryName } = allCategories[0];
  38  | 
  39  |       const response = await categoryClient.getCategoryByID(targetId);
  40  | 
  41  |       expect(response.ok()).toBeTruthy();
  42  |       expect(response.status()).toBe(200);
  43  | 
  44  |       const category: CategoryResponseDto = await response.json();
  45  | 
  46  |       await test.step('Validate response contains correct category data', async () => {
  47  |         expect(category.id).toBe(targetId);
  48  |         expect(category.name).toBe(categoryName);
  49  |       });
  50  |     });
  51  |   });
  52  | 
  53  |   test.describe('POST /category', () => {
  54  |     test('should create a new category', async ({ authCategoryClient }) => {
  55  |       await allure.description(
  56  |         'Verify that an authorized user can create a new category using a valid payload.'
  57  |       );
  58  | 
  59  |       const payload = CategoryBuilder.validPayload();
  60  |       const response = await authCategoryClient.createCategory(payload);
  61  | 
  62  |       expect(response.ok()).toBeTruthy();
  63  |       expect(response.status()).toBe(200);
  64  | 
  65  |       const { id, name, description }: CategoryResponseDto = await response.json();
  66  | 
  67  |       await test.step('Validate created category data', async () => {
  68  |         expect(id).toBeGreaterThan(0);
  69  |         expect(name).toBe(payload.name);
  70  |         expect(description).toBe(payload.description);
  71  |       });
  72  | 
  73  |       await test.step('Delete the created category', async () => {
  74  |         const deleteResponse = await authCategoryClient.deleteCategory(id);
  75  |         expect(deleteResponse.ok()).toBeTruthy();
  76  |       });
  77  |     });
  78  | 
  79  |     test('should NOT create a category with an empty name', async ({ authCategoryClient }) => {
  80  |       await allure.description(
  81  |         'Verify that the API rejects category creation when the name field is empty.'
  82  |       );
  83  | 
  84  |       const invalidPayload = CategoryBuilder.invalidNamePayload();
  85  |       const response = await authCategoryClient.createCategory(invalidPayload);
  86  |       const responseText = await response.text();
  87  | 
  88  |       await test.step('Validate response is an error (Bad Request)', async () => {
  89  |         expect(
  90  |           response.ok(),
  91  |           `Expected failure, but request succeeded!\nResponse: ${responseText}`
  92  |         ).toBeFalsy();
  93  |         expect(response.status()).toBe(400);
  94  |       });
  95  |     });
  96  |   });
  97  | 
  98  |   test.describe('DELETE /category/{id}', () => {
  99  |     test('should delete an existing category', async ({ authCategoryClient }) => {
  100 |       await allure.description(
  101 |         'Verify that an authorized user can delete a category and it is removed from the system.'
  102 |       );
  103 | 
  104 |       const payload = CategoryBuilder.validPayload();
  105 |       const createResponse = await authCategoryClient.createCategory(payload);
> 106 |       expect(createResponse.ok()).toBeTruthy();
      |                                   ^ Error: expect(received).toBeTruthy()
  107 | 
  108 |       const { id }: CategoryResponseDto = await createResponse.json();
  109 | 
  110 |       await test.step('Send DELETE request', async () => {
  111 |         const deleteResponse = await authCategoryClient.deleteCategory(id);
  112 | 
  113 |         expect(deleteResponse.ok()).toBeTruthy();
  114 |         expect(deleteResponse.status()).toBe(200);
  115 |       });
  116 | 
  117 |       await test.step('Verify category is actually removed from DB', async () => {
  118 |         const getResponse = await authCategoryClient.getCategoryByID(id);
  119 | 
  120 |         expect(getResponse.status()).toBe(404);
  121 |       });
  122 |     });
  123 |   });
  124 | 
  125 |   test.describe('PUT /category/{id}', () => {
  126 |     test('should update an existing category', async ({ authCategoryClient }) => {
  127 |       await allure.description(
  128 |         'Verify that an authorized user can successfully update an existing category.'
  129 |       );
  130 | 
  131 |       const initialPayload = CategoryBuilder.validPayload();
  132 |       const createResponse = await authCategoryClient.createCategory(initialPayload);
  133 |       expect(createResponse.ok()).toBeTruthy();
  134 | 
  135 |       const { id }: CategoryResponseDto = await createResponse.json();
  136 | 
  137 |       const updatePayload = CategoryBuilder.validUpdatePayload({ id });
  138 | 
  139 |       await test.step('Send PUT request with updated data', async () => {
  140 |         const updateResponse = await authCategoryClient.updateCategory(id, updatePayload);
  141 | 
  142 |         expect(updateResponse.ok()).toBeTruthy();
  143 |         expect(updateResponse.status()).toBe(200);
  144 | 
  145 |         const updatedCategory: CategoryResponseDto = await updateResponse.json();
  146 | 
  147 |         expect(updatedCategory.id).toBe(id);
  148 |         expect(updatedCategory.name).toBe(updatePayload.name);
  149 |         expect(updatedCategory.description).toBe(updatePayload.description);
  150 |         expect(updatedCategory.sortby).toBe(updatePayload.sortby);
  151 |       });
  152 | 
  153 |       await test.step('Delete the updated category', async () => {
  154 |         const deleteResponse = await authCategoryClient.deleteCategory(id);
  155 |         expect(deleteResponse.ok()).toBeTruthy();
  156 |       });
  157 |     });
  158 |   });
  159 | });
  160 | 
```