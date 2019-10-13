import React from "react"
import { connect } from "react-redux"
import { choisirJoueur } from "../../actions"
import { NavLink } from "react-router-dom"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import Podium from "../../composants/Podium"
import PhotoBulle from "../../composants/PhotoBulle"

const index = ({ joueursDisponibles, joueur, choisirJoueur }) => {
  return (
    <div className="choix-joueur">

      <div>
        <LogoDoggyQuiz/>
      </div>

      <div>
        <Podium/>
      </div>

      <div>
        <h2>T'es qui ?</h2>
        {joueursDisponibles.map(joueur => {
          return (
            <div className="joueur-selectionnable" key={joueur.trigramme}>
              <label htmlFor="joueur">
                <PhotoBulle/>
                <p>{ joueur.surnom }</p>
              </label>
              <input type="radio" name="joueur" value={ joueur.trigramme } onChange={ choisirJoueur }/>
            </div>
          )
        })}
        {joueur && <NavLink to={"/questionnaire"}>C'est parti !</NavLink>}
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  joueursDisponibles: state.joueursDisponibles,
  joueur: state.joueur
})

const mapDispatchToProps = dispatch => ({
  choisirJoueur: evenement => {
    const joueur = evenement.target.value
    dispatch(choisirJoueur(joueur))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)