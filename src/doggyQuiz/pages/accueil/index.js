import React from "react"
import { NavLink } from "react-router-dom"
import "./accueil.scss"

export default () => (
  <div className="accueil">
    <div className="logo">
      <img src="/images/logo-doggy-quiz.svg" alt="Le logo du doggy quiz" className="doggy-quiz"/>
      <img src="/images/aubergine.svg" alt="une aubergine" className="aubergine"/>
      <img src="/images/peche.svg" alt="une peche" className="peche"/>
    </div>

    <div className="tema-wesh">
      <NavLink to={"/paroles-de-doggy/choix-joueur"}>
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
