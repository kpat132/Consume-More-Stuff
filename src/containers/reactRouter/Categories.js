import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/index";
import AutoList from "./AutoList";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Item from "./Item";

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/auto"
          render={() => {
            return (
              <AutoList
                categories={this.props.categories}
                items={this.props.items}
              />
            );
          }}
        />
      </Switch>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.items.categories,
    items: state.items.items
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getCategories: () => {
//       dispatch(getCategories());
//     }
//   };
// };

const ConnectedCategories = withRouter(connect(mapStateToProps)(Categories));

export default ConnectedCategories;
