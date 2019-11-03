import React from "react"
import { sauvegarderReponse } from "../../actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import "./formulaireReponse.scss"
import PhotoBulle from "../../composants/PhotoBulle"


const FormulaireReponse = ({ reponsesPossibles, sauvegarderReponse, reponseSoumise }) => {
  function sauvegarderReponseEtContinuer(evenement) {
    evenement.preventDefault()
    const reponse = evenement.target.value
    sauvegarderReponse(reponse)
    reponseSoumise()
  }

  return (
    <form onSubmit={sauvegarderReponseEtContinuer}>
      {reponsesPossibles.map(reponsePossible => {
        return (
          <button key={reponsePossible} className="proposition" value={reponsePossible}
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
  reponsesPossibles: state.quizz.partie.question.propositions
})

const mapDispatchToProps = dispatch => ({
  sauvegarderReponse: reponse => {
    dispatch(sauvegarderReponse(reponse))
  }
})

FormulaireReponse.propTypes = {
  reponseSoumise: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormulaireReponse)