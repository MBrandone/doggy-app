import React from "react"
import { connect } from "react-redux"
import { choisirJoueur } from "../../actions"
import { NavLink } from "react-router-dom"

const index = ({ joueursDisponibles, joueur, choisirJoueur }) => {
  return (
  <div>
    <h1>Choisis ton joueur !</h1>
    <h2>Le classement !</h2>
    <h2>T'es qui ?</h2>
    { joueursDisponibles.map(joueur => {
      return (
        <div key={joueur.trigramme}>
          <input type="radio" name="joueur" value={joueur.trigramme} onChange={choisirJoueur}/>
          <label htmlFor="joueur">{ joueur.trigramme } / { joueur.nom } / { joueur.prenom }</label>
        </div>
      )
    })}
    {joueur && <NavLink to={"/paroles-de-doggy/defi"}>C'est parti !</NavLink>}
  </div>
)}

const mapStateToProps = state => ({
  joueursDisponibles: state.joueursDisponibles,
  joueur: state.joueur
})

const mapDispatchToProps = dispatch => ({
  choisirJoueur: evenement => {
    const joueur = evenement.target.value
    dispatch(choisirJoueur(joueur))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)