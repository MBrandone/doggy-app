import React from "react"
import PropTypes from 'prop-types'

const Score = ({ score }) => (
  <p>Ton score : { score.toString() }</p>
)

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score