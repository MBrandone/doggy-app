import React from "react"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import Podium from "../../composants/Podium"
import BoutonNavigationBleu from "../../composants/BoutonNavigationBleu"
import AuthentificateurGoogle from "../../composants/AuthentificateurGoogle"
import "./choix-joueur.scss"

const ChoixJoueur = ({ emailJoueur }) => (
  <div className="choix-joueur">

    <div className="logo">
      <LogoDoggyQuiz/>
    </div>

    <div className="podium">
      <Podium/>
    </div>

    <div className="selection">
      <div className="authentification">
        <AuthentificateurGoogle/>
        {emailJoueur &&
        <BoutonNavigationBleu lienNavigation="/demarrage-partie" texte="C'EST PARTI !"/>
        }
      </div>
      <div className="proposition-citation">
        <a
          className="bouton"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfozezBHz_Fcrps-F7CgIkKzQ03LH4_n0e6bXV3g7N_jA6uyQ/viewform?usp=sf_link">
          <p >Balance des citations</p>
          <img src="/images/icone-lien-externe.svg" alt="icone d'un lien externe" className="doggy-quiz"/>
        </a>
      </div>
    </div>

  </div>
)

export default ChoixJoueur