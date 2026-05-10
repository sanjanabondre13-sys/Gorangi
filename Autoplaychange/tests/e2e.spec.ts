import { test , expect } from "@playwright/test";

test.only ( 'e2e', async ({page}) =>{

const userName = page.locator('#userEmail');
const passWord = page.locator('#userPassword');

const cardName = page.locator('.card-body');

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await userName.fill('tspott@gmail.com');
await passWord.fill('up2345@Aa9o');
await page.locator('[value="Login"]').click();

await page.waitForLoadState('networkidle');
//await page.pause();


});