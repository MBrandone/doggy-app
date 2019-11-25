import React from "react"
import ReactDOM from "react-dom"
import "./styles/general.scss"

import { BrowserRouter, Route } from "react-router-dom"

import DoggyQuizAccueil from "./DoggyQuiz/pages/accueil"
import DoggyQuizChoixJoueur from "./DoggyQuiz/pages/choixJoueur"
import DoggyQuizDemarragePartie from "./DoggyQuiz/pages/demarragePartie"
import DoggyQuizQuestionnaire from "./DoggyQuiz/pages/questionnaire"
import DoggyQuizResultats from "./DoggyQuiz/pages/resultats"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import doggyQuizReducer from "./DoggyQuiz/reducers"
import createSagaMiddleware from 'redux-saga';
import rootSaga from './DoggyQuiz/sagas';

import * as serviceWorker from "./serviceWorker"

const sagaMiddleware = createSagaMiddleware();
const doggyQuizStore = createStore(doggyQuizReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={doggyQuizStore}>
      <Route exact path="/" component={DoggyQuizAccueil}/>
      <Route exact path="/choix-joueur" component={DoggyQuizChoixJoueur}/>
      <Route exact path="/demarrage-partie" component={DoggyQuizDemarragePartie}/>
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
