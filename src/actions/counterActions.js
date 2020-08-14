/*
 * action types
 */

export const FETCH_ISSUES = "FETCH_ISSUES";
export const FETCH_COMPLETE = "FETCH_COMPLETE";
export const UPDATE_AVATAR = "UPDATE_AVATAR";
export const AVATAR_UPDATED = "UPDATED_AVATAR";


/*
 * action creators
 */

export function fetchIssues() {
  return { type: FETCH_ISSUES };
}

export function fetchComplete(action) {
  return { type: FETCH_COMPLETE, payload: action };
}

export function updateAvatar(params) {
  return { type: UPDATE_AVATAR, payload: params };
}

export function putAvatar(params) {
  return { type: AVATAR_UPDATED, payload: params}
}
