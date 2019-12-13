export default {
  partie: {
    synchronisation: null,
    statut: null,
    score: 0,
    defi: {
      intitule: "",
      propositions: [],
      solutions: [],
      chargement: null
    },
    reponse: {
      reponseDonnee: null,
      correction: null,
      sauvegarde: "NON_DEMANDE"
    }
  }
}

// statut : EN_COURS, TERMINE
// chargement : EN_COURS, TERMINE, ERREUR, NON_DEMANDE
// synchronisation : EN_COURS, TERMINE, ERREUR, NON_DEMANDE
// sauvegarde : EN COURS, TERMINE, ERREUR, NON_DEMANDE