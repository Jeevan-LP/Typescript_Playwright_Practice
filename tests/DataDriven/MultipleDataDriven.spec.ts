// import {test, expect} from "@playwright/test";
// import MultipleData from "../TestData/MultipleData.json";

// test("Multiple Data Driven", async({page})=>{

//     await page.locator("").fill(MultipleData.[0].);
//     await page.locator("").fill(MultipleData.CommanData[0].Type);
//     await page.locator("").fill(MultipleData.CommanData[0]["Sub Type"]);// if there is space in key value use '["Sub Type"]'
//     await page.locator("").fill(MultipleData.WorkOrderData[1].WO_Amount);
//     await page.locator("").fill(MultipleData.WorkOrderData[1].WO_QTY);
//     await page.locator("").fill(MultipleData.WorkOrderData[1].WO_Rate);
// })

// for (const common of MultipleData.CommanData) {
//     test(`Common Data - ${common.Company}`, async ({ page }) => {

//         await page.locator("").fill(common.Company);
//         await page.locator("").fill(common.Type);
//         await page.locator("").fill(common["Sub Type"]);

//     });
// }

// for (let i = 0; i < MultipleData.CommanData.length; i++) {

//     const common = MultipleData.CommanData[i];
//     const workOrder = MultipleData.WorkOrderData[i];

//     test(`Data Set ${i + 1}`, async ({ page }) => {

//         await page.locator("").fill(common.Company);
//         await page.locator("").fill(common.Type);
//         await page.locator("").fill(common["Sub Type"]);

//         await page.locator("").fill(workOrder.WO_Amount);
//         await page.locator("").fill(workOrder.WO_QTY);
//         await page.locator("").fill(workOrder.WO_Rate);

//     });
// }

// await page.locator("").fill(MultipleData[0].CommanData[0].Company);
// await page.locator("").fill(MultipleData[0].CommanData[0].Type);
// await page.locator("").fill(MultipleData[0].CommanData[0]["Sub Type"]);

// await page.locator("").fill(MultipleData[0].WorkOrderData[0].WO_Amount);
// await page.locator("").fill(MultipleData[0].WorkOrderData[0].WO_QTY);
// await page.locator("").fill(MultipleData[0].WorkOrderData[0].WO_Rate);

// const data = MultipleData[0];

// for (let i = 0; i < data.CommanData.length; i++) {

//     const common = data.CommanData[i];
//     const workOrder = data.WorkOrderData[i];

//     await page.locator("").fill(common.Company);
//     await page.locator("").fill(common.Type);
//     await page.locator("").fill(common["Sub Type"]);

//     await page.locator("").fill(workOrder.WO_Amount);
//     await page.locator("").fill(workOrder.WO_QTY);
//     await page.locator("").fill(workOrder.WO_Rate);
// }