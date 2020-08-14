import { FETCH_ISSUES, fetchComplete } from "../actions/counterActions";
import { put, takeEvery, call } from "redux-saga/effects";



export function* fetchIssues() {
  const response = yield call(fetch, "https://api.github.com/repos/facebook/create-react-app/issues");
  const body = yield call([response, 'json']);
  const issuesTitle = body.map(item => [item.title])
  // console.log(nameAndFullName)
  yield put(fetchComplete(issuesTitle))
  // console.log(body);
}


// export function* fetchAvatar(params) {
//   // console.log(params);
//   const response = yield call(fetch, `https://api.github.com/users/${params.payload}`);
//   const body = yield call([response, 'json']);
//   const avatar = [body.avatar_url, params.payload]
//   yield put(putAvatar(avatar))
//   // console.log(body);
// }

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCounter() {
  yield takeEvery(FETCH_ISSUES, fetchIssues);
  // yield takeEvery(UPDATE_AVATAR, fetchAvatar);
}


