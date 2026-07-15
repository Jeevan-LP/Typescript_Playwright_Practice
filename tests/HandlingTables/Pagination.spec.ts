import { test, expect } from "@playwright/test";

test("Pagination", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page.locator("#productTable")).toBeVisible();

    const rows=page.locator("#productTable>tbody>tr");
    const pagination=page.locator("#pagination a");
    const checkBox=page.locator("#productTable input");

    for(let k=0; k< await pagination.count(); k++){
            await pagination.nth(k).click();
            await page.waitForTimeout(1500);
        
        for(let j=0; j< await rows.count(); j++){
        const text=await rows.nth(j).locator("td").nth(1).innerText();

            if(text=="Router"){
                await checkBox.nth(j).check();
                await page.waitForTimeout(1500);
                console.log(`Name is ${text} and checkbox is selected`);
                return; // Stops the test completely
            }
        }
    }
    console.log("Product not found");
});