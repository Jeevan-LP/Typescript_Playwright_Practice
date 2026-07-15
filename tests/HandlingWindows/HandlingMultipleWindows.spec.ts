import {test, expect, chromium} from "@playwright/test";

test("Multiple windows", async()=>{

    const browser=await chromium.launch();
    const context =await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    //parent tab
    console.log("Parent window url: ", page.url());
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

    const [childPage]=await Promise.all([page.waitForEvent("popup"), page.getByText('Popup Windows').click()]);

    await childPage.waitForLoadState();
    const allWindows=context.pages();
    console.log("Numbers of windows: ", allWindows.length)

    for(let window of allWindows){
        const title=window.title();
        if((await title).includes('Playwright')){
            await window.getByText('Get started').click();
        }
    }

})