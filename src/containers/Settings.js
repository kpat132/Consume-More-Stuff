import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/index";

class Settings extends Component {
  constructor(props){
    super(props)
  
    this.state = {
    
    
    }
  }

  componentWillMount(){
  
  }

  render() {
    console.log('userrr', this.state)

    return (
      <div>
        <h1>Settings</h1>


      </div>
    );
  }
}


const mapStatetoProps = state => {
  return{
    user:state.users.user
  } 
};

const mapDispatchToProps = dispatch => {
 return{

 }
};

const ConnectedApp = connect(mapStatetoProps, mapDispatchToProps)(Settings);

export default ConnectedApp;
