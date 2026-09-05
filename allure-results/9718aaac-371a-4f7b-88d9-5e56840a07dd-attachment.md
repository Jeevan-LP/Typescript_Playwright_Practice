# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingAuthentication.spec.ts >> Handling Authentication
- Location: tests\HandlingAuthentication.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://vm-in4qa.in4suite.com/
Call log:
  - navigating to "https://vm-in4qa.in4suite.com/", waiting until "load"

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
> 8  |     await page.goto("https://vm-in4qa.in4suite.com/");
     |                ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://vm-in4qa.in4suite.com/
  9  | 
  10 |     let allCookies = await context.cookies();
  11 |     console.log("All cookies before: ", allCookies);
  12 | 
  13 |     await context.clearCookies();
  14 |     let clearedCookies = await context.cookies();
  15 |     console.log("Cleared cookies: ", clearedCookies);
  16 | });
```