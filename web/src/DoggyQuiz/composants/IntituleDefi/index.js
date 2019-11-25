import React from "react"
import PropTypes from 'prop-types'
import "./intituleDefi.scss"

const IntituleDefi = ({ intitule }) => (
  <div>
    <p className="consigne">Quel Doggy a dit ...</p>
    <blockquote className="citation">{ intitule }</blockquote>
  </div>
)

IntituleDefi.propTypes = {
  intitule: PropTypes.string.isRequired
}

export default IntituleDefi