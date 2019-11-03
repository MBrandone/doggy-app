import etatInitial from "./etat-initial"
import { creerReducer } from "./reducer-utils"

//FONCTIONS UTILITAIRES

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function melanger(tableau) {
  return tableau.sort(() => {
    return .5 - Math.random()
  })
}

function prendreValeurDansTableauObjet(champs, tableauObjet) {
  return tableauObjet.map(objet => objet[champs])
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

// REDUCERS

function commencerPartie(etatQuizz) {
  const nouvellePartie = {
    score: 0,
    correction: null,
    question: {
      intitule: "",
      propositions: [],
      solutions: []
    },
    reponse: null
  }
  return {
    ...etatQuizz,
    partie: nouvellePartie
  }
}

function choisirPremierDefi(etatQuizz) {
  const defi = random(etatQuizz.citationsDisponibles)
  const propositions = DeterminerQuatrePropositions(defi, prendreValeurDansTableauObjet("trigramme", etatQuizz.reponsesDisponibles))
  const question = {
    intitule: defi.citation,
    propositions,
    solutions: defi.auteurs
  }
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      question
    }
  }
}

function choisirDefiSuivant(etatQuizz) {
  let nouveauDefi
  let nouvellesPropositions
  if (etatQuizz.partie.correction) {
    nouveauDefi = random(etatQuizz.citationsDisponibles)
    nouvellesPropositions = DeterminerQuatrePropositions(nouveauDefi, prendreValeurDansTableauObjet("trigramme", etatQuizz.reponsesDisponibles))
  } else {
    nouveauDefi = { citation: "" }
    nouvellesPropositions = null
  }
  const nouvelleQuestion = {
    intitule: nouveauDefi.citation,
    propositions: nouvellesPropositions,
    solutions: nouveauDefi.auteurs
  }
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      question: nouvelleQuestion
    },
    reponse: null
  }
}

function sauvegarderReponse(etatQuizz, action) {
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      reponse: action.reponse
    }
  }
}

function corrigerReponse(etatQuizz) {
  const correction = etatQuizz.partie.question.solutions.includes(etatQuizz.partie.reponse)
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      correction
    }
  }
}

function mettreAJourScore(etatQuizz) {
  const nouveauScore = etatQuizz.partie.correction ? etatQuizz.partie.score + 1 : etatQuizz.partie.score
  return {
    ...etatQuizz,
    partie: {
      ...etatQuizz.partie,
      score: nouveauScore
    }
  }
}

function RetirerDefiDesDefisDisponibles(etatQuizz) {
  const citationCourante = etatQuizz.partie.question.intitule
  const citationsDisponibles = etatQuizz.citationsDisponibles.filter(citation => citation.citation !== citationCourante)
  return {
    ...etatQuizz,
    citationsDisponibles
  }
}

export default creerReducer(etatInitial.quizz, {
  COMMENCER_PARTIE: commencerPartie,
  CHOISIR_PREMIER_DEFI: choisirPremierDefi,
  CHOISIR_DEFI_SUIVANT: choisirDefiSuivant,
  SAUVEGARDER_REPONSE: sauvegarderReponse,
  CORRIGER_REPONSE: corrigerReponse,
  METTRE_A_JOUR_SCORE: mettreAJourScore,
  RETIRER_DEFI_DES_DEFIS_DISPONIBLES: RetirerDefiDesDefisDisponibles
})