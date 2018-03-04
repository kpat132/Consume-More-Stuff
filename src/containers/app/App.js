import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import NavComponent from "../../components/navbar";
import { SearchComponent } from "../../components/searchbar";
import { LoginButtonComponent } from "../../components/loginButton";
import { getItems } from "../../actions/index";
import { getUsers } from "../../actions/UserAction";
import Main from "../reactRouter/Main";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getItems();

    this.props.getUsers();
  }

  render() {
    console.log('STATE: ', this.props.users.users)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Codely_Tool</h1>
          <div className="search-bar">
            <SearchComponent />
          </div>

          <LoginButtonComponent />
        </header>
        <nav className="Navbar">
          <NavComponent />
        </nav>
        <p className="App-intro">Buy, sell and connect.</p>
        <div className="Main">
          <Main />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
 // return state.items;
 return{
   items:state.items,
   users:state.users

 }
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
