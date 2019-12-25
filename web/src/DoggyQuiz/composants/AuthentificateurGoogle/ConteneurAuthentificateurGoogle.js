import { demarrerAuthentification } from "../../actions"

const mapStateToProps = state => ({
  nonAuthentifie: state.gestionJoueur.statutAuthentification === "NON_AUTHENTIFIE",
  estAuthentifie: state.gestionJoueur.statutAuthentification === "AUTHENTIFIE",
  authentificationEnCours: state.gestionJoueur.statutAuthentification === "AUTHENTIFICATION_EN_COURS",
  prenomJoueur: state.gestionJoueur.joueurConnecte.prenom
})

const mapDispatchToProps = dispatch => ({
  demarrerAuthentification: _ => {
    dispatch(demarrerAuthentification())
  }
})

export {
  mapDispatchToProps,
  mapStateToProps
}