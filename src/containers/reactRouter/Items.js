import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../actions/index";
import ItemsList from "./ItemsList";
import Item from "./Item";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Items extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    console.log("fhshfshfioesh", this.props.categories);
    return (
      <Switch>
        <Route
          exact
          path="/items"
          render={() => {
            return <ItemsList items={this.props.items} />;
          }}
        />
        <Route exact path="/items/:id" component={Item} />
      </Switch>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.items,
    categories: state.items.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    }
  };
};

const ConnectedItems = connect(mapStateToProps, mapDispatchToProps)(Items);

export default withRouter(connect(mapStateToProps)(ConnectedItems));
