import React from "react"
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"
import "./boutonNavigation.scss"

const BoutonNavigationBleu = ({ lienNavigation }) => (
  <div className="bouton-navigation">
    <NavLink to={lienNavigation}>
      <div className="texte">C'est parti !</div>
    </NavLink>
  </div>
)

BoutonNavigationBleu.propTypes = {
  lienNavigation: PropTypes.string.isRequired
}

export default BoutonNavigationBleu