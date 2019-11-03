import doggies from "../../Donnees/doggies"
import citations from "../../Donnees/citations"

export default {
  gestionJoueur: {
    joueursDisponibles: doggies,
    joueurConnecte: null
  },
  quizz: {
    citationsDisponibles: citations,
    reponsesDisponibles: doggies,
    partie: {
      score: 0,
      question: {
        intitule: "",
        propositions: [],
        solutions: []
      },
      reponse: null,
      correction: null
    }
  }
}
