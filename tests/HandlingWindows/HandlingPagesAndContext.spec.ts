import {test, expect, Locator, chromium} from "@playwright/test";
/*
 * browser - which browser we need to launch
 * newContext - new window in same browser. we can create multiple contexts for single browser
 * newPage - new window in same context and browser. we can create multiple pages for single context and browser
 */

test("Handling windows---Pages", async()=>{

    const browser=await chromium.launch();
    const textContext=await browser.newContext();

    const page1=await textContext.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page1.waitForTimeout(3000);
    await expect(page1).toHaveURL("https://testautomationpractice.blogspot.com/");

    const page2=await textContext.newPage();
    await page2.goto("https://demowebshop.tricentis.com/");
    await page2.waitForTimeout(5000);
    await expect(page2).toHaveURL("https://demowebshop.tricentis.com/");

})

test("Handling windows---Context", async()=>{

    const browser=await chromium.launch();

    const textContext1=await browser.newContext();
    const page1=await textContext1.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page1.waitForTimeout(5000);
    await expect(page1).toHaveURL("https://testautomationpractice.blogspot.com/");

    const page2=await textContext1.newPage();
    await page2.goto("https://demowebshop.tricentis.com/");
    await page2.waitForTimeout(5000);
    await expect(page2).toHaveURL("https://demowebshop.tricentis.com/");
    await textContext1.close();
    
    const textContext2=await browser.newContext();
    const page11=await textContext2.newPage();

    await page11.goto("https://obstaclecourse.tricentis.com/Obstacles/List?page=1");
    await page11.waitForTimeout(5000);
    await expect(page11).toHaveTitle("Tricentis Obstacle Course • Obstacle List");

    const page22=await textContext2.newPage();
    await page22.goto("https://www.saucedemo.com/");
    await page22.waitForTimeout(5000);
    await expect(page22).toHaveTitle("Swag Labs");
    await textContext2.close();
    await browser.close();

})

test("Handling windows", async()=>{

    const browser=await chromium.launch();
    const textContext=await browser.newContext();

    const page=await textContext.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

    //get size
    const sizeOfPage=page.viewportSize();
    console.log("Size of window: ", sizeOfPage);
    const height=page.viewportSize()?.height;
    const width=page.viewportSize()?.width;
    console.log(`Window height is ${height} and width is ${width}`);    
    await page.waitForTimeout(3000);

    //set size
    await page.setViewportSize({width:500, height:400});
    await page.waitForTimeout(3000);

})

test.only("Handling browser navigation", async()=>{

    const browser=await chromium.launch();
    const textContext=await browser.newContext();

    const page=await textContext.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#name").fill("Jeevan Gowda");
    await page.waitForTimeout(1000);

    await page.reload();
    await page.waitForTimeout(2000);
    await page.goForward();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);

   
})