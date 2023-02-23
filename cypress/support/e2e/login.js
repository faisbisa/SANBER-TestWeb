 describe("Open Kasir AJA URL", () => {
    it('should contain url /login', ()=> {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')
    })
 })