import citations from "../../Donnees/citations"
import doggies from "../../Donnees/doggies"

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function DeterminerQuatrePropositions(defi, ensemblePropositions) {
  let ensemblePropositionsSansBonnesReponses = ensemblePropositions.filter(proposition => defi.auteurs.includes(proposition) !== true)
  const premiereProposition = random(ensemblePropositionsSansBonnesReponses)
  ensemblePropositions.filter(proposition => proposition !== premiereProposition)
  const deuxiemeProposition = random(ensemblePropositionsSansBonnesReponses)
  ensemblePropositions.filter(proposition => proposition !== premiereProposition)
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
  joueur: null,
  citationsDisponibles: citations,
  defi: null,
  reponsesPossibles: null,
  reponse: "",
  correction: null,
  solution: null,
  score: 0
}

const etat = (state = stateInitial, action) => {
  switch (action.type) {
    case 'CHOISIR_JOUEUR':
      const joueur = action.joueur
      return {
        ...state,
        joueur
      }
    case 'CHOISIR_NOUVEAU_DEFI':
      const defi = random(state.citationsDisponibles)
      const reponsesPossibles = DeterminerQuatrePropositions(defi, trigrammes(state.joueursDisponibles))
      return {
        ...state,
        defi,
        reponsesPossibles
      }
    case 'CHOISIR_DEFI_EN_FONCTION_REPONSE_PRECEDENTE':
      let nouveauDefi
      let nouvellesPropositions
      let solution = null
      if (state.correction){
        nouveauDefi = random(state.citationsDisponibles)
        nouvellesPropositions = DeterminerQuatrePropositions(nouveauDefi, trigrammes(state.joueursDisponibles))
      } else {
        nouveauDefi = null
        nouvellesPropositions = null
        solution = state.defi.auteurs
      }
      return {
        ...state,
        defi: nouveauDefi,
        reponsesPossibles: nouvellesPropositions,
        solution
      }
    case 'SAUVEGARDER_REPONSE':
      return {
        ...state,
        reponse: action.reponse
      }
    case 'CORRIGER_REPONSE':
      const correction = state.defi.auteurs.includes(state.reponse)
      return {
        ...state,
        correction
      }
    case 'METTRE_A_JOUR_SCORE':
      const nouveauScore = state.correction ? state.score + 1 : state.score
      return {
        ...state,
        score: nouveauScore
      }
    case 'RETIRER_DEFI_DES_DEFIS_DISPONIBLES':
      const citationCourante = state.defi.citation
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