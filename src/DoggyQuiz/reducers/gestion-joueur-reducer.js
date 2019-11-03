import etatInitial from "./etat-initial"
import { creerReducer } from "./reducer-utils"

function choisirJoueur(etatGestionJoueur, action) {
  const trigrammeJoueurSelectionne = action.joueur
  const joueurSelectionne = etatGestionJoueur.joueursDisponibles.find(joueur => joueur.trigramme === trigrammeJoueurSelectionne)
  return {
    ...etatGestionJoueur,
    joueur: joueurSelectionne
  }
}

export default creerReducer(etatInitial.gestionJoueur, {
  CHOISIR_JOUEUR: choisirJoueur
})