import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { AddItemButtonComponent } from "./AddItemButton";
import CategoryComp from "../components/CategoryComp";
import UserItemsList from "../components/UserItemsList";
import { userPage } from "../actions/UserAction";

class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log('trigger home render');
    let UserItems;
    let userItemsHeader = null;
    let addItemButton = null;
    if (localStorage.length === 1) {
      addItemButton = <AddItemButtonComponent />;
      if (Object.keys(this.props.user).length === 0) {
        console.log("EMPTY");
      } else {
        if (this.props.user.items.length > 0) {
          userItemsHeader = this.props.user.username + "`s Items";
          UserItems = <UserItemsList props={this.props.user.items} />;
        } else {
          console.log("NO USER ITEMS");
        }
      }
    }

    return (
      <div className="ParentHomeClass">
        <section>
          <div className='home-user-header'>
            <h1>{userItemsHeader}</h1>
          </div>
          <div className="ItemsThatBelongToUsers">{UserItems}</div>


          {addItemButton}

         
        </section>
        <div className="UserItems" />
        <div className="CategoryHomePage">
          {this.props.categories.map(category => {
            return (
              <div key={category.id} className="singleCategoryHomePage">
                <CategoryComp {...category} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.items.categories,
    user: state.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userPage: id => {
      dispatch(userPage(id));
    }
  };
};

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(connect(mapStateToProps)(ConnectedHome));
