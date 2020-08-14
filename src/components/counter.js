import React from "react";
import { connect } from "react-redux";
import { fetchIssues, updateAvatar } from "../actions/counterActions";

class ShowNamesFromGit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNames();
  }

  render() {
    const allData = this.props.issuesList;
    if(allData.issuesList) return null;
    return (
    <div className="wrapper">
      {allData.map((item, index) => {
        const key = item+index;
        return <div key={key} className="issue">
        <p>{item}</p>
        </div>
      })

      }
    </div>
    )
  }
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
    // getAvatar: firstName => {
    //   dispatch(updateAvatar(firstName));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowNamesFromGit);
