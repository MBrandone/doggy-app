import React from "react"
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
import "./questionnaire.scss"
import { Redirect } from "react-router-dom"


class JeuParolesDeDoggy extends React.Component {
  async componentDidMount() {
    await this.props.choisirNouveauDefi()
  }

  async reponseSoumise() {
    await this.props.corrigerReponse()
    if (this.props.correction) {
      this.props.passerAEtapeSuivante()
    }
  }

  render() {
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
  score: state.partie.score,
  intitule: state.question.intitule,
  correction: state.partie.correction
})

const mapDispatchToProps = dispatch => ({
  choisirNouveauDefi: _ => {
    dispatch(choisirNouveauDefi())
  },
  corrigerReponse: _ => {
    dispatch(corrigerReponse())
  },
  passerAEtapeSuivante: _ => {
    dispatch(mettreAJourScore())
    dispatch(retirerDefiDesDefisDisponibles())
    dispatch(choisirDefiEnFonctionReponsePrecedente())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JeuParolesDeDoggy)