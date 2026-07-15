import { test, chromium, expect } from "@playwright/test";

test("Keyboard actions", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");

  //Approach 1
  await page.locator("#name").fill("Jeevan Gowda");
  await page.waitForTimeout(1000);

  page.keyboard.press("Control+A");
  await page.waitForTimeout(1000);

  page.keyboard.press("Control+C");
  await page.waitForTimeout(1000);

  page.keyboard.press("Tab");
  await page.waitForTimeout(1000);

  page.keyboard.press("Control+V");
  await page.waitForTimeout(1000);

  /*for(let j=0;j<20; j++){
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(500);
  }
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowLeft");
  await page.keyboard.press("ArrowRight");*/

  //Approach 2
  /*await page.locator("#name").fill("Jeevan Gowda");
  await page.waitForTimeout(1000);

  page.keyboard.down("Control");
  page.keyboard.press("A");
  page.keyboard.up("Control");
  await page.waitForTimeout(1000);

  page.keyboard.down("Control");
  page.keyboard.press("C");
  page.keyboard.up("Control");
  await page.waitForTimeout(1000);

  page.keyboard.press("Tab");
  await page.waitForTimeout(1000);

  page.keyboard.down("Control");
  page.keyboard.press("V");
  page.keyboard.up("Control");
  await page.waitForTimeout(1000);*/

  });
