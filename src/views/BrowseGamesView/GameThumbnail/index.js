import React from 'react';

import './GameThumbnail.css'

const GameThumbnail = (props) => {

  const style = {
    'backgroundImage': `url(${props.image})`,
    'backgroundColor': props.backgroundColor,
  }

  return (
    <div className="GameThumbnail" style={style}>
      
    </div>
  )
}

export default GameThumbnail