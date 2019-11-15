import React from "react"
import { sauvegarderReponse } from "../../actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import "./formulaireReponse.scss"
import PhotoBulle from "../../composants/PhotoBulle"


const FormulaireReponse = ({ citation, reponsesPossibles, reponseDonnee, reponseEstCorrecte, reponseEstIncorrecte, pasRepondu, sauvegarderReponse, reponseSoumise }) => {
  async function sauvegarderReponseEtContinuer(evenement) {
    evenement.preventDefault()
    if (pasRepondu) {
      const reponse = evenement.target.value
      await sauvegarderReponse(reponse, citation)
      reponseSoumise()
    }
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
                  + (bonneReponse(reponseDonnee, reponseEstCorrecte, reponsePossible) ? " reponse-correcte" : "")
                  + (mauvaiseReponse(reponseDonnee, reponseEstIncorrecte, reponsePossible) ? " reponse-incorrecte" : "")
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

const mapStateToProps = state => ({
  citation: state.quizz.partie.defi.intitule,
  reponsesPossibles: state.quizz.partie.defi.propositions,
  reponseDonnee: state.quizz.partie.reponse.reponseDonnee,
  reponseEstCorrecte: state.quizz.partie.reponse.correction === true,
  reponseEstIncorrecte: state.quizz.partie.reponse.correction === false,
  pasRepondu: state.quizz.partie.reponse.sauvegarde === "NON_DEMANDE"
})

const mapDispatchToProps = dispatch => ({
  sauvegarderReponse: (reponse, citation) => {
    dispatch(sauvegarderReponse(reponse, citation))
  }
})

FormulaireReponse.propTypes = {
  reponseSoumise: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormulaireReponse)