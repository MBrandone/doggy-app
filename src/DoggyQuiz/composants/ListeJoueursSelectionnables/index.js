import React from "react"
import PhotoBulle from "../../composants/PhotoBulle"
import "./listeJoueursSelectionnables.scss"
import PropTypes from "prop-types"

const index = ({ joueursSelectionnables, joueurSelectionne, evenementNouveauJoueurChoisi }) => {
  function joueurCourantEstSelectionne(joueurSelectionne, joueurCourant) {
    if (joueurSelectionne) {
      return joueurSelectionne.trigramme === joueurCourant.trigramme
    }
    return false
  }

  return (
    <div className="liste-joueurs">
      {joueursSelectionnables.map(joueur => {
        return (
          <div key={joueur.trigramme}>
            <label htmlFor={joueur.trigramme} onClick={evenementNouveauJoueurChoisi}>
              <div className="identite">
                <div className="conteneur-photo-bulle">
                  <PhotoBulle/>
                </div>
                <p className="surnom">{joueur.surnom}</p>
              </div>
              <div className="radio">
                <input type="radio" name="joueur" value={joueur.trigramme} readOnly
                       checked={joueurCourantEstSelectionne(joueurSelectionne, joueur)}/>
                <span className="radio-custom"></span>
              </div>
            </label>
          </div>
        )
      })}
    </div>
  )
}

index.propTypes = {
  joueurSelectionne: PropTypes.object,
  joueursSelectionnables: PropTypes.array.isRequired,
  evenementNouveauJoueurChoisi: PropTypes.func.isRequired
}

export default index