describe("Quand je suis sur l'ecran de choix de joueur du doggy Quiz", () => {
  beforeEach(() => {
    cy.visit("/choix-joueur")
  })

  it("la liste des joueurs disponibles s'affichent", () => {
    cy.get(".choix-joueur").find("label").should("have.length", 18)
  })

  describe("Le podium s'affichent", () => {
    it("l'animation de podium s'affiche", () => {
      cy.get("#podium").should("exist")
    })

    it("Les photos et score des 3 premiers s'affichent", () => {
      cy.get(".premier img").should("exist")
      cy.get(".deuxieme img").should("exist")
      cy.get(".troisieme img").should("exist")
    })
  })

  describe("Quand je clique sur un joueur", () => {
    beforeEach(() => {
      cy.contains("Brondon").click({ force: true})
    })

    it("il est marqué comme selectionné", () => {
      cy.get("input[value='BRM']").should("be.checked")
    })

    describe("Quand je clique sur 'C'est Parti'", () => {
      beforeEach(() => {
        cy.contains("C'EST PARTI").click({ force: true })
      })

      it("On arrive sur l'ecran de questionnaire", () => {
        cy.url().should("include", "/questionnaire")
      })
    })
  })
})
