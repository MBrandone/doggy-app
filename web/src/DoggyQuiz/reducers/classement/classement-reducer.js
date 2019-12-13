import { creerReducer } from "../reducer-utils"
import etatInitialClassement from "./etat-initial"

function recupererClassement(etatQuizz) {
  return {
    ...etatQuizz,
    chargement: "EN_COURS"
  }
}

function recupererClassementSucces(etatQuizz, action) {
  const classifications = action.payload.classifications
  return {
    classifications,
    chargement: "TERMINE"
  }
}

function recupererClassementErreur(etatQuizz) {
  return {
    ...etatQuizz,
    chargement: "ERREUR"
  }
}

export default creerReducer(etatInitialClassement, {
  RECUPERER_CLASSEMENT: recupererClassement,
  RECUPERER_CLASSEMENT_SUCCES: recupererClassementSucces,
  RECUPERER_CLASSEMENT_ERREUR: recupererClassementErreur
})