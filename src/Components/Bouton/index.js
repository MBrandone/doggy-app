import React from "react"
import "../../css/bouton.css"

class Bouton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <p className="bouton-texte">{this.props.texte }</p>
      </button>
    )
  }
}

export default Bouton