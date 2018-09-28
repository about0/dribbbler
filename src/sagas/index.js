import { handleSearchSubmitWatcher } from "./submitSearch";
import { put, takeEvery, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([handleSearchSubmitWatcher()]);
}
