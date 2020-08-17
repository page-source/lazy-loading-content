import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";

import IssuesComponent from "./components/component";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Listing Github Issues from a Repo</h1>
          </header>
          <IssuesComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
