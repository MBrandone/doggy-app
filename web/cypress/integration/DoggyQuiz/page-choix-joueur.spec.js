describe("Quand je suis sur l'ecran de choix de joueur du doggy Quiz", () => {
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
    cy.visit("/choix-joueur")
  })

  it("un bouton redirigeant vers le formulaire d'ajout de citation est sur l'écran", () => {
    cy.get(".choix-joueur").find("").should("have.length", 1)
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

  describe("Quand je ne suis pas authentifié", () => {
    it("un bouton d'authentification est sur l'écran", () => {
      cy.get(".choix-joueur").find("").should("have.length", 1)
    })
  })

  describe("Quand je m'autentifie", () => {
    it("affiche un message d'authentification en cours", () => {

    })
  })

  describe("Quand je suis authentifié", () => {
    beforeEach(() => {
      cy.route({
        method: "GET",
        url: "/moi",
        response: {
          trigramme: "BRM",
          nom: "Martins",
          prenom: "Bandone",
          surnom: "Brondon",
          photo: "",
          tribu: "WEBF",
          signeParticulier: "rit très fort",
          dateNaissance: new Date(1993, 8, 14),
        }
      })
    })

    it("Le prénom de la personne s'affiche sur l'écran", () => {
      cy.contains("Hello Brandone !").should("have.length", 1)
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
