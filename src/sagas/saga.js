import { FETCH_ISSUES, fetchComplete } from "../actions/counterActions";
import { put, takeEvery, call } from "redux-saga/effects";

export function* fetchIssues(params) {
  const apiToHit = "https://api.github.com/repos/facebook/create-react-app/issues?page="+params.payload
  const response = yield call(fetch, apiToHit);
  const body = yield call([response, 'json']);
  const issuesTitle = body.map(item => [item.title, item.id])
  yield put(fetchComplete(issuesTitle))
}

export function* watchCounter() {
  yield takeEvery(FETCH_ISSUES, fetchIssues);
}


