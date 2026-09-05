import {test,Page,Browser,BrowserContext,expect} from "@playwright/test";
import { exec } from "node:child_process";
let testPage: Page;
/*
step: 1 Install allure report
for locally: npm install -d allure-playwright
for globally: npm install -D allure-commandline

step: 2 Check allure report version
allure --version

step: 3 adding allure in playwright.config.ts file
a. export default defineConfig({
	reporter:[['allure-playwright']]
});
b. on running test automatically allure-results folder will created

step: 4  Generate allure report
npx allure generate ./allure-results

step: 5 Open allure report 
npx allure open ./allure-report

note: directly use: npx allure generate ./allure-results -o ./allure-report

once report generated need clean to open onther report
npx allure generate ./allure-results -o ./allure-report --clean
*/

test.beforeAll("Launching Browser", async({browser})=>{
    testPage=await browser.newPage();
    await testPage.goto("https://demowebshop.tricentis.com/");
});

test.afterAll("Closing Browser", async({browser})=>{
    await testPage.close();
});

test.beforeEach("Login to Application", async()=>{
    await testPage.locator(".ico-login").click();
    await testPage.locator("#Email").fill("jeevangowda016@gmail.com");
    await testPage.locator("#Password").fill("Appu@123");
    await testPage.locator("[value='Log in']").click();
})

test.beforeEach("Logout to Application", async()=>{
    await testPage.locator(".ico-logout").click();
})

test.describe("Demo group test", async()=>{
    test("Subscribe", async()=>{
            await testPage.locator("#newsletter-email").fill("jeevangowda016@gmail.com");
            await testPage.locator("#newsletter-subscribe-button").click();
            await expect(testPage).toHaveTitle("Jeevan")
    })

    test("Poll Vote", async()=>{
            await testPage.locator("#pollanswers-2").check();
            await testPage.locator("#vote-poll-1").click();
    })
});