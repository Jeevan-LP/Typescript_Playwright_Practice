import {test, expect, Locator} from "@playwright/test";

test("Handling Timeouts", async({page})=>{

    test.setTimeout(50000);
    //test.slow();//wait 90sec

    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForLoadState();//wait untill page load

    /*a. Auto-waiting- Before performing any actual action auto waiting will perform actionability check 
    if actionability check passed then the wait action will be performed. like Visible, Stable, Receives, 
    Events,	Enableand Editable

    b. force: whenever we dont want to perform actionability check and do some action forcefully then we will use forec
    
    c. To set time out in globally for both test and assertion we will gor for playwright.config.ts file under 
    export default defineConfig will use like 
    for test timeout:60000, and defalut timeout is 30sec
    for assertions expect:{timeout:30000}, and defalut timeout is 5sec
    
    d. we can set time in test level as well. if time is exist in both playwright.config and test level then,
    it will override the test level
    
    e. test.setTimeout(50000);-for test level
       await expect(page).toHaveTitle("Demo Web Shop",{timeout:20000}); 
    */

    //Assertions - Auto-waiting - defalut timeout is 5sec
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page).toHaveTitle("Demo Web Shop",{timeout:20000});

    //Auto-waiting - defalut timeout is 30sec
    //await page.locator("#small-searchterms").first().fill("Laptop");
    //await page.locator("[type='submit']").click();

    //Forcing Auto-actions
    await page.locator("#small-searchterms").first().fill("Laptop",{force:true});
    await page.locator("[type='submit']").click({force:true});
    //await page.waitForTimeout(5000);


});