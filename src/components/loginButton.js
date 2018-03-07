import React, {Component} from "react";
import { connect } from "react-redux";
import {logout} from '../actions/UserAction';

class LoginButtonComponent extends Component{
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    this.props.logout();
  }


  render() {
    return(
      <div className="login-container">

        <a href='http://localhost:3000/login'>
          <button type="submit">Login</button>
        </a>
        <a href='http://localhost:3000/register'>
          <button type="submit">Register</button>
        </a>

      
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    userLogout: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return{
    logout: ()=> {
      dispatch(logout());
    }
  }
}


const ConnectedButtons = connect(mapStateToProps, mapDispatchToProps)(LoginButtonComponent)
export default ConnectedButtons;
