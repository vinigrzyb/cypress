describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', {
      statusCode: 400,
    }).as('stubPost')
  })
  // it('Login correto', () => {
  //   cy.login('Admin', 'admin123')
  // })
  // it('Valida a mensagem de credenciais inválidas', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.login('fakeUser', 'fakePassword')
  //   cy.contains('Invalid credentials').should('be.visible')
  // })
  it('Deve falhar mesmo com os campos preenchidos corretamente', () => {
    cy.login('Admin', 'admin123')
    cy.wait('@stubPost')
    cy.contains('Invalid credentials').should('be.visible')
  })
})