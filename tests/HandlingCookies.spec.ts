import {test, expect} from '@playwright/test';

test("Handling Cookies", async({browser})=>{

    /*
    In Playwright, cookies are managed at the BrowserContext level. I can retrieve cookies using context.cookies(), 
    add cookies using context.addCookies(), and remove cookies using context.clearCookies(). In real-time automation, 
    cookies are commonly used for session and authentication handling. I can also use storageState() to save and reuse 
    authentication state across test cases, which avoids performing the login operation repeatedly.
    */

    //Creating cookies explicitly----------------------------------------------------------------------
    const context = await browser.newContext();
    const page = await context.newPage();

    //adding cookies to the context before navigating to the page. 
    //This is useful for setting up authentication or other state before the page loads.
    context.addCookies([{
        name: "Sudo Cookies",
        value: "Sudo Cookies Value",
        httpOnly: true,
        url: "https://www.saucedemo.com/"
    }]);

    await page.goto("https://www.saucedemo.com/");

    //Retrieving cookies from the context after navigating to the page.
    let allCookiesBefore=await context.cookies();
    console.log("Before clear cookies: ", allCookiesBefore);

    //Finding a specific cookie by name from the retrieved cookies.
    const foundCookie = allCookiesBefore.find((cookies=> cookies.name==="Sudo Cookies"));
    console.log("found cookies is: ", foundCookie?.name);
    expect(foundCookie?.value).toEqual("Sudo Cookies Value");

    //Saving the current state of the context, including cookies, to a file.
    await page.context().storageState({path: "sudoCookies.json"});

    //Deleting a specific cookie by name from the context.
    let deletedCookies = await context.clearCookies({
        name: 'Sudo Cookies',
        //domain: 'example.com'
    });
    console.log("Deleted cookies: ", deletedCookies);

    // Verify deletion of a specific cookie by name from the context.
    let deletionCookies=await context.cookies();
    let isDeleted = deletionCookies.some((cookies=> cookies.name==="Sudo Cookies"));
    console.log("Cookies after deletion: ", isDeleted);
    expect(isDeleted).toBeFalsy();

    //Deleting all cookies from the context.
    await context.clearCookies();
    let allCookiesAfter=await context.cookies();
    console.log("After clear cookies: ", allCookiesAfter);

    //Fetching existing cookies explicitly----------------------------------------------------------------------
    /*const context2 = await browser.newContext();
    const page2 = await context.newPage();

    await page2.goto("https://vm-in4qa.in4suite.com/");

    let allCookies = await context2.cookies();
    console.log("All cookies before: ", allCookies);

    await context2.clearCookies();
    let clearedCookies = await context2.cookies();
    console.log("Cleared cookies: ", clearedCookies);*/
});