/// <reference types="cypress" />

describe('Testes para inclusão de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir novos contatos', () => {
        cy.get('input[type="text"]').type('Isaias Rocha')
        cy.get('input[type="email"]').type('Isaiasrocha@gmail.com')
        cy.get('input[type="tel"]').type('77 91234-5678')
        cy.get('.adicionar').click()
    })

    it('Deve incluir novos contatos', () => {
        cy.get('input[type="text"]').type('Pedro')
        cy.get('input[type="email"]').type('pedrotest@gmail.com')
        cy.get('input[type="tel"]').type('77 1111-2222')
        cy.get('.adicionar').click()

        cy.screenshot('incluindo-contato')
    })
})