/// <reference types="cypress" />

const REVERSED_SPIDER_SOLITAIRE_URL = 'https://reversed-spider-solitaire-game.herokuapp.com/';

describe('start-modal-tests', () => {

    beforeEach(() => {
        cy.visit(REVERSED_SPIDER_SOLITAIRE_URL)
    })

    it('should find start modal', () => {
        cy.get('.modal__mask').should('exist')
        cy.get('.modal__container').should('exist')
        cy.get('.modal__header').contains('Reversed Spider Solitaire')
    })

    it('should start the game with 1 suit', () => {
        cy.get('#level1').click()
        cy.get('.button--newGame').click()
        cy.get('.card').find('.heart').should('not.exist')
    })

    it('should start the game with 2 suits', () => {
        cy.get('#level2').click()
        cy.get('.button--newGame').click()
        cy.get('.card').find('.heart').should('exist')
        cy.get('.card').find('.diamond').should('not.exist')
    })

    it('should start the game with 4 suits', () => {
        cy.get('#level4').click()
        cy.get('.button--newGame').click()
        cy.get('.card').find('.diamond').should('exist')
    })
    
})