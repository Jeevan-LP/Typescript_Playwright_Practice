import {test, expect} from "@playwright/test";

test("Handling screenshot", async({page})=>{

    //current page screenshot
    const timeStamp=Date.name;
    await page.goto("https://demowebshop.tricentis.com/");
    //await page.screenshot({path: `Screenshot/currentPageScreenshot${timeStamp}.png`});
    await page.screenshot({path: 'Screenshot/currentPageScreenshot' + timeStamp + '.png'});

    //full page screenshot
    await page.screenshot({path: 'Screenshot/fullPageScreenshot' + timeStamp + '.png', fullPage:true})

    //particular web element screenshot
    await page.locator("[alt='Tricentis Demo Web Shop']").screenshot({path: 'Screenshot/elementScreenshot' + timeStamp + '.png'});

});