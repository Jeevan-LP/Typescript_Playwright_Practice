import {test, expect} from "@playwright/test";

test("Launching Browser", async({page})=>{

    await page.goto("https://www.amazon.in/");
    await expect(page.locator("//span[@id='nav-cart-count']")).toBeVisible();

})