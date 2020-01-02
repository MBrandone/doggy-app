import { connect } from "react-redux"

import FormulaireReponse from "./FormulaireReponse"
import { mapStateToProps, mapDispatchToProps } from "./ConteneurFormulaireReponse"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormulaireReponse)