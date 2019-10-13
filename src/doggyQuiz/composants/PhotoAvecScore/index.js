import React from "react"
import "./photoAvecScore.scss"

const photoAvecScore = () => {
  return (
    <div className="photo-avec-score">
      <img src="/images/logo-doggy-skool.png" alt="Le logo de la doggy" className="photo"/>
      <p className="score">32</p>
    </div>
  )
}

export default photoAvecScore