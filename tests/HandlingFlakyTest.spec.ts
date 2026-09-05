import {test} from "@playwright/test";
/*
Interview answer

First, I identify the root cause using Playwright traces, screenshots, and logs. 
I make sure I'm using stable locators, avoid hard waits, and rely on Playwright's 
auto-waiting and web-first assertions. I handle network synchronization properly, 
maintain test isolation and independent test data, and avoid shared state. For CI, 
I can configure retries such as two retries, but I use retries only as a safety net and not 
as a solution for the underlying flakiness.
*/
test("Handling Flaky test", async ({ page, context }) => {

    //for playwright global test to handle flaky test in playwright.config.ts file
    //retries:3,
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("jeevangowda016@gmail.com");
    await page.locator("#Password").fill("Appu@123");
    await page.locator("[value='Log in']").click();
    await page.waitForTimeout(5000);
    await page.locator(".ico-logout").click();
});