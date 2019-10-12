import React from "react"
import { sauvegarderReponse } from "../../actions"
import { connect } from "react-redux"
import PropTypes from 'prop-types'

const FormulaireReponse = ({ reponsesPossibles, sauvegarderReponse, reponseSoumise }) => {
  let input
  let reponseCourante = ""
  function sauvegarderReponseEtContinuer(evenement) {
    evenement.preventDefault()
    if (!reponseCourante.trim()) {
      return
    }
    sauvegarderReponse(reponseCourante)
    reponseSoumise()
  }

  function changerReponseSelectionnee(evenement) {
    reponseCourante = evenement.currentTarget.value
  }

  return (
    <form onSubmit={sauvegarderReponseEtContinuer}>
      { reponsesPossibles.map(reponsePossible => {
        return (
          <div key={reponsePossible}>
            <input type="radio" name="reponse" value={ reponsePossible } onChange={ changerReponseSelectionnee }/><label htmlFor="reponse">{ reponsePossible }</label>
          </div>
      )
      })}
      <input type="submit" value="C'est ce doggy !"/>
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