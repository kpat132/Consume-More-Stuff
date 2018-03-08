import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddItem from "../containers/AddItem";
import AddItemButton, { AddItemButtonComponent } from "./AddItemButton";
import CategoryComp from "../components/CategoryComp";
import UserItemsList from "../components/UserItemsList";
import { userPage } from "../actions/UserAction";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let UserItems;
    // console.log(localStorage.id);
    // if(localStorage.length === 1 ){
    //   // this.setState({UserItems:this.props.user.items})
    //   console.log('ALEJAFIWEUHFAWIEUHF',this.props.user.items)
    //   UserItems = <UserItemsList props = {this.props.user.items} />;
    // }

    return (
      <div className="ParentHomeClass">
        <AddItemButtonComponent />

        <div className="UserItems">{/* {UserItems} */}</div>
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
