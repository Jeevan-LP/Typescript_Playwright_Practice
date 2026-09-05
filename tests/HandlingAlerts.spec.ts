import {test, expect, Locator} from "@playwright/test";

test.only("javaScript alert", async({page})=>{
    
    //1. javaScript alert
    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("-------------javaScript alert---------------");
    page.on('dialog', (dialog)=>{
        
        console.log("Alert type is: ", dialog.type());
        expect(dialog.type()).toBe('alert');
        console.log("Alert message is: ", dialog.message());

        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();
        
    });

    await page.locator("//button[text()='Simple Alert']").click();

    await page.waitForTimeout(3000);

    
});

test("Confirmation Alert", async({page})=>{
    
    //2. Confirmation alert
    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("-------------Confirmation alert---------------");
    page.on('dialog', (dialog)=>{
        
        console.log("Alert type is: ", dialog.type());
        expect(dialog.type()).toBe('confirm');
        console.log("Alert message is: ", dialog.message());
        expect(dialog.message()).toContain('Press a button!');
        //dialog.accept();
        dialog.dismiss();
        
    });

    await page.locator("//button[text()='Confirmation Alert']").click();
    /*const ok=await page.locator("#demo").innerText();
    console.log("Clicked ok button: ", ok);
    expect(ok).toBe('You pressed OK!');*/

    const cancel=await page.locator("#demo").innerText();
    console.log("Clicked cancel button: ", cancel);
    expect(cancel).toBe('You pressed Cancel!');
    await page.waitForTimeout(3000);
});

test("Prompt Alert", async({page})=>{
    
    //3. Prompt alert
    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("-------------Prompt alert---------------");
    page.on('dialog', (dialog)=>{
        
        console.log("Alert type is: ", dialog.type());
        expect(dialog.type()).toBe('prompt');
        console.log("Alert message is: ", dialog.message());
        expect(dialog.message()).toContain('Please enter your name:');
        console.log("Default Value is: ", dialog.defaultValue());
        dialog.accept("Jeevan Gowda");
        //dialog.dismiss();
        
    });

    await page.locator("//button[text()='Prompt Alert']").click();
    const okValue=await page.locator("#demo").innerText();
    console.log("Clicked ok button: ", okValue);
    expect(okValue).toBe('Hello Jeevan Gowda! How are you today?');

    /*const cancelValue=await page.locator("#demo").innerText();
    console.log("Clicked cancel button: ", cancelValue);
    expect(cancelValue).toBe('User cancelled the prompt.');*/
    await page.waitForTimeout(3000);
});