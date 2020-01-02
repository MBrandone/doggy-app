describe("Quand je suis sur l'ecran de classement", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "/classement",
      response: [{
        joueur: "BRM",
        score: 13
      }, {
        joueur: "MBI",
        score: 12
      }, {
        joueur: "RDO",
        score: 11
      }]
    })
    cy.visit("/resultats")
  })

  it("La photo de la bonne réponse s'affichent", () => {
    cy.get(".conteneur-photo-bulle img").should("exist")
  })

  it("le classement s'affiche", () => {
    cy.get(".classement").should("exist")
    cy.get(".classement .item-classement").first().should("contain", "Brondon")
    cy.get(".classement .item-classement").first().next().should("contain", "Marizouz")
  })
})
