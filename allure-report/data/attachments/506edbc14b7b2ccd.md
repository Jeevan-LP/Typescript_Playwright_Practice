# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Reports\HandlingAllure-Reports.spec.ts >> Demo group test >> Subscribe
- Location: tests\Reports\HandlingAllure-Reports.spec.ts:51:9

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Jeevan"
Received: "Demo Web Shop"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "Demo Web Shop"

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Popular tags
- list:
  - listitem:
    - link "apparel":
      - /url: /producttag/4/apparel
  - listitem:
    - link "awesome":
      - /url: /producttag/8/awesome
  - listitem:
    - link "book":
      - /url: /producttag/10/book
  - listitem:
    - link "camera":
      - /url: /producttag/13/camera
  - listitem:
    - link "cell":
      - /url: /producttag/12/cell
  - listitem:
    - link "compact":
      - /url: /producttag/9/compact
  - listitem:
    - link "computer":
      - /url: /producttag/6/computer
  - listitem:
    - link "cool":
      - /url: /producttag/3/cool
  - listitem:
    - link "digital":
      - /url: /producttag/16/digital
  - listitem:
    - link "jeans":
      - /url: /producttag/14/jeans
  - listitem:
    - link "jewelry":
      - /url: /producttag/11/jewelry
  - listitem:
    - link "nice":
      - /url: /producttag/1/nice
  - listitem:
    - link "shirt":
      - /url: /producttag/5/shirt
  - listitem:
    - link "shoes":
      - /url: /producttag/7/shoes
  - listitem:
    - link "TCP":
      - /url: /producttag/19/tcp
- link "View all":
  - /url: /producttag/all
- strong: Newsletter
- text: Thank you for signing up! A verification email has been sent. We appreciate your interest.
- strong: Community poll
- strong: Do you like nopCommerce?
- list:
  - listitem:
    - radio "Excellent"
    - text: Excellent
  - listitem:
    - radio "Good"
    - text: Good
  - listitem:
    - radio "Poor"
    - text: Poor
  - listitem:
    - radio "Very bad"
    - text: Very bad
- button "Vote"
- link:
  - /url: https://academy.tricentis.com
- img
- text: Tricentis Academy Prev Next
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- text: 1 2
- heading "Welcome to our store" [level=2]
- paragraph: Welcome to the new Tricentis store!
- paragraph: Feel free to shop around and explore everything.
- strong: Featured products
- link "Picture of $25 Virtual Gift Card":
  - /url: /25-virtual-gift-card
  - img "Picture of $25 Virtual Gift Card"
- heading "$25 Virtual Gift Card" [level=2]:
  - link "$25 Virtual Gift Card":
    - /url: /25-virtual-gift-card
- text: "25.00"
- button "Add to cart"
- link "Picture of 14.1-inch Laptop":
  - /url: /141-inch-laptop
  - img "Picture of 14.1-inch Laptop"
- heading "14.1-inch Laptop" [level=2]:
  - link "14.1-inch Laptop":
    - /url: /141-inch-laptop
- text: "1590.00"
- button "Add to cart"
- link "Picture of Build your own cheap computer":
  - /url: /build-your-cheap-own-computer
  - img "Picture of Build your own cheap computer"
- heading "Build your own cheap computer" [level=2]:
  - link "Build your own cheap computer":
    - /url: /build-your-cheap-own-computer
- text: "800.00"
- button "Add to cart"
- link "Picture of Build your own computer":
  - /url: /build-your-own-computer
  - img "Picture of Build your own computer"
- heading "Build your own computer" [level=2]:
  - link "Build your own computer":
    - /url: /build-your-own-computer
- text: "1200.00"
- button "Add to cart"
- link "Picture of Build your own expensive computer":
  - /url: /build-your-own-expensive-computer-2
  - img "Picture of Build your own expensive computer"
- heading "Build your own expensive computer" [level=2]:
  - link "Build your own expensive computer":
    - /url: /build-your-own-expensive-computer-2
- text: "1800.00"
- button "Add to cart"
- link "Picture of Simple Computer":
  - /url: /simple-computer
  - img "Picture of Simple Computer"
- heading "Simple Computer" [level=2]:
  - link "Simple Computer":
    - /url: /simple-computer
- text: "800.00"
- button "Add to cart"
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {test,Page,Browser,BrowserContext,expect} from "@playwright/test";
  2  | import { exec } from "node:child_process";
  3  | let testPage: Page;
  4  | /*
  5  | step: 1 Install allure report
  6  | for locally: npm install -d allure-playwright
  7  | for globally: npm install -D allure-commandline
  8  | 
  9  | step: 2 Check allure report version
  10 | allure --version
  11 | 
  12 | step: 3 adding allure in playwright.config.ts file
  13 | a. export default defineConfig({
  14 | 	reporter:'allure-playwright'
  15 | });
  16 | b. on running test automatically allure-results folder will created
  17 | 
  18 | step: 4  Generate allure report
  19 | npx allure generate ./allure-results
  20 | 
  21 | step: 5 Open allure report 
  22 | npx allure open ./allure-report
  23 | 
  24 | note: directly use: npx allure generate ./allure-results -o ./allure-report
  25 | 
  26 | once report generated need clean to open onther report
  27 | npx allure generate ./allure-results -o ./allure-report --clean
  28 | */
  29 | 
  30 | test.beforeAll("Launching Browser", async({browser})=>{
  31 |     testPage=await browser.newPage();
  32 |     await testPage.goto("https://demowebshop.tricentis.com/");
  33 | });
  34 | 
  35 | test.afterAll("Closing Browser", async({browser})=>{
  36 |     await testPage.close();
  37 | });
  38 | 
  39 | test.beforeEach("Login to Application", async()=>{
  40 |     await testPage.locator(".ico-login").click();
  41 |     await testPage.locator("#Email").fill("jeevangowda016@gmail.com");
  42 |     await testPage.locator("#Password").fill("Appu@123");
  43 |     await testPage.locator("[value='Log in']").click();
  44 | })
  45 | 
  46 | test.beforeEach("Logout to Application", async()=>{
  47 |     await testPage.locator(".ico-logout").click();
  48 | })
  49 | 
  50 | test.describe("Demo group test", async()=>{
  51 |     test("Subscribe", async()=>{
  52 |             await testPage.locator("#newsletter-email").fill("jeevangowda016@gmail.com");
  53 |             await testPage.locator("#newsletter-subscribe-button").click();
> 54 |             await expect(testPage).toHaveTitle("Jeevan")
     |                                    ^ Error: expect(page).toHaveTitle(expected) failed
  55 |     })
  56 | 
  57 |     test("Poll Vote", async()=>{
  58 |             await testPage.locator("#pollanswers-2").check();
  59 |             await testPage.locator("#vote-poll-1").click();
  60 |     })
  61 | });
```