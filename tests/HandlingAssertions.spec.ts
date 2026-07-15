import {test, expect} from "@playwright/test";

test("Handling assertions", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

/*difference between Auto-retrying assertions and Non-retrying assertions

    Auto-retrying assertions                                           Non-retrying assertions
-------------------------------------------------------------------------------------------------------------
a. assertions will retry until the assertion passes             a. do not auto-retry
b. retrying assertions are async, so you must await them.       b. non-retrying assertions are not async, so you do not use await   
c. retrying assertions can't be lead to a flaky test.           c. non-retrying assertions can lead to a flaky test.    
d. These assertions allow to page and locator conditions        d. These assertions allow to test ot value conditions
*/

    //Hard assertion--if one defined assertion is failed then, remaining all assertion will be failed
    //Auto-retrying assertions
    /*await expect(page).toHaveTitle('Demo Web Shop');
    await expect(page.locator("[class='title'] strong").nth(3)).toHaveText('Newsletter')

    //Non-retrying assertions
    expect(await page.locator("[class='ico-register']").innerText()).toContain('Register');
    expect(await page.locator("[class='list']>li>a").count()).toBe(8);

    //Negating matchers
    await expect(page).not.toHaveTitle('Demo Web Shop1');
    expect(await page.locator("[class='ico-register']").innerText()).not.toContain('Register1');*/

    //Soft assertion--if one defined assertion is failed then, remaining all assertion will be passed
    //Auto-retrying assertions
    await expect.soft(page).toHaveTitle('Demo Web Shop1');
    await expect.soft(page.locator("[class='title'] strong").nth(3)).toHaveText('Newsletter')

    //Non-retrying assertions
    expect.soft(await page.locator("[class='ico-register']").innerText()).toContain('Register');
    expect.soft(await page.locator("[class='list']>li>a").count()).toBe(8);

    //Negating matchers
    await expect.soft(page).not.toHaveTitle('Demo Web Shop1');
    expect.soft(await page.locator("[class='ico-register']").innerText()).not.toContain('Register1');
    await page.waitForTimeout(5000);


});
