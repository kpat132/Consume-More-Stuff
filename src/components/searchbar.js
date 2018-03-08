// import React from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';





class SearchComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      searchItems:[]

    }
  }
  
  updateSearch(event){
    
    this.setState({search:event.target.value});
    let filteredItems = this.props.items.filter(item=>{
      return item.name.indexOf(this.state.search) !== -1
    });
    this.state.searchItems.push(filteredItems);
    
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.history.push(`/items/${this.state.searchItems[0].id}`)
    
  }


  render(){
   
    let filteredItems = this.props.items.filter(item=>{
      return item.name.indexOf(this.state.search) !== -1
    });
    this.state.searchItems = filteredItems
    
    
    

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
    items:state.items.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

const ConnectedApp = withRouter(connect(mapStatetoProps, mapDispatchToProps)(SearchComponent));

export default ConnectedApp;



















// export const SearchComponent = ({props}) => {
  
//   this.state ={
//     search:''
//   }

 
  


//   return (
//     <div className="search-container">
//       <form action="/action_page.php">
//         <input type="text" placeholder="Search.." name="search" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };


