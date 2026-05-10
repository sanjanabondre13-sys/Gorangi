 import {test , expect } from '@playwright/test';

 test ( 'page open',async ({page}) =>{
await page.goto("https://rahulshettyacademy.com/client");
console.log( await page.title());
await expect(page).toHaveTitle("Let's Shop");

await page.locator(".btn1").click();    //or  await page.getByText("Register").click();    currently multiple times text is visible hence not working
await page.locator('#firstName').fill("sutw");
await page.locator('#lastName').fill("boit");
await page.locator('#userEmail').fill("tspott@gmail.com");
await page.locator('#userMobile').fill("9978999908");
await page.locator('#userPassword').fill("up2345@Aa9o");
await page.locator('#confirmPassword').fill("up2345@Aa9o");
await page.locator(".col-md-1").click();
await page.locator("#login").click();

console.log (await page.getByText('Account Created Successfully').textContent());

 });
 
// Result for open the page >> read the page title >> user registartaion >> read the success message 



 