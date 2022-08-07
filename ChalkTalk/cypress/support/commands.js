import HomePage from '../../PageObjects/HomePage'
import LoginPage from '../../PageObjects/LoginPage'
const CSfixture = require('../fixtures/credentials.json')
const homePage = new HomePage()
const loginPage = new LoginPage()

Cypress.Commands.add("LoginAsAdmin", () => {
    homePage.visit();
    loginPage.Login(CSfixture.username, CSfixture.password)

  
  }
  
  );

  Cypress.Commands.add("LoginAsStudent", () => {
   // homePage.visit();
    loginPage.StdLogin(CSfixture.Stdusername, CSfixture.Stdpassword)

  
  }
  
  );