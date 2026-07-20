import {test} from "@playwright/test";
//test.describe.configure({mode:"serial"});
/*serial execution
a. serial execution we can configure in playwright.config.ts file and test file as well.
b. if it's in playwright.config.ts file then,  fullyParallel:false, workers:1, : on running test defalutly it will execute all
tests depends on how many tests are present in your test file and defalutly worker will be 1. if we give more than 1 also it will
considered as a 1 workers.
c. if it's in test file then, test.describe.configure({mode:"serial"});
d. serial will execute all testes as serial wise. It is a slower execution cause defalutly worker will be 1
e. we can confingure browser level as well in playwright.config.ts file
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
        fullyParallel:false,
        workers:1,
    npx playwright test HandlingParallelExecution.spec.ts --project chromium
    npx playwright test HandlingParallelExecution.spec.ts --workers=2: to give workers run time
f. If not giving a any workers in playwright.config.ts file the, defalutly workers will be 1.
*/

//test.describe.configure({mode:"parallel"});
/*parallel execution
a. parallel execution we can configure in playwright.config.ts file and test file as well.
b. if it's in playwright.config.ts file then,  fullyParallel:true, workers:5, : on running test defalutly it will execute all
tests depends on how many tests are present in your test file and worker will be execute based on how much we defined in 
playwright.config.ts file.
c. if it's in test file then, test.describe.configure({mode:"parallel"});
d. parallel will execute all testes as parallel wise. It is a faster execution cause worker will be execute based on how much we defined in 
playwright.config.ts file.
e. The main use of workers is to run tests faster by executing them in parallel.
f. Why use workers?
Faster test execution
    Without workers:
        100 tests run one after another.
        Total time might be 20 minutes.
    With 4 workers:
        The 100 tests are divided among 4 workers.
        Total time might drop to about 5 minutes (depending on the tests).
    Parallel execution
        Each worker is a separate process.
        Multiple tests can run at the same time.
g. we can confingure browser level as well in playwright.config.ts file
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
        fullyParallel:true,
        workers:5,
    npx playwright test HandlingParallelExecution.spec.ts --project chromium
    npx playwright test HandlingParallelExecution.spec.ts --workers=2: to give workers run time
h. If not giving a any workers in playwright.config.ts file the, defalutly it will assigned workers more than 1 based on
how many test we have.
*/
test.describe("Test Group", async()=>{
    test("Test 1", async()=>{
        console.log("Test 1 executed...");
    });

    test("Test 2", async()=>{
        console.log("Test 2 executed...");
    });

    test("Test 3", async()=>{
        console.log("Test 3 executed...");
    });

    test("Test 4", async()=>{
        console.log("Test 4 executed...");
    });

    test("Test 5", async()=>{
        console.log("Test 5 executed...");
    });
});