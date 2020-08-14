import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchIssues } from "../actions/counterActions";

const ListGitHubIssues = ({issuesList, getNames}) => {

  useEffect (() => {
    getNames();
  }, []);

  const allData = issuesList;
  if(allData.issuesList) return null;
  return (
  <div className="wrapper">
    { allData.map((item, index) => {
        const key = item+index;
        return <div key={key} className="issue">
        <p>{item}</p>
        </div>
      })
    }
  </div>
  )

}
const mapStateToProps = state => {
  return {
    issuesList: state.githubIssues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNames: () => {
      dispatch(fetchIssues());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGitHubIssues);
