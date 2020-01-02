import React from "react"
import "./demarragePartie.scss"
import LogoDoggySkool from "../../composants/LogoDoggySkool"
import Loader from "../../composants/Loader"
import MessageInformation from "../../composants/MessageInformation"
import { Redirect } from "react-router-dom"

class DemarrageQuestionnaire extends React.Component {
  async componentDidMount() {
    if (this.props.joueur !== null)
      await this.props.commencerPartie()
  }

  render() {
    if (this.props.joueur === null)
      return (<Redirect push to="/choix-joueur"/>)

    if (this.props.etatChargement === "TERMINE") {
      return (<Redirect push to="/questionnaire"/>)
    }

    return (
      <div className="demarrage">

        <div className="loader">
          <Loader/>
        </div>

        <div className="conteneur-message-information">
          <MessageInformation texte={"On se calme " + this.props.joueur.surnom}/>
        </div>

        <div className="sponsor">
          <p>Sponsorisé par</p>
          <div>
            <LogoDoggySkool/>
          </div>
        </div>

      </div>
    )
  }
}

export default DemarrageQuestionnaire