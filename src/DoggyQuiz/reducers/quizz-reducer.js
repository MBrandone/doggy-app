import etatInitial from "./etat-initial"
import { creerReducer } from "./reducer-utils"

function commencerPartie(etatQuizz) {
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      synchronisation: "EN_COURS"
    }
  }
}

function commencerPartieSucces(etatQuizz, action) {
  const partie = action.payload.partie
  partie.synchronisation = "TERMINE"
  return {
    ...etatQuizz,
    partie
  }
}

function commencerPartieErreur(etatQuizz) {
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz,
      synchronisation: "ERREUR"
    }
  }
}

function demanderNouveauDefi(etatQuizz) {
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      defi: {
        ...etatQuizz.partie.defi,
        chargement: "EN_COURS"
      }
    },
    reponse: null
  }
}

function demanderNouveauDefiSucces(etatQuizz, action) {
  const nouveauDefi = action.payload.defiSuivant
  nouveauDefi.chargement = "TERMINE"
  const reponse = {
    reponseDonnee: null,
    correction: null,
    sauvegarde: "NON_DEMANDE"
  }
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      defi: nouveauDefi,
      reponse
    }
  }
}

function demanderNouveauDefiErreur(etatQuizz) {
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      defi: {
        ...etatQuizz.partie.defi,
        chargement: "ERREUR"
      }
    },
    reponse: null
  }
}

function sauvegarderReponse(etatQuizz, action) {
  console.log("dans l'action : ", action.reponse)
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      reponse: {
        correction: null,
        reponseDonnee: action.reponse,
        sauvegarde: "EN_COURS"
      }
    }
  }
}

function sauvegarderReponseSucces(etatQuizz, action) {
  const reponseCorrigee = action.payload.reponse
  reponseCorrigee.sauvegarde = "TERMINE"
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      reponse: reponseCorrigee
    }
  }
}

function sauvegarderReponseErreur(etatQuizz, action) {
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      reponse: {
        ...etatQuizz.partie.reponse,
        sauvegarde: "ERREUR"
      }
    }
  }
}

function mettreAJourScore(etatQuizz) {
  const nouveauScore = etatQuizz.partie.reponse.correction ? etatQuizz.partie.score + 1 : etatQuizz.partie.score
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      score: nouveauScore
    }
  }
}

function recupererClassement(etatQuizz) {
  return {
    ...etatQuizz,
    classement: {
      ...etatQuizz,
      chargement: "EN_COURS"
    }
  }
}

function recupererClassementSucces(etatQuizz, action) {
  const classifications = action.payload.classifications
  return {
    ...etatQuizz,
    classement: {
      classifications,
      chargement: "TERMINE"
    }
  }
}

function recupererClassementErreur(etatQuizz) {
  return {
    ...etatQuizz,
    classement: {
      ...etatQuizz,
      chargement: "ERREUR"
    }
  }
}

export default creerReducer(etatInitial.quizz, {
  COMMENCER_PARTIE: commencerPartie,
  COMMENCER_PARTIE_SUCCES: commencerPartieSucces,
  COMMENCER_PARTIE_ERREUR: commencerPartieErreur,
  DEMANDER_NOUVEAU_DEFI: demanderNouveauDefi,
  DEMANDER_NOUVEAU_DEFI_SUCCES: demanderNouveauDefiSucces,
  DEMANDER_NOUVEAU_DEFI_ERREUR: demanderNouveauDefiErreur,
  SAUVEGARDER_REPONSE: sauvegarderReponse,
  SAUVEGARDER_REPONSE_SUCCES: sauvegarderReponseSucces,
  SAUVEGARDER_REPONSE_ERREUR: sauvegarderReponseErreur,
  METTRE_A_JOUR_SCORE: mettreAJourScore,
  RECUPERER_CLASSEMENT: recupererClassement,
  RECUPERER_CLASSEMENT_SUCCES: recupererClassementSucces,
  RECUPERER_CLASSEMENT_ERREUR: recupererClassementErreur
})