describe('Create User Page', () => {
  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/notes/app');
  });

  it('should display the registration form', () => {
    cy.get('[data-testid="open-register-view"]').click()
    cy.get('form[data-testid="login-form"]').should('exist');
    cy.contains('Register').should('be.visible');
    cy.get('[data-testid="register-email"]').should('exist');
    cy.get('[data-testid="register-name"]').should('exist');
    cy.get('[data-testid="register-password"]').should('exist');
    cy.get('[data-testid="register-confirm-password"]').should('exist');
    cy.get('[data-testid="register-submit"]').should('exist');
  });

  it('should create a new user with valid details', () => {
    const uniqueEmail = `user${Date.now()}@test.com`;
    const uniqueName = `User${Date.now()}`;
        cy.get('[data-testid="open-register-view"]').click()
    cy.get('[data-testid="register-email"]').type(uniqueEmail);
    cy.get('[data-testid="register-name"]').type(uniqueName);
    cy.get('[data-testid="register-password"]').type('TestPassword123!');
    cy.get('[data-testid="register-confirm-password"]').type('TestPassword123!');
    cy.get('[data-testid="register-submit"]').click();
    cy.get('.alert-success').contains('User account created successfully')
  });

  it('should show validation errors for missing fields', () => {
    cy.get('[data-testid="open-register-view"]').click()
    cy.get('[data-testid="register-submit"]').click();
    cy.get('.invalid-feedback').should('contain','Email address is required')
    cy.get('.invalid-feedback').should('contain','Password is required')
    cy.get('.invalid-feedback').should('contain','Confirm Password is required')
    cy.get('.invalid-feedback').should('contain','User name is required')
  
});

});

