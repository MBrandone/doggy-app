import React from "react"
import { sauvegarderReponse } from "../../actions"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import "./formulaireReponse.scss"
import PhotoBulle from "../../composants/PhotoBulle"


const FormulaireReponse = ({ reponsesPossibles, sauvegarderReponse, reponseSoumise }) => {
  //let input
  let reponseCourante = ""
  function sauvegarderReponseEtContinuer(evenement) {
    evenement.preventDefault()
    if (!reponseCourante.trim()) {
      return
    }
    sauvegarderReponse(reponseCourante)
    reponseSoumise()
  }

  /*function changerReponseSelectionnee(evenement) {
    reponseCourante = evenement.currentTarget.value
  }*/

  return (
    <form onSubmit={sauvegarderReponseEtContinuer}>
      { reponsesPossibles.map(reponsePossible => {
        return (
          <button key={reponsePossible} className="proposition">
            <div className="conteneur-photo-bulle">
              <PhotoBulle/>
            </div>
            <label htmlFor="reponse">{ reponsePossible }</label>
            <div className="conteneur-droite"></div>
          </button>
      )
      })}
    </form>
  )
}

const mapStateToProps = state => ({
  reponsesPossibles: state.reponsesPossibles
})

const mapDispatchToProps = dispatch => ({
  sauvegarderReponse: reponse => {
    dispatch(sauvegarderReponse(reponse))
  },
})

FormulaireReponse.propTypes = {
  reponseSoumise: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormulaireReponse)