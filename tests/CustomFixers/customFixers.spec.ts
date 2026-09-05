import {test as base, expect, Page} from '@playwright/test';
import { Context } from 'node:vm';

type SudoFixture1 = {
    sudoLogin:Page;//MyFixtures defines the type of my custom fixture. 
    //When I write sudoLogin: Page, I'm telling TypeScript that the sudoLogin fixture provides a Playwright Page object.
}
export { expect };
export const Logintest = base.extend<SudoFixture1>({
    sudoLogin: async ({page}, use) => {

        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.click("#react-burger-menu-btn");
        await page.click("#logout_sidebar_link");

        await use(page);//await use(page) passes the logged-in page from the fixture to the test, 
        //so the test can use that page directly.

    }
});