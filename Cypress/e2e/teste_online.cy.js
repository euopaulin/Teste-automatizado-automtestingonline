describe("Automação feita no site de Testes online", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
  // impede que testes falhem com erros não tratados do React
  return false;
});

    it('Acessando site e validando título', () => {
        cy.visit('https://automationintesting.online/#/')

        cy.contains('a', 'Book Now').should('be.visible')
        cy.contains('a','Book Now').click()



    });
});