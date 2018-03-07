import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

class SingleCategory extends Component {
  constructor(props) {
    super (props)

    this.state = {}
  }

  componentWillMount() {
    const categoryName = this.props.match.params.name
    console.log(categoryName)
  }
}


const mapStateToProps = state => {
  return {
    categories: state.items.categories,
    items: state.items.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
 
  };
};

const ConnectedSingleCategory = connect(mapStateToProps, mapDispatchToProps)(SingleCategory);

export default withRouter(connect(mapStateToProps)(ConnectedSingleCategory));