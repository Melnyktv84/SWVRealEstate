/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://www.superworldapp.com/')
      //need an if statement for a popup widget the subscribe window pops right away
    cy.wait(6000)
    cy.get('.leadinModal-close').click({force: true})
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-text.dropdown-button.MuiButton-colorInherit').contains('About').trigger('mouseover',{force: true})
    cy.contains('Media').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://www.superworldapp.com/

    cy.location('pathname').should('include', '/about/media/')

    cy.go('back')
    cy.location('pathname').should('not.include', '/about/media/')

    cy.go('forward')
    cy.location('pathname').should('include', '/about/media/')

    // clicking back
    // cy.go(-1)
    // cy.location('pathname').should('not.include', 'Media')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/about/media/')
  })

  it('cy.reload() - reload the page', () => {
    //https://www.superworldapp.com/
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {
    // https://www.superworldapp.com/

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
