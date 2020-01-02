import { sauvegarderReponse } from "../../../actions"

const mapStateToProps = state => ({
  citation: state.quizz.partie.defi.intitule,
  reponsesPossibles: state.quizz.partie.defi.propositions,
  reponseDonnee: state.quizz.partie.reponse.reponseDonnee,
  reponseEstCorrecte: state.quizz.partie.reponse.correction === true,
  reponseEstIncorrecte: state.quizz.partie.reponse.correction === false,
  pasRepondu: state.quizz.partie.reponse.sauvegarde === "NON_DEMANDE",
  reponseEnCoursDeValidation: state.quizz.partie.reponse.sauvegarde === "EN_COURS"
})

const mapDispatchToProps = dispatch => ({
  sauvegarderReponse: (reponse, citation) => {
    dispatch(sauvegarderReponse(reponse, citation))
  }
})

export {
  mapStateToProps,
  mapDispatchToProps
}
