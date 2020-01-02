describe("Quand je suis sur la page d'accueil du Doggy Quiz", () => {
  it("Je peux aller sur le jeu l'ecran de choix de joueur", () => {
    cy.visit("")

    cy.contains("TÉMA WESH !").click({ force: true })

    cy.url().should("include", "/choix-joueur")
  })
})