import React from "react"
import PropTypes from "prop-types"
import "./messageInformation.scss"

const MessageInformation = ({ texte }) => (
  <p className="message-information">
    {texte}
  </p>
)

MessageInformation.propTypes = {
  texte: PropTypes.string.isRequired
}

export default MessageInformation