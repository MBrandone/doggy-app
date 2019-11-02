import React from "react"
import { connect } from "react-redux"
import { commencerPartie, choisirJoueur } from "../../actions"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import Podium from "../../composants/Podium"
import BoutonNavigationBleu from "../../composants/BoutonNavigationBleu"
import ListeJoueursSelectionnables from "../../composants/ListeJoueursSelectionnables"
import "./choix-joueur.scss"

const index = ({ joueursDisponibles, joueur, choisirJoueur }) => {
  return (
    <div className="choix-joueur">

      <div className="logo">
        <LogoDoggyQuiz/>
      </div>

      <div className="podium">
        <Podium/>
      </div>

      <div className="selection">
        <h2 className="titre">T'es qui ?</h2>
        <ListeJoueursSelectionnables evenementNouveauJoueurChoisi={choisirJoueur}
                                     joueursSelectionnables={joueursDisponibles} joueurSelectionne={joueur}/>
        { joueur &&
        <div className="conteneur-bouton-navigation">
          <BoutonNavigationBleu lienNavigation="/questionnaire" texte="C'EST PARTI !"/>
        </div>
        }
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  joueursDisponibles: state.joueursDisponibles,
  joueur: state.partie.joueur
})

const mapDispatchToProps = dispatch => ({
  choisirJoueur: evenement => {
    const joueur = evenement.currentTarget.htmlFor
    dispatch(commencerPartie())
    dispatch(choisirJoueur(joueur))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)