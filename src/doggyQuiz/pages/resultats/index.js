import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

const Index = ({ score, joueur, solutions }) => (
  <div>
    <p>La bonne réponse était : { solutions }</p>
    <p>La vérité tu m'as déçu</p>
    <p>C'est perdu !</p>
    <p>Ton score est { score }</p>
    <p>Le classement !</p>
    <NavLink to={"/paroles-de-doggy"}>Accueil</NavLink>
  </div>
)

const mapStateToProps = state => ({
  score: state.score.toString(),
  joueur: state.joueur,
  solutions: state.question.solutions
})

export default connect(
  mapStateToProps
)(Index)