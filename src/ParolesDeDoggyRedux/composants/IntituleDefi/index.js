import React from "react"
import PropTypes from 'prop-types'

const IntituleDefi = ({ intitule }) => (
  <div>
    <p>Quel Doggy a dit ...</p>
    <blockquote>{ intitule }</blockquote>
  </div>
)

IntituleDefi.propTypes = {
  intitule: PropTypes.string.isRequired
}

export default IntituleDefi