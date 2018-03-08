import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/index";
import { setCategory } from "../../actions/index"
import AutoList from "./AutoList";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Item from "./Item";
import SingleCategory from './SingleCategory'
import CategoryComp from "../../components/CategoryComp";
import CategorySearch from '../../components/CategorySearch';


class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {categoryName: this.props.match.params.name}
  }
  componentWillMount(nextProps) {
    
    this.props.categories.map(cat=>{
      cat.name === this.state.categoryName?this.props.setCategory(cat.id):false;
    })
  }

  componentWillReceiveProps(nextProps){
    
    if(nextProps.match.params.name !== this.state.categoryName){
      this.setState({categoryName: nextProps.match.params.name})
    }
  }

  render() {
    return (
      <div className="CategoryDropDown">
      <h1>CATEGORY</h1>
      <CategorySearch/>
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
    items: state.items.items,
    category: state.items.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCategory: (id) => {
      dispatch(setCategory(id));
    }
  };
};

const ConnectedCategories = withRouter(connect(mapStateToProps, mapDispatchToProps )(Categories));

export default connect(mapStateToProps, mapDispatchToProps)(Categories)