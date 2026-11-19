# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingWindows\HandlingMultipleTabs.spec.ts >> Multiple tabs Approach 1
- Location: tests\HandlingWindows\HandlingMultipleTabs.spec.ts:11:5

# Error details

```
Error: locator.type: Target page, context or browser has been closed
Call log:
  - waiting for locator('[title=\'search\']').first()

```

# Test source

```ts
  1  | import {test, expect, chromium} from "@playwright/test";
  2  | /*
  3  | Interview answer
  4  | 
  5  | "In Playwright, both tabs and windows are represented by Page objects. For a newly opened tab or window, 
  6  | I use context.waitForEvent('page'). If it is a popup opened from the current page, I can use page.waitForEvent('popup'). 
  7  | I normally combine the event listener with the action using Promise.all() so that I don't miss the event. 
  8  | For multiple existing tabs or windows, I use context.pages() and identify the required Page object based on its URL, 
  9  | title, or other properties."
  10 | */
  11 | test("Multiple tabs Approach 1", async({browser})=>{
  12 | 
  13 |     //const browser=await chromium.launch();
  14 |     const context =await browser.newContext();
  15 |     const page=await context.newPage();
  16 | 
  17 |     await page.goto("https://testautomationpractice.blogspot.com/");
  18 | 
  19 |     //Approach 1
  20 |     //parent tab
  21 |     console.log("Parent tab url: ", page.url());
  22 |     await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
  23 |     await page.locator("#name").type("Jeevan Gowda");
  24 | 
  25 |     //child tab
  26 |     const [childTab]=await Promise.all([context.waitForEvent("page"), 
  27 |                                             page.locator("[onclick='myFunction()']").click()]);
  28 |     //some time page is not load or visible it may return void so using '[]' like [childTab]
  29 |     console.log("Child tab url: ", childTab.url());
  30 |     await expect(childTab).toHaveURL("https://www.pavantestingtools.com/");
> 31 |     await childTab.locator("[title='search']").first().type("Appu Gowda");
     |                                                        ^ Error: locator.type: Target page, context or browser has been closed
  32 | 
  33 |     //again parent tab
  34 |     await page.bringToFront();
  35 |     await page.locator("#Wikipedia1_wikipedia-search-input").type("Gowda")
  36 |     await page.waitForTimeout(2000);
  37 | 
  38 |     //again child tab
  39 |     await childTab.bringToFront();
  40 |     await childTab.waitForTimeout(2000);
  41 | 
  42 | })
  43 | 
  44 | test.only("Multiple tabs Approach 2", async()=>{
  45 | 
  46 |     const browser=await chromium.launch();
  47 |     const context =await browser.newContext();
  48 |     const parentpage=await context.newPage();
  49 | 
  50 |     await parentpage.goto("https://testautomationpractice.blogspot.com/");
  51 | 
  52 |     //Approach 2
  53 |     //parent tab
  54 |     console.log("Parent tab url: ", parentpage.url());
  55 |     await expect(parentpage).toHaveURL("https://testautomationpractice.blogspot.com/");
  56 |     await parentpage.locator("#name").type("Jeevan Gowda");
  57 | 
  58 |     const [childTab]=await Promise.all([context.waitForEvent("page"), 
  59 |                                             parentpage.locator("[onclick='myFunction()']").click()]);
  60 |     //some time page is not load or visible it may return void so using '[]' like [childTab]
  61 | 
  62 |     const allTabs=context.pages();//once all pages loaded then capture all pages
  63 |     console.log("Number of tabs: ", allTabs.length);
  64 | 
  65 |     //child tab
  66 |     //const parentpage=allTabs[0];
  67 |     const childPage=allTabs[1];
  68 |     console.log("Child tab url: ", childPage.url());
  69 |     await expect(childPage).toHaveURL("https://www.pavantestingtools.com/");
  70 |     await childPage.locator("[title='search']").first().type("Appu Gowda");
  71 |     await parentpage.waitForTimeout(2000);
  72 | 
  73 |     //again parent tab
  74 |     await parentpage.bringToFront();
  75 |     await parentpage.locator("#Wikipedia1_wikipedia-search-input").type("Gowda")
  76 |     await parentpage.waitForTimeout(5000);
  77 | 
  78 | })
```