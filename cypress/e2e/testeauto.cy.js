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
      cy.get('.col-8 > .btn').click()
        
    });

    it('Fazer nova reserva preenchendo campos', () => {
      cy.visit("https://automationintesting.online/reservation/1?checkin=2025-07-30&checkout=2025-07-31")
      cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').click()
      cy.get('#doReservation').click()
      cy.get('.room-booking-form > .form-control').type('Paulo')
      cy.get(':nth-child(2) > .form-control').type('Henrique')
      cy.get(':nth-child(3) > .form-control').type('paulo@gmail.com')
      cy.get(':nth-child(4) > .form-control').type('06140028922')
      cy.get('.btn-primary').should('be.visible')
      cy.get('.btn-primary').click()
    });
});