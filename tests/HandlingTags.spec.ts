import {test} from "@playwright/test";
/*
a. Only Sanity: npx playwright test HandlingTags.spec.ts --grep "@Sanity"
b. Only Regression: npx playwright test HandlingTags.spec.ts --grep "@Regression"
c. Both Sanity and Regression: npx playwright test HandlingTags.spec.ts --grep "(?=.*@Sanity)(?=.*@Regression)"
d. Sanity or Regression: npx playwright test HandlingTags.spec.ts --grep "(@Sanity)|(@Regression)"
e. Sanity which is not belong to Regression: 1. npx playwright test HandlingTags.spec.ts --grep-invert "@Regression"
                                             2. npx playwright test HandlingTags.spec.ts --grep "@Sanity" --grep-invert "@Regression"
f. Regression which is not belong to Sanity: 1. npx playwright test HandlingTags.spec.ts --grep-invert "@Sanity"
                                             2. npx playwright test HandlingTags.spec.ts --grep "Regression" --grep-invert "Sanity"
g. Above steps are for terminal
h. Same we can do in playwright.config.ts file as well at default define Config
i. grep:/@Sanity/,
   grep:[/@Sanity/,/@Regression/],
   grepInvert:/@Regression/
*/
test("Sanity test tags", {tag:"@Sanity"}, async()=>{
    console.log("Sanity test tags...")
});

test("Regression test tags", {tag:"@Regression"}, async()=>{
    console.log("Regression test tags...")
});

test("Sanity and Regression test tags", {tag:["@Sanity", "@Regression"]}, async()=>{
    console.log("Sanity and Regression test tags...")
});
