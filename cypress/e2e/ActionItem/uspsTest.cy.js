
describe('USPS Test Suite', () => {

    it ('usps url verification and capture the error message when entring invalid tracking number', () => {

        //Navigate to usps
        cy.visit('https://www.usps.com/')

        //wait for 2 seconds
        cy.wait(2000)

        //hover over the "Quick Tools" menu item
        cy.get('[class="qt-nav menuheader"]').realHover()

        //wait for 2 seconds
        cy.wait(2000)

        //click on track a package link
        cy.get('[alt="Tracking Icon"]').click()
        cy.wait(3000)

        //Capture the url and verify it contains "Track"
        cy.url().should('contain', 'Track')
    })//end of test

    it ('usps - enter invalid tracking number and capture the error message', () => {

        cy.visit('https://tools.usps.com/')
        cy.wait(3000)  

        //enter a invalid tracking number
        cy.get('[id="tracking-input"]').type('987654321000')

        //click on the track button
        cy.get('[class="col-sm-2 track-btn-ctn"]').click()
            
        //capture the error message and verify it contains "Tracking is not available for this item"
        cy.get('[class="banner-content"]').invoke('text').then((errormessage) => {
            expect(errormessage).to.contain('Tracking is not available for this item.')

        })//end of origin

    })//end of test

})//end of describe suite