
describe('Capital One - 360 Performance Savings Account', () => {

	it('capital one - Open 360 Performance Savings Account', () => {

	    // Navigate to Capital One Website
	    cy.visit('https://www.capitalone.com')
	    cy.wait(2000);

	    // Click on Checking & Savings link
	    cy.get('[id="bank"]').click()
        cy.wait(2000);

	    // Scroll into view 360 Performance Savings link and click
	    cy.get ('[class="tile grv-shr-lib-col--lg-4 grv-shr-lib-col--sm-3 ng-star-inserted"]').eq(1).scrollIntoView().click()	
	    cy.wait(2500);

	    // Click on Open Account button
	    cy.get('[data-initial-value="Open account"]').eq(0).click()
        cy.wait(2000);

        cy.origin('https://apply.capitalone.com', () => {   
		// Capture the message
		    cy.get('[data-testhook="do-you-have-a-login-line-2"]').invoke('text').then((msg) => {
		    cy.log('The message for open account is: ' + msg)
		    console.log('The message for open account is: ' + msg)
            
            })//end of then

        })//end of origin

    })//end of it 

})//end of describe
