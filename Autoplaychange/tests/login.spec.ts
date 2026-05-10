import {test , expect }  from '@playwright/test'

test ('login',async ({page}) =>{  
await page.goto("https://rahulshettyacademy.com/loginpagePractise");
console.log(await page.getByTitle( ("Let's Shop")));

await page.locator('#userEmail').fill("tspott@gmail.com");
await page.locator('#userPassword').fill("up2345@Aa9o");
await page.locator("[value ='Login']").click();

})



