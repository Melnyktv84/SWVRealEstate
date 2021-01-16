/// <reference types="cypress" />

context('Location', () => {
  beforeEach(() => {
    cy.visit('https://www.superworldapp.com/about/our-team/')
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('https://www.superworldapp.com/about/our-team/')
      // expect(location.host).to.eq('example.cypress.io')
      // expect(location.hostname).to.eq('example.cypress.io')
      // expect(location.origin).to.eq('https://example.cypress.io')
      // expect(location.pathname).to.eq('/commands/location')
      // expect(location.port).to.eq('')
      // expect(location.protocol).to.eq('https:')
      // expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'https://www.superworldapp.com/about/our-team/')
  })
})
