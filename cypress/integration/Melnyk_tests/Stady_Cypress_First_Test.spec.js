//describe('...', () => {

//  context('...', () => {
//    it('...', () => {});
//  });
// });

it('By ID', () => { //перед идентификацией элемента по id ставится #
    cy.visit('uk-ua.facebook.com')
    cy.get('#email')
})

it('By Class', () => { //перед идентификацией элемента по классу(class) ставится .
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress.html')
    cy.get('.ds-input')
});

it('By Tag', () => { //поиск элементов по тегу(Tag) происходит без указания спец. символов
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress.html')
    cy.get('nav')
});

it('By Tag value', () => { //поиск элементов по значению тега(Tag value) происходит через заключение значения тега в квадратные скобки
    cy.visit('uk-ua.facebook.com')
    cy.get('[name="pass"]')
});

it.only('By Different Tag', () => { //поиск элементов по значению тега(Tag value) происходит через заключение нескольких значений тегов в квадратные скобки
    cy.visit('uk-ua.facebook.com')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});
