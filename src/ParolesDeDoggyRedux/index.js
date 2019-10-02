import React from "react"
import { NavLink } from "react-router-dom"

export default () => (
  <div>
    <h1>Bienvenue sur paroles de doggy</h1>
    <NavLink to={"/paroles-de-doggy-redux/choix-joueur"}>Wesh Tema !</NavLink>
  </div>
)
