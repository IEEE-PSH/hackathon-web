describe("theme propagation spec", () => {
  it("check if page theme is 'dark' after sign-in", () => {
    cy.visit("");
    cy.get('[test-id="mode-toggle"]').click();
    cy.get('[test-id="dark-theme"]').click();
    cy.contains("Login").click();
    cy.get('[test-id="google-sign-in"]').click();
    //can't get past sign in to test theme
  });
});
