import React from 'react'

import './Sidebar.css'

import PlayedByFriendsThumbnail from './PlayedByFriendsThumbnail'

const Sidebar = props => {
  return (
    <div className="Sidebar">

      <div className="SidebarContent">
        <h3>What you're friends are playing</h3>

        <div className="PlayedByFriendsList">
          {props.games.map(({ id, attributes }) => (
            <PlayedByFriendsThumbnail 
              key={`playedby-${id}`}
              name={attributes.name}
              image={attributes.img_card_bg}
              backgroundColor={attributes.img_card_avg_color}
              friends={attributes.online_friends}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Sidebar