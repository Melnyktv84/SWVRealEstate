/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
    cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Navigation').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go
cy.wait(1000)
    cy.location('pathname').should('include', 'navigation')
cy.wait(1000)
    cy.go('back')
    cy.location('pathname').should('not.include', 'navigation')
cy.wait(1000)
    cy.go('forward')
    cy.location('pathname').should('include', 'navigation')
cy.wait(1000)
    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'navigation')
    cy.wait(1000)
    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'navigation')
    cy.wait(1000)
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()
cy.wait(1000)
    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {
    // https://on.cypress.io/visit
cy.wait(1000)
    // Visit any sub-domain of your current domain

    // Pass options to the visit
    cy.visit('https://example.cypress.io/commands/navigation', {
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
