import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import renderHTML from 'react-render-html'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStarSolid from '@fortawesome/fontawesome-free-solid/faStar'
import faStarHalfSolid from '@fortawesome/fontawesome-free-solid/faStarHalf'
import faGamepad from '@fortawesome/fontawesome-free-solid/faGamepad'
import faKeyboard from '@fortawesome/fontawesome-free-solid/faKeyboard'
import faMousePointer from '@fortawesome/fontawesome-free-solid/faMousePointer'

import GameAPI from '../../lib/GameAPI'

import './GameDetailView.css'

class GameDetailView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      game: undefined
    }
  }

  componentDidMount() {
    const gameSlug = this.props.match.params.name
    setTimeout(() => {
      this.setState({
      game: GameAPI.getGameBySlug(gameSlug)
    })
    }, 1500)
    
  }

  renderLoader = () => {
    return (
      <div className="LoadingScreen">
        <ReactLoading type="spin" color="#31318c" height='16em' width='16em' />
      </div>
    )
  }

  renderGameDetailView = ({ 
    img_card_bg, description, name, 
    tags, review_rating, peripherals,
    video_sources, avg_match_time,
    online_players, online_friends
  }) => {

    const getStars = (review) => {
      const fullStarsLength = parseInt(review, 10)
      let halfStarLength = Number(review) % 1
      if(halfStarLength > 0) {
        halfStarLength = 1
      }
      else {
        halfStarLength = 0
      }
      return { fullStarsLength, halfStarLength  }
    }

    const { fullStarsLength, halfStarLength } = getStars(review_rating)
    const fullStars = [...Array(fullStarsLength).keys()].map(
      (star, index) => <FontAwesomeIcon key={`full-${index}`} icon={faStarSolid} />
    )
    const halfStar = halfStarLength > 0 ? <FontAwesomeIcon key={`half-star`} icon={faStarHalfSolid} /> : undefined

    return (
      <div className="GameDetailView">
        <div className="GameHeroElement">
          <div className="GameInformation">
            
            <h1 className="GameTitle">{name}</h1>
            
            <div className="GameReview">
              <div className="GameRating">
                {
                  fullStars.concat(halfStar ? [halfStar] : [])
                }
              </div>

              <p className="GameTags">
                {tags.join(', ')}
              </p>
            </div>

            <div className="GamePeripheralsContainer">
              <div className="GamePeripheralsText">
                You'll be needing these:
              </div>
              <div className="GamePeripherals">
              {peripherals.map(device => {
                const deviceToIconMap = {
                  'keyboard':  <FontAwesomeIcon icon={faKeyboard} />,
                  'mouse': <FontAwesomeIcon icon={faMousePointer} />,
                  'gamepad': <FontAwesomeIcon icon={faGamepad} />,
                }
                return (
                  <div key={`device-${device}`} className="GamePeripheral">
                    {deviceToIconMap[device]}
                  </div>
                )
              })}
              </div>
            </div>

            <div className="GameTime">
              A match takes about {avg_match_time} minutes.
            </div>

          </div>

          <img className="GameImage" src={img_card_bg} alt={`${name}`}/>
        </div>
        <div className="GameMatches">

        </div>
        <div className="GameText">
          <div className="GameDescription">
            {renderHTML(description)}
          </div>
        </div>
      </div>
    )
  }

  render() {
    if(this.state.game === undefined) {
      return this.renderLoader()
    }
    else {
      return this.renderGameDetailView(this.state.game.attributes)
    }
  }
}

export default GameDetailView;