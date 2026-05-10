import { test , expect} from '@playwright/test'

test ('getby' , async({page})=>{
 
page.goto(" "):
page.getByRole('button' , { name: 'sign in'});
page.getByRole ('heading', { name: 'test'})    //is visible
page.getByRole('checkbox', { name: 'subscribe'}),check();
page.getByLabel('Password').fill('secret');
await page.getByPlaceholder('name@example.com').fill('playwright@microsoft.com');

await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();
page.getByAltText('playwright logo').click(); // click on image 
await expect(page.getByTitle('Issues count')).toHaveText('25 issues'); // <span title='Issues count'>25 issues</span>





()





})