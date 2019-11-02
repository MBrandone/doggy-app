describe("Quand je suis sur l'ecran de classement", () => {
  beforeEach(() => {
    cy.visit("/resultats")
  })

  it("La photo de la bonne réponse s'affichent", () => {
    cy.get(".conteneur-photo-bulle img").should("exist")
  })

  it("le classement s'affiche", () => {
    cy.get(".classement").should("exist")
    cy.get(".classement .item-classement").first().should("contain", "Marizouz")
    cy.get(".classement .item-classement").first().next().should("contain", "Brondon")
  })
})
