import React from "react"
import { choisirJoueur, recupererDoggies, reinitialiserJoueur } from "../../actions"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import Podium from "../../composants/Podium"
import BoutonNavigationBleu from "../../composants/BoutonNavigationBleu"
import ListeJoueursSelectionnables from "../../composants/ListeJoueursSelectionnables"
import "./choix-joueur.scss"
import { connect } from "react-redux"

class ChoixJoueur extends React.Component {
  async componentDidMount() {
    await this.props.reinitialiserJoueur()
    await this.props.recupererDoggies()
  }

  render() {
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
          <ListeJoueursSelectionnables evenementNouveauJoueurChoisi={this.props.choisirJoueur}
                                       joueursSelectionnables={this.props.joueursDisponibles}
                                       joueurSelectionne={this.props.joueur}/>
          {this.props.joueur &&
          <div className="conteneur-bouton-navigation">
            <BoutonNavigationBleu lienNavigation="/demarrage-partie" texte="C'EST PARTI !"/>
          </div>
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  joueursDisponibles: state.gestionJoueur.joueursDisponibles.joueurs,
  joueur: state.gestionJoueur.joueurConnecte
})

const mapDispatchToProps = dispatch => ({
  recupererDoggies: _ => {
    dispatch(recupererDoggies())
  },
  reinitialiserJoueur: _ => {
    dispatch(reinitialiserJoueur())
  },
  choisirJoueur: evenement => {
    const joueur = evenement.currentTarget.htmlFor
    dispatch(choisirJoueur(joueur))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoixJoueur)