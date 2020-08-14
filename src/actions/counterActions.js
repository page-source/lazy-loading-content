/*
 * action types
 */

export const FETCH_ISSUES = "FETCH_ISSUES";
export const FETCH_COMPLETE = "FETCH_COMPLETE";

/*
 * action creators
 */

export function fetchIssues() {
  return { type: FETCH_ISSUES };
}

export function fetchComplete(action) {
  return { type: FETCH_COMPLETE, payload: action };
}
