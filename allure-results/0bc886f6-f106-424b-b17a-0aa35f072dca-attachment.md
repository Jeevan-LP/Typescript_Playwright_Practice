# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingAuthentication.spec.ts >> Create Authentication
- Location: tests\HandlingAuthentication.spec.ts:3:5

# Error details

```
Error: Error reading storage state from openSource.json:
ENOENT: no such file or directory, open 'C:\Visual Studio\Playwright_Practice\openSource.json'
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Create Authentication', async ({ browser }) => {
  4  | 
> 5  |     const context = await browser.newContext();
     |                     ^ Error: Error reading storage state from openSource.json:
  6  |     const page = await context.newPage();
  7  | 
  8  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  9  | 
  10 |     await page.getByPlaceholder('Username').fill('Admin');
  11 |     await page.getByPlaceholder('Password').fill('admin123');
  12 |     await page.locator("[type='submit']").click();
  13 | 
  14 |     // Verify successful login
  15 |     await expect(page).toHaveTitle('OrangeHRM');
  16 | 
  17 |     // Save authenticated state BEFORE logout
  18 |     await context.storageState({path: 'openSource.json'});
  19 | 
  20 |     //should not logout other wise it does not save credentials
  21 |     //await page.locator("[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
  22 |     //await page.locator("[role='menuitem']").last().click();
  23 | 
  24 |     console.log('Authentication state saved to openSource.json');
  25 |     await context.close();
  26 | });
  27 | 
  28 | 
  29 | test('Using Authentication', async ({ browser }) => {
  30 | 
  31 |     // Load previously saved authentication state
  32 |     //const context = await browser.newContext({storageState: 'openSource.json'});
  33 |     const context = await browser.newContext();
  34 | 
  35 |     const page = await context.newPage();
  36 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  37 | 
  38 |     await expect(page).toHaveTitle('OrangeHRM');
  39 | 
  40 |     // Logout
  41 |     await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
  42 |     await page.locator("[role='menuitem']").last().click();
  43 | 
  44 |     console.log('Authentication state restored from openSource.json');
  45 |     await context.close();
  46 | });
```