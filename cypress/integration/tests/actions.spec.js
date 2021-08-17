/// <reference types="cypress" />

const REVERSED_SPIDER_SOLITAIRE_URL = 'https://reversed-spider-solitaire-game.herokuapp.com/';

describe('actions-tests', () => {

    beforeEach(() => {
        cy.visit(REVERSED_SPIDER_SOLITAIRE_URL)
    })

    it('should find actions section', () => {
        cy.get('.actions').should('exist')
    })

    it('should find new game button with its icon', () => {
        cy.get('.actions').find('.new-game').should('exist')
        cy.get('.actions').find('.new-game').find('button').contains('New Game')
        cy.get('.actions').find('.new-game').find('img').should('have.attr', 'src').should('include','new-game')
    })

    it('should find restart button with its icon', () => {
        cy.get('.actions').find('.restart').should('exist')
        cy.get('.actions').find('.restart').find('button').contains('Restart')
        cy.get('.actions').find('.restart').find('img').should('have.attr', 'src').should('include','restart')
    })

    it('should restart the game', () => {
        cy.get('.button--newGame').click()
        cy.wait(2000)
        cy.get('.timer').find('label').contains('00:00:02')
        cy.get('.restart').click()
        cy.get('.timer').find('label').contains('00:00:00')
    })

    it('should start a new game', () => {
        cy.get('.button--newGame').click()
        cy.wait(2000)
        cy.get('.timer').find('label').contains('00:00:02')
        cy.get('.new-game').click()
        cy.get('.modal__mask').should('exist')
    })
    
})