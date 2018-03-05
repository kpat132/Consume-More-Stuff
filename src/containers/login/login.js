import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/loginAction';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handlelogin = this.handlelogin.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handlelogin(event) {
    event.preventDefault();
    console.log('THIS.STATE',this.state);
    this.props.login(this.state);
  }
  render() {
    console.log('PROPS',this.props);
    return (
      <div>
      <h1>LOGIN</h1>
      <form onSubmit={this.handlelogin}>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          />
        <input
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          />
        <button type='submit'>Submit</button>
      </form>
          </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.users.user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    login: ((user)=> {
      dispatch(loginAction(user));
    })
  }
}
const ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(Login);

export default ConnectedLogin;