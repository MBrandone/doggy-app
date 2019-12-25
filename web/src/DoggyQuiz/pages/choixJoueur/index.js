import React from "react"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import Podium from "../../composants/Podium"
import BoutonNavigationBleu from "../../composants/BoutonNavigationBleu"
import AuthentificateurGoogle from "../../composants/AuthentificateurGoogle"
import "./choix-joueur.scss"
import { connect } from "react-redux"

const ChoixJoueur = ({ emailJoueur }) => (
  <div className="choix-joueur">

    <div className="logo">
      <LogoDoggyQuiz/>
    </div>

    <div className="podium">
      <Podium/>
    </div>

    <div className="selection">
      <AuthentificateurGoogle/>
      {emailJoueur &&
      <BoutonNavigationBleu lienNavigation="/demarrage-partie" texte="C'EST PARTI !"/>
      }
    </div>

  </div>
)

const mapStateToProps = state => ({
  emailJoueur: state.gestionJoueur.joueurConnecte.email
})

export default connect(
  mapStateToProps,
  null
)(ChoixJoueur)