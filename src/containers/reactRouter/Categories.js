import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/index";
import AutoList from "./AutoList";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Item from "./Item";
import CategoryComp from "../../components/CategoryComp"

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('IN HERERERERE')
    console.log(this.props.categories)
    return (
      <Switch>
        <Route
          exact
          path="/auto"
          render={() => {
            return (
              <CategoryComp
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


`diff${Item}`
// const mapDispatchToProps = dispatch => {
//   return {
//     getCategories: () => {
//       dispatch(getCategories());
//     }
//   };
// };

const ConnectedCategories = withRouter(connect(mapStateToProps)(Categories));

export default ConnectedCategories;
