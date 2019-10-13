import React from "react"
import ReactDOM from "react-dom"
import "./styles/general.scss"
import DoggyQuizAccueil from "./doggyQuiz/pages/accueil"
import DoggyQuizChoixJoueur from "./doggyQuiz/pages/choixJoueur"
import DoggyQuizQuestionnaire from "./doggyQuiz/pages/questionnaire"
import DoggyQuizResultats from "./doggyQuiz/pages/resultats"
import * as serviceWorker from "./serviceWorker"

import { BrowserRouter, Route } from "react-router-dom"

import { createStore } from "redux"
import { Provider } from "react-redux"
import doggyQuizReducer from "./doggyQuiz/reducers"

const doggyQuizStore = createStore(doggyQuizReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={doggyQuizStore}>
      <Route exact path="/" component={DoggyQuizAccueil}/>
      <Route exact path="/choix-joueur" component={DoggyQuizChoixJoueur}/>
      <Route exact path="/questionnaire" component={DoggyQuizQuestionnaire}/>
      <Route exact path="/resultats" component={DoggyQuizResultats}/>
    </Provider>
  </BrowserRouter>,
document.getElementById("root")
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
