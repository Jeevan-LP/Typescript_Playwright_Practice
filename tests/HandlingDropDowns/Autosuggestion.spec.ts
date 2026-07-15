import {test, expect} from '@playwright/test';

test("Auto suggestion drop down", async({page})=>{

    await page.goto("https://www.myntra.com/");

    await page.getByPlaceholder("Search for products, brands and more").type("tshirt");
    await page.waitForTimeout(2000);
    console.log("search input value is: ", await page.getByPlaceholder("Search for products, brands and more").inputValue());
    const AllSuggetions = page.locator("//ul[@class='desktop-group']//li");
    console.log("drop down entities count is: ", await AllSuggetions.count());
    expect(AllSuggetions).toHaveCount(await AllSuggetions.count());
    //console.log("drop down entities are: ", await AllSuggetions.allTextContents());

    for(let j=0; j< await AllSuggetions.count(); j++){

        const allText:string[]=await AllSuggetions.nth(j).allTextContents();
        console.log(allText.toString());
        await page.waitForTimeout(2000);

        if(allText.includes('Tshirts For Men')){
            await AllSuggetions.nth(j).click();
        }
        
    }

    await page.waitForTimeout(5000);


})