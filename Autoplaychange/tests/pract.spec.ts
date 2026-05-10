import { test , expect } from "@playwright/test";

 test.use({
  permissions: [],            // "geolocation" pass this if allow location , geolocation: { latitude: 19.0760, longitude: 72.8777 }
});
    

test ( 'practice' , async ({page})=>
 {
    
  await page.goto('https://stage.ifbappliances.com');

await page.getByRole('button', {name:"Save"}).click();
const validationText = page.locator(".pincode-input-error").textContent();
await expect (page.locator(".pincode-input-error")).toBeVisible();
console.log("Validation", validationText);

await page.locator('#pincodeId').fill("400066");
await page.getByRole('button', {name:"Save"}).click();

await page.waitForSelector('.pincode-number');

const PinCode = await page.locator('.pincode-number').textContent();
const location = await (page.locator('.location-name')).textContent();
console.log("Pincode",PinCode);
console.log("Location",location);


const ProductList = await page.locator('.category-slider__content p').allTextContents();
console.log("List", ProductList.length); 
console.log("List", ProductList ); 


const Category = await page.locator('.category-slider__content', { hasText: 'Solo Microwave' }).textContent(); //   //disable arrow icon   .nth(1).click({clickCount: 2}); 
await page.locator('.category-slider__content', { hasText: 'Solo Microwave' }).click();
  console.log('Category Title', Category?.trim());

 await expect (page).toHaveURL('https://stage.ifbappliances.com/products/kitchen/microwave/solo');
 const CategoryURL = page.url();
console.log('Category URL ',CategoryURL);

await page.waitForLoadState('networkidle');
//await page.waitForSelector('.productcollection__items');     for perticular component load 
const Produt = await page.locator('.productcollection__items [data-title*="IFB "]').allTextContents();
console.log( "Produt count" , Produt.length );

const bestseller = await page.locator('.productcollection__items [data-title*="IFB "]:has-text("Best Seller")').count();
console.log("Best Seller", bestseller);

console.log("In Stock:", await page.locator('.in-stock-box:has-text("In Stock"):visible').count());
console.log("Out Stock:", await page.locator('.in-stock-box:has-text("Out of Stock"):visible').count());

await expect(page.locator('.productcollection__items:has-text("In Stock")')).toContainText("View Details");

await page.pause();

}) ;