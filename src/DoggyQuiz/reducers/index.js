import { combineReducers } from "redux"
import gestionJoueurReducer from "./gestion-joueur-reducer"
import quizzReducer from "./quizz-reducer"

const reducer = combineReducers({
  gestionJoueur: gestionJoueurReducer,
  quizz: quizzReducer
})

export default reducer
