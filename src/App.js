import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";

import CounterComponent from "./components/counter";

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
          <p className="App-intro">
            <b>Assignment for OfBusiness</b>
          </p>
          <CounterComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
