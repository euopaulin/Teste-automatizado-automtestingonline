describe("Automação feita no site de Testes online", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
  // impede que testes falhem com erros não tratados do React
  return false;
});

    it('Acessando site e validando título', () => {
        cy.visit('https://automationintesting.online/#/')
        cy.contains('a', 'Book Now').should('be.visible')
        cy.contains('a','Book Now').click()
        cy.get('input[id="name"]').type('John')
        cy.get('input[id="email"]').type('john@gmail.com')
        cy.get('input[id="phone"]').type('12345678910')
        cy.get('input[id="subject"]').type('123 Main St')
        cy.get('textarea[id="description"]').type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        cy.get('.d-grid > .btn').click()
        cy.get('.col-lg-8 > .card > .card-body > .h4').should('be.visible')
    });

    it('Fazer uma reserva', () => {
      cy.visit('https://automationintesting.online/#/')
      cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
        
    });
});