import React from "react"
import PhotoBulle from "../../composants/PhotoBulle"
import "./classement.scss"

const Index = () => (
      <div className="classement">
        <div className="item-classement">
          <div className="identite">
            <p className="position">1</p>
            <div className="conteneur-classement-photo-bulle">
              <PhotoBulle/>
            </div>
            <p className="nom">Brondon</p>
          </div>
          <div className="conteneur-score">
            87
          </div>
        </div>
      </div>
)

export default Index