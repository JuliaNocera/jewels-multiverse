import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css'

import App from './App'
import Ajax from './ajax'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route
        path="/ajax" 
        render={() => <Ajax isSlow={false} /> } 
      />
      <Route
        path="/slow-ajax" 
        render={() => <Ajax isSlow={true} /> } 
      />
    </div>
  </Router>
, document.getElementById('root'));
