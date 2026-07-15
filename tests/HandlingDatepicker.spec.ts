import {test, expect, Locator, Page} from "@playwright/test"; 

async function datePicker1(page:Page, date:string, month:string, year:string, IsFuture:boolean){

    while(true){
        const monthText=await page.locator(".ui-datepicker-month").textContent();
        const yearText=await page.locator(".ui-datepicker-year").textContent();

        if(monthText===month && yearText===year){
            break;
        }
            if(IsFuture==true){
                await page.locator("a[title='Next']").click();
            }
            else{
                await page.locator("a[title='Prev']").click();
            }  
    }
    const dateCount=page.locator(".ui-datepicker-calendar td");

    for(let j=0; j< await dateCount.count(); j++){
        const dt=await dateCount.nth(j).textContent();
            if(dt==date){
                await dateCount.nth(j).click();
                break;
            }
    }
}

test("JQuerry date picker", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const datePickerInput:Locator=page.locator("#datepicker");
    await expect(datePickerInput).toBeVisible();
    await datePickerInput.click();
    //await datePicker.fill("27/09/2026"); - if element is in input tag then, directly use fill method

    //await datePicker1(page, '27', 'September', '2025', false);//past
    await datePicker1(page, '27', 'September', '2027', true);//future

})

//--------------------------------------------datePicker2------------------------------------------------------------
async function datePicker2(page: Page, date: string, month: string, year: string) {
    
    const monthDropdown = page.locator(".ui-datepicker-month");
    const yearDropdown = page.locator(".ui-datepicker-year");

    // Select month and year directly
    await monthDropdown.selectOption(month);
    await yearDropdown.selectOption(year);

        const dateCount=page.locator(".ui-datepicker-calendar>tbody a");

        for(let j=0; j< await dateCount.count(); j++){
            const dt=await dateCount.nth(j).textContent();
                if(dt==date){
                await dateCount.nth(j).click();
                break;
            }
        }
}
test.only("JQuery date picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const datePickerInput = page.locator("input[name='SelectedDate']");
    await expect(datePickerInput).toBeVisible();

    await datePickerInput.click();

    await datePicker2(page, "27", "Sep", "2026");
});