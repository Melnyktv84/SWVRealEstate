/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.superworldapp.com/')
    cy.click('MuiButton-label')
    cy.wait(4000)
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.contains('BUY REAL ESTATE').click()

  )}

)}
