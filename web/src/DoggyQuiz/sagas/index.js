import { all } from "redux-saga/effects"
import { recupererClassementWatcher } from "./classement"
import { recupererDoggiesWatcher } from "./doggies"
import { sauvegarderReponseWatcher, commencerPartieWatcher, demanderNouveauDefiWatcher } from "./quizz"
import { authentificationWatcher } from "./authentification"

export default function* rootSaga() {
  yield all([
    recupererDoggiesWatcher(),
    commencerPartieWatcher(),
    sauvegarderReponseWatcher(),
    demanderNouveauDefiWatcher(),
    recupererClassementWatcher(),
    authentificationWatcher()
  ])
}