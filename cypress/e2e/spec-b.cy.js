// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test B1', () => {
  // Custom command defined in cypress/support/e2e.js
  cy.Opencart_PlaceOrder()
})
