import React from "react"
import PropTypes from 'prop-types'

const MessageCorrection = ({ aDonneBonneReponse }) => {
  let message = aDonneBonneReponse === true ? "La réponse est juste" : "La réponse est fausse"

  return (
  <div>
    <p>{ message }</p>
  </div>
)}

MessageCorrection.propTypes = {
  aDonneBonneReponse: PropTypes.bool.isRequired
}

export default MessageCorrection