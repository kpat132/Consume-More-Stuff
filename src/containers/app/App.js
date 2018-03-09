import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../Sass/index.css";

import Settings from "../Settings";

import NavComponent from "../../components/navbar";
import { SearchComponent } from "../../components/searchbar";
import LoginButtonComponent from "../../components/loginButton";
import {
  getItems,
  getCategories,
  getStatus,
  getConditions
} from "../../actions/ItemsAction";

import Main from "../reactRouter/Main";
import { userPage } from "../../actions/UserAction";
import LogoutButtonComponent from "../../components/logoutButton";
import Sticky from 'react-sticky-el';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getItems();
    this.props.getCategories();
    this.props.getStatus();
    this.props.getConditions();

    if (localStorage.length === 1) {
      this.props.userPage(localStorage.id);
    }
  }

  render() {
    let userItems = this.props.users.items;
    let buttons = <LoginButtonComponent />;
    let logoutButton = null;
    if (localStorage.length === 1) {
      buttons = null;
      logoutButton = <LogoutButtonComponent />;
    }

    return (
      <div className="App">
        <div className="Site-content">
          <header className="App-header">
            <h1 className="App-title">Codely_Tool</h1>
            {buttons}
            {logoutButton}
          </header>
          
         
         <Sticky bottomOffset={80}> 
          <nav className="Navbar">
            <NavComponent categories={this.props.categories} />
          </nav>
         
          
         
          {/* <div className="arrow-decoration">
          <div className="flank-left" />
          <div className="triangle" />
          <div className="flank-right" />
        </div> */}
          
          </Sticky>
          <div className="Main">
            <Main />

            {/* <Settings /> */}
          </div>
              
        </div>

        <footer className="footer">Codely_Tool</footer>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    user: state.users.user,
    users: state.users,
    categories: state.items.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    },
    getCategories: () => {
      dispatch(getCategories());
    },
    getStatus: () => {
      dispatch(getStatus());
    },
    getConditions: () => {
      dispatch(getConditions());
    },
    userPage: id => {
      dispatch(userPage(id));
    }
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(connect(mapStateToProps)(ConnectedApp));
