describe("Quand je suis sur la page d'accueil", () => {
  it("Je peux aller sur le jeu 'Paroles de Doggy'", function() {
    // given je suis sur la page d'accueil du site
    cy.visit("")

    // when je clique sur la carte paroles de doggy
    cy.contains("Paroles de Doggy").click()

    // then je suis sur la page paroles de doggy
    cy.url().should('include', '/paroles-de-doggy')
  })
})