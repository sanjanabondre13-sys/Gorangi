import { test, expect } from '@playwright/test';
import {POManager} from '../pomts/POManager';  //  both file onject are store on POManager hence call here 

 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const username = "anshika@gmail.com";
   const password = "Iamking@000";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");

   const loginPage = new LoginPg(page); // its use to send the page values to POM constructor to activate current page and it gives the locater in pom
   await loginPage.goto();          // for POM 
   await loginPage.validLogin(username,password);  //For pom

   const dashBoard = new DashBoard(page);
   await dashBoard.searchProductAddCart(productName)
   await dashBoard.navigateToCart();

//                      LOGIN 
//await page.goto("https://rahulshettyacademy.com/client");
//    await page.locator("#userEmail").fill(email);                     stored this values in POM for reuasable utility
//    await page.locator("#userPassword").fill("Iamking@000");
//    await page.locator("[value='Login']").click();

//                    DASHBOARD 

   // await page.waitForLoadState('networkidle');
   // await page.locator(".card-body b").first().waitFor();
   // const titles = await page.locator(".card-body b").allTextContents();
   // console.log(titles);                                                    //  stored this values in POM for reuasable utility
   // const count = await products.count();
   // for (let i = 0; i < count; ++i) {
   //    if (await products.nth(i).locator("b").textContent() === productName) {
   //       //add to cart
   //       await products.nth(i).locator("text= Add To Cart").click();
   //       break;
   //    }
   // }
 //await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   await expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 
 