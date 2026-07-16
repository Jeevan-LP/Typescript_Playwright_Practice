import {test} from "@playwright/test";

    /*a. fullyParallel: true - playwright will execute ramdom wise like below
    4st test........
    1st test........
    3rd test........
    2nd test........
    
    b. fullyParallel: false - playwright will execute ramdom wise like below
    1st test........
    2nd test........
    3rd test........
    4st test........

    npx playwright test HandlingGrouping.spec.ts --grep <Group name>
    */
    test.describe("First Group", async()=>{

            test("1st test", async()=>{
                console.log("1st test........");
            })

            test("2nd test", async()=>{
                console.log("2nd test........");
            })
    });

    test.describe("Second Group", async()=>{
            test("3rd test", async()=>{
                console.log("3rd test........");
            })

            test("4th test", async()=>{
                console.log("4st test........");
            })
    });