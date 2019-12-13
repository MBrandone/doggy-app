import { combineReducers } from "redux"
import gestionJoueurReducer from "./gestionJoueur/gestion-joueur-reducer"
import quizzReducer from "./quizz/quizz-reducer"
import classementReducer from "./classement/classement-reducer"

const reducer = combineReducers({
  gestionJoueur: gestionJoueurReducer,
  quizz: quizzReducer,
  classement: classementReducer
})

export default reducer
