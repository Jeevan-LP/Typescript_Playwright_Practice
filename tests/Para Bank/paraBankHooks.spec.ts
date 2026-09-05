import {test as base} from "@playwright/test";

export const pbTest=base;

pbTest.beforeAll("launching browser", async({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

});



pbTest.afterAll("closing browser", async({page})=>{

    await page.close(); 

});