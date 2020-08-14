import { FETCH_COMPLETE, AVATAR_UPDATED } from "../actions/counterActions";

const initialState = {
  issuesList: [],
};

export const githubIssues = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPLETE:
      return state.issuesList.issuesList = action.payload;
      // return state.issuesList;
     // case AVATAR_UPDATED :
    // return state.avatar + action.payload;
    // return
    default:
      return state;
  }
};
