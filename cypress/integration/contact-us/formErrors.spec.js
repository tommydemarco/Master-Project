/// <reference types="cypress" />

describe("Simulate form validation errors", () => {
    it("shows an error if name input is deleted", () => {
        cy.visit("http://localhost:3000");
        cy.get("input[name='name']");
        cy.type("Alex");
        cy.type("{del}{del}{del}{del}");
        cy.wait(500);
        cy.get("input[name='name']").siblings().should("have.length", 1);
    });
});
