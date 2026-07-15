import {test, expect, Locator} from "@playwright/test"; 

test("Dynamic Table", async({page})=>{

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
    const table:Locator=page.locator("#taskTable");
    await expect(table).toBeVisible();

    //2. Verify the number of rows in the table
    const allRows:Locator=table.locator("tbody tr");
    console.log("Number of rows in the table:", await allRows.count());
    await expect(allRows).toHaveCount(4);

    //3. verify Disk space of Firefox process: 0.89 MB/s
    let diskSpace:string="";
    /*for(const cell of await allRows.all()){
        const Name=await cell.locator("td").nth(0).innerText();
       if(Name==='Firefox'){
            diskSpace=await cell.locator("td", {hasText:'MB/s'}).nth(0).innerText();
            console.log(`Disk space of ${Name} process: ${diskSpace}`);
        }
    }*/
   for(let k=0; k< await allRows.count(); k++){
        const Name=await allRows.nth(k).locator("td").nth(0).innerText();//nth(0) column
        if(Name==='Firefox'){
            diskSpace=await allRows.nth(k).locator("td", {hasText:'MB/s'}).nth(0).innerText();
            console.log(`Disk space of ${Name} process: ${diskSpace}`);
        }
   }

    //Hardcoded approach
    /*const Name=await allRows.locator("td").nth(0).innerText();//nth(0) means column static
        if(Name==='Firefox'){
           const  diskSpace=await allRows.locator("td", {hasText:'MB/s'}).nth(0).innerText();
            console.log(`Disk space of ${Name} process: ${diskSpace}`);
        }*/
    
    const text=await page.locator("strong[class='firefox-disk']").innerText();

    if(diskSpace.includes(text)){
        expect(diskSpace).toContain(text);
        console.log("matching text...");
    }
    else{
        console.log("Not matching text...");
    }

});
