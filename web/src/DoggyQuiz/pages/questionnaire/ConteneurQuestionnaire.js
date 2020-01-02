import {
  demanderNouveauDefi,
} from "../../actions"
import "./questionnaire.scss"

const mapStateToProps = state => ({
  joueurConnecte: state.gestionJoueur.joueurConnecte,
  score: state.quizz.partie.score,
  intitule: state.quizz.partie.defi.intitule,
  statutPartie: state.quizz.partie.statut
})

const mapDispatchToProps = dispatch => ({
  demanderNouveauDefi: _ => {
    dispatch(demanderNouveauDefi())
  },
})

export {
  mapStateToProps,
  mapDispatchToProps
}
