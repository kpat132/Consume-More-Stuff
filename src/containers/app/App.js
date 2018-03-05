import React, { Component } from "react";
import { connect } from "react-redux";
import AddItem from '../AddItem';
import "./App.css";
import NavComponent from "../../components/navbar";
import { SearchComponent } from "../../components/searchbar";
import { LoginButtonComponent } from "../../components/loginButton";
import { getItems } from "../../actions/index";
import { getCategories } from "../../actions/index";
import { getStatus } from "../../actions/index";
import {getConditions} from "../../actions/index";

import Main from "../reactRouter/Main";



class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getItems()
    this.props.getCategories()
    this.props.getStatus()
    this.props.getConditions()
  }

  render() {
 
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
          <AddItem/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return state.items
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    },
    getCategories: () => {
      dispatch(getCategories());
    },
    getStatus: ()=>{
      dispatch(getStatus());
    },
    getConditions: () => {
      dispatch(getConditions());
    }

  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
