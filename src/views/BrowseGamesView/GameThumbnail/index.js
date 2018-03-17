import React from 'react';
import {
  Link
} from 'react-router-dom'

import './GameThumbnail.css'

const GameThumbnail = (props) => {

  const style = {
    'backgroundColor': props.backgroundColor,
  }

  return (
    <div className="GameThumbnail" style={style}>
      <img src={props.image} alt=""/>
    </div>
  )
}

export default GameThumbnail