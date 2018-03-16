import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { getAllGames, getGamesPlayedByFriends } from './lib/GameAPI'

class App extends Component {

  render() {

    console.log('Games', getAllGames())
    console.log('Played by Friends', getGamesPlayedByFriends())


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
