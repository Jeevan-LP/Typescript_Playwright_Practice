import {test, expect, Page} from "@playwright/test";

export class POM{

    public testPage:Page;

    constructor(testPage:Page){
        this.testPage=testPage;
    }

    async login(email:string, password:string){
    await this.testPage.locator(".ico-login").click();
    await this.testPage.locator("#Email").fill(email);
    await this.testPage.locator("#Password").fill(password);
    await this.testPage.locator("[value='Log in']").click();
    }

    async logout(){
        await this.testPage.locator(".ico-logout").click();
    }

    async Subscribe(email:string){
        await this.testPage.locator("#newsletter-email").fill(email);
        await this.testPage.locator("#newsletter-subscribe-button").click();
    }

    async Poll(){
        await this.testPage.locator("#pollanswers-2").check();
        await this.testPage.locator("#vote-poll-1").click();
    }
}

