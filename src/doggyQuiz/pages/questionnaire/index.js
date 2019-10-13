import Score from "../../composants/Score"
import IntituleDefi from "../../composants/IntituleDefi"
import FormulaireReponse from "../../conteneurs/FormulaireReponse"
import MessageCorrection from "../../composants/MessageCorrection"
import {
  choisirNouveauDefi,
  choisirDefiEnFonctionReponsePrecedente,
  corrigerReponse,
  mettreAJourScore,
  retirerDefiDesDefisDisponibles
} from "../../actions"
import { connect } from "react-redux"
import React from "react"
import { NavLink } from "react-router-dom"

class JeuParolesDeDoggy extends React.Component{
  componentDidMount() {
    this.props.choisirNouveauDefi()
  }

  render(){
    return (
      <div>
        <Score score={this.props.score}/>
        {this.props.intitule && <IntituleDefi intitule={this.props.intitule}/>}
        {this.props.intitule && <FormulaireReponse reponseSoumise={this.props.passerAEtapeSuivante}/>}
        {this.props.reponseDonnee && <MessageCorrection aDonneBonneReponse={this.props.aDonneBonneReponse}/>}
        {this.props.aDonneMauvaiseReponse && <NavLink to={"/resultats"}>Voir les résultats</NavLink>}
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