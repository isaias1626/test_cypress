/// <reference types="cypress" />

describe('Testes para alteração de dados de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar contatos', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('João Ramos')
        cy.get('input[type="email"]').clear().type('joaora@gmail.com')
        cy.get('input[type="tel"]').clear().type('77 91474-5678')
        cy.get('.alterar').click()

        cy.screenshot('alterando-contato')
    })
})