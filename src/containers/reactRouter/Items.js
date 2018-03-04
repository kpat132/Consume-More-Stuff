import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../actions/index";
import ItemsList from "./ItemsList";
import Item from "./Item";
import { Switch, Route } from "react-router-dom";

class Items extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/items"
          render={() => {
            {
              console.log("hefhdifhoshf", this.props.items);
            }
            return <ItemsList items={this.props.items} />;
          }}
        />
        <Route path="/items/:id" component={Item} />
      </Switch>
    );
  }
}
const mapStateToProps = state => {
  return state.items;
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    }
  };
};

const ConnectedItems = connect(mapStateToProps, mapDispatchToProps)(Items);

export default ConnectedItems;
