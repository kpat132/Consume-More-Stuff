import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import NavComponent from "../../components/navbar";
import { SearchComponent } from "../../components/searchbar";
import { LoginButtonComponent } from "../../components/loginButton";
import { getItems } from "../../actions/index";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Codely_Tool</h1>
          <SearchComponent />
          <LoginButtonComponent />
        </header>
        <nav className="Navbar">
          <NavComponent />
        </nav>
        <p className="App-intro">Buy, sell and connect.</p>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return state.items;
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    }
  };
};

const ConnectedApp = connect(mapStatetoProps, mapDispatchToProps)(App);

export default ConnectedApp;
