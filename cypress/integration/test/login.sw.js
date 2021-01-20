/// <reference types="cypress" />
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
    cy.visit('https://www.superworldapp.com/')
    cy.contains('Get Started').click()
    cy.wait(4000)
    cy.contains('BUY REAL ESTATE').click()
  })
})





  // // https://on.cypress.io/interacting-with-elements
  //
  // it('.type() - type into a DOM element', () => {
  //   // https://on.cypress.io/type
  //   cy.contains('BUY REAL ESTATE').click()
  //   }
  // )
