const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function authentifierUtilisateur() {
  return new Promise((resolve, reject) => {

    return window.gapi.load("client:auth2", () => {

      return window.gapi.client.init({
        apiKey,
        "discoveryDocs": ["https://people.googleapis.com/$discovery/rest"],
        clientId,
        "scope": "profile"
      }).then(async () => {
        let GoogleAuth = window.gapi.auth2.getAuthInstance()

        GoogleAuth.signIn()
          .then(
            (res) => {
              const GoogleUser = GoogleAuth.currentUser.get()
              resolve(GoogleUser)
            },
            (err) => {
              reject(err)
            }
          )

      })
    })
  })
}

export {
  authentifierUtilisateur
}