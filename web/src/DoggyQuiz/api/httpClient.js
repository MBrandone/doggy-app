const baseUrl = "http://localhost:8080"

export function apiGet(endpoint) {
  return fetch(baseUrl + endpoint)
    .then(response => response.json())
    .catch((error) => {
      console.log("erreur dans le fetch" + error)
    })
}

export function apiPost(endpoint, ressource) {
  return fetch(baseUrl + endpoint,
    {
      method: "POST",
      body: ressource
    })
    .then(response => response.json())
    .catch((error) => {
      console.log("erreur dans le fetch" + error)
    })
}