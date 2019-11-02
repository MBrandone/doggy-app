import React from "react"
import lottie from "lottie-web"
import "./podium.scss"
import PhotoAvecScore from "../PhotoAvecScore"

class Podium extends React.Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: document.getElementById("podium"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "https://assets10.lottiefiles.com/packages/lf20_X4eIEi.json"
    })
  }

  render() {
    return (
      <div className="podium">
        <div className="premier">
          <PhotoAvecScore/>
        </div>

        <div className="deuxieme">
          <PhotoAvecScore/>
        </div>

        <div className="troisieme">
          <PhotoAvecScore/>
        </div>

        <div className="animation" id="podium"></div>
      </div>
    )
  }
}

export default Podium