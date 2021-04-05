/// <reference types="cypress" />

describe("Form validation errors", () => {
    it("shows an error if name is deleted", () => {
        cy.writeAndDeleteText("input", "name");
    });
    it("shows an error if email is deleted", () => {
        cy.writeAndDeleteText("input", "email");
    });
    it("shows an error if subject is deleted", () => {
        cy.writeAndDeleteText("input", "subject");
    });
    it("shows an error if message is deleted", () => {
        cy.writeAndDeleteText("textarea", "message");
    });
});
