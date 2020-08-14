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
    // const name = allData && allData.map(item => [item.name, item.full_name]);
    // console.log(allData);
    return (
    <div>
      {allData.map((item, index) => {
        // const [firstName, fullme] = item.split(" ");
        const key = item+index;
        return <div key={key}>
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
