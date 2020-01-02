import etatInitialGestionJoueur from "./etat-initial"
import { creerReducer } from "../reducer-utils"

function demarrerAuthentification(etatGestionJoueur) {
  return {
    ...etatGestionJoueur,
    statutAuthentification: "AUTHENTIFICATION_EN_COURS"
  }
}

function authentifierJoueur(etatGestionJoueur, action) {
  return {
    ...etatGestionJoueur,
    joueurConnecte: action.payload.joueur,
    statutAuthentification: "AUTHENTIFIE"
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

export default creerReducer(etatInitialGestionJoueur, {
  DEMARRER_AUTHENTIFICATION: demarrerAuthentification,
  AUTHENTIFIER_JOUEUR: authentifierJoueur,
  RECUPERER_DOGGIES: recupererDoggies,
  RECUPERER_DOGGIES_SUCCES: recupererDoggiesSucces,
  RECUPERER_DOGGIES_ERREUR: recupererDoggiesErreur
})