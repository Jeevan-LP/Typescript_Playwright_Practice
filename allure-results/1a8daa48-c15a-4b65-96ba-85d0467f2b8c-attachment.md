# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingAuthentication.spec.ts >> Create Authentication
- Location: tests\HandlingAuthentication.spec.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('[role=\'menuitem\']') resolved to 4 elements:
    1) <a href="#" role="menuitem" class="oxd-userdropdown-link">About</a> aka getByRole('menuitem', { name: 'About' })
    2) <a role="menuitem" class="oxd-userdropdown-link" href="/web/index.php/help/support">Support</a> aka getByRole('menuitem', { name: 'Support' })
    3) <a role="menuitem" class="oxd-userdropdown-link" href="/web/index.php/pim/updatePassword">Change Password</a> aka getByRole('menuitem', { name: 'Change Password' })
    4) <a role="menuitem" class="oxd-userdropdown-link" href="/web/index.php/auth/logout">Logout</a> aka getByRole('menuitem', { name: 'Logout' })

Call log:
  - waiting for locator('[role=\'menuitem\']')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: mandaUdhay userJUser
              - generic [ref=e128]: 
            - menu [ref=e129]:
              - listitem [ref=e130]:
                - menuitem "About" [ref=e131] [cursor=pointer]
              - listitem [ref=e132]:
                - menuitem "Support" [ref=e133] [cursor=pointer]
              - listitem [ref=e134]:
                - menuitem "Change Password" [ref=e135] [cursor=pointer]
              - listitem [ref=e136]:
                - menuitem "Logout" [ref=e137] [cursor=pointer]
      - navigation "Topbar Menu" [ref=e139]:
        - list [ref=e140]:
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e146]:
      - generic [ref=e148]:
        - generic [ref=e150]:
          - generic [ref=e151]: 
          - paragraph [ref=e152]: Time at Work
        - separator [ref=e153]
      - generic [ref=e157]:
        - generic [ref=e159]:
          - generic [ref=e160]: 
          - paragraph [ref=e161]: My Actions
        - separator [ref=e162]
        - generic [ref=e164]:
          - img "No Content"
          - paragraph [ref=e165]: No Pending Actions to Perform
      - generic [ref=e167]:
        - generic [ref=e169]:
          - generic [ref=e170]: 
          - paragraph [ref=e171]: Quick Launch
        - separator [ref=e172]
      - generic [ref=e176]:
        - generic [ref=e178]:
          - generic [ref=e179]: 
          - paragraph [ref=e180]: Buzz Latest Posts
        - separator [ref=e181]
      - generic [ref=e185]:
        - generic [ref=e186]:
          - paragraph [ref=e191]: Employees on Leave Today
          - generic [ref=e192] [cursor=pointer]: 
        - separator [ref=e193]
      - generic [ref=e197]:
        - generic [ref=e199]:
          - generic [ref=e200]: 
          - paragraph [ref=e201]: Employee Distribution by Sub Unit
        - separator [ref=e202]
      - generic [ref=e206]:
        - generic [ref=e208]:
          - generic [ref=e209]: 
          - paragraph [ref=e210]: Employee Distribution by Location
        - separator [ref=e211]
    - generic [ref=e214]:
      - paragraph [ref=e215]: OrangeHRM OS 5.9
      - paragraph [ref=e216]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e217] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Create Authentication', async ({ browser }) => {
  4  | 
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
  7  | 
  8  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  9  | 
  10 |     await page.getByPlaceholder('Username').fill('Admin');
  11 |     await page.getByPlaceholder('Password').fill('admin123');
  12 |     await page.locator("[type='submit']").click();
  13 | 
  14 |     // Verify successful login
  15 |     await expect(page).toHaveTitle('OrangeHRM');
  16 | 
  17 |     // Save authenticated state BEFORE logout
  18 |     await context.storageState({path: 'openSource.json'});
  19 | 
  20 |     await page.locator("[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
> 21 |     await page.locator("[role='menuitem']").click();
     |                                             ^ Error: locator.click: Error: strict mode violation: locator('[role=\'menuitem\']') resolved to 4 elements:
  22 | 
  23 |     await context.close();
  24 | });
  25 | 
  26 | 
  27 | test('Using Authentication', async ({ browser }) => {
  28 | 
  29 |     // Load previously saved authentication state
  30 |     const context = await browser.newContext({storageState: 'openSource.json'});
  31 | 
  32 |     const page = await context.newPage();
  33 | 
  34 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  35 | 
  36 |     await expect(page).toHaveTitle('OrangeHRM');
  37 | 
  38 |     // Logout
  39 |     await page.locator("[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
  40 |     await page.locator("[role='menuitem']").click();
  41 | 
  42 |     await context.close();
  43 | });
```