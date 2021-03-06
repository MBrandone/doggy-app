import etatInitialQuizz from "./etat-initial"
import { creerReducer } from "../reducer-utils"

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

function mettreAJourPartie(etatQuizz) {
  const nouveauScore = etatQuizz.partie.reponse.correction ? etatQuizz.partie.score + 1 : etatQuizz.partie.score
  const nouveauStatut = etatQuizz.partie.reponse.correction ? 'EN_COURS' : 'TERMINE'
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      score: nouveauScore,
      statut: nouveauStatut
    }
  }
}

export default creerReducer(etatInitialQuizz, {
  COMMENCER_PARTIE: commencerPartie,
  COMMENCER_PARTIE_SUCCES: commencerPartieSucces,
  COMMENCER_PARTIE_ERREUR: commencerPartieErreur,
  DEMANDER_NOUVEAU_DEFI: demanderNouveauDefi,
  DEMANDER_NOUVEAU_DEFI_SUCCES: demanderNouveauDefiSucces,
  DEMANDER_NOUVEAU_DEFI_ERREUR: demanderNouveauDefiErreur,
  SAUVEGARDER_REPONSE: sauvegarderReponse,
  SAUVEGARDER_REPONSE_SUCCES: sauvegarderReponseSucces,
  SAUVEGARDER_REPONSE_ERREUR: sauvegarderReponseErreur,
  METTRE_A_JOUR_PARTIE: mettreAJourPartie,
})