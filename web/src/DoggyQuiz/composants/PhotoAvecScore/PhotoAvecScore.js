import React from "react"
import "./photoAvecScore.scss"
import index from "../ListeJoueursSelectionnables"
import PropTypes from "prop-types"

const photoAvecScore = ({ score }) => {
  return (
    <div className="photo-avec-score">
      <img src="/images/logo-doggy-skool.png" alt="Le logo de la doggy" className="photo"/>
      <p className="score">{ score }</p>
    </div>
  )
}

index.propTypes = {
  score: PropTypes.string,
}

export default photoAvecScore