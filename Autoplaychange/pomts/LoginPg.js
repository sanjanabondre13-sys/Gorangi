class LoginPg{   // file name 

constructor(page)
{ 
this.page = page;
this.signInButton = page.locator("[value='Login']");
this.userName = page.locator("#userEmail");
this.passWord = page.locator("#userPassword");
}

//starting point of this page journey
async goto()
{
   await this.page.goto("https://rahulshettyacademy.com/client");
}

//reusable utility to login  ( change according to the above name )
async validLogin(username,password)
{
   await this.userName.fill(username);                    
   await this.passWord.type(password);
   await this.signInButton.click();
   await this.page.waitForLoadState('networkidle');
}

}
module.exports = {LoginPg};  // file name