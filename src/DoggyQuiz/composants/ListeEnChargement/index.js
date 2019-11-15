import React from "react"
import "./listeEnChargement.scss"
import PropTypes from "prop-types"

class ListeEnChargement extends React.Component {

  render() {
    const lignes = []
    for (let i = 0; i < this.props.nombreLignes; i++) {
      lignes.push("une lime " + i)
    }

    return (
      <div className="liste-en-chargement">
        {lignes.map(id => {
          return (
            <div key={id} className="item-chargement">
              <div className="bulle">
              </div>
              <p className="barre">
              </p>
            </div>
          )
        })}
      </div>
    )

  }
}


ListeEnChargement.propTypes = {
  nombreLignes: PropTypes.number.isRequired
}

export default ListeEnChargement