import {test, expect, Locator} from "@playwright/test";

test("Check box", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const allCheckboxes:Locator=page.locator("//div[@class='form-group'][4]//input");
    
    for(let i=0; i< await allCheckboxes.count(); i++){
        
        //Approach 1 - all check boxes
        /*await allCheckboxes.nth(i).check();
        await page.waitForTimeout(1500);
        //await expect(allCheckboxes.nth(i)).toBeChecked();*/
        
        //Approach 2 - with specific index
        /*if(i==1 || i==4){
            await allCheckboxes.nth(i).check();
            await page.waitForTimeout(1500);
            await expect(allCheckboxes.nth(i)).toBeChecked();
        }*/

        //Approach 3 - with specific text
         /*const text=await allCheckboxes.nth(i).getAttribute("id");
         /*if(text=='monday' || text=='thursday'){
            await allCheckboxes.nth(i).check();
            await page.waitForTimeout(1500);
            await expect(allCheckboxes.nth(i)).toBeChecked();
         }*/
    }
        //un check
        const singleCheck:Locator=allCheckboxes.nth(0);
        await singleCheck.check();
        await expect(singleCheck).toBeChecked();
        await page.waitForTimeout(1500);

        await singleCheck.uncheck();
        expect(await singleCheck.isChecked()).toBe(false);
        await page.waitForTimeout(1500);

})