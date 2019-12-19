import { put, takeLatest } from "redux-saga/effects"
import doggies from "../../../Donnees/doggies"
import citations from "../../../Donnees/citations"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

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
    statut: 'EN_COURS',
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

function* sauvegarderReponse(action) {
  yield delay(1000)
  const correction = corrigerReponse(action.reponse, action.citation)
  const reponse = {
    reponseDonnee: action.reponse,
    correction
  }
  yield put({ type: "SAUVEGARDER_REPONSE_SUCCES", payload: { reponse } })
  yield delay(2000)
  yield put({ type: "METTRE_A_JOUR_PARTIE" }) //NE PAS METTRE A JOUR LE SCORE, MAIS LA PARTIE (FIN OU AUTRE)
  yield put({ type: "DEMANDER_NOUVEAU_DEFI" })
}

function corrigerReponse(reponse, citation) {
  const defiReleve = citations.find(citationPossible => citationPossible.citation === citation)
  return defiReleve.auteurs.includes(reponse)
}

function* sauvegarderReponseWatcher() {
  yield takeLatest("SAUVEGARDER_REPONSE", sauvegarderReponse)
}

function* demanderNouveauDefi() {
  const defiSuivant = choisirDefiSuivant()
  yield put({ type: "DEMANDER_NOUVEAU_DEFI_SUCCES", payload: { defiSuivant } })
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

export {
  demanderNouveauDefiWatcher,
  commencerPartieWatcher,
  sauvegarderReponseWatcher
}