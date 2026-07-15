import {test, expect, chromium} from "@playwright/test";

test("Handling Authentication Popup", async()=>{

    //Approach 1
    const browser=await chromium.launch();
    const context =await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});//here need to pass
    const page=await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await expect(page.locator("//div[@class='example']//p")).toHaveText('Congratulations! You must have the proper credentials.');
    await page.waitForLoadState();
    await page.waitForTimeout(3000);

    //Approach 2
    /*const browser=await chromium.launch();
    const context =await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");//directly injecting credential to url
    await expect(page.locator("//div[@class='example']//p")).toHaveText('Congratulations! You must have the proper credentials.');
    await page.waitForLoadState();
    await page.waitForTimeout(3000);*/

})