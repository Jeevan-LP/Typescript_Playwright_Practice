import {test, expect, Locator} from "@playwright/test";

test("Static drop down", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const allDropdownlist:Locator=page.locator("#country");
    //await allDropdownlist.selectOption("India"); //by text
    //await allDropdownlist.selectOption({value:'australia'}); //by value
    //await allDropdownlist.selectOption({index:2}); //by index
    await allDropdownlist.selectOption({label:'France'}); //by label

   
    const alllist:Locator=page.locator("//select[@id='country']/option");
    console.log("drop down entities count is: ", await alllist.count());
    expect(alllist).toHaveCount(10);
    console.log((await alllist.allTextContents()).toString().trim());
    
    let all:string[]=await alllist.allTextContents();

    //approach 1 string array drop down entity
    let Trimtext=all.map((Element)=>{
        return Element.trim();
    })
    console.log("before trim: ", all);
    console.log("after trim: ", Trimtext);
    expect(Trimtext).toContain('Brazil');

    //approach 2 itarating all drop down entity
    for(let text of all){
        console.log(text);
    }
    
    await page.waitForTimeout(3000);

})