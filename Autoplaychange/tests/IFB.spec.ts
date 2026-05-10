import {test,expect} from '@playwright/test';




test ("Invalid Login" , async ({page}) =>{

const userName = page.locator("#userEmail");
const passWord = page.locator("#userPassword");
const Login = page.getByRole("button", {name: 'Login'});

await page.goto("https://rahulshettyacademy.com/client");

// validations 
await Login.click(); 
 await expect (page.getByText('*Email is required')).toBeVisible();
 await expect (page.getByText('*Password is required')).toBeVisible();
 
await userName.fill("anshikgmail.com");
await passWord.fill("Ia@000");
await Login.click();

const emailError = await page.getByText('*Enter Valid Email').isVisible().catch(() => false);  // use (/Enter Valid Email/i) if casing not mandetory
const passError = await page.getByText('*Enter Valid Password').isVisible().catch(() => false);

console.log("Email validation:", emailError);
console.log("Password validation:", passError);

// Valid login 
await userName.fill("anshika@gmail.com");
await passWord.fill("Iamking@000");
await Login.click();

 
                                       //Not able to fing pop up ID 
//  await expect (page.locator(('#toast-container [aria-label="Login Successfully"]'))).toBeVisible();
// // await page.pause();
// await expect(page.locator(('#toast-container [aria-label="Login Successfully"]'))).toContainText('ogin Successfully');
// await page.pause();


await page.waitForLoadState('networkidle'); // API call
const Dashboard = page.locator('.container');
const ResultCount = page.locator('.container .m-2').allTextContents();
console.log(ResultCount);

const productCount = page.locator('.col-lg-4');
page.locator('.col-lg-4').first().waitFor(); // 1st image to load 

const Titles = await page.locator('.card-body b').allTextContents();
console.log(Titles);

const productName = 'qwerty' ;

await page.locator('.card-body b').filter({ hasText: productName }).locator('{ hasText:  Add To Cart }').hover();


// const count = await productCount.count();
//    for (let i = 0; i < count; ++i) {
//       if (await productCount.nth(i).locator("b").textContent() === productName) {
//          //add to cart
//          await productCount.nth(i).locator("text= Add To Cart").click();
//          break;
//       }
//    }









});














