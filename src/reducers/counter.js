import { FETCH_COMPLETE } from "../actions/counterActions";

const initialState = {
  issuesList: [],
};

export const githubIssues = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPLETE:
      return state.issuesList = action.payload;
    default:
      return state;
  }
};
