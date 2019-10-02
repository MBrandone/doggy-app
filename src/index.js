import React from "react"
import ReactDOM from "react-dom"
import "./css/index.css"
import App from "./App"
import ParolesDeDoggy from "./ParolesDeDoggy"
import ParolesDeDoggyReduxAccueil from "./ParolesDeDoggyRedux"
import ParolesDeDoggyReduxChoixJoueur from "./ParolesDeDoggyRedux/choixJoueur"
import ParolesDeDoggyReduxDefi from "./ParolesDeDoggyRedux/defi"
import ParolesDeDoggyReduxResultats from "./ParolesDeDoggyRedux/resultats"
import * as serviceWorker from "./serviceWorker"

import { BrowserRouter, Route } from "react-router-dom"

import { createStore } from "redux"
import { Provider } from "react-redux"
import parolesDeDoggyReducer from "./ParolesDeDoggyRedux/reducers"

const parolesDeDoggyStore = createStore(parolesDeDoggyReducer)

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}/>
    <Route exact path="/paroles-de-doggy" component={ParolesDeDoggy}/>
    <Provider store={parolesDeDoggyStore}>
      <Route exact path="/paroles-de-doggy-redux" component={ParolesDeDoggyReduxAccueil}/>
      <Route exact path="/paroles-de-doggy-redux/choix-joueur" component={ParolesDeDoggyReduxChoixJoueur}/>
      <Route exact path="/paroles-de-doggy-redux/defi" component={ParolesDeDoggyReduxDefi}/>
      <Route exact path="/paroles-de-doggy-redux/resultats" component={ParolesDeDoggyReduxResultats}/>
    </Provider>
  </BrowserRouter>,
document.getElementById("root")
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
