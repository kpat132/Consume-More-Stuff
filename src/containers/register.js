import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { register } from "../actions/UserAction";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegister(event) {
    event.preventDefault();
    this.props.register(this.state);
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="register-container">
        <h1 className="register-title">REGISTER</h1>
        <div className="registerForm">
          <form onSubmit={this.handleRegister}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <br />
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: user => {
      dispatch(register(user));
    }
  };
};

const ConnectedRegister = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterUser)
);

export default ConnectedRegister;
