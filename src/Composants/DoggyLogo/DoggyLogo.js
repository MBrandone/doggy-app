import React from "react"
import doggyLogo from "../../doggy-logo.png"
import "./DoggyLogo.css"

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const animations = [
  "fast-spin-animation",
  "bounce-animation",
  "shake-animation",
  "shrink-animation",
  "spin-over-y-animation",
  "spin-over-x-animation"
]

class DoggyLogo extends React.Component {

  changeAnim() {
    const logo = document.getElementsByClassName("doggy-logo")[0];
    let animationsPossibles = animations;
    animations.forEach(animation => {
      if (logo.classList.contains(animation)) {
        logo.classList.remove(animation);
        animationsPossibles = animationsPossibles.filter(animationPossible => animationPossible !== animation);
      }
    })
    logo.classList.add(random(animationsPossibles));
  }

  render() {
    return (
      <button onClick={this.changeAnim}>
        <img src={doggyLogo} className="doggy-logo" alt="logo"/>
      </button>
    )
  }
}

export default DoggyLogo