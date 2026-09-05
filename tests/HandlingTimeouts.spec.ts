import {test, expect, Locator} from "@playwright/test";

test("Handling Timeouts", async({page})=>{

/*
Interview Answer

What is auto-waiting?
Playwright automatically waits for elements to become actionable before performing actions such as click, fill and check.

What is synchronization?
Synchronization ensures that the test waits for the required application state, event, navigation, or API response before proceeding.

Why should we avoid waitForTimeout()?
Because it is a fixed hard wait. It can make tests slower and doesn't guarantee that the application will actually be ready when the timeout expires.

    |Topic                          |Small definition                                           |Example

    Auto-waiting                    Playwright automatically waits for an element to            await page.getByRole('button', {name:'Login'}).click();
                                    become actionable before performing an action.
    
    Web-first assertions            Assertions automatically retry until the expected           await expect(page.getByText('Success')).toBeVisible();
                                    UI condition is met or timeout occurs.

    locator.waitFor()               Waits for a locator to reach a specified state              await locator.waitFor({state:'visible'});
                                    such as visible or hidden.

    waitForLoadState()              Waits until the page reaches a specified loading            await page.waitForLoadState('load');
                                    state.

    waitForURL()                    Waits until the page URL matches the expected               await page.waitForURL('**dashboard');        
                                    URL or pattern.

    waitForEvent()                  Waits for a specific Playwright event such                  await page.waitForEvent('popup');
                                    as popup or download.
    
    waitForFunction()               Waits until a custom JavaScript condition                   await page.waitForFunction(() => document.title === 'Home');
                                    becomes true.

    waitForTimeout()                Performs a fixed hard wait for a specified                  await page.waitForTimeout(5000);
                                    time and should generally be avoided.

    a. Auto-waiting- Before performing any actual action auto waiting will perform actionability check 
    if actionability check passed then the wait action will be performed. like Visible, Stable, Receives, 
    Events,	Enable and Editable

    b. force: whenever we don't want to perform actionability check and do some action forcefully then we will use force
    
    c. To set time out in globally for both test and assertion we will gor for playwright.config.ts file under 
    export default defineConfig will use like 
    for test timeout:60000, and default timeout is 30sec
    for assertions expect:{timeout:30000}, and default timeout is 5sec
    
    d. we can set time in test level as well. if time is exist in both playwright.config and test level then,
    it will override the test level
    
    e. test.setTimeout(50000);-for test level
       await expect(page).toHaveTitle("Demo Web Shop",{timeout:20000});
*/
    test.setTimeout(50000);
    //test.slow();//wait 90sec

    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForLoadState('load');//wait untill page load

    //Assertions - Auto-waiting - defalut timeout is 5sec
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page).toHaveTitle("Demo Web Shop",{timeout:1000});

    //Auto-waiting - default timeout is 30sec
    //await page.locator("#small-searchterms").first().fill("Laptop");
    //await page.locator("[type='submit']").click();

    //Forcing Auto-actions
    await page.locator("#small-searchterms").first().fill("Laptop",{force:true});
    //await page.locator("[type='submit']").click({force:true});
    await page.locator("[type='submit']").click({timeout:2000});
    //await page.waitForTimeout(5000);


});