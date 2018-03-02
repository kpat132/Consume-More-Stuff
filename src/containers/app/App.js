import React, { Component } from "react";

import "./App.css";
import NavComponent from "../../components/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Codely_Tool</h1>
        </header>
        <nav className="Navbar">
          <NavComponent />
        </nav>
        <p className="App-intro">Buy, sell and connect.</p>
      </div>
    );
  }
}

export default App;
