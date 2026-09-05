import { test, chromium, expect } from "@playwright/test";

test("single and multiple Upload file only if present in input tag", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");

  //single file upload
  await page.locator("#singleFileInput").setInputFiles("tests/Files/State Scholarship Portal.pdf");

  await page.waitForTimeout(2000);
  //multiple file upload
  /*const multiple:string[]=['tests/Files/State Scholarship Portal.pdf', 
    'tests/Files/CHINGARI.docx'];
  await page.locator("#multipleFilesInput").setInputFiles(multiple);*/

  await page.locator("#multipleFilesInput").setInputFiles(['tests/Files/State Scholarship Portal.pdf', 
    'tests/Files/CHINGARI.docx']);

  expect(page.locator("#multipleFilesInput")).toBeAttached();

  await page.waitForTimeout(2000);

});

test("single and multiple Upload file only if not present in input tag", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");

  //single file upload
  const [singleFile]=await Promise.all([page.waitForEvent("filechooser"), page.locator("#singleFileInput").click()]);
  singleFile.setFiles("tests/Files/State Scholarship Portal.pdf");

  //const [singleFile]=await Promise.all([page.waitForEvent("filechooser").then(file=> file.setFiles("tests/Files/State Scholarship Portal.pdf")),
  //page.locator("#singleFileInput").click()]);
  
  await page.waitForTimeout(2000);

  //multiple file upload
  const [multipleFile]=await Promise.all([page.waitForEvent("filechooser"), page.locator("#multipleFilesInput").click()]);
  multipleFile.setFiles(['tests/Files/State Scholarship Portal.pdf', 
    'tests/Files/CHINGARI.docx']);

  expect(page.locator("#multipleFilesInput")).toBeAttached();

  await page.waitForTimeout(2000);

  });

  test.only("File download", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://the-internet.herokuapp.com/download");

    const [downloadFile]=await Promise.all([page.waitForEvent('download'), page.getByText("testing.pdf").click()]);
    await downloadFile.saveAs('Downloads/' + downloadFile.suggestedFilename());
    console.log(downloadFile.suggestedFilename());

  });
