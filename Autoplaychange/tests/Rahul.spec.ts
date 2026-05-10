import { test , expect } from '@playwright/test';

test ('end to end testing', async ({page }) =>{
    // const productName = page.getByText("")
    // const products = page.locator("");
    await page.goto("https://stage.ifbappliances.com/");
    page.on('dialog',dialog => dialog.accept());
    // await page.locator("").fill("");
    // await page.locator("").type("");
    // await page.locator("").click();

    await page.waitForLoadState('networkidle');
    const products = page.locator ('.bestsellter__item');
    const bestSekkertitles = await page.locator(".bestsellter__item  .bestsellter__item-img").count();
    console.log(bestSekkertitles) ;
    const count = bestSekkertitles;

   
  
    for ( let  i=0; i<count ; i++)
    {
      if ( await bestSekkertitles.nth(i).locator(".stock-text [hasText :'In Stock']").() )
      {
       await bestSekkertitles.locator(".stock-text [hasText :'In Stock']").
      }
    }













});
