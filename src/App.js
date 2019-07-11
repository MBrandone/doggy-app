import React from "react"
import doggyLogo from "./doggy-logo.png"
import "./App.css"

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const animations = [
  "spin-animation",
  "bounce-animation",
  "shake-animation",
  "shrink-animation"
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      citations: [
        "Pépite !",
        "Senior Manager de mon cul !",
        "J'en veux Jooooooooooe !",
        "Et ce soir ... on chope !",
        "Tu sais pas qui chui !",
        "Y a 5 places dans une Mégane.",
        "Missile !",
        "Oh l'enfer !",
        "Ah !"
      ],
      currentCitation: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.changeAnim = this.changeAnim.bind(this)
  }

  handleClick() {
    const state = this.state
    state.currentCitation = random(state.citations)
    this.setState(state)
  }

  changeAnim() {
    const image = document.getElementsByClassName("App-logo");
    image[0].classList.remove("spin-animation", "bounce-animation", "shake-animation", "shrink-animation");
    image[0].classList.add(random(animations));
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <button onClick={this.changeAnim}>
            <img src={doggyLogo} className="App-logo" alt="logo"/>
          </button>
          <div className="citation">
            {random(this.state.citations)}
          </div>
          <button onClick={this.handleClick}>
            Clique moi !
          </button>
        </div>
      </div>
    )

  }
}

export default App
