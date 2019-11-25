describe("Quand je suis sur l'ecran de questionnaire", () => {
  beforeEach(() => {
    cy.visit("/questionnaire")
  })

  it("l'intitulé de la citation s'affiche", () => {
    cy.get("blockquote").should("exist")
  })

  it("4 propositions s'affichent", () => {
    cy.find("button").should("have.length", 4)
  })

  describe("Quand je clique sur une bonne proposition", () => {
    beforeEach(() => {

    })

    it("un autre intitulé s'affiche", () => {
      cy.get("blockquote").should("exist")
    })

    it("4 nouvelles propositions s'affichent", () => {
      cy.find("button").should("have.length", 4)
    })
  })

  describe("Quand je clique sur une mauvaise proposition", () => {
    it("Je suis redirigé vers l'ecran de classement", () => {
    })
  })
})
