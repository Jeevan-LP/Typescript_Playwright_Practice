import {test, expect, Locator} from "@playwright/test";

test("Css selector", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //1. id
    //await page.locator("input#name").fill("Jeevan"); //tagname#id
    await page.locator("#name").fill("Jeevan"); //#id

    //2. class
    //await page.locator("input.wikipedia-search-input").fill("L P"); //tagname.class
    await page.locator(".wikipedia-search-input").fill("Playwright"); //.class

    //3. tagname with attribute
    //await page.locator("input[placeholder='Enter EMail']").fill("L P"); //tagname[attribute name='attribut value']
    await page.locator("[placeholder='Enter EMail']").fill("jeevan123@gmail.com"); //[attribute name='attribut value']

    //4. class with tagname attribute
    await page.locator("input.form-control[placeholder='Enter Phone']").fill("7760410520"); //tagname.class[attribute name='attribut value']

    await page.waitForTimeout(2500);

})