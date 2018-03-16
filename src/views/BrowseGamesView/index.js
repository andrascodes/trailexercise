import React from 'react'

import './BrowseGamesView.css'

import GameThumbnail from './GameThumbnail'

const BrowseGamesView = (props) => {
  return (
    <div className="BrowseGamesView">
      
      <h2>Browse Games</h2>

      <div className="GameList">
        {props.games.map(({ id, attributes }) => (
          <GameThumbnail 
            key={id}
            name={attributes.name}
            image={attributes.img_card_bg}
            backgroundColor={attributes.img_card_avg_color}
          />
        ))}
      </div>

      <div className="Sidebar">

      </div>

    </div>
  )
}

export default BrowseGamesView