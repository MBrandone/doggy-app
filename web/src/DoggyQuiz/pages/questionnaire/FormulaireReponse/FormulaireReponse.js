import React from "react"
import "./formulaireReponse.scss"
import PhotoBulle from "../../../composants/PhotoBulle"
import "../../../../styles/animations/index.scss"

const FormulaireReponse = ({ citation, reponsesPossibles, reponseDonnee, reponseEnCoursDeValidation, reponseEstCorrecte, reponseEstIncorrecte, pasRepondu, sauvegarderReponse }) => {
  async function sauvegarderReponseEtContinuer(evenement) {
    evenement.preventDefault()
    if (pasRepondu) {
      const reponse = evenement.target.value
      await sauvegarderReponse(reponse, citation)
    }
  }

  function reponseChoisie(reponseDonnee, reponseCourante) {
    return reponseDonnee === reponseCourante && reponseEnCoursDeValidation
  }

  function bonneReponse(reponseDonnee, reponseEstCorrecte, reponseCourante) {
    return reponseDonnee === reponseCourante && reponseEstCorrecte
  }

  function mauvaiseReponse(reponseDonnee, reponseEstCorrecte, reponseCourante) {
    return reponseDonnee === reponseCourante && reponseEstIncorrecte
  }

  return (
    <form onSubmit={sauvegarderReponseEtContinuer}>
      {reponsesPossibles.map(reponsePossible => {
        return (
          <button key={reponsePossible}
                  className={"proposition"
                  + (reponseChoisie(reponseDonnee, reponsePossible) ? " reponse-choisie pulse" : "")
                  + (bonneReponse(reponseDonnee, reponseEstCorrecte, reponsePossible) ? " reponse-correcte tada" : "")
                  + (mauvaiseReponse(reponseDonnee, reponseEstIncorrecte, reponsePossible) ? " reponse-incorrecte tremble" : "")
                  }
                  value={reponsePossible}
                  onClick={sauvegarderReponseEtContinuer}>
            <div className="conteneur-photo-bulle">
              <PhotoBulle/>
            </div>
            {reponsePossible}
            <div className="conteneur-droite"></div>
          </button>
        )
      })}
    </form>
  )
}

export default FormulaireReponse