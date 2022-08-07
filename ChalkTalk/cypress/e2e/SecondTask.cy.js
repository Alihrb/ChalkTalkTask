describe("Drag & Drop", () => {
    //let txt ='txt';
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  
    beforeEach(() => {
      cy.LoginAsAdmin();
    }); 
    it("SecondTask", function () {
        cy.get('.chalktalk-icon-note-list').click();
        cy.get(':nth-child(1) > .ExamSectionTablestyle__SectionRowItem-sc-9rkodi-5 > .dXNnuF > .chalktalk-lock-open').click()
        cy.get('.DrDgp').contains('Confirm').click();
        cy.get('.chalktalk-course-management').click();
        cy.get('.ikltbO').contains('Section-1').click();
        cy.get(':nth-child(2) > .TableComponentstyle__TableContainerWrap-sc-ykzclm-1 > .TableComponentstyle__TableContentWrapper-sc-ykzclm-4 > .TableComponentstyle__TableContentItem-sc-ykzclm-5 > .kCvmLU > .TableComponentstyle__TableContentGroup-sc-ykzclm-3 > span').invoke('text').as('text')
        cy.get('.kmDXhf').click();
        cy.get('.jdJRIw').contains('Logout').click(); 
        cy.LoginAsStudent();
        cy.get('form > .Loginstyle__ButtonStyled-sc-1l3t9ue-6').click();
        cy.get('.chalktalk-icon-note-list').click();
        cy.get(':nth-child(1) > .eAGfpf > .Buttonstyle__Button-sc-5x8zu1-1').click();
        
        for(let i=1;i<23;i++){
        cy.get('.cyjbDl')
          .get('.hTmCIR')
          .should('have.length.greaterThan', 0)
          .its('length')
          .then(function (n) {
               return Cypress._.random(0, n - 1)
                 })
             .then(function (k) {
              cy.get('.hTmCIR')
                  .eq(k)
                  .click()
                  
  })

        }

       cy.get('.dxSqtF').contains('Submit').click();
       cy.get('.DrDgp').contains('Confirm').click();
       cy.wait(3000); 
       if(cy.get('.dxSqtF').contains('Calculating...'))
       {
        cy.wait(90000)
        cy.get('.ExamSectionTablestyle__SectionListWrap-sc-9rkodi-0 > :nth-child(1) > :nth-child(4)').contains('--/--').should('not.exist')
       }
       cy.get('.kmDXhf').click();
       cy.get('.jdJRIw').contains('Logout').click();
       cy.LoginAsAdmin(); 
       cy.get('.chalktalk-icon-note-list').click();
       cy.get(':nth-child(1) > .ExamSectionTablestyle__SectionRowItem-sc-9rkodi-5 > :nth-child(4)').should('contain','1/1')
       cy.get(':nth-child(1) > .ExamSectionTablestyle__SectionRowItem-sc-9rkodi-5 > .dXNnuF > .chalktalk-reset').click();
       cy.get('.DrDgp').contains('Confirm').click();
       cy.get('.Toastify__toast').should('contain','Exam was reset successfully.');
       cy.get(':nth-child(1) > .ExamSectionTablestyle__SectionRowItem-sc-9rkodi-5 > .dXNnuF > .chalktalk-pause').click();
       cy.get('.DrDgp').contains('Confirm').click();
       cy.get('.Toastify__toast').should('contain','Exam section timer was paused successfully. Section is now locked.')
       cy.get('.kmDXhf').click();
       cy.get('.jdJRIw').contains('Logout').click();
       



/* 
        cy.get(':nth-child(1) > .ExamSectionTablestyle__SectionRowItem-sc-9rkodi-5 > .dXNnuF > .chalktalk-lock-open').click();
        cy.get('.ConfirmModalstyle__ModalGroupAction-sc-6qejja-2 > :nth-child(1)').click();
        cy.get('.chalktalk-course-management').click();
        cy.get('[style="position: absolute; inset: 0px; overflow: scroll; margin-right: 0px; margin-bottom: 0px;"] > a > .LeftSiderBarstyle__ItemsSiderBar-sc-16x4c35-6').click();
        cy.get(':nth-child(2) > .TableComponentstyle__TableContainerWrap-sc-ykzclm-1 > .TableComponentstyle__TableContentWrapper-sc-ykzclm-4 > .TableComponentstyle__TableContentItem-sc-ykzclm-5 > .kCvmLU').click();
        cy.get(':nth-child(2) > .TableComponentstyle__TableContainerWrap-sc-ykzclm-1 > .TableComponentstyle__TableContentWrapper-sc-ykzclm-4 > .TableComponentstyle__TableContentItem-sc-ykzclm-5 > .kCvmLU > .TableComponentstyle__TableContentGroup-sc-ykzclm-3 > span').click();
        cy.get(':nth-child(2) > .TableComponentstyle__TableContainerWrap-sc-ykzclm-1 > .TableComponentstyle__TableContentWrapper-sc-ykzclm-4 > .TableComponentstyle__TableContentItem-sc-ykzclm-5 > .kCvmLU > .TableComponentstyle__TableContentGroup-sc-ykzclm-3 > span').click();
        cy.get(':nth-child(2) > .TableComponentstyle__TableContainerWrap-sc-ykzclm-1 > .TableComponentstyle__TableContentWrapper-sc-ykzclm-4 > .TableComponentstyle__TableContentItem-sc-ykzclm-5 > .kCvmLU > .TableComponentstyle__TableContentGroup-sc-ykzclm-3 > span').click();
        cy.get('.TopNavBarstyle__UserIconInitials-sc-494zmv-6 > p').click();
        cy.get('.TopNavBarstyle__DropdownWrap-sc-494zmv-8 > :nth-child(2)').click(); */
    });
  });
  