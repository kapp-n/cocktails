import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
      </Router>
    )
  }
}
