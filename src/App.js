import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jewels' Multiverse</h1>
        </header>
        <p className="App-intro">
          <h4>
            <Link to="/">Home</Link>
          </h4>
          <h4>
            <Link to="/ajax">Ajax</Link>
          </h4>
          <h4>
            <Link to="/slow-ajax">Slow Ajax</Link>
          </h4>
        </p>
      </div>
    );
  }
}

export default App;
