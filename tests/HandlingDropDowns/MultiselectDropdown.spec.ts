import {test, expect, Locator} from "@playwright/test";

test("Multi select drop down", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const AllList:Locator=page.locator("#colors");
    //await AllList.selectOption(['Blue', 'White']); //by text
    //await AllList.selectOption([{value:'blue'}, {value:'red'}, {value:'green'}]); //by value
    //await AllList.selectOption([{index:2}, {index:3}, {index:1}]); //by index
    await AllList.selectOption([{label:'Blue'}, {label:'White'}]); //by label

    await page.waitForTimeout(3000);
})

test("Check sorted drop down array", async({page})=>{
 
    await page.goto("https://testautomationpractice.blogspot.com/");

    const  AllList:Locator=page.locator("//select[@id='colors']/option");
    //const AllList:Locator=page.locator("//select[@id='animals']/option");
    
    const OriginalList:String[]=(await AllList.allTextContents()).map((Element)=>{ return Element.trim()});
    //console.log("Origonal array list: ", OriginalList);

    const TargetList:String[]=OriginalList;
    console.log("Target array list: ", TargetList);

    const SortedList:String[]=OriginalList.sort();
    console.log("Sorted array list: ", SortedList);
    /*
    Target array list:  [
        'Red',   'Blue',
        'Green', 'Yellow',
        'Red',   'White',
        'Green'
        ]
        Sorted array list:  [
        'Blue',   'Green',
        'Green',  'Red',
        'Red',    'White',
        'Yellow'
        ]
    */

    expect(TargetList).toEqual(SortedList);

})

test.only("Duplicate drop down array", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    const  AllDropdownList:Locator=page.locator("//select[@id='colors']/option");
    const list = await AllDropdownList.allTextContents();

    const Removingduplicate=new Set(list);
    console.log("Removing duplicate elements from array: ", Removingduplicate);

    const onlyDuplicate = list.filter((element, index) =>
        list.indexOf(element) !== index
    );

    console.log("Only duplicate elements from array: ", onlyDuplicate);

})