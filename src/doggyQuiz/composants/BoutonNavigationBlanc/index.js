import React from "react"
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"
import "./boutonNavigationBlanc.scss"

const BoutonNavigationBlanc = ({ lienNavigation, texte }) => (
  <div className="bouton-navigation-blanc">
    <NavLink to={lienNavigation}>
      <div className="texte">{ texte }</div>
    </NavLink>
  </div>
)

BoutonNavigationBlanc.propTypes = {
  lienNavigation: PropTypes.string.isRequired
}

export default BoutonNavigationBlanc