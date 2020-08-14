import { combineReducers } from "redux";
import { githubIssues } from "./reducer";

export const rootReducer = combineReducers({
  githubIssues
});
