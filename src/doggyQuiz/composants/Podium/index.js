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
      <div className="podium" id="podium">
        <div className="photo premier">
          <PhotoAvecScore/>
        </div>

        <div className="photo deuxieme">
          <PhotoAvecScore/>
        </div>

        <div className="photo troisieme">
          <PhotoAvecScore/>
        </div>
      </div>
    )
  }
}

export default Podium