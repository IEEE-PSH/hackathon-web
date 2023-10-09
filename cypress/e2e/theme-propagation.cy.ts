describe('template spec', () => {
  it('passes', () => {
    cy.visit('/', {failOnStatusCode: false}) // Clerk Auth state would still be forming and throw 401 error "uat-missing"
    cy.get('[data-testid="toggle-theme"]').click();
  })
})