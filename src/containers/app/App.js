import React, { Component } from "react";
import { connect } from "react-redux";


import Login from '../../containers/login/login';
import RegisterUser from '../../containers/register';

import AddItem from '../AddItem';
import EditItem from '../EditItem'


import { withRouter } from "react-router-dom";

import "./App.css";
import NavComponent from "../../components/navbar";
import { SearchComponent } from "../../components/searchbar";
import { LoginButtonComponent } from "../../components/loginButton";
import { getItems } from "../../actions/index";
import { getCategories } from "../../actions/index";
import { getStatus } from "../../actions/index";
import { getConditions } from "../../actions/index";
import { userPage } from "../../actions/UserAction";

import { getUsers } from "../../actions/UserAction";
import Main from "../reactRouter/Main";


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

  // render() {
  //   this.props.getItems();

  //   //this.props.getUsers();
  // }

  render() {
    let username = null;
    let test = this.props.user;
    if (localStorage.length === 1) {
      username = 'Welcome ' + test.username + '!';
    }

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
          <NavComponent categories={this.props.categories} />
        </nav>
        <p className="App-intro">Buy, sell and connect.</p>
        <div className="Main">
          <Main />
          <h1>{username}</h1>
        </div>
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
    // getUsers: () => {
    //   dispatch(getUsers());
    // },
    getCategories: () => {
      dispatch(getCategories());
    },
    getStatus: () => {
      dispatch(getStatus());
    },
    getConditions: () => {
      dispatch(getConditions());
    },
    userPage: (id) => {
      dispatch(userPage(id))
    }

  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(connect(mapStateToProps)(ConnectedApp));
