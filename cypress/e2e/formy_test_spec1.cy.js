describe('formy test spec', () => {

  beforeEach(() => {
    //this is a public page with no login, but if we had one
    //we would add it in here. Or we could create a separate login function if we needed.
    cy.visit('https://formy-project.herokuapp.com/')
  })

  //not testing Autocomplete due to Places API error: BillingNotEnabledMapError on Formy site
  it('Formy site - Checkbox tests', () => {
    //Asserting we made it to the right page
    cy.get('.jumbotron-fluid').contains('Checkbox').click()
        .waitUntil(() => cy.get('h1').contains('Checkboxes'))
    cy.get('#checkbox-1').click()
        .should('be.checked')
    cy.get('#checkbox-2').click()
        .should('be.checked')
    cy.get('#checkbox-3').click()
        .should('be.checked')
      })


  it('Formy site - Datepicker tests', () => {
  })

  // //note that drag and drop on formy does not work on all browsers (chrome only)
  // it('Formy site - Drag and drop tests', () => {
  // })
  //
  // it('Formy site - Enabled and Disabled Elements tests', () => {
  // })
  //
  // it('Formy site - Modal tests', () => {
  //
  // })
  //
  // it('Formy site - Page Scroll tests', () => {
  //
  // })
  //
  // it('Formy site - Switch Window tests', () => {
  //
  // })
  //
  // //covers multiple of the categories from picker
  // it('Formy site - Complete Web Form tests', () => {
  //
  // })
  //
})