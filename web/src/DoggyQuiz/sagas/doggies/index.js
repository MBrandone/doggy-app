import { call, put, takeLatest } from "redux-saga/effects"
import { apiGet } from "../../services/api/httpClient"

function* recupererDoggies() {
  let doggiesRecuperes

  try {
    doggiesRecuperes = yield call(apiGet, "/doggies")

  } catch (erreur) {
    yield put({ type: "RECUPERER_DOGGIES_ERREUR" })

  }

  yield put({ type: "RECUPERER_DOGGIES_SUCCES", payload: { doggies: doggiesRecuperes } })
}

export function* recupererDoggiesWatcher() {
  yield takeLatest("RECUPERER_DOGGIES", recupererDoggies)
}