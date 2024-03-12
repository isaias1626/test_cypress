/// <reference types="cypress" />

describe('Testes para exclusão de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve excluir contatos', () => {
        cy.get('.contato').last().find('.delete').click()
        cy.screenshot('removendo-contato')
    })
})