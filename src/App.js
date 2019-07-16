import React from "react"
import "./css/App.css"
import DoggyLogo from "./Components/DoggyLogo/DoggyLogo"

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      citations: [
        "Pépite !",
        "Arrêtez de me limer ! Nom de Zeus !",
        "Blague zoophile ? C'est un mec qui rentre dans un bar ...",
        "Blague zoophile ? C'est un mec qui prend son élan ...",
        "Rio, à Barra Club, l'autoroute du cul je te dis !",
        "Senior Manager de mon cul !",
        "J'en veux Jooooooooooe !",
        "Et ce soir ... on chope !",
        "Tu sais pas qui chui !",
        "Y a 5 places dans une Mégane.",
        "Ah mais moi, j'aime bien quand les mecs viennent me voir.",
        "Missile !",
        "Oh l'enfer !",
        "Ah !"
      ],
      currentCitation: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const state = this.state
    state.currentCitation = random(state.citations)
    this.setState(state)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <DoggyLogo/>
          <div className="citation">
            {random(this.state.citations)}
          </div>
          <button onClick={this.handleClick}>
            Autre citation !
          </button>
        </div>
      </div>
    )

  }
}

export default App
