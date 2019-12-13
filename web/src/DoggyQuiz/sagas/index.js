import { all, call, put, takeLatest } from "redux-saga/effects"
import doggies from "../../Donnees/doggies"
import citations from "../../Donnees/citations"

const baseUrl = "http://localhost:8080"
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function apiGet(endpoint) {
  return fetch(baseUrl + endpoint)
    .then(response => response.json())
    .catch((error) => {
      console.log("erreur dans le fetch" + error)
    })
}

function apiPost(endpoint, ressource) {
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

// JOUEURS DISPONIBLES----------------------------------------------------------------

function* recupererDoggies() {
  let doggiesRecuperes

  try {
    doggiesRecuperes = yield call(apiGet, "/doggies")

  } catch (erreur) {
    yield put({ type: "RECUPERER_DOGGIES_ERREUR" })

  }

  yield put({ type: "RECUPERER_DOGGIES_SUCCES", payload: { doggies: doggiesRecuperes } })
}

function* recupererDoggiesWatcher() {
  yield takeLatest("RECUPERER_DOGGIES", recupererDoggies)
}

// QUIZZ------------------------------------------------------------------------------

// POST /partie { personneAssociee } (à protéger, uniquement l'application peut poster)
// => 201 {id, score, personneAssociee, defiAPoser: { id, citation, reponsesPossibles } }
// Correspond à créer nouvelle partie
function* commencerPartie() {
  //let partie
//
  //try {
  //  partie = yield call(apiPost, "/parties", {joueur})
//
  //} catch (erreur) {
  //  yield put({ type: "COMMENCER_PARTIE_ERREUR" })
//
  //}
//
  //yield put({ type: "COMMENCER_PARTIE_SUCCES", payload: { partie } })

  //----------------------
  const partie = {
    score: 0,
    correction: null,
    defi: {
      intitule: "",
      propositions: [],
      solutions: []
    },
    reponse: {
      reponseDonnee: null,
      correction: null,
      sauvegarde: "NON_DEMANDE"
    }
  }
  yield put({ type: "COMMENCER_PARTIE_SUCCES", payload: { partie } })

}

function* commencerPartieWatcher() {
  yield takeLatest("COMMENCER_PARTIE", commencerPartie)
}

// POST partie/:id/reponse
// => 201 { reponse, challengeId } ou 400 no-content
// Correspond à sauvegarder reponse + corriger reponse
function* sauvegarderReponse(action) {
  //const reponse = yield fetch(baseUrl + '/').then(reponse => reponse.json() );
  const correction = corrigerReponse(action.reponse, action.citation)
  const reponse = {
    reponseDonnee: action.reponse,
    correction
  }
  yield put({ type: "SAUVEGARDER_REPONSE_SUCCES", payload: { reponse } })
  // .catch((erreur) => {
  // yield put({ type: "SAUVEGARDER_REPONSE_ERREUR" })
  // })
}

function corrigerReponse(reponse, citation) {
  const defiReleve = citations.find(citationPossible => citationPossible.citation === citation)
  return defiReleve.auteurs.includes(reponse)
}

function* sauvegarderReponseWatcher() {
  yield takeLatest("SAUVEGARDER_REPONSE", sauvegarderReponse)
}

// GET partie/:id/defiSuivant
// => Si partie non terminé 200 { id, citation, reponsesPossibles }
// => Si partie terminé 400
// Correspond à choisir defi suivant
function* demanderNouveauDefi() {
  //const defiSuivant = yield fetch(baseUrl + '/partie/:id/defiSuivant').then(reponse => reponse.json() );
  yield delay(2000)
  const defiSuivant = choisirDefiSuivant()
  yield put({ type: "DEMANDER_NOUVEAU_DEFI_SUCCES", payload: { defiSuivant } })
  // .catch((erreur) => {
  // yield put({ type: "DEMANDER_NOUVEAU_DEFI_ERREUR" })
  // })
}

function choisirDefiSuivant() {
  const citationSoumise = random(citations)
  const nouvellesPropositions = DeterminerQuatrePropositions(citationSoumise, prendreValeurDansTableauObjet("trigramme", doggies))

  return {
    intitule: citationSoumise.citation,
    propositions: nouvellesPropositions,
    solutions: citationSoumise.auteurs
  }
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function DeterminerQuatrePropositions(defi, ensemblePropositions) {
  let ensemblePropositionsSansBonnesReponses = ensemblePropositions.filter(proposition => defi.auteurs.includes(proposition) !== true)
  const premiereProposition = random(ensemblePropositionsSansBonnesReponses)
  ensemblePropositionsSansBonnesReponses = ensemblePropositionsSansBonnesReponses.filter(proposition => proposition !== premiereProposition)
  const deuxiemeProposition = random(ensemblePropositionsSansBonnesReponses)
  ensemblePropositionsSansBonnesReponses = ensemblePropositionsSansBonnesReponses.filter(proposition => proposition !== deuxiemeProposition)
  const troisiemeProposition = random(ensemblePropositionsSansBonnesReponses)
  return melanger([random(defi.auteurs), premiereProposition, deuxiemeProposition, troisiemeProposition])
}

function melanger(tableau) {
  return tableau.sort(() => {
    return .5 - Math.random()
  })
}

function prendreValeurDansTableauObjet(champs, tableauObjet) {
  return tableauObjet.map(objet => objet[champs])
}

function* demanderNouveauDefiWatcher() {
  yield takeLatest("DEMANDER_NOUVEAU_DEFI", demanderNouveauDefi)
}

// GET classement
// => 200 [ {score, joueur : { photo, nom }}, { score, joueur : { photo, nom }}, { score, joueur : { photo, nom }} ]
function* recupererClassement() {
  //const doggies = yield fetch(baseUrl + '/').then(reponse => reponse.json() );
  const moi = doggies.find(doggy => doggy.trigramme === "BRM")
  const premierePosition = { classification: 1, meilleurScore: 100, doggy: moi }
  const classifications = [premierePosition]

  yield put({ type: "RECUPERER_CLASSEMENT_SUCCES", payload: { classifications } })
  // .catch((erreur) => {
  // yield put({ type: "RECUPERER_CLASSEMENT_ERREUR" })
  // })
}

function* recupererClassementWatcher() {
  yield takeLatest("RECUPERER_CLASSEMENT", recupererClassement)
}

export default function* rootSaga() {
  yield all([
    recupererDoggiesWatcher(),
    commencerPartieWatcher(),
    sauvegarderReponseWatcher(),
    demanderNouveauDefiWatcher(),
    recupererClassementWatcher()
  ])
}