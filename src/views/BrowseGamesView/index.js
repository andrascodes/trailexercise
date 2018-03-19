import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBell from '@fortawesome/fontawesome-free-solid/faBell'

import './BrowseGamesView.css'

import GameThumbnail from './GameThumbnail'
import Sidebar from './Sidebar'

class BrowseGamesView extends Component {

  gamesPlayedByFriends = (games) => games.filter( 
    ({ attributes }) => 
      attributes.online_friends !== null && attributes.online_friends.length > 0
  )

  componentDidMount() {
    this.sidebarToggle.onchange = () => { console.log(this.sidebarToggle.checked)}
  }
  
  
  render() {
    return (
      <div className="BrowseGamesView">
        
        <div className="Header">
          <h2>Browse Games</h2>
          <label 
            htmlFor="sidebarToggle" 
            className="Header SidebarHeader"
          >
            <FontAwesomeIcon icon={faBell} />
          </label>
        </div>

        <div className="BrowseGamesViewContent">
          <input 
            type="checkbox" id="sidebarToggle" name="sidebarToggle" 
            ref={(sidebarToggle) => this.sidebarToggle = sidebarToggle}
          />
          
          <Sidebar 
            games={this.gamesPlayedByFriends(this.props.games)}
          />

          <div className="GameList">
            {this.props.games.map(({ id, attributes }, index) => {

              return (
                <GameThumbnail 
                  key={`game-${id}`}
                  id={id}
                  name={attributes.name}
                  image={attributes.img_card_bg}
                  backgroundColor={attributes.img_card_avg_color}
                  videos={attributes.video_sources}
                  link={attributes.slug}
                />
              )
            })}
          </div>
        </div>

      </div>
    )
  }
}

export default BrowseGamesView