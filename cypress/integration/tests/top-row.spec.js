/// <reference types="cypress" />

const REVERSED_SPIDER_SOLITAIRE_URL = 'https://reversed-spider-solitaire-game.herokuapp.com/';

describe('top-row-tests', () => {

    beforeEach(() => {
        cy.visit(REVERSED_SPIDER_SOLITAIRE_URL)
    })

    it('should find cards to add', () => {
        cy.get('.cards-to-add').should('exist')
        cy.get('.button--newGame').click()
        cy.get('.cards-to-add').find('.card').should('exist')
    })

    it('should add cards', () => {
        cy.get('#level4').click()
        cy.get('.button--newGame').click()
        cy.get('.cards-to-add').find('.card').click({ multiple: true, force: true })
    })

    it('should hide added cards', () => {
        cy.get('#level4').click()
        cy.get('.button--newGame').click()
        cy.get('.cards-to-add').find('.card').click({ multiple: true, force: true })
        cy.get('.cards-to-add').find('.card').should('not.exist')
    })

    it('should find sorted piles section', () => {
        cy.get('.sorted-piles').should('exist')
    })
    
})