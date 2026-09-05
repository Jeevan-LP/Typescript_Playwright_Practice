import { test, expect } from "@playwright/test";
/*
Interview answer

"Playwright Trace is a debugging feature used to investigate test failures and flaky tests. 
It captures actions, screenshots, DOM snapshots, network activity, console logs, and timing information. 
We can configure it in playwright.config.ts, commonly using trace: 'on-first-retry', 
and view the generated trace using Playwright Trace Viewer.
*/

/*
3 ways to create trace file(.zip)
---------------------------------

1) using playwright.config.ts

2) using command
      npx playwright test my test.spec.ts --trace on

3) code(programmatically)

      context.tracing.start({screenshots:true,snapshots:true});

      //statements

      context.tracing.stop({path:'trace.zip'});

To view trace file ( 3 ways)
----------------------------

1) from html file --> click on trace.zip

2) through command --> npx playwright show-trace trace.zip

3) utility --> https://trace.playwright.dev/  ( drag and drop/upload trace.zip file )

*/

test("Handling Tracing", async ({ page, context }) => {

    await context.tracing.start({screenshots: true,snapshots: true});

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("jeevangowda016@gmail.com");
    await page.locator("#Password").fill("Appu@123");
    await page.locator("[value='Log in']").click();
    await page.locator(".ico-logout").click();

    await context.tracing.stop({path: "Trace/trace.zip"});
});