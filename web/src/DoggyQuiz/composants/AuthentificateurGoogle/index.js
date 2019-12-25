import { connect } from "react-redux"

import AuthentificateurGoogle from "./AuthentificateurGoogle"
import { mapStateToProps, mapDispatchToProps } from "./ConteneurAuthentificateurGoogle"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthentificateurGoogle)
