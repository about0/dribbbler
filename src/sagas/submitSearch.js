import { delay } from "redux-saga";
import { put, takeEvery, all, call, select } from "redux-saga/effects";
import axios from "axios";
import { submitSearch } from "../actions";
import { getSearchTerm } from "../selectors";

const req = () => {
  const request = axios.get("https://api.opendota.com/api/proMatches");

  return request.then(resp => resp.data);
};

function* handleSearchSubmitWorker() {
  try {
    const matches = yield call(req);
    yield put({ type: "SUCCESS", matches });
  } catch (error) {
    yield put({ type: "FAILED" });
  } finally {
  }
}

export function* handleSearchSubmitWatcher() {
  yield takeEvery(submitSearch.type, handleSearchSubmitWorker);
}
