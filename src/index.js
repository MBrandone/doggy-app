import React from "react"
import ReactDOM from "react-dom"
import "./css/index.css"
import App from "./App"
import ParolesDeDoggyReduxAccueil from "./ParolesDeDoggyRedux/pages/accueil"
import ParolesDeDoggyReduxChoixJoueur from "./ParolesDeDoggyRedux/pages/choixJoueur"
import ParolesDeDoggyReduxQuestionnaire from "./ParolesDeDoggyRedux/pages/questionnaire"
import ParolesDeDoggyReduxResultats from "./ParolesDeDoggyRedux/pages/resultats"
import * as serviceWorker from "./serviceWorker"

import { BrowserRouter, Route } from "react-router-dom"

import { createStore } from "redux"
import { Provider } from "react-redux"
import parolesDeDoggyReducer from "./ParolesDeDoggyRedux/reducers"

const parolesDeDoggyStore = createStore(parolesDeDoggyReducer)

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}/>
    <Provider store={parolesDeDoggyStore}>
      <Route exact path="/paroles-de-doggy" component={ParolesDeDoggyReduxAccueil}/>
      <Route exact path="/paroles-de-doggy/choix-joueur" component={ParolesDeDoggyReduxChoixJoueur}/>
      <Route exact path="/paroles-de-doggy/questionnaire" component={ParolesDeDoggyReduxQuestionnaire}/>
      <Route exact path="/paroles-de-doggy/resultats" component={ParolesDeDoggyReduxResultats}/>
    </Provider>
  </BrowserRouter>,
document.getElementById("root")
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
