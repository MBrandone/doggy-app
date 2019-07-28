import React from "react"
import "./css/App.css"
import DoggyLogo from "./Components/DoggyLogo/DoggyLogo"
import { NavLink } from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="accueil">
        <div className="conteneur">
          <DoggyLogo/>
          <div className="lien">
            <NavLink className="nav-link" to="/paroles-de-doggy">
              <span className="texte-lien">Jouer à Paroles de Doggy</span>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default App
