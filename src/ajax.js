import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class Ajax extends Component {
  render () {
    const { isSlow } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jewels' Multiverse</h1>
        </header>
        { isSlow && <h2>Someday I will be a slow ajax page</h2> }
        { !isSlow && <h2>Someday I will be an ajax page</h2> }
      </div>
    )
  }
}

export default Ajax