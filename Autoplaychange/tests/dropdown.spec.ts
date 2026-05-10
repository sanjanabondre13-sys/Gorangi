import { test, expect} from "@playwright/test"


test.only ('dropdown',async({page})=>{  
const userName = page.locator('#username');
const PassWord = page.locator('#password');
const RadioButton = page.locator('.radiotextsty');
const dropDown = page.locator('select.form-control');
const BlinkingLink = page.locator ("[href*='documents-request']")

await page.goto("https://rahulshettyacademy.com/loginpagePractise");
await userName.fill('tspott@gmail.com');
await PassWord .fill('up2345@Aa9o');
await dropDown.selectOption("Teacher");
//await page.pause();  

await RadioButton.last().click();
await page.locator('#okayBtn').click();
//await page.pause();  

await expect (RadioButton.last()).toBeChecked();    //  assertion we write  if its checked then only it returens true 
 //or     await expect (RadioButton.nth(1)).toBeChecked();  
console.log ("radiobutton selection", await RadioButton.last().isChecked());  // it print in console True / false 
//await page.pause();  

await page.locator('#terms').click();
await expect (page.locator('#terms')).toBeChecked();    // check box check assertion 
console.log ("Checkbox selected:",await page.locator('#terms').isChecked());

//await page.pause();  
await page.locator('#terms').uncheck();    // for check box uncheck playwrite has own methd unheck() hence no need to write click () again
expect (await page.locator('#terms').isChecked()).toBeFalsy();  //   after unheck , if the check boxx is still check the it pass the falcy 
                                                        // await is inside bcz the action is performed inside 
// await page.pause();  

//const BlinkingLink = page.locator ("[href*='document-request']")
await expect(BlinkingLink).toHaveAttribute("class","blinkingText");  // verify the blinking text is present or not







}); 