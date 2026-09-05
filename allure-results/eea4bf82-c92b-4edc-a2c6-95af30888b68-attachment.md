# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingAuthentication.spec.ts >> Using Authentication
- Location: tests\HandlingAuthentication.spec.ts:19:5

# Error details

```
Error: Playwright Test did not expect test.use() to be called here.
Most common reasons include:
- You are calling test.use() in a configuration file.
- You are calling test.use() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test.use() from an async test.describe() block. Only sync ones are supported.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test("Handling Authentication", async({browser})=>{
  4  | 
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
  7  | 
  8  |     await page.goto("https://www.saucedemo.com/");
  9  |     await page.getByPlaceholder("Username").fill("standard_user");
  10 |     await page.getByPlaceholder("Password").fill("secret_sauce");
  11 |     await page.locator("#login-button").click();
  12 |     await page.locator("#react-burger-menu-btn").click();
  13 |     await page.locator("#logout_sidebar_link").click();
  14 |     await context.storageState({path: "sudoCredentials.json"});
  15 |     await page.waitForTimeout(3000);
  16 |     await context.close();
  17 | });
  18 | 
  19 | test("Using Authentication", async({browser})=>{
  20 | 
  21 |     const context = await browser.newContext();
  22 |     const page = await context.newPage();
> 23 |     test.use({storageState:"sudoCredentials.json"});
     |          ^ Error: Playwright Test did not expect test.use() to be called here.
  24 |     await page.goto("https://www.saucedemo.com/");
  25 |     await expect(page).toHaveTitle('Swag Labs');
  26 |     await page.locator("#login-button").click();
  27 |     await page.locator("#react-burger-menu-btn").click();
  28 |     await page.locator("#logout_sidebar_link").click();
  29 |     await page.waitForTimeout(3000);
  30 | 
  31 | });
```