import { faker } from '@faker-js/faker';


describe('Assignment 3: Issue deletion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', `${Cypress.env('baseUrl')}project/board`).then((url) => {
      // System will already open issue creating modal in beforeEach block  
      cy.visit(url + '/board?modal-issue-create=true');
    });
  });

  it('Delete issue', () => {
    cy.visit('/');
    cy.get('[data-testid="icon:plus"]').click()

  const issueDescription = faker.lorem.sentence()
  cy.get('.ql-editor').type(issueDescription);

  cy.get('[data-testid="select:type"]').click();
  cy.get('[data-testid="select-option:Story"]')
    .wait(1000)
    .trigger('mouseover')
    .trigger('click');
  cy.get('[data-testid="icon:story"]').should('be.visible');

  cy.get('[data-testid="select:priority"]').click();
  cy.get('[data-testid="select-option:Medium"]')
      .trigger('click');

  cy.get('[data-testid="select:userIds"]').click();
  cy.get('[data-testid="select-option:Pickle Rick"]')
  .trigger('click')
  cy.get('[data-testid="select:reporterId"]').click();
  cy.get('[data-testid="select-option:Pickle Rick"]')
  .trigger('click')
  cy.get('[data-testid="icon:story"]').should('be.visible');

  const issueTitle = faker.lorem.words()
  cy.get('[data-testid="form-field:title"]').type(issueTitle)

  cy.get('button[type="submit"]').click();

  
    
  });
  
});