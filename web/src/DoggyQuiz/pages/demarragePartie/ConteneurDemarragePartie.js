import { commencerPartie } from "../../actions"

const mapStateToProps = state => ({
  joueur: state.gestionJoueur.joueurConnecte,
  etatChargement: state.quizz.partie.synchronisation
})

const mapDispatchToProps = dispatch => ({
  commencerPartie: _ => {
    dispatch(commencerPartie())
  }
})

export {
  mapStateToProps,
  mapDispatchToProps
}
