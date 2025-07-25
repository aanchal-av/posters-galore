describe('Create Notes Page', () => {
    let users;
    before(()=>{
           cy.fixture('users.json').then(function(data) {
      users = data;
    });
    })
  beforeEach(() => {
   cy.visit('https://practice.expandtesting.com/notes/app');  

      cy.contains('Login').click()
    cy.get('[data-testid="login-email"]').type(users.userEmail);
    cy.get('[data-testid="login-password"]').type(users.userPassword);
    cy.get('[data-testid="login-submit"]').click()
});

it('Add a new note',()=>{
    cy.get('[data-testid="add-new-note"]').click()
    cy.get('[data-testid="note-title"]').type('Test Note Title');   
    cy.get('[data-testid="note-description"]').type('This is a test note content.');
    cy.get('[data-testid="note-submit"]').click();
    cy.get('[data-testid="note-card-description"]').should('contain', 'This is a test note content.');
})

it('edit an existing note',()=>{
    cy.get(':nth-child(2) > [data-testid="note-card"] > .card-footer > div > [data-testid="note-edit"').first().click();
    cy.get('[data-testid="note-title"]').clear().type('Updated Note Title');
    cy.get('[data-testid="note-description"]').clear().type('This is updated content for the note.');
    cy.get('[data-testid="note-submit"]').click();
    cy.get('[data-testid="note-card-title"]').should('contain', 'Updated Note Title');
})
after(() => {
cy.get('[data-testid="note-card-description"]')
  .parents('[data-testid="note-card"]')
  .find('[data-testid="note-delete"]')
  .click();    
  cy.get('[data-testid="note-delete-confirm"]').should('contain','Delete');
        cy.get('[data-testid="note-delete-cancel-2"]').should('contain','Cancel');
        cy.get('[data-testid="note-delete-confirm"]').click();
})
})
