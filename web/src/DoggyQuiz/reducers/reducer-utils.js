export function creerReducer(etatInitial, gestionnaireAction) {
  return function reducer(state = etatInitial, action) {
    if (gestionnaireAction.hasOwnProperty(action.type)) {
      return gestionnaireAction[action.type](state, action)
    } else {
      return state
    }
  }
}