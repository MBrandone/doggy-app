import React from "react"
import PropTypes from "prop-types";
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

Bouton.propTypes = {
  texte: PropTypes.string,
  onClick: PropTypes.func,
};

// TODO install prop-types

export default Bouton