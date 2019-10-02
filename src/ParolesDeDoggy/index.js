import React from "react"
import Bouton from "../Components/Bouton"
import citations from "../Donnees/citations"
import cygTriste from "../cyg-triste.jpeg"
import "../css/paroles-de-doggy.css"
import { NavLink } from "react-router-dom"

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const stateInitial = {
  citationsDisponibles: citations,
  citationSoumise: "",
  reponseSoumise: "",
  reponseCorrecte: false,
  reponseIncorrecte: false,
  score: 0,
  jeuCommence: false,
  jeuFini: false,
  afficherEcranFinale: false
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = stateInitial
    this.startGame = this.startGame.bind(this)
    this.corriger = this.corriger.bind(this)
    this.ecrireReponse = this.ecrireReponse.bind(this)
    this.passerALaCitationSuivante = this.passerALaCitationSuivante.bind(this)
    this.recommencer = this.recommencer.bind(this)
  }

  startGame() {
    const state = this.state
    state.jeuCommence = true
    state.citationSoumise = random(citations)
    this.setState(state)
  }

  corriger() {
    const state = this.state
    if (this.state.citationSoumise.auteurs.includes(this.state.reponseSoumise)
      || this.state.reponseSoumise === "DOGGYBAG") {
      state.reponseCorrecte = true
      state.score++
    } else {
      state.reponseIncorrecte = true
      state.jeuFini = true
    }
    this.setState(state)
    if (state.gameFinished) {
      setTimeout(() => {
        const state = this.state
        state.afficherEcranFinale = true
        this.setState(state)
      }, 2000)
    }
  }

  ecrireReponse(event) {
    const state = this.state
    state.reponseSoumise = event.target.value
    this.setState(state)
  }

  passerALaCitationSuivante() {
    const state = this.state
    state.citationsDisponibles = state.citationsDisponibles.filter(citation => {
      return citation.citation !== state.citationSoumise.citation
    })
    state.citationSoumise = random(state.citationsDisponibles)
    state.reponseSoumise = ""
    state.reponseCorrecte = false
    this.setState(state)
  }

  recommencer() {
    stateInitial.jeuCommence = false
    this.setState(stateInitial)
  }

  render() {
    return (
      <div className="paroles-de-doggy">
        <section>
          <NavLink className="lien-home" to="/">Home</NavLink>
          <div>
            <h1>Paroles de Doggy !</h1>
            <p className="description">Donne le polygramme du doggy qui est associé aux citations</p>
          </div>
          <div>
            {
              !this.state.jeuCommence &&
              <div className="bouton-go">
                <Bouton onClick={this.startGame} texte="Go !"></Bouton>
              </div>
            }
            {
              this.state.jeuCommence && !this.state.afficherEcranFinale &&
              <div className="jeu">
                <p className="score">Ton score : {this.state.score}</p>
                <blockquote className="citation">"{this.state.citationSoumise.citation}"</blockquote>
                <form className="formulaire">
                  <input className="reponse" value={this.state.reponseSoumise} onChange={this.ecrireReponse}/>
                  <button className="bouton-soumettre" type="button" onClick={this.corriger}>C'est ce doggy !</button>
                </form>
                {
                  this.state.reponseCorrecte &&
                  <div>
                    <p className="correction">Bonne réponse !</p>
                    <button className="bouton-citation-suivante" onClick={this.passerALaCitationSuivante}>Citation suivante !</button>
                  </div>
                }
                {
                  this.state.reponseIncorrecte &&
                  <div>
                    <p className="correction">Mauvaise réponse !</p>
                    <img src={cygTriste} className="photo-cyg-triste" alt="cyril avec une tête triste"/>
                  </div>
                }
              </div>
            }
            {
              this.state.afficherEcranFinale &&
              <div className="ecran-fin">
                <p className="score-finale">Ton score : {this.state.score}</p>
                <button className="bouton-rejouer" onClick={this.recommencer}>Prêt(e) à rejouer ?</button>
              </div>
            }
          </div>
        </section>
      </div>
    )
  }
}

export default App
