import React from 'react'

import './BrowseGamesView.css'

import GameThumbnail from './GameThumbnail'
import Sidebar from './Sidebar'

const BrowseGamesView = (props) => {

  const gamesPlayedByFriends = props.games.filter( 
    ({ attributes }) => 
      attributes.online_friends !== null && attributes.online_friends.length > 0
  )

  return (
    <div className="BrowseGamesView">
      
      <h2>Browse Games</h2>

      <div className="BrowseGamesViewContent">
        <div className="GameList">
          {props.games.map(({ id, attributes }) => (
            <GameThumbnail 
              key={`game-${id}`}
              name={attributes.name}
              image={attributes.img_card_bg}
              backgroundColor={attributes.img_card_avg_color}
            />
          ))}
        </div>

        <Sidebar 
          games={gamesPlayedByFriends}
        />
      </div>

    </div>
  )
}

export default BrowseGamesView