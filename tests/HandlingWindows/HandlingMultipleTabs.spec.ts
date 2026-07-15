import {test, expect, chromium} from "@playwright/test";

test("Multiple tabs Approach 1", async()=>{

    const browser=await chromium.launch();
    const context =await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Approach 1
    //parent tab
    console.log("Parent tab url: ", page.url());
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    await page.locator("#name").type("Jeevan Gowda");

    //child tab
    const [childTab]=await Promise.all([context.waitForEvent("page"), 
                                            page.locator("[onclick='myFunction()']").click()]);
    //some time page is not load or visible it may return void so using '[]' like [childTab]
    console.log("Child tab url: ", childTab.url());
    await expect(childTab).toHaveURL("https://www.pavantestingtools.com/");
    await childTab.locator("[title='search']").first().type("Appu Gowda");

    //again parent tab
    await page.bringToFront();
    await page.locator("#Wikipedia1_wikipedia-search-input").type("Gowda")
    await page.waitForTimeout(2000);

    //again child tab
    await childTab.bringToFront();
    await childTab.waitForTimeout(2000);

})

test.only("Multiple tabs Approach 2", async()=>{

    const browser=await chromium.launch();
    const context =await browser.newContext();
    const parentpage=await context.newPage();

    await parentpage.goto("https://testautomationpractice.blogspot.com/");

    //Approach 2
    //parent tab
    console.log("Parent tab url: ", parentpage.url());
    await expect(parentpage).toHaveURL("https://testautomationpractice.blogspot.com/");
    await parentpage.locator("#name").type("Jeevan Gowda");

    const [childTab]=await Promise.all([context.waitForEvent("page"), 
                                            parentpage.locator("[onclick='myFunction()']").click()]);
    //some time page is not load or visible it may return void so using '[]' like [childTab]

    const allTabs=context.pages();//once all pages loaded then capture all pages
    console.log("Number of tabs: ", allTabs.length);

    //child tab
    //const parentpage=allTabs[0];
    const childPage=allTabs[1];
    console.log("Child tab url: ", childPage.url());
    await expect(childPage).toHaveURL("https://www.pavantestingtools.com/");
    await childPage.locator("[title='search']").first().type("Appu Gowda");
    await parentpage.waitForTimeout(2000);

    //again parent tab
    await parentpage.bringToFront();
    await parentpage.locator("#Wikipedia1_wikipedia-search-input").type("Gowda")
    await parentpage.waitForTimeout(5000);

})