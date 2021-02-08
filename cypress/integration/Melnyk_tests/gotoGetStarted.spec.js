describe('VIRTUAL REAL ESTATE page testing', () => {

  context('Move to VIRTUAL REAL ESTATE page', () => {
    it('As a user I can go to VIRTUAL REAL ESTATE page from the main page of SW site', () => {
      cy.visit('https://www.superworldapp.com/')
    //  cy.contains('VIRTUAL REAL ESTATE').click()
  cy.get('.class="MuiButton-label"').click()
      cy.wait(4000)
    });
  });
});
