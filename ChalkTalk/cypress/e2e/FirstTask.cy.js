describe("Drag & Drop", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.LoginAsAdmin();
  });
  it("FirstTask", function () {
    const dataTransfer = new DataTransfer();

    cy.get(".chalktalk-calendar").click();
    cy.get(".hhyFZP").click({ force: true });
    cy.get(".iFmaRA").click({ force: true });
    cy.wait(1000);
    cy.get(".ezqJrG").contains("2.6 Slope").trigger(
      "dragstart",
      {
        dataTransfer,
      },
      { force: true }
    );

    cy.get(".kgIJsr").contains("10/18").trigger(
      "drop",
      {
        dataTransfer,
      },
      { force: true }
    );

    cy.get(".chalktalk-icon-tech").click().wait(3000);
    cy.get(".ikltbO").contains("Math").click();

    cy.get(".curriculum-select__control").click();
    cy.contains("Syllabus").click();
    cy.get(".kqXLuS").contains("2.6 Slope").click();
    cy.get(".gksCCg")
      .should("contain", "2.6 Slope")
      .and("contain", "Oct")
      .and("contain", "18");

    cy.get(
      "#active-lesson > .SubNavBarstyle__NavBarStatusColumn-sc-1rzcjxd-18 > .SubNavBarstyle__NavBarIconWrap-sc-1rzcjxd-9"
    ).click();
    cy.get(
      "#active-lesson > .SubNavBarstyle__NavBarItemCustome-sc-1rzcjxd-7 > .SubNavBarstyle__NavBarName-sc-1rzcjxd-21"
    ).click();
    cy.get(
      "#active-lesson > .SubNavBarstyle__NavBarItemDateWrap-sc-1rzcjxd-11"
    ).click();
    cy.get(".chalktalk-calendar").click();
    cy.get(".hhyFZP").click({ force: true });
    cy.get(".iFmaRA").click({ force: true });
    cy.wait(1000);
    cy.get(".ezqJrG").contains("2.6 Slope").trigger(
      "dragstart",
      {
        dataTransfer,
      },
      { force: true }
    );

    cy.get(".kgIJsr").contains("10/03").trigger(
      "drop",
      {
        dataTransfer,
      },
      { force: true }
    );
    cy.get('.kmDXhf').click();
    cy.get('.jdJRIw').contains('Logout').click();
  });
});
