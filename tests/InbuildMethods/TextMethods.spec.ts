import {test, expect, Locator} from "@playwright/test";

test("Text Methods", async({page})=>{
/*
textContent()	                                           innerText()
-------------------------------------------------------------------------------------------------------------
a. Returns all text in the DOM.	                           a. Returns only visible text.
b. Performance faster                                      b. Performance Slightly slower        
c. Included Hidden elements                                c. Excluded Hidden elements     
d. Return string | null                                    d. Return only string
e. Reading raw DOM text                                    e. Verifying what users actually see
f. One locator = One string                                f. One locator = One string

allTextContents()	                                       allInnerTexts()
-------------------------------------------------------------------------------------------------------------
a. Returns the textContent of every matched element.	   a. Returns the innerText of every matched element.
b. Performance faster                                      b. Performance Slightly slower        
c. Included Hidden elements                                c. Excluded Hidden elements     
d. Return string[]                                         d. Return string[]
e. Reading raw DOM text                                    e. Verifying what users actually see
f. One locator(matching many elements)= Array of strings   f. One locator(matching many elements)= Array of strings
*/
    await page.goto("https://testautomationpractice.blogspot.com/");

    const AllproductLink:Locator = page.locator("//select[@id='colors']/option");
    console.log("Number of product links:", await AllproductLink.count());

    //textContent
    const textContentText:string | null = await AllproductLink.nth(0).textContent();
    console.log(textContentText);

    //innerText
    const innerTextText:string= await AllproductLink.nth(0).innerText();
    console.log(innerTextText);

    //allTextContents
    const allTextContents:string[] = await AllproductLink.allTextContents();
    console.log("All text contents:", allTextContents);
    //console.log("All text contents:", allTextContents?.toString().trim());
    //const trimmedTextContents:string[] = allTextContents.map((ele)=>{return ele.trim()});
    //console.log("All trimmedTextContents contents:", trimmedTextContents);

    //allInnerTexts
    const allInnerTexts:string[] = await AllproductLink.allInnerTexts();
    console.log("All inner texts:", allInnerTexts);

    await page.waitForTimeout(2000);

    for(let i=0; i<await AllproductLink.count(); i++){
        //textContent
        const textContent = await AllproductLink.nth(i).textContent();
        //console.log(textContent);
        console.log(textContent?.toString().trim());

    }

    for(let j=0; j<await AllproductLink.count(); j++){
        //innerText
        const innerText = await AllproductLink.nth(j).innerText();
        console.log(innerText);

    }

    //all
    const allLocators:Locator[] = await AllproductLink.all();
    console.log("All locators:", allLocators);
    console.log(await allLocators[1].innerText());

    for(let l of allLocators){
        const innerText = await l.innerText();
        console.log(innerText);
    }

});
