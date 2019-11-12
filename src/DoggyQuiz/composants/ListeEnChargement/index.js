import React from "react"
import "./listeEnChargement.scss"

const index = () => {
  return (
    <div className="liste-en-chargement">
      {[1, 2, 3, 4].map(id => {
        return (
          <div key={id} className="item-chargement">
            <div className="bulle">
            </div>
            <p className="barre">Hello</p>
          </div>
        )
      })}
    </div>
  )
}

export default index