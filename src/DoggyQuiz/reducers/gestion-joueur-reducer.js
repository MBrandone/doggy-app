import etatInitial from "./etat-initial"
import { creerReducer } from "./reducer-utils"

function choisirJoueur(etatGestionJoueur, action) {
  const trigrammeJoueurSelectionne = action.joueur
  const joueurSelectionne = etatGestionJoueur.joueursDisponibles.joueurs.find(joueur => joueur.trigramme === trigrammeJoueurSelectionne)
  return {
    ...etatGestionJoueur,
    joueurConnecte: joueurSelectionne
  }
}

function reinitialiserJoueur(etatGestionJoueur) {
  return {
    ...etatGestionJoueur,
    joueurConnecte: null
  }
}

function recupererDoggies(etatGestionJoueur) {
  return {
    ...etatGestionJoueur,
    joueursDisponibles: {
      ...etatGestionJoueur.joueursDisponibles,
      chargement: "EN_COURS"
    }
  }
}

function recupererDoggiesSucces(etatGestionJoueur, action) {
  return {
    ...etatGestionJoueur,
    joueursDisponibles: {
      joueurs: action.payload.doggies,
      chargement: "TERMINE"
    }
  }
}

function recupererDoggiesErreur(etatGestionJoueur) {
  return {
    ...etatGestionJoueur,
    joueursDisponibles: {
      ...etatGestionJoueur.joueursDisponibles,
      chargement: "ERREUR"
    }
  }
}

export default creerReducer(etatInitial.gestionJoueur, {
  CHOISIR_JOUEUR: choisirJoueur,
  REINITIALISER_JOUEUR: reinitialiserJoueur,
  RECUPERER_DOGGIES: recupererDoggies,
  RECUPERER_DOGGIES_SUCCES: recupererDoggiesSucces,
  RECUPERER_DOGGIES_ERREUR: recupererDoggiesErreur,
})