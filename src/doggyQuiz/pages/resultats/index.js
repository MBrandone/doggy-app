import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import LogoDoggyQuiz from "../../composants/LogoDoggyQuiz"
import PhotoBulle from "../../composants/PhotoBulle"
import "./resultats.scss"

const Index = ({ score, solutions }) => (
  <div className="resultats">

    <div className="conteneur-logo">
      <LogoDoggyQuiz/>
    </div>

    <div className="ecran-fin">
      <div className="conteneur-photo-bulle">
        <PhotoBulle/>
      </div>
      <p className="texte">
        <p className="texte-decu">La vérité tu m'as déçu !</p>
        <p className="texte-perdu">C'est perdu !</p>
      </p>
      <div className="classement">
        <div className="item-classement">
          <div className="identite">
            <p className="position">1</p>
            <div className="conteneur-classement-photo-bulle">
              <PhotoBulle/>
            </div>
            <p className="nom">Marizouz</p>
          </div>
          <div className="conteneur-score">
            32
          </div>
        </div>

        <div className="item-classement">
          <div className="identite">
            <p className="position">2</p>
            <div className="conteneur-classement-photo-bulle">
              <PhotoBulle/>
            </div>
            <p className="nom">Brondon</p>
          </div>
          <div className="conteneur-score">
            31
          </div>
        </div>
      </div>
    </div>
    <NavLink to={"/"}>Accueil</NavLink>
  </div>
)

const mapStateToProps = state => ({
  score: state.score.toString(),
  solutions: state.question.solutions
})

export default connect(
  mapStateToProps
)(Index)