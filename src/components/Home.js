import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddItem from "../containers/AddItem";
import AddItemButton, { AddItemButtonComponent } from "./AddItemButton";
import CategoryComp from "../components/CategoryComp";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ParentHomeClass">
        <h1>home page</h1>

        <AddItemButtonComponent />

        <div className="CategoryHomePage">
          {this.props.categories.map(category => {
            return (
              <div className="singleCategoryHomePage">
                <CategoryComp key={category.id} {...category} />
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
    categories: state.items.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(connect(mapStateToProps)(ConnectedHome));
