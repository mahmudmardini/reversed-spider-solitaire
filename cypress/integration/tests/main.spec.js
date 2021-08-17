/// <reference types="cypress" />

const REVERSED_SPIDER_SOLITAIRE_URL = 'https://reversed-spider-solitaire-game.herokuapp.com/';

describe('main-tests', () => {

    beforeEach(() => {
        cy.visit(REVERSED_SPIDER_SOLITAIRE_URL)
    })

    it('should open reversed spider solitaire game', () => {
        
        const currentUrl = cy.url();

        currentUrl.should('equal', REVERSED_SPIDER_SOLITAIRE_URL)
    })

    it('should have "reversed spider solitaire" title', () => {
        const title = cy.title();
        title.should('not.be.empty')
        .and('equal', "Reversed Spider Solitaire")        
    })
    
})