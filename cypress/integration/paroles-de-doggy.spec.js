describe("Quand je suis sur la page d'accueil", () => {
  it("Je peux aller sur le jeu 'Paroles de Doggy'", () => {
    cy.visit("")

    cy.contains("Paroles de Doggy").click()

    cy.url().should("include", "/paroles-de-doggy")
  })
})

describe("Quand je suis sur le jeu 'Paroles de Doggy'", () => {
  beforeEach(() => {
    cy.visit("/paroles-de-doggy")
  })

  it("Le titre du jeu, sa description et le bouton de départ s'affichent", () => {
    cy.get("h1").should("include.text", "Paroles de Doggy")
    cy.get("p").should("include.text", "Donne les trigrammes des doggies qui sont associés à ces citations")
    cy.get("button").should("include.text", "Go !")
  })

  describe("Quand je clique sur go", () => {
    beforeEach(() => {
      cy.contains("Go !").click()
    })

    it("Une citation, une entrée et un bouton de formulaire s'affichent", () => {
      cy.get("form").should("exist")
      cy.get(".reponse").should("exist")
      cy.get("button").should("include.text", "C'est ce doggy !")
    })

    it("Le score est affiché et initialisé à 0", () => {
      cy.contains("score").should("include.text", "0")
    })

    describe("Quand je remplis le champs et clique sur le bouton", () => {
      describe("Quand la réponse est bonne", () => {
        beforeEach(() => {
          //FIXME En attendant de pouvoir stubber pour connaitre les bonnes reponses
          cy.get("input").type("DOGGYBAG")

          cy.contains("C'est ce doggy !").click()
        })

        it("affiche 'bonne réponse' si la reponse est bonne", () => {
          cy.contains("Bonne réponse").should("exist")
          cy.contains("Citation suivante !").should("exist")
        })

        it("Le score est incrémenté de un point", () => {
          cy.contains("score").should("include.text", "1")
        })

        describe("Quand on clique sur le bouton suivant", () => {
          it("Une nouvelle citation et un formulaire s'affichent", () => {
            cy.contains("Citation suivante").click()

            cy.get("form").should("exist")
            cy.get(".reponse").should("exist")
            cy.get("button").should("include.text", "C'est ce doggy !")
          })
        })
      })

      describe("Quand la réponse est mauvaise", () => {
        beforeEach(() => {
          cy.get("input").type("pas un trigramme doggy")

          cy.contains("C'est ce doggy !").click()
        })

        it("affiche 'mauvaise reponse et une photo de cyril", () => {
          cy.contains("Mauvaise réponse").should("exist")
            cy.get(".photo-cyg-triste").should("exist")
        })

        describe("Après 2 secondes", () => {
          beforeEach(() => {
            cy.wait(2100)
          })

          it("affiche ton score finale", () => {
            cy.contains("score").should("exist")
          })
        })
      })
    })
  })
})