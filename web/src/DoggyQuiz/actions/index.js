export const reinitialiserJoueur = _ => ({
  type: "REINITIALISER_JOUEUR"
})

export const choisirJoueur = joueur => ({
  type: "CHOISIR_JOUEUR",
  joueur
})

export const recupererDoggies = _ => ({
  type: "RECUPERER_DOGGIES"
})

export const recupererDoggiesSucces = doggies => ({
  type: "RECUPERER_DOGGIES_SUCCES",
  doggies
})

export const commencerPartie = _ => ({
  type: "COMMENCER_PARTIE"
})

export const commencerPartieSucces = _ => ({
  type: "COMMENCER_PARTIE_SUCCES"
})

export const commencerPartieErreur = _ => ({
  type: "COMMENCER_PARTIE_ERREUR"
})

export const sauvegarderReponse = (reponse, citation) => ({
  type: "SAUVEGARDER_REPONSE",
  reponse,
  citation
})

export const sauvegarderReponseSucces = reponse => ({
  type: "SAUVEGARDER_REPONSE_SUCCES",
  reponse
})

export const sauvegarderReponseErreur = reponse => ({
  type: "SAUVEGARDER_REPONSE_ERREUR",
  reponse
})

export const demanderNouveauDefi = _ => ({
  type: "DEMANDER_NOUVEAU_DEFI",
})

export const demanderNouveauDefiSucces = _ => ({
  type: "DEMANDER_NOUVEAU_DEFI_SUCCES",
})

export const demanderNouveauDefiErreur = _ => ({
  type: "DEMANDER_NOUVEAU_DEFI_ERREUR",
})

export const mettreAJourScore = _ => ({
  type: "METTRE_A_JOUR_SCORE",
})
