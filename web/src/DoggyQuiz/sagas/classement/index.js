import doggies from "../../../Donnees/doggies"
import { put, takeLatest } from "redux-saga/effects"

// GET classement
// => 200 [ {score, joueur : { photo, nom }}, { score, joueur : { photo, nom }}, { score, joueur : { photo, nom }} ]
function* recupererClassement() {
  //const doggies = yield fetch(baseUrl + '/').then(reponse => reponse.json() );
  const moi = doggies.find(doggy => doggy.trigramme === "BRM")
  const premierePosition = { classification: 1, meilleurScore: 100, doggy: moi }
  const classifications = [premierePosition]

  yield put({ type: "RECUPERER_CLASSEMENT_SUCCES", payload: { classifications } })
  // .catch((erreur) => {
  // yield put({ type: "RECUPERER_CLASSEMENT_ERREUR" })
  // })
}

export function* recupererClassementWatcher() {
  yield takeLatest("RECUPERER_CLASSEMENT", recupererClassement)
}