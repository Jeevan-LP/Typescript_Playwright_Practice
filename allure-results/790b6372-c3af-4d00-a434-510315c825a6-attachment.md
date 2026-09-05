# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Para Bank\paraBankTest.spec.ts >> Para Bank Login Test
- Location: tests\Para Bank\paraBankTest.spec.ts:6:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://parabank.parasoft.com/parabank/openaccount.htm
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/openaccount.htm", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: parabank.parasoft.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test";
  2  | import {ParaBankPOM} from "./paraBankPOM";
  3  | import userData from "./userData.json";
  4  | 
  5  | 
  6  | test("Para Bank Login Test", async({page})=>{
  7  | 
> 8  |     await page.goto("https://parabank.parasoft.com/parabank/openaccount.htm");
     |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://parabank.parasoft.com/parabank/openaccount.htm
  9  |     const pbPOM=new ParaBankPOM(page);
  10 |     
  11 |     for(let data of userData){
  12 | 
  13 |         await pbPOM.bankLogin(data.Username, data.Password);
  14 |         await pbPOM.bankAccountOpen(data.AccountType, data.AccountAmount);
  15 |         //const newAccountId = await page.locator("#newAccountId").innerText();
  16 |         //console.log("New Account ID: ",parseInt(newAccountId));
  17 |         //expect(parseInt(newAccountId)).toBeGreaterThan(100);
  18 |         await pbPOM.bankLogout();
  19 | 
  20 |     }
  21 | 
  22 |     await page.close();
  23 | });
```