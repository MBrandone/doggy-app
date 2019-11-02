import citations from "../../Donnees/citations"
import doggies from "../../Donnees/doggies"

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

function trigrammes(joueurs) {
  return joueurs.map(joueur => joueur.trigramme)
}

function melanger(tableau) {
  return tableau.sort(() => {
    return .5 - Math.random();
  })
}

const stateInitial = {
  joueursDisponibles: doggies,
  citationsDisponibles: citations,
  partie: {
    joueur: null,
    score: 0,
    correction: null
  },
  question: {
    intitule: "",
    propositions: [],
    solutions: []
  },
  reponse: null,
}

const etat = (state = stateInitial, action) => {
  switch (action.type) {
    case 'COMMENCER_PARTIE':
      const nouvellePartie = {
        joueur: null,
        score: 0,
        correction: null
      }
      return {
        ...state,
        partie: nouvellePartie
      }
    case 'CHOISIR_JOUEUR':
      const trigrammeJoueurSelectionne = action.joueur
      const joueurSelectionne = state.joueursDisponibles.find(joueur => joueur.trigramme === trigrammeJoueurSelectionne)
      return {
        ...state,
        partie: {
          ...state.partie,
          joueur: joueurSelectionne
        }
      }
    case 'CHOISIR_NOUVEAU_DEFI':
      const defi = random(state.citationsDisponibles)
      const propositions = DeterminerQuatrePropositions(defi, trigrammes(state.joueursDisponibles))
      const question = {
        intitule: defi.citation,
        propositions,
        solutions: defi.auteurs
      }
      return {
        ...state,
        question,
      }
    case 'CHOISIR_DEFI_EN_FONCTION_REPONSE_PRECEDENTE':
      let nouveauDefi
      let nouvellesPropositions
      if (state.partie.correction){
        nouveauDefi = random(state.citationsDisponibles)
        nouvellesPropositions = DeterminerQuatrePropositions(nouveauDefi, trigrammes(state.joueursDisponibles))
      } else {
        nouveauDefi = { citation: ""}
        nouvellesPropositions = null
      }
      const nouvelleQuestion = {
        intitule: nouveauDefi.citation,
        propositions: nouvellesPropositions,
        solutions: nouveauDefi.auteurs
      }
      return {
        ...state,
        question: nouvelleQuestion,
        reponse: null,
      }
    case 'SAUVEGARDER_REPONSE':
      return {
        ...state,
        reponse: action.reponse
      }
    case 'CORRIGER_REPONSE':
      const correction = state.question.solutions.includes(state.reponse)
      return {
        ...state,
        partie: {
          ...state.partie,
          correction
        }
      }
    case 'METTRE_A_JOUR_SCORE':
      const nouveauScore = state.partie.correction ? state.partie.score + 1 : state.partie.score
      return {
        ...state,
        partie: {
          ...state.partie,
          score: nouveauScore
        }
      }
    case 'RETIRER_DEFI_DES_DEFIS_DISPONIBLES':
      const citationCourante = state.question.intitule
      const citationsDisponibles = state.citationsDisponibles.filter(citation => citation.citation !== citationCourante)
      return {
        ...state,
        citationsDisponibles
      }
    default:
      return state
  }
}

export default etat