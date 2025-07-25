describe('Login Page', () => {
    let users;
  beforeEach(() => {
    cy.fixture('users.json').then((data) => {
      users = data;
    });
   cy.visit('https://practice.expandtesting.com/notes/app');  
});

  it('should login successfully with valid credentials from fixture', () => {
     cy.contains('Login').click()
    cy.get('[data-testid="login-email"]').type(users.userEmail);
    cy.get('[data-testid="login-password"]').type(users.userPassword);
    cy.get('[data-testid="login-submit"]').click()
    cy.get('[data-testid="profile"]').should('contain','Profile')
  });

  it('should show error with invalid credentials from fixture', () => {
            cy.contains('Login').click()
    cy.get('[data-testid="login-email"]').type("invalid");
    cy.get('[data-testid="login-password"]').type('133');
    cy.get('[data-testid="login-submit"]').click()
    cy.get('.invalid-feedback').should('contain','Email address is invalid')
    cy.get('.invalid-feedback').should('contain','Password should be between 6 and 30 characters')});

  it('should show validation error when username and password are empty', () => {
     cy.contains('Login').click()
    cy.get('[data-testid="login-submit"]').click()
        cy.get('.invalid-feedback').should('contain','Email address is required')
    cy.get('.invalid-feedback').should('contain','Password is required')
  });
});