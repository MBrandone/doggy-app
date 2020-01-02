import { connect } from "react-redux"

import Resultats from "./Resultats"
import { mapStateToProps } from "./ConteneurResultats"

export default connect(
  mapStateToProps
)(Resultats)