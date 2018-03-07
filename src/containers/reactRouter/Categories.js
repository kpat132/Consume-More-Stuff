import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/index";
import AutoList from "./AutoList";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Item from "./Item";
import SingleCategory from './SingleCategory'
import CategoryComp from "../../components/CategoryComp";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {categoryName: ''}
  }

  componentWillMount() {
    const categoryName = this.props.match.params.name
    console.log(categoryName)
    this.setState({categoryName})
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="CategoryDropDown">
      {this.props.categories.filter((category) => {
        return category.name === this.state.categoryName
        }).map((filteredCategory) => {
          return(<div key={filteredCategory.id} className="filteredCategory" >
          <CategoryComp {... filteredCategory} />
          </div>
          )
        })
      }
        </div>
    )
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
