import { connect } from "react-redux"

import Questionnaire from "./Questionnaire"
import { mapStateToProps, mapDispatchToProps} from "./ConteneurQuestionnaire"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questionnaire)