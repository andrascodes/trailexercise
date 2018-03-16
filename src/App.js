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

  getAllGames = () => this.state.games
  getGamesPlayedByFriends = () => this.state.games.filter( 
    ({ attributes }) => 
      attributes.online_friends !== null && attributes.online_friends.length > 0
  )
  getGameById = id => this.state.games.find(game => game.id === id)

  renderBrowseGamesView = props => (
    <BrowseGamesView 
      games={this.getAllGames()}
      {...props}
    />
  )

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" render={this.renderBrowseGamesView}/>
            <Route exact path="/games/:id" render={() => (<h1>Hello World!</h1>)}/>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App
