import {test} from "@playwright/test";

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