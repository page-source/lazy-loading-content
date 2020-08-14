import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchIssues } from "../actions/counterActions";

const ListGitHubIssues = ({issuesListProp, getNames}) => {

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  let needToHitApi = false; /* Variable which is checking if we need to API at current position or not */

  /**
   * Attaching the event listener on componentDidMount
   */
  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getNames(page);
  }, [page]);


  useEffect(() => {
    setData(data => [...data, ...issuesListProp]);
   }, [issuesListProp])

     /**
   * Below Function measures the position of scroll position whether it reached bottom or not
   * When the scroll position is about to hit bottom, API gets called and issues are populated in DOM.
  */

 function handleScroll() {
  const bottomDiff = document.documentElement.offsetHeight - (window.innerHeight + document.documentElement.scrollTop);
   if (bottomDiff > 300) {
     needToHitApi = true;
     return;
   }
   if (needToHitApi) setPage(page => page+1);
   needToHitApi = false;
 }

  if(data.length === 0) return null;

  return (
    <React.Fragment>
      <div className="wrapper">
        {renderIssues(data)}
      </div>
      <div id="bottomDiv"></div>
    </React.Fragment>
  )

}


/**
 * This Function is presentational function which only returns items to be painted on DOM
 * Can be moved to a separate component too
 * */
function renderIssues(allData) {
  if(!allData) return null;
  return allData.map(item => {
    const key = item[1];
    return <div key={key} className="issue">
    <p>{item[0]}</p>
    </div>
  })
}


const mapStateToProps = state => {
  return {
    issuesListProp: state.githubIssues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNames: page => {
      dispatch(fetchIssues(page));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGitHubIssues);
