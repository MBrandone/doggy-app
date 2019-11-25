import React from "react"
import Score from "../../composants/Score"
import IntituleDefi from "../../composants/IntituleDefi"
import LogoDoggySkool from "../../composants/LogoDoggySkool"
import FormulaireReponse from "../../conteneurs/FormulaireReponse"
import {
  demanderNouveauDefi,
  mettreAJourScore,
} from "../../actions"
import { connect } from "react-redux"
import "./questionnaire.scss"
import { Redirect } from "react-router-dom"


class JeuParolesDeDoggy extends React.Component {
  async componentDidMount() {
    await this.props.demanderNouveauDefi()
  }

  async reponseSoumise() {
    if (this.props.correction) {
      this.props.passerAEtapeSuivante()
    }
  }

  render() {
    if (this.props.joueurConnecte === null)
      return (<Redirect push to="/choix-joueur"/>)

    if (this.props.correction === false) {
      return (<Redirect push to="/resultats"/>)
    }
    return (
      <div className="questionnaire">
        <div className="fiche-question">

          <div className="score">
            <Score score={this.props.score}/>
          </div>

          <div className="intitule-defi">
            {this.props.intitule && <IntituleDefi intitule={this.props.intitule}/>}
          </div>

          <div className="formulaire-reponse">
            {this.props.intitule && <FormulaireReponse reponseSoumise={this.reponseSoumise.bind(this)}/>}
          </div>

        </div>
        <div className="premier-debordement"></div>
        <div className="deuxieme-debordement"></div>

        <LogoDoggySkool/>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  joueurConnecte: state.gestionJoueur.joueurConnecte,
  score: state.quizz.partie.score,
  intitule: state.quizz.partie.defi.intitule,
  correction: state.quizz.partie.reponse.correction
})

const mapDispatchToProps = dispatch => ({
  demanderNouveauDefi: _ => {
    dispatch(demanderNouveauDefi())
  },
  passerAEtapeSuivante: _ => {
    dispatch(mettreAJourScore())
    dispatch(demanderNouveauDefi())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JeuParolesDeDoggy)