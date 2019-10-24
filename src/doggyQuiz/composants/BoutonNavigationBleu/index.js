import React from "react"
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"
import "./boutonNavigationBleu.scss"

const BoutonNavigationBleu = ({ lienNavigation, texte }) => (
  <div className="bouton-navigation-bleu">
    <NavLink to={lienNavigation}>
      <div className="texte">{ texte }</div>
    </NavLink>
  </div>
)

BoutonNavigationBleu.propTypes = {
  lienNavigation: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired
}

export default BoutonNavigationBleu