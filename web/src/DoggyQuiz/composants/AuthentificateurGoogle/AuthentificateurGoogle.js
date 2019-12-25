import React from "react"
import "./authentificateurGoogle.scss"

const AuthentificateurGoogle = ({ nonAuthentifie, estAuthentifie, authentificationEnCours, prenomJoueur, demarrerAuthentification }) => (
  <div className="authentificateur-google">
    {nonAuthentifie &&
    <div className="formulaire-authentification">
      <p className="texte-authentification">Authentifie-toi pour jouer !</p>
      <div className="conteneur-logo-google">
        <input type="image" src="/images/google-auth-logo.svg" alt="Le logo de Google"
               onClick={demarrerAuthentification}/>
      </div>
    </div>
    }
    {authentificationEnCours &&
    <div className="authentification-en-cours">
      Authentification en cours ...
    </div>
    }
    {estAuthentifie &&
    <p className="authentification-termine">
      Bienvenue {prenomJoueur}
    </p>
    }
  </div>
)

export default AuthentificateurGoogle