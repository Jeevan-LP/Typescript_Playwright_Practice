# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingCookies.spec.ts >> Handling Cookies
- Location: tests\HandlingCookies.spec.ts:3:5

# Error details

```
Error: expect(received).toBeFalsy()

Received: true
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test("Handling Cookies", async({browser})=>{
  4  | 
  5  |     /*
  6  |     In Playwright, cookies are managed at the BrowserContext level. I can retrieve cookies using context.cookies(), 
  7  |     add cookies using context.addCookies(), and remove cookies using context.clearCookies(). In real-time automation, 
  8  |     cookies are commonly used for session and authentication handling. I can also use storageState() to save and reuse 
  9  |     authentication state across test cases, which avoids performing the login operation repeatedly.
  10 |     */
  11 |     const context = await browser.newContext();
  12 |     const page = await context.newPage();
  13 | 
  14 |     //adding cookies to the context before navigating to the page. 
  15 |     //This is useful for setting up authentication or other state before the page loads.
  16 |     context.addCookies([{
  17 |         name: "Sudo Cookies",
  18 |         value: "Sudo Cookies Value",
  19 |         httpOnly: true,
  20 |         url: "https://www.saucedemo.com/"
  21 |     }]);
  22 | 
  23 |     await page.goto("https://www.saucedemo.com/");
  24 | 
  25 |     //Retrieving cookies from the context after navigating to the page.
  26 |     let allCookiesBefore=await context.cookies();
  27 |     console.log("Before clear cookies: ", allCookiesBefore);
  28 | 
  29 |     //Finding a specific cookie by name from the retrieved cookies.
  30 |     const foundCookie = allCookiesBefore.find((cookies=> cookies.name==="Sudo Cookies"));
  31 |     console.log("found cookies is: ", foundCookie?.name);
  32 |     expect(foundCookie?.value).toEqual("Sudo Cookies Value");
  33 | 
  34 |     //Saving the current state of the context, including cookies, to a file.
  35 |     await context.storageState({path: "sudoCookies.json"});
  36 | 
  37 |     //Deleting a specific cookie by name from the context.
  38 |     /*let deletedCookies = await context.clearCookies({
  39 |         name: 'Sudo Cookies',
  40 |         //domain: 'example.com'
  41 |     });
  42 |     console.log("Deleted cookies: ", deletedCookies);*/
  43 | 
  44 |     // Verify deletion of a specific cookie by name from the context.
  45 |     let deletionCookies=await context.cookies();
  46 |     let isDeleted = deletionCookies.some((cookies=> cookies.name==="Sudo Cookies"));
  47 |     console.log("Cookies after deletion: ", isDeleted);
> 48 |     expect(isDeleted).toBeFalsy();
     |                       ^ Error: expect(received).toBeFalsy()
  49 | 
  50 |     //Deleting all cookies from the context.
  51 |     await context.clearCookies();
  52 |     let allCookiesAfter=await context.cookies();
  53 |     console.log("After clear cookies: ", allCookiesAfter);
  54 | 
  55 | });
```