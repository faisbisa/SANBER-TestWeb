 describe("Open Kasir AJA URL", () => {
    it('should contain url /login', ()=> {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')
    })
//open kasir aja login page
    it('user success login to kasir Aja', ()=> {
        cy.visit('https://kasirdemo.belajarqa.com')
        // cy.url().should('include', '/login')

//Input username pass   
        cy.get('#email').type("sanber123@mail.com")
        cy.get('#password').type("sanber123@")
//click login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
//assert dashboard after login
        // cy.url().should('include','/dashboard')
        cy.get('#root > div > div > div.css-tnxwfz > div > h3').click()
        cy.contains("kasirAja")
    })
 })