# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingAuthentication.spec.ts >> Using Authentication
- Location: tests\HandlingAuthentication.spec.ts:26:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.title')
Expected: "Products"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.title')

```

```yaml
- text: Swag Labs
- textbox "Username"
- textbox "Password"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Create Authentication', async ({ browser }) => {
  4  | 
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
  7  | 
  8  |     await page.goto('https://www.saucedemo.com/');
  9  | 
  10 |     await page.getByPlaceholder('Username').fill('standard_user');
  11 |     await page.getByPlaceholder('Password').fill('secret_sauce');
  12 |     await page.locator('#login-button').click();
  13 | 
  14 |     // Verify successful login
  15 |     await expect(page.locator('.title')).toHaveText('Products');
  16 | 
  17 |     // Save authenticated state BEFORE logout
  18 |     await context.storageState({
  19 |         path: 'sudoCredentials.json'
  20 |     });
  21 | 
  22 |     await context.close();
  23 | });
  24 | 
  25 | 
  26 | test('Using Authentication', async ({ browser }) => {
  27 | 
  28 |     // Load previously saved authentication state
  29 |     const context = await browser.newContext({
  30 |         storageState: 'sudoCredentials.json'
  31 |     });
  32 | 
  33 |     const page = await context.newPage();
  34 | 
  35 |     await page.goto('https://www.saucedemo.com/');
  36 | 
  37 |     await expect(page).toHaveTitle('Swag Labs');
  38 | 
  39 |     // User is already authenticated
> 40 |     await expect(page.locator('.title')).toHaveText('Products');
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  41 | 
  42 |     // Logout
  43 |     await page.locator('#react-burger-menu-btn').click();
  44 |     await page.locator('#logout_sidebar_link').click();
  45 | 
  46 |     await context.close();
  47 | });
```