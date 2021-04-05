// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("writeAndDeleteText", (inputType, inputName) => {
    cy.visit("http://localhost:3000/contact-us");
    cy.get(`${inputType}[name='${inputName}']`).type("Foo", { force: true });
    cy.get(`${inputType}[name='${inputName}']`).type(
        "{backspace}{backspace}{backspace}",
        {
            force: true,
        }
    );
    cy.wait(500);
    cy.get(`${inputType}[name='${inputName}']`)
        .siblings()
        .should("have.length", 1);
    cy.get(`${inputType}[name='${inputName}']`)
        .siblings()
        .contains("Required field");
});
