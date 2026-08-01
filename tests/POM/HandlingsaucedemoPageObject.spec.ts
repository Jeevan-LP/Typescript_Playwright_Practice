import { Page, expect} from "@playwright/test";

export class saucedemoPOM{

    private testPage:Page;

    constructor(testPage:Page){
        this.testPage=testPage;
    }

    async login(Username:string, Password:string){
        await this.testPage.getByPlaceholder("Username").fill(Username);
        await this.testPage.getByPlaceholder("Password").fill(Password);
        await this.testPage.locator("#login-button").click();
    }

    async cart(){
        await this.testPage.locator("[class='shopping_cart_link']").click();
        await expect(this.testPage.locator("#checkout")).toBeVisible();
    }

    async logout(){
        await this.testPage.getByRole("button",{name:"Open Menu"}).click();
        await this.testPage.locator("[data-test='logout-sidebar-link']").click();
    }

}