import {test, expect, Locator, chromium} from "@playwright/test";

test("Mouse actions", async()=>{
    
    const browser=await chromium.launch();
    const context =await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    //click method
    await page.getByText('START').click();
    await page.waitForTimeout(2000);

    //mouse Hover method
    await page.getByText('Point Me').hover();
    await page.waitForTimeout(2000);

    //double click method
    await page.getByText('Copy Text').dblclick();
    await page.waitForTimeout(2000);

    //dragAndDrop click method
    await page.dragAndDrop('#draggable', '#droppable');
    await page.waitForTimeout(2000);
 
    //slider
    const right = page.locator("#slider-range span").last();

    const box = await right.boundingBox();

    if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 - 30, box.y + box.height / 2);
    await page.mouse.up();
    }
    await page.waitForTimeout(2000);

    //Scroll operation
    await page.mouse.wheel(0, 5000);
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, -5000);
    await page.waitForTimeout(2000);

    const submitBtn=page.locator('#btn3');
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();
    await page.waitForTimeout(2000);

    await page.evaluate("window.scrollBy(0, -5000)");
    await page.waitForTimeout(2000);

    //await page.mouse.move(2000, 0);
	//await page.mouse.click(300, 400);
    //await page.waitForTimeout(2000);

    //right click
    const page1=await context.newPage();
    await page1.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page1.waitForLoadState();
    await page1.locator("//span[text()='right click me']").click({button: 'right'});
    await page.waitForTimeout(2000);
});