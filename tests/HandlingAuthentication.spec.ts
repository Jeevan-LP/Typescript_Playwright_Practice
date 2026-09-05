import { test, expect } from '@playwright/test';

test('Create Authentication', async ({ browser }) => {

    /*
    Interview with Playwright: How to handle login authentication in Playwright?
     “In Playwright, I handle login authentication by saving the authenticated browser context using storageState(). 
     After a successful login, I save the session information such as cookies and local storage into a JSON file. 
     Then I configure storageState in playwright.config.ts, so the other tests automatically reuse the authenticated 
     session without performing the login again. This improves execution speed and avoids repeated UI login.”
     */
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator("[type='submit']").click();

    // Verify successful login
    await expect(page).toHaveTitle('OrangeHRM');

    // Save authenticated state BEFORE logout
    await context.storageState({path: 'openSource.json'});

    //should not logout other wise it does not save credentials
    //await page.locator("[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    //await page.locator("[role='menuitem']").last().click();

    console.log('Authentication state saved to openSource.json');
    await context.close();
});


test('Using Authentication', async ({ browser }) => {

    // Load previously saved authentication state
    const context = await browser.newContext({storageState: 'openSource.json'});

    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    // Logout
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.locator("[role='menuitem']").last().click();

    console.log('Authentication state restored from openSource.json');
    await context.close();
});