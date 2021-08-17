/// <reference types="cypress" />

const REVERSED_SPIDER_SOLITAIRE_URL = 'https://radiant-spire-02907.herokuapp.com/';

describe('header-tests', () => {

    beforeEach(() => {
        cy.visit(REVERSED_SPIDER_SOLITAIRE_URL)
    })

    it('should find timer', () => {
        cy.get('.timer').should('exist')
        cy.get('.timer').find('label').contains('00:00:00')
        cy.get('.timer').find('img').should('have.attr', 'src').should('include','timer')
    })

    it('should get correct time', () => {
        cy.get('.timer').should('exist')
        cy.get('.timer').find('label').contains('00:00:00')
        cy.get('.button--newGame').click()
        cy.wait(2000)
        cy.get('.timer').find('label').contains('00:00:02')
    })

    it('should find moves', () => {
        cy.get('.moves').should('exist')
        cy.get('.moves').find('label').contains('Moves: 0')
    })

    it('should find score', () => {
        cy.get('.score').should('exist')
        cy.get('.score').find('label').contains('Score: 0')
        cy.get('.score').find('img').should('have.attr', 'src').should('include','cup')
    })
    
})