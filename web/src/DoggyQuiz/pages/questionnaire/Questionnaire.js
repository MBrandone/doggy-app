import React from "react"
import Score from "../../composants/Score"
import IntituleDefi from "../../composants/IntituleDefi"
import LogoDoggySkool from "../../composants/LogoDoggySkool"
import FormulaireReponse from "./FormulaireReponse"
import "./questionnaire.scss"
import { Redirect } from "react-router-dom"

class Questionnaire extends React.Component {
  async componentDidMount() {
    await this.props.demanderNouveauDefi()
  }

  render() {
    if (this.props.joueurConnecte === null)
      return (<Redirect push to="/choix-joueur"/>)

    if (this.props.statutPartie === 'TERMINE') {
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
            {this.props.intitule && <FormulaireReponse />}
          </div>

        </div>
        <div className="premier-debordement"></div>
        <div className="deuxieme-debordement"></div>

        <LogoDoggySkool/>

      </div>
    )
  }
}

export default Questionnaire