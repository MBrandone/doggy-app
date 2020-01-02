const mapStateToProps = state => ({
  emailJoueur: state.gestionJoueur.joueurConnecte.email
})

export { mapStateToProps }