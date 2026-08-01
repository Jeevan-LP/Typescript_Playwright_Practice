/* These are the recommended built-in locators.
a. page.getByRole() to locate by explicit and implicit accessibility attributes.
b. page.getByText() to locate by text content.
c. page.getByLabel() to locate a form control by associated label's text.
d. page.getByPlaceholder() to locate an input by placeholder.
e. page.getByAltText() to locate an element, usually image, by its text alternative.
f. page.getByTitle() to locate an element by its title attribute.
g. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
import {test, expect} from "@playwright/test";

test("built-in locators", async({page})=>{

    //a. page.getByRole()
    await page.goto("https://www.amazon.in/");
    await page.getByRole("link", {name: "MX Player"}).click();
    await expect(page.getByRole("img", {name: "Click to visit Amazon Store"})).toBeVisible();

    //b. page.getByText()
    await page.goto("https://www.amazon.in/");
    await page.getByText("New Releases").click();
    await expect(page.getByText("Amazon Hot New Releases")).toContainText("Amazon Hot New Releases");

    //c. page.getByLabel()
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByText("Log in").click();
    await page.getByLabel("Email:").fill("Jeevan");
    await page.getByLabel("Password:").fill("Jeevan@123");
    await expect(page.getByRole("img", {name: "Tricentis Demo Web Shop"})).toBeVisible();

    //d. page.getByPlaceholder()
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByPlaceholder("Enter Name").fill("Jeevan");
    await page.getByPlaceholder("Enter EMail").fill("L P");
    await expect(page.getByText("For Selenium, Cypress & Playwright")).toContainText("For Selenium, Cypress & Playwright");

    //e. page.getByAltText()
    await page.goto("https://www.amazon.in/");
    await page.getByRole("link", {name: "MX Player"}).click();
    await expect(page.getByAltText("Click to visit Amazon Store")).toBeVisible();

    //f. page.getByTitle()
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_title");
    await page.getByTitle("Open Menu").click();

    //g. page.getByTestId()
    await page.goto("https://www.amazon.in/");
    await page.getByRole("link", {name: "MX Player"}).click();
    await expect(page.getByTestId("appnavbar_brandlogo")).toBeVisible();

});