import {test, expect, chromium} from "@playwright/test";
import UserData from "../TestData/UserData.json";
//If your test file is inside a subfolder such as tests/TestData/:'..' or use '.'

test("importing data from json file", async()=>{

            const browser = await chromium.launch();
            const context = await browser.newContext();
            const page = await context.newPage();
        
            await page.goto("https://www.saucedemo.com/");    
                for(let data of UserData){
                    await page.locator("#user-name").fill(data.UserNAme);
                    await page.locator("#password").fill(data.Password);
                    await page.locator("#login-button").click();
                    await page.locator("#react-burger-menu-btn").click();
                    await page.locator("#logout_sidebar_link").click();
                    await page.waitForTimeout(1000);
            }
            
            await browser.close();
});