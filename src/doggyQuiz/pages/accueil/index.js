import React from "react"
import { NavLink } from "react-router-dom"
import "./accueil.scss"
import LogoDoggyQuizAvecFruits from "../../composants/LogoDoggyQuizAvecFruits"

export default () => (
  <div className="accueil">

    <div className="logo">
      <LogoDoggyQuizAvecFruits/>
    </div>

    <div className="tema-wesh">
      <NavLink to={"/choix-joueur"}>
        <div className="texte-lien">TÉMA WESH !</div>
      </NavLink>
    </div>

    <div className="sponsor">
      <p>Sponsorisé par</p>
      <div>
        <img src="/images/logo-doggy-skool.svg" alt="Le logo de la Doggy Skool"/>
      </div>
    </div>

  </div>
)
