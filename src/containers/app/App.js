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
import Sticky from "react-sticky-el";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleOpenNav = this.handleOpenNav.bind(this);
    this.handleCloseNav = this.handleCloseNav.bind(this);
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
  handleOpenNav(event) {
    console.log(document.getElementsByClassName("mySidenav")[0]);
    document.getElementsByClassName("mySidenav")[0].style.width = "250px";

    document.getElementsByClassName("Mains")[0].style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  handleCloseNav(event) {
    console.log("onclick");
    document.getElementsByClassName("mySidenav")[0].style.width = "0";
    document.getElementsByClassName("Mains")[0].style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  render() {
    let userItems = this.props.users.items;
    let buttons = <LoginButtonComponent />;
    let logoutButton = null;

    if (localStorage.length > 0) {
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

          <nav className="Navbar">
            {this.props.children}
            <NavComponent
              categories={this.props.categories}
              nav={this.handleCloseNav}
            />
          </nav>

          <div className="Mains">
            <span onClick={this.handleOpenNav}>&#9776; Navbar</span>
          </div>

          <div className="Main">
            <Main />
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
