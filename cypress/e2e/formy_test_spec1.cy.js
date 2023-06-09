describe('formy test spec', () => {

    beforeEach(() => {
        //this is a public page with no login, but if we had one
        //we would add it in here. Or we could create a separate login function if we needed.
        cy.visit('https://formy-project.herokuapp.com/')
    })

    //not testing Autocomplete due to Places API error: BillingNotEnabledMapError on Formy site
    it('Formy site - Checkbox tests', () => {
        cy.get('.jumbotron-fluid').contains('Checkbox').click()
        cy.wait(500)
            .waitUntil(() => cy.get('h1').contains('Checkboxes'))
        cy.get('#checkbox-1').click()
            .should('be.checked')
        cy.get('#checkbox-2').click()
            .should('be.checked')
        cy.get('#checkbox-3').click()
            .should('be.checked')
    })


    it('Formy site - Datepicker tests', () => {
        cy.get('#navbarDropdownMenuLink').click()
        cy.get('.dropdown-menu > [href="/datepicker"]').click()
        cy.url().should('eq', 'https://formy-project.herokuapp.com/datepicker')
        cy.get('#datepicker').click()
            //here we assume if the site had functionality, user could
            //submit by pressing enter
            .type('01/01/1970 {enter}')
        //clear the form so we can test in another way
        cy.focused().clear().click()
        cy.get('h1').click()
        cy.get('#datepicker').click()
        cy.get('td.new.day').first().click()
    })

    //note that drag and drop on formy is flakey due to application code; the below test
    //can pass when Cypress does not catch the exception for the draggable function failing
    it.skip('Formy site - Drag and drop tests', () => {
        cy.get('#navbarDropdownMenuLink').click()
        cy.get('.dropdown-menu > [href="/dragdrop"]').click()
        cy.url().should('eq', 'https://formy-project.herokuapp.com/dragdrop')
        cy.get('#image').drag('#box', {force:true})
        cy.get('p').should('exist')
    })

    it('Formy site - Enabled and Disabled Elements tests', () => {
        cy.get('#navbarDropdownMenuLink').click()
        cy.get('.dropdown-menu > [href="/enabled"]').click()
        cy.url().should('eq', 'https://formy-project.herokuapp.com/enabled')
        cy.get('#disabledInput').should('be.disabled')
        cy.get('#input').click().type('some text can be typed')
    })

    it('Formy site - Modal tests', () => {
        cy.viewport(900, 600)
        cy.get('.jumbotron-fluid').contains('Modal').click()
        cy.url().should('eq', 'https://formy-project.herokuapp.com/modal')
        cy.get('#modal-button').click()
        cy.get('#exampleModalLabel').should('be.visible')
        cy.get('.modal-body').click()
        cy.wait(500)
        //here we can tab through on the modal like a blind user might do to use the site, then we close the modal
            cy.realPress('Tab').realPress('Tab').realPress('Enter')
        cy.wait(1000)
        cy.get('#exampleModalLabel').should('not.be.visible')
    })

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