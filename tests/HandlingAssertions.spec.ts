import {test, expect} from "@playwright/test";

test("Handling assertions", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

/*difference between Auto-retrying assertions and Non-retrying assertions

    Auto-retrying assertions                                           Non-retrying assertions
-------------------------------------------------------------------------------------------------------------
a. assertions will retry until the assertion passes             a. do not auto-retry
b. retrying assertions are async, so you must await them.       b. non-retrying assertions are not async, so you do not use await   
c. retrying assertions can't be lead to a flaky test.           c. non-retrying assertions can lead to a flaky test.    
d. These assertions allow to page and locator conditions        d. These assertions allow to test ot value conditions

expect(page)
| Assertion       | One-line definition                                              |
| --------------- | ---------------------------------------------------------------- |
| `toHaveURL()`   | Verifies that the current page URL matches the expected URL.     |
| `toHaveTitle()` | Verifies that the current page title matches the expected title. |

Locator Assertions
| Assertion           | One-line definition                                                            |
| ------------------- | ------------------------------------------------------------------------------ |
| `toBeVisible()`     | Verifies that the element is visible to the user.                              |
| `toBeHidden()`      | Verifies that the element is hidden or not visible.                            |
| `toBeEnabled()`     | Verifies that the element is enabled and can be interacted with.               |
| `toBeDisabled()`    | Verifies that the element is disabled and cannot be interacted with normally.  |
| `toBeEditable()`    | Verifies that the element can be edited, such as an enabled input or textarea. |
| `toBeChecked()`     | Verifies that a checkbox, radio button, or switch is checked.                  |
| `toHaveText()`      | Verifies that the element has the expected text content.                       |
| `toContainText()`   | Verifies that the element contains the specified text.                         |
| `toHaveValue()`     | Verifies that an input, textarea, or select has the expected value.            |
| `toHaveAttribute()` | Verifies that the element has the specified attribute and expected value.      |
| `toHaveClass()`     | Verifies that the element has the expected CSS class.                          |
| `toHaveCSS()`       | Verifies that the element has the expected CSS property and value.             |
| `toHaveId()`        | Verifies that the element has the expected `id` attribute.                     |
| `toHaveCount()`     | Verifies the number of elements matching the locator.                          |

Generic / Value Assertions
| Assertion         | One-line definition                                                       |
| ----------------- | ------------------------------------------------------------------------- |
| `toBe()`          | Verifies that the actual value is strictly equal to the expected value.   |
| `toEqual()`       | Verifies that the actual value is deeply equal to the expected value.     |
| `toContain()`     | Verifies that a string or array contains the specified value.             |
| `toHaveLength()`  | Verifies the length of a string, array, or other length-supported value.  |
| `toBeTruthy()`    | Verifies that the value evaluates to `true` in a Boolean context.         |
| `toBeFalsy()`     | Verifies that the value evaluates to `false` in a Boolean context.        |
| `toBeNull()`      | Verifies that the value is exactly `null`.                                |
| `toBeUndefined()` | Verifies that the value is exactly `undefined`.                           |
| `toBeDefined()`   | Verifies that the value is not `undefined`.                               |
| `toMatch()`       | Verifies that a string matches a specified regular expression or pattern. |

*/

    //Hard assertion--if one defined assertion is failed then, remaining all assertion will be failed
    //Auto-retrying assertions
    await expect(page).toHaveTitle('Demo Web Shop');
    await expect(page.locator("[class='title'] strong").nth(3)).toHaveText('Newsletter')

    //Non-retrying assertions
    expect(await page.locator("[class='ico-register']").innerText()).toContain('Register');
    expect(await page.locator("[class='list']>li>a").count()).toBe(8);

    //Negating matchers
    await expect(page).not.toHaveTitle('Demo Web Shop1');
    expect(await page.locator("[class='ico-register']").innerText()).not.toContain('Register1');

    //Soft assertion--if one defined assertion is failed then, remaining all assertion will be passed
    //Auto-retrying assertions
    await expect.soft(page).toHaveTitle('Demo Web Shop1');
    await expect.soft(page.locator("[class='title'] strong").nth(3)).toHaveText('Newsletter')

    //Non-retrying assertions
    expect.soft(await page.locator("[class='ico-register']").innerText()).toContain('Register');
    expect.soft(await page.locator("[class='list']>li>a").count()).toBe(8);

    //Negating matchers
    await expect.soft(page).not.toHaveTitle('Demo Web Shop1');
    expect.soft(await page.locator("[class='ico-register']").innerText()).not.toContain('Register1');
    await page.waitForTimeout(5000);

    /*hard assertion
    await expect(page).toHaveTitle('Automation Testing Practice');//auto retry page
    await expect(page.locator("#name")).toBeVisible();//auto retry locator
    expect(await page.getByText("START").innerText()).toEqual("START");//non-retry
    await expect(page.getByText("START")).not.toHaveText("STOP");//negative matches

    //soft assertion
    await expect.soft(page).toHaveTitle('Automation Testing Practice');//auto retry page
    await expect.soft(page.locator("#name")).toBeVisible();//auto retry locator
    expect.soft(await page.getByText("START").innerText()).toEqual("START");//non-retry
    await expect.soft(page.getByText("START")).not.toHaveText("STOP");//negative matches*/


});
