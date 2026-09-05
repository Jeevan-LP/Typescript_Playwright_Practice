import {test, expect, Page} from "@playwright/test";

export class ParaBankPOM{

    private bankPage: Page;

    public constructor(bankPage: Page){
        this.bankPage=bankPage;
    }

    async bankLogin(userName:string, password:string){
        await this.bankPage.locator("[name='username']").fill(userName);
        await this.bankPage.locator("[name='password']").fill(password);
        await this.bankPage.locator("[value='Log In']").click();
    }

    async bankAccountOpen(AccountType:string, AccountAmount:string){
        await this.bankPage.getByRole("link",{name:'Open New Account'}).click();
        await this.bankPage.locator("#type").first().selectOption(AccountType);
        await this.bankPage.locator("#fromAccountId").first().selectOption(AccountAmount);
        await this.bankPage.locator("[value='Open New Account']").click();
    }

    async bankLogout(){
        await this.bankPage.getByRole("link",{name:'Log Out'}).click();
    }

}