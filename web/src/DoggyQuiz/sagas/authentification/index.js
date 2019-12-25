import { put, takeLatest } from "redux-saga/effects"
import { authentifierUtilisateur } from "../../services/google-auth"

function* authentification() {
  let utilisateurGoogle = yield authentifierUtilisateur()
  const joueur = {
    prenom: utilisateurGoogle.w3.ofa,
    nom: utilisateurGoogle.w3.wea,
    email: utilisateurGoogle.w3.U3
  }
  yield put({ type: "AUTHENTIFIER_JOUEUR", payload: { joueur } })
}

export function* authentificationWatcher() {
  yield takeLatest("DEMARRER_AUTHENTIFICATION", authentification)
}