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

export const choisirNouveauDefi = _ => ({
  type: "CHOISIR_NOUVEAU_DEFI",
})

export const choisirDefiEnFonctionReponsePrecedente = _ => ({
  type: "CHOISIR_DEFI_EN_FONCTION_REPONSE_PRECEDENTE",
})

export const retirerDefiDesDefisDisponibles = citation => ({
  type: "RETIRER_DEFI_DES_DEFIS_DISPONIBLES",
  citation
})