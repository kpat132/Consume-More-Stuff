import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {getItems} from '../../actions/index'

class App extends Component {
  constructor(props){
    super(props)

  }

  componentWillMount() {
    this.props.getItems();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {console.log(this.props)}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStatetoProps = state =>{
  
  return state.items
}

const mapDispatchToProps = dispatch =>{
  return{

  getItems: ()=>{
    dispatch(getItems())
   }
  }
}

const ConnectedApp = connect(
  mapStatetoProps,
  mapDispatchToProps
)(App)

export default ConnectedApp
