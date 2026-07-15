/*
Xpath Axes - define the relationship between the current node and nodes in the cocument. They allow 
you to navigate through elements and attributes in a XML documents

primary Xpaths axes:
a. self
b. parent - only single parent
c. child - only single child
d. ancestor - parent and grand parent
e. descendant - child and grand child
f. following - after element sibling and its childs
g. preceding - before element sibling and its childs
h. following - sibling - after element sibling only 
i. preceding - sibling - before element sibling only
*/

import {test, expect, Locator} from "@playwright/test";

test("Xpaths by axes", async ({page})=>{

    //a. self
    await page.goto("https://testautomationpractice.blogspot.com/");
    const selfText=await page.locator("//td[text()='Learn Selenium']/self::td").textContent();
    console.log("self Xpaths by axes: ", selfText);

    //b. parent
    const parentText=await page.locator("//td[text()='Learn Selenium']/parent::tr").textContent();
    console.log("parent Xpaths by axes: ", parentText);

    //c. child
    const childAxes=page.locator("//table[@name='BookTable']//tbody/child::tr");
    await expect(childAxes).toHaveCount(7);

    //d. ancestor
    const ancestorAxes=page.locator("//td[text()='Master In Selenium']/ancestor::table");
    await expect(ancestorAxes).toHaveAttribute("name", "BookTable");

    //e. descendant 
    const descendantAxes=page.locator("//table[@name='BookTable']/descendant::td");
    await expect(descendantAxes).toHaveCount(24);

    //f. following
    const followingAxes=page.locator("//table[@name='BookTable']/following::td");
    await expect(followingAxes).toHaveCount(102);

    //g. following - sibling
    const followingSiblingAxes=page.locator("//td[text()='Animesh']/following-sibling::td");
    await expect(followingSiblingAxes).toHaveCount(2);

    //h. preceding
    const precedingAxes=page.locator("//table[@name='BookTable']/preceding::div");
    await expect(precedingAxes).toHaveCount(132);

    //i. preceding - sibling
    const precedingSiblingAxes=page.locator("//td[text()='Animesh']/preceding-sibling::td");
    await expect(precedingSiblingAxes).toHaveCount(1);

})