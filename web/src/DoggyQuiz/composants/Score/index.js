import React from "react"
import PropTypes from 'prop-types'
import "./score.scss"

const Score = ({ score }) => (
  <div className="score">{ score.toString() }</div>
)

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score