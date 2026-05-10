import {test , expect} from "@playwright/test";

test('Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();  // open new browser window for original page
    const page =  await context.newPage();   // open new page 
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");   // locate the blinking link
 
    const [newPage]=await Promise.all(     
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),    //new page is opened
   
   ])
 
   const newText = await newPage.locator(".red").textContent();
    const arrayText = newText.split("@")[1]
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 });

















