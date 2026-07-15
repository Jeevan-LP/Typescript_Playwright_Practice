import {test, expect, Locator} from "@playwright/test";

test("Handling frames", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const noOfFrames=page.frames();
    console.log("Number of frames: ", noOfFrames.length);

    //Approach 1 using frame: it will allow key value pair - url and name only
    const frame1=page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1'});
    await frame1?.locator("[name='mytext1']").fill("Jeevan Gowda");//'?' means frame will return frame or null to avoid use '?'
    await page.waitForTimeout(2000);

    //Approach 2 using frameLocator: it will allow all types includes key value pair - url and name only
    const frame2=page.frameLocator("[src='frame_2.html']");
    await frame2.locator("[name='mytext2']").fill("Appu");
    await page.waitForTimeout(2000);

    //Nested frames - Approach 1 using frameLocator
    /*const frame3=page.frameLocator("[src='frame_3.html']");
    await frame3.locator("[name='mytext3']").fill("Gowda");
    await page.waitForTimeout(2000);

    const childFrame=frame3.frameLocator("[src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']");
    await childFrame.locator("[class='AB7Lab Id5V1']").last().check();
    await page.waitForTimeout(2000);
    await childFrame.locator("[aria-label='Other response']").fill("3rd frame");
    await page.waitForTimeout(2000);*/

    //Nested frames - Approach 2 using frame
    const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
    await frame3?.locator("[name='mytext3']").fill("Gowda");
    await page.waitForTimeout(2000);
    
    const childFrame=frame3?.childFrames();
    console.log("Number of child frames: ", childFrame?.length);

    if (childFrame && childFrame?.length > 0) {
     const radioButton=childFrame[0].locator("[class='AB7Lab Id5V1']");
     await expect(radioButton.last()).not.toBeChecked();
     await radioButton.last().check();
     await expect(radioButton.last()).toBeChecked();
     await page.waitForTimeout(2000);

     await childFrame[0].locator("[aria-label='Other response']").fill("3rd frame");
    }
    
    await page.waitForTimeout(2000);

    
});