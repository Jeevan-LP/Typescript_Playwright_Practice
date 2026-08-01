import {test} from "@playwright/test";
import {saucedemoPOM} from "../POM/HandlingsaucedemoPageObject.spec";

test("saucedemo test", async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    let saucedemoTest=new saucedemoPOM(page);
    await saucedemoTest.login("standard_user", "secret_sauce");
    await saucedemoTest.cart();
    await saucedemoTest.logout();


});