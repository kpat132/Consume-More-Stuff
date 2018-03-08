import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../index.css";
import Login from "../../containers/login/login";
import RegisterUser from "../../containers/register";


import AddItem from "../AddItem";
import EditItem from "../EditItem";
import Settings from "../Settings";
import CategoryComp from "../../components/CategoryComp";
import NavComponent from "../../components/navbar";
import { SearchComponent } from "../../components/searchbar";
import  LoginButtonComponent  from "../../components/loginButton";
import {
  getItems,
  getCategories,
  getStatus,
  getConditions
} from "../../actions/index";
import { getUsers } from "../../actions/UserAction";
import Main from "../reactRouter/Main";
import { userPage } from "../../actions/UserAction";
import  LogoutButtonComponent  from "../../components/logoutButton";

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

    console.log('THIS.PROPS.USER', this.props.user);
    let userItems = this.props.users.items;

    let buttons = <LoginButtonComponent />;
    let logoutButton = null;
  
    if (localStorage.length === 1) {
      buttons = null;
      logoutButton = <LogoutButtonComponent/>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Codely_Tool</h1>
          <div className="search-bar">
            {/* <SearchComponent /> */}
          </div>
        
          {buttons}
          {logoutButton}

        </header>
        <nav className="Navbar">
          <NavComponent categories={this.props.categories} />
        </nav>
       
        <p className="App-intro"></p>
        <div className="Main">
        <Main />

        <Settings />
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
