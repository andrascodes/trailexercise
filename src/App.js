import React, { Component, Fragment } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'

import { getAllGames, getGamesPlayedByFriends } from './lib/GameAPI'

class App extends Component {

  state = {
    selectedGame: undefined,
    games: []
  }

  renderApp = () => (
    <Fragment>
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </Fragment>
  )

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" render={this.renderApp}/>
            <Route exact path="/games/:id" render={() => (<h1>Hello World!</h1>)}/>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
