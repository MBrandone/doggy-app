import React from "react"
import { connect } from "react-redux"

const Resultats = ({ score, joueur, solution }) => (
  <div>
    <p>La bonne réponse était : { solution }</p>
    <p>La vérité tu m'as déçu</p>
    <p>C'est perdu !</p>
    <p>Ton trigramme est { joueur }</p>
    <p>Ton score est { score }</p>
    <p>Le classement !</p>
  </div>
)

const mapStateToProps = state => ({
  score: state.score.toString(),
  joueur: state.joueur,
  solution: state.solution
})

export default connect(
  mapStateToProps
)(Resultats)