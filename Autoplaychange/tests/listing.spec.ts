import {test , expect} from '@playwright/test'

test ('login' , async({page}) =>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill("tspott@gmail.com");
await page.locator('#userPassword').fill("up2345@Aa9o");
await page.locator("[type='submit']").click();

//await page.waitForLoadState('networkidle');  // all api should be load without this we see the blank page
await page.locator('.card-body b').first().waitFor();   // 2nd option for above steps , if above APIs are not caleed till500ms then it gives blank screen 

const titles = await page.locator('.card-body b').allTextContents(); 
const count = await page.locator('.card-body b').count();
console.log("Titles:", titles);
console.log("Total count =", count);                  // peint this values with titles 

});