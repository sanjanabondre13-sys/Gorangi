import {LoginPg} from ('../LoginPg');
import {DashBoard} from ('../DashBoard');

class POManager
{
w
constructor() {

this.loginPage = new LoginPg(page); 
this.dashBoard = new DashBoard(page);

}

getLoginPage()
{
    return this.loginPage
}


getLDashboardPage()
{
    return this.dashBoard
}


}