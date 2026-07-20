import {test,Page,Browser,BrowserContext} from "@playwright/test";
let testPage: Page;
/*
  reporter:[['html', {open:'always', outputFolder:'HTML-Report'}],//to create custom folder for html report
            commond to open report: npx playwright show-report HTML-Report. other wise default it will save 
            under playwright-report
            ['line'],
            ['list'],
            ['dot'],
            ['junit', {outputFile:'JUNIT-Report/JUNIT-Report.xml'}],//to create custom folder for junit report
            commond to open report: npx playwright show-report JUNIT-Report
            ['json', {outputFile:'JSON-Report/JSON-Report.json'}]//to create custom folder for json report
            commond to open report: npx playwright show-report JSON-Report
           ],
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
    })

    test("Poll Vote", async()=>{
            await testPage.locator("#pollanswers-2").check();
            await testPage.locator("#vote-poll-1").click();
    })
});
