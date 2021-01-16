/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.superworldapp.com/')
    cy.get('.btn-link').contains('Help Center').click()
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-text.nav-button.MuiButton-colorInherit').contains('AR Mobile App').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go

    cy.location('pathname').should('include', 'AR Mobile App')

    cy.go('back')
    cy.location('pathname').should('not.include', 'AR Mobile App')

    cy.go('forward')
    cy.location('pathname').should('include', 'AR Mobile App')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'AR Mobile App')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'AR Mobile App')
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain

    // Pass options to the visit
    cy.visit('https://www.superworldapp.com/about/our-team/', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    })
})
