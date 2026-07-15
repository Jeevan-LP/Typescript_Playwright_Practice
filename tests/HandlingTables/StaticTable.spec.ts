import {test, expect, Locator} from "@playwright/test"; 

test("Static Table", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Verify the table is visible - Strature of table
    /*
    table--->
            tbody--->
                    tr--->
                         th--->
                         td--->
    table: Entire table
    tbody: Table body
    tr: Table row
    th: Table header cell
    td: Table data cell
    */
    const bookTable: Locator = page.locator("table[name='BookTable']");
    await expect(bookTable).toBeVisible();

    //2. Verify the number of rows in the table
    const rows = page.locator("table[name='BookTable']>tbody tr");
    const noOfRows:Number=await rows.count();
    
    console.log("Number of rows in the table:", noOfRows);
    await expect(rows).toHaveCount(7);

    console.log((await rows.nth(3).locator("td").allTextContents()));//In 3rd row it will fetch all cell data
    console.log((await rows.locator("td").nth(10).allTextContents()));//In all table data it will fetch 3rd cell


    //3. Verify the number of columns in the table or headers
    const headers = await rows.nth(0).locator("th").allInnerTexts();
    console.log("Table headers:", headers);
    console.log("No of Table headers:", headers.length);
    expect(headers.length).toBe(4); 
    expect(headers).toEqual([ 'BookName', 'Author', 'Subject', 'Price' ]);
    
    //4. Fetch the data from the table
    //approach 1: Using standard for loop
    console.log("Using standard for loop---------------------------------------------");
    for(let j=0; j< await rows.count();j++){
        const rowData:string[] = await rows.nth(j).locator("td").allInnerTexts();
        console.log(rowData);
    }

    //approach 2: Using for of loop
    console.log("Using for of loop---------------------------------------------------");
    for(const rowtext of (await rows.all()).slice(1)){
        const rowData:string[] = await rowtext.locator("td").allInnerTexts();
        console.log(rowData);
        //console.log(rowData.join(" \t "));
    }

    //4. validate the data in the table
    /*for(let validate of (await rows.all()).slice(1)){
        const dataValidate:String[]=await validate.locator("td").allInnerTexts();
        const author=dataValidate[1];
        const subject=dataValidate[2];

        if(author=='Mukesh'){
            console.log(`Author name is ${author} and Subject name is ${subject}`);
        }

    }*/
    
    for(let j=0; j< await rows.count();j++){
        const rowData:string[] = await rows.nth(j).locator("td").allInnerTexts();
        const author=rowData[1];
        const subject=rowData[2];

        if(author=='Mukesh'){
            console.log(`Author name is ${author} and Subject name is ${subject}`);
        }
    }

    //4. cummilative of Price
    let totalPrice:number = 0;
    /*for(let validate of (await rows.all()).slice(1)){
        const dataValidate:String[]=await validate.locator("td").allInnerTexts();
        const price=dataValidate[3];
        totalPrice=totalPrice+parseInt(price.toString());
    }*/
    for(let k=0; k< await rows.count();k++){
        const dataValidate: string[] = await rows.nth(k).locator("td").allInnerTexts();
        const price: string = dataValidate[3];
        if (price !== undefined) {
        totalPrice=totalPrice+parseInt(price.toString());
    }
    }
    console.log(`Total price of all books: ${totalPrice}`);
    expect(totalPrice).toEqual(7100);

})