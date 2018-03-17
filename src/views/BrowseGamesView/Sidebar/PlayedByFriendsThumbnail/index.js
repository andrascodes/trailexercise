import React from 'react';

import './PlayedByFriendsThumbnail.css'

const PlayedByFriendsThumbnail = (props) => {

  const style = {
    'backgroundImage': `url(${props.image})`,
    'backgroundColor': props.backgroundColor,
  }

  const createPlayedByCaption = friends => {
    if(friends.length > 2) {
      return `${friends[0].username}, ${friends[1].username} 
                and ${friends.length - 2} others playing now`
    }
    else if(friends.length === 2) {
      return `${friends[0].username} and ${friends[1].username} playing now`
    }
    else {
      return `${friends[0].username} is playing now`
    }
    
  }

  return (
    <div className="PlayedByFriendsThumbnail">
      <div className="PlayedByFriendsImage" style={style}/>
      <div className="PlayedByFriendsText">
        <p className="PlayedByFriendsTitle">{props.name}</p>
        <p className="PlayedByFriendsCaption">{createPlayedByCaption(props.friends)}</p>
      </div>
    </div>
  );
};

export default PlayedByFriendsThumbnail;