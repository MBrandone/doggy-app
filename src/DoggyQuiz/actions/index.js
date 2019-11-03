export const choisirJoueur = joueur => ({
  type: "CHOISIR_JOUEUR",
  joueur
})

export const sauvegarderReponse = reponse => ({
  type: "SAUVEGARDER_REPONSE",
  reponse
})

export const corrigerReponse = _ => ({
  type: "CORRIGER_REPONSE",
})

export const mettreAJourScore = _ => ({
  type: "METTRE_A_JOUR_SCORE",
})

export const choisirPremierDefi = _ => ({
  type: "CHOISIR_PREMIER_DEFI",
})

export const choisirDefiSuivant = _ => ({
  type: "CHOISIR_DEFI_SUIVANT",
})

export const retirerDefiDesDefisDisponibles = citation => ({
  type: "RETIRER_DEFI_DES_DEFIS_DISPONIBLES",
  citation
})

export const commencerPartie = _ => ({
  type: "COMMENCER_PARTIE"
})