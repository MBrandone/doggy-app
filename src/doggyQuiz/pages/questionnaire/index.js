import Score from "../../composants/Score"
import IntituleDefi from "../../composants/IntituleDefi"
import LogoDoggySkool from "../../composants/LogoDoggySkool"
import FormulaireReponse from "../../conteneurs/FormulaireReponse"
import {
  choisirDefiEnFonctionReponsePrecedente,
  choisirNouveauDefi,
  corrigerReponse,
  mettreAJourScore,
  retirerDefiDesDefisDisponibles
} from "../../actions"
import { connect } from "react-redux"
import React from "react"
import "./questionnaire.scss"

class JeuParolesDeDoggy extends React.Component {
  componentDidMount() {
    this.props.choisirNouveauDefi()
  }

  render() {
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
            {this.props.intitule && <FormulaireReponse reponseSoumise={this.props.passerAEtapeSuivante}/>}
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
  score: state.score,
  intitule: state.question.intitule,
  correction: state.correction,
  reponseDonnee: state.correction !== null,
  aDonneBonneReponse: state.correction === true,
  aDonneMauvaiseReponse: state.correction === false
})

const mapDispatchToProps = dispatch => ({
  choisirNouveauDefi: _ => {
    dispatch(choisirNouveauDefi())
  },
  passerAEtapeSuivante: _ => {
    dispatch(corrigerReponse())
    dispatch(mettreAJourScore())
    dispatch(retirerDefiDesDefisDisponibles())
    dispatch(choisirDefiEnFonctionReponsePrecedente())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JeuParolesDeDoggy)