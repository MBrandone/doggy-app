import React from "react"
import { connect } from "react-redux"
import { choisirJoueur } from "../../actions"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import Podium from "../../composants/Podium"
import PhotoBulle from "../../composants/PhotoBulle"
import BoutonNavigation from "../../composants/BoutonNavigation"
import "./choix-joueur.scss"

const index = ({ joueursDisponibles, trigrammeJoueur, choisirJoueur }) => {
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
        <div className="liste-joueurs">
          {joueursDisponibles.map(joueur => {
            return (
              <div key={joueur.trigramme} >
                <label htmlFor={joueur.trigramme} onClick={choisirJoueur}>
                  <div className="identite">
                    <div className="conteneur-photo-bulle">
                      <PhotoBulle/>
                    </div>
                    <p className="surnom">{joueur.surnom}</p>
                  </div>
                  <div className="radio">
                    <input type="radio" name="joueur" value={joueur.trigramme} readOnly checked={trigrammeJoueur === joueur.trigramme}/>
                    <span className="radio-custom"></span>
                  </div>
                </label>
              </div>
            )
          })}
          {trigrammeJoueur && <BoutonNavigation lienNavigation="/questionnaire"/>}

        </div>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  joueursDisponibles: state.joueursDisponibles,
  trigrammeJoueur: state.joueur
})

const mapDispatchToProps = dispatch => ({
  choisirJoueur: evenement => {
    const joueur = evenement.currentTarget.htmlFor
    dispatch(choisirJoueur(joueur))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)