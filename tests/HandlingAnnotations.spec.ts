import {test} from "@playwright/test";

test("Test Annotation", async()=>{
    console.log("Test Annotation...")
});

// test.only("Test Only Annotation", async()=>{
//     // Run only focused tests in the entire project.
//     console.log("Test Only Annotation...")
// });

test.skip("Test Skip Annotation", async()=>{
    // This test is not run
    console.log("Test Skip Annotation...")
});

test("Skip test inside condition", async({page, browserName})=>{
    //can skip certain test based on the condition.
    test.skip(browserName=="firefox", "firefox browser skipped")
})

test.fail("Test Fail Annotation", async()=>{
    //marks the test as failing. Playwright will run this test and ensure it does indeed fail.
    console.log("Test Fail Annotation...")
});

test.fixme("Test fixme Annotation", async({page})=>{
    //same like a skip. marks the test as failing. Playwright will not run this test. Use fixme when running the test is slow or crashes.
    console.log("Test fixme Annotation...")
})

test("Test slow Annotation", async({page})=>{
    test.slow();
    // marks the test as slow and triples the test timeout.
    console.log("Test slow Annotation...")
})
