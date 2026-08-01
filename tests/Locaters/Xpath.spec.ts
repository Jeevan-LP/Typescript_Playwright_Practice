import {test, expect, Locator} from "@playwright/test";

test("Xpath Locators", async({page})=>{

    //1. xpath by attribute
    await page.goto("https://demowebshop.tricentis.com/");
    const alltext:Locator=page.locator("//div[@class='column follow-us']//a");
    console.log("total number of elements in the list is : ", await alltext.count());
    console.log("first element in the list is: ",  await alltext.first().textContent());
    console.log("last element in the list is: ",  await alltext.last().textContent());
    console.log("specific element in the list is: ", await alltext.nth(2).textContent());
    console.log("all elements in the list are:", await alltext.allTextContents());//array format
    for(let alllinks of await alltext.allTextContents()){
        console.log(alllinks);
    }

    for(let j=0; j<(await alltext.count());j++){
        console.log(await alltext.nth(j).allInnerTexts());
    }

    //2. xpath by contains
    await page.locator("//a[contains(@class, 'ico-r')]").click();

    //3. xpath by starts-with
    await page.locator("//input[starts-with(@id, 'newsletter-su')]").click();
    
    //4. xpath by and & or
    await page.locator("//input[@type='submit' and @value='Register']").click();
    await page.locator("//input[@id='FirstName' or @name='FirstName']").fill("Jeevan");

    //5. xpath by text
    await page.locator("//label[text()='Last name:']").fill("L P");

    //6. xpath by position
    const positionText = await page.locator("//div[@class='column my-account']//li[position()=2]").textContent();
    console.log("Text of the second element is: ", positionText);

    //7. xpath by last
    const lastText = await page.locator("//div[@class='column my-account']//li[last()]").textContent();
    console.log("Text of the last element is: ", lastText);

    //handling dynamic elements using xpath
    page.goto("https://testautomationpractice.blogspot.com/");
    
    for(let i=1; i<=6; i++){
        await page.locator("//button[text()='START' or text()='STOP']").click(); //using text
        //await page.locator("//button[@name='start' or @name='stop']").click(); //using attribute
        //await page.locator("//button[contains(@name, 'st')]").click(); //using contains
        //await page.locator("//button[starts-with(@name, 'st')]").click(); //starts with
        //await page.getByRole("button", {name: /START|STOP/}).click(); //inbuilt locator
        await page.waitForTimeout(2000);
    }


})