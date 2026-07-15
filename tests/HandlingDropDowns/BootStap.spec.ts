import {test, expect} from '@playwright/test';

test("Boot strap drop down", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {name:"Login"}).click();

    await page.getByText("PIM").click();
    
    await page.waitForTimeout(3000);
    await page.locator("//i[contains(@class, 'oxd-icon bi-caret')]").nth(5).click();
    const AllLists=page.locator("//div[@role='listbox']//span");
    
    console.log("drop down entities count is: ", await AllLists.count());
    expect(AllLists).toHaveCount(await AllLists.count());

    //console.log("drop down allTextContents entities are: ", await AllLists.allTextContents());
    //allTextContents method will return all the text content of the elements in an array if we print it directly in console

    console.log("drop down allInnerTexts entities are: ", await AllLists.allInnerTexts()); 
    //allInnerTexts method will return all the inner text of the elements in an array if we print it directly in console

    for(let i=0; i< await AllLists.count(); i++){

        //const allTexts=await AllLists.nth(i).textContent();
        //textContent method will return the text content of the element in string format

        const allTexts=await AllLists.nth(i).innerText();
        //innerText method will return the inner text of the element in string format
        console.log(allTexts);

        if(allTexts=='Finance'){
            await AllLists.nth(i).click();
        }
    }
    await page.waitForTimeout(3000);

})