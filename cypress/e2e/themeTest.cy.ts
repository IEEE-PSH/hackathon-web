import { slowCypressDown } from "cypress-slow-down";
slowCypressDown(false);

describe("theme propagation spec", () => {
  it("check if page theme is 'dark' after sign-in", () => {
    cy.visit("");
    cy.get('[test-id="mode-toggle"]').click();
    cy.get('[test-id="dark-theme"]').click();
    cy.contains("Login").click();
    cy.get('[name="email"]').type("q5m8r.test@inbox.testmail.app{enter}");

    let url = "";
    cy.request({
      url: `https://api.testmail.app/api/json?apikey=${
        Cypress.env().EMAIL_KEY
      }&namespace=${Cypress.env().EMAIL_NAMESPACE}&pretty=true`,
      failOnStatusCode: false,
    }).then((res) => {
      let url = res.body.emails[0].text.match(/\[(.*?)\]/)[0].slice(1, -1); //get magic link url in json
      console.log(url);
      cy.wait(1300);
      cy.visit(url);
    });
  });
});
