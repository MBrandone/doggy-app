import { connect } from "react-redux"

import DemarragePartie from "./DemarragePartie"
import { mapStateToProps, mapDispatchToProps } from "./ConteneurDemarragePartie"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemarragePartie)