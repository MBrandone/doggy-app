import React from "react"
import PropTypes from 'prop-types'

const IntituleDefi = ({ defi }) => (
  <div>
    <p>Quel Doggy a dit ...</p>
    <blockquote>{ defi.citation }</blockquote>
  </div>
)

IntituleDefi.propTypes = {
  defi: PropTypes.object.isRequired
}

export default IntituleDefi