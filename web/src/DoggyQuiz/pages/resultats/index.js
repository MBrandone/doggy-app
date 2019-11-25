import React from "react"
import { connect } from "react-redux"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import PhotoBulle from "../../composants/PhotoBulle"
import BoutonNavigationBlanc from "../../composants/BoutonNavigationBlanc"
import Classement from "../../composants/Classement"
import "./resultats.scss"

const Index = () => (
  <div className="resultats">

    <div className="conteneur-logo">
      <LogoDoggyQuiz/>
    </div>

    <div className="ecran-fin">
      <div className="conteneur-photo-bulle">
        <PhotoBulle/>
      </div>

      <div className="texte">
        <p className="texte-decu">La vérité tu m'as déçu !</p>
        <p className="texte-perdu">C'est perdu !</p>
        <p className="texte-attente">
          Le classement sera bientôt disponible !<br/>
          En attendant, voici le classement provisoire :
        </p>
      </div>


      <Classement/>
    </div>

    <div className="conteneur-bouton-navigation">
      <BoutonNavigationBlanc lienNavigation="/" texte="ON VA BOIRE"/>
    </div>
  </div>
)

const mapStateToProps = state => ({
  score: state.quizz.partie.score.toString(),
})

export default connect(
  mapStateToProps
)(Index)