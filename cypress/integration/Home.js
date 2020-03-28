describe("Home Page", function() {
  it("loads", function() {
    cy.visit("/")
    cy.get("h1")
      .contains("The Cost of COVID-19")
      .should("be.visible")
    cy.get("header").should("be.visible")
    cy.get("main").should("be.visible")
    cy.get("footer").should("be.visible")
  })
})
