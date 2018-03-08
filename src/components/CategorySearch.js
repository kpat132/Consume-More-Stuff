// import React from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';





class CategorySearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      searchItems:[],
      result:[]

    }
    
  }


  updateSearch(event){
    this.setState({search:event.target.value});
    this.props.categories.map(cat=>{
      this.props.match.params.name === cat.name?
      this.state.searchItems.push(cat.items):false;
    })
   let items = this.state.searchItems[0];
   let filteredItems = items.filter(item=>{
     return item.name.indexOf(this.state.search) !== -1
   });
   this.state.result.push(filteredItems)
   this.state.result = filteredItems;
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.history.push(`/items/${this.state.result[0].id}`)
    
  }


  render(){
    

    
    
    

    return (
      <div className="search-container">
       <form action="/action_page.php"
       onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Search.." name="search" 
        onChange={this.updateSearch.bind(this)} />
        <button type="submit">Submit</button>
        
     
        
       </form>
     </div>
    )
  }
}



const mapStatetoProps = state => {

  return {
    categories:state.items.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

const ConnectedApp = withRouter(connect(mapStatetoProps, mapDispatchToProps)(CategorySearch));

export default ConnectedApp;