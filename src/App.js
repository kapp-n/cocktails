import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Add from './containers/Add'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Add" component={Add} />
            </Switch>
          </div>
      </Router>
    )
  }
}
