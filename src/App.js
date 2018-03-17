import React, { Component, Fragment } from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'

import GameAPI from './lib/GameAPI'
import { BrowseGamesView } from './views'

class App extends Component {

  state = {
    selectedGame: undefined,
    games: []
  }

  componentDidMount() {
    this.setState({
      games: GameAPI.getAllGames()
    })
  }
  
  getGameById = id => this.state.games.find(game => game.id === id)

  renderBrowseGamesView = props => (
    <BrowseGamesView 
      games={this.state.games}
      {...props}
    />
  )

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={this.renderBrowseGamesView}/>
            <Route exact path={`${process.env.PUBLIC_URL}/games/:id`} render={() => (<h1>Hello World!</h1>)}/>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App
