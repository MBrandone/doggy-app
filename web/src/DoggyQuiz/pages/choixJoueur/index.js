import { connect } from "react-redux"

import ChoixJoueur from "./ChoixJoueur"
import { mapStateToProps } from "./ConteneurChoixJoueur"

export default connect(
  mapStateToProps,
  null
)(ChoixJoueur)