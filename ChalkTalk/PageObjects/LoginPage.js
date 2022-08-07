import BasePage from './BasePage';

class LoginPage extends BasePage {
Login(username, password)
 {
    cy.get(':nth-child(1) > .Formstyle__FormInputWrapperStyled-sc-10ymb0f-5 > .Formstyle__FormInputStyled-sc-10ymb0f-0').click();
    cy.get('.efaCIe > .Formstyle__FormInputWrapperStyled-sc-10ymb0f-5 > .Formstyle__FormInputStyled-sc-10ymb0f-0').clear();
    cy.get('.efaCIe > .Formstyle__FormInputWrapperStyled-sc-10ymb0f-5 > .Formstyle__FormInputStyled-sc-10ymb0f-0').type(username);
    cy.get('.oivTQ > .Formstyle__FormInputWrapperStyled-sc-10ymb0f-5 > .Formstyle__FormInputStyled-sc-10ymb0f-0').click();
    cy.get(':nth-child(2) > .Formstyle__FormInputWrapperStyled-sc-10ymb0f-5 > .Formstyle__FormInputStyled-sc-10ymb0f-0').clear();
    cy.get(':nth-child(2) > .Formstyle__FormInputWrapperStyled-sc-10ymb0f-5 > .Formstyle__FormInputStyled-sc-10ymb0f-0').type(password);
    cy.get('form > .Loginstyle__ButtonStyled-sc-1l3t9ue-6').click();
    cy.getCookies();

  }

StdLogin(Stdusername,Stdpassword)
{
    cy.get('input[name="email"]').type(Stdusername);
    cy.get('input[name="password"]').type(Stdpassword);
    cy.get('form > .Loginstyle__ButtonStyled-sc-1l3t9ue-6').click();
}
}
export default LoginPage;
