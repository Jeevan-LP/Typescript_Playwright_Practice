import {test, expect} from "@playwright/test";
import {ParaBankPOM} from "./paraBankPOM";
import userData from "./userData.json";


test("Para Bank Login Test", async({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/openaccount.htm");
    const pbPOM=new ParaBankPOM(page);
    
    for(let data of userData){

        await pbPOM.bankLogin(data.Username, data.Password);
        await pbPOM.bankAccountOpen(data.AccountType, data.AccountAmount);
        const accountMSG= page.locator("#openAccountResult p").first();
        await expect(accountMSG).toContainText("Congratulations, your account is now open.");
        await pbPOM.bankLogout();

    }

    await page.close();
});