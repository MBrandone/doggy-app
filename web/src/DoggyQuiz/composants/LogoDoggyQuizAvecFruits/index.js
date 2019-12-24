import React from "react"
import "./logoDoggyQuizAvecFruits.scss"
import "../../../styles/animations/index.scss"

const LogoDoggyQuizAvecFruits = _ => (
  <div className="logo-doggy-quiz-avec-fruits apparition-tournante">
    <img src="/images/logo-doggy-quiz.svg" alt="Le logo du doggy quiz" className="doggy-quiz"/>
    <img src="/images/aubergine.svg" alt="une aubergine" className="aubergine"/>
    <img src="/images/peche.svg" alt="une peche" className="peche"/>
  </div>
)

export default LogoDoggyQuizAvecFruits
