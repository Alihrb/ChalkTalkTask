import BasePage from './BasePage';

class HomePage extends BasePage {
  visit() {
      cy.log(Cypress.env('url'))
      cy.clearCookies();
      cy.visit('https://chalktalk.com');
      cy.get('#hs-eu-confirmation-button').click();
      cy.get('#menu-item-361 > a').click();
  }
}
export default HomePage;
