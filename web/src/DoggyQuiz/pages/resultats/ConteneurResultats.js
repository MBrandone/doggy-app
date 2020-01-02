const mapStateToProps = state => ({
  score: state.quizz.partie.score.toString(),
})

export {
  mapStateToProps
}
