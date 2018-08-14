/// <reference types="Cypress" />

context('Login page', () => {
    beforeEach(() => {
        cy.viewport(1024, 768);
        cy.visit('login');
        cy.get('[data-cy=email]').as('email');
        cy.get('[data-cy=password]').as('password');
    });

    context('Username field', () => {
        it('Is focused at page load', () => {
            cy.focused().should('have.attr', 'data-cy', 'email');
        });

        context('Validation', () => {
            it('Invalid format message not visible if valid', () => {
                cy.get('@email').type('validmail@valid.com');

                cy.get('[data-cy=validationMessageEmailInvalid]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Invalid format message visible if invalid', () => {
                cy.get('@email').type('ss');

                cy.get('[data-cy=validationMessageEmailInvalid]').should(
                    'be',
                    'visible'
                );
            });

            it('Validation required not visible if valid', () => {
                cy.get('@email').type('something@valid.com');

                cy.get('[data-cy=validatioMessageEmailRequired]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Validation required visible when invalid', () => {
                cy.get('@email')
                    .type('somethinginvalid')
                    .clear();

                cy.get('[data-cy=validatioMessageEmailRequired]').should(
                    'be',
                    'visible'
                );
            });
        });

        context('Status icon', () => {
            it('Icon does not appear at first typing', () => {
                cy.get('@email').type('something');

                cy.get('[data-cy=usernameStateIcon]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Does appears after leaving valid field', () => {
                cy.get('@email')
                    .type('something@valid.com')
                    .blur();

                cy.get('[data-cy=usernameStateIcon]').should('be', 'visible');
            });

            it('Icon does appear after leaving invalid field', () => {
                cy.get('@email')
                    .type('sss')
                    .blur();

                cy.get('[data-cy=usernameStateIcon]').should('be', 'visible');
            });

            it('Success icon appears if valid and has green border', () => {
                cy.get('@email')
                    .type('something@valid.com')
                    .blur();

                cy.get('@email').should('have.class', 'is-success');

                cy.get('[data-cy=usernameStateErrorIcon]').should(
                    'not.be',
                    'visible'
                );
                cy.get('[data-cy=usernameStateSuccessIcon]').should(
                    'be',
                    'visible'
                );
            });

            it('Error icon appears if valid and has red border', () => {
                cy.get('@email')
                    .type('sss')
                    .blur();

                cy.get('@email').should('have.class', 'is-danger');

                cy.get('[data-cy=usernameStateErrorIcon]').should(
                    'be',
                    'visible'
                );
                cy.get('[data-cy=usernameStateSuccessIcon]').should(
                    'not.be',
                    'visible'
                );
            });
        });
    });

    context('Password', () => {
        it('Is not focused at page load', () => {
            cy.focused().should('not.have.attr', 'data-cy', 'password');
        });

        context('Validation', () => {
            it('Too short validation not visible if valid', () => {
                cy.get('@password').type('something');

                cy.get('[data-cy=validationMessagePasswordTooShort]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Too short validation visible if invalid', () => {
                cy.get('@password').type('ss');

                cy.get('[data-cy=validationMessagePasswordTooShort]').should(
                    'be',
                    'visible'
                );
            });

            it('Required validation not visible if valid', () => {
                cy.get('@password').type('something');

                cy.get('[data-cy=validationMessagePasswordRequired]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Required validation visible if invalid', () => {
                cy.get('@password')
                    .type('ss')
                    .clear();

                cy.get('[data-cy=validationMessagePasswordRequired]').should(
                    'be',
                    'visible'
                );
            });
        });

        context('Status icons', () => {
            it('Icon does not appear at first typing', () => {
                cy.get('@password').type('something');

                cy.get('[data-cy=passwordStateIcon]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Icon does appear after leaving valid field', () => {
                cy.get('@password')
                    .type('something')
                    .blur();

                cy.get('[data-cy=passwordStateIcon]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Icon does appear after leaving invalid field', () => {
                cy.get('@password')
                    .type('sss')
                    .blur();

                cy.get('[data-cy=passwordStateIcon]').should(
                    'not.be',
                    'visible'
                );
            });

            it('Success icon appears if valid and has green border', () => {
                cy.get('@password')
                    .type('something')
                    .blur();

                cy.get('@password').should('have.class', 'is-success');

                cy.get('[data-cy=passwordStateIconPasswordInvalid]').should(
                    'not.be',
                    'visible'
                );
                cy.get('[data-cy=passwordStateIconPasswordValid]').should(
                    'be',
                    'visible'
                );
            });

            it('Error icon appears if valid and has red border', () => {
                cy.get('@password')
                    .type('sss')
                    .blur();

                cy.get('@password').should('have.class', 'is-danger');

                cy.get('[data-cy=passwordStateIconPasswordInvalid]').should(
                    'be',
                    'visible'
                );
                cy.get('[data-cy=passwordStateIconPasswordValid]').should(
                    'not.be',
                    'visible'
                );
            });
        });
    });
});
