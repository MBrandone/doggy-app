import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

const Index = ({ score, solutions }) => (
  <div>
    <p>La bonne réponse était : { solutions }</p>
    <p>La vérité tu m'as déçu</p>
    <p>C'est perdu !</p>
    <p>Ton score est { score }</p>
    <p>Le classement !</p>
    <NavLink to={"/"}>Accueil</NavLink>
  </div>
)

const mapStateToProps = state => ({
  score: state.score.toString(),
  solutions: state.question.solutions
})

export default connect(
  mapStateToProps
)(Index)