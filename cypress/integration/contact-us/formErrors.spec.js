/// <reference types="cypress" />

describe("Simulate form validation errors", () => {
    it("shows an error if name input is deleted", () => {
        cy.visit("http://localhost:3000/contact-us");
        cy.get("input[name='name']").type("Alex", { force: true });
        cy.get("input[name='name']").type(
            "{backspace}{backspace}{backspace}{backspace}",
            {
                force: true,
            }
        );
        cy.wait(500);
        cy.get("input[name='name']").siblings().should("have.length", 1);
    });
});
