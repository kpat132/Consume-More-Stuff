import React, { Component } from "react";
import { connect } from "react-redux";
import {editUser} from '../actions/UserAction'


class Settings extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      username: '',
      email: ''
    }
    
  }

  handleChangeUsername(e){
this.setState({username: e.target.value})
  }
  handleChangeEmail(e){
    this.setState({email: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault()
    let updateUser = {
      id: this.props.user.id,
      username:this.state.username?this.state.username:this.props.user.username,
      email:this.state.email?this.state.email:this.props.user.email
    }
    this.props.editUser(updateUser)
  }

 

  render() {

  

    return (
      <div>
        <h1>Change Usename or Email</h1>

        <br/> <br/><br/>
        <div className='setting-form'>
          <form 
          onSubmit = {this.handleSubmit.bind(this)}>
          New Username&#160;&#160;&#160;
          
          <input type="text"
          onChange={this.handleChangeUsername.bind(this)}/>
            <br/><br/>
          New Email  &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
          
          <input type="text"
          onChange={this.handleChangeEmail.bind(this)}/>
          <br/>
          <br/>
          <br/>
          <input type="submit" value="submit" />


          
          
          
          
          
          </form>
        </div>
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

  editUser: (user)=>{
    dispatch(editUser(user));
  }
 }
};

const ConnectedApp = connect(mapStatetoProps, mapDispatchToProps)(Settings);

export default ConnectedApp;
