import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './GameThumbnail.css'

class GameThumbnail extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      imageLoaded: false
    }
  }

  componentDidMount() {

    const imgToLoad = new Image()
    imgToLoad.src = this.props.image

    imgToLoad.onload = () => {

      this.imageElement.setAttribute(
        'style',
        `background-image: url('${this.props.image}')`
      )
      this.imageElement.classList.add('show')
      
      this.setState({
        imageLoaded: true
      })
    }
  }

  handleVideoEndEvent = (event) => {
    event.target.classList.remove('show')
    this.imageElement.classList.remove('colorBackground')
  }

  handleImageInteractionStart = (event) => {
    event.preventDefault()
    event.target.play()
    event.target.addEventListener('ended', this.handleVideoEndEvent)
    event.target.classList.add('show')
    this.imageElement.classList.add('colorBackground')
  }

  handleImageInteractionEnd = (event) => {
    event.preventDefault()
    event.target.pause()
    event.target.removeEventListener('ended', this.handleVideoEndEvent)
    event.target.classList.remove('show')
    this.imageElement.classList.remove('colorBackground')
    event.target.currentTime = 0
  }

  render() {

    return (
      <Link 
        to={`${process.env.PUBLIC_URL}/games/${this.props.link}`}
        className="GameThumbnail"
      >

        <div className="GameThumbnailContainer">
          <div 
            className="GameThumbnailImageLoaded"
            ref={imageElement => this.imageElement = imageElement}
          >
          </div>

          <video 
            className="GameThumbnailVideo"
            onMouseEnter={this.handleImageInteractionStart}
            onMouseLeave={this.handleImageInteractionEnd}
            onTouchStart={this.handleImageInteractionStart}
            onTouchEnd={this.handleImageInteractionEnd}
            ref={videoElement => this.videoElement = videoElement}
            playsInline
            webkit-playsinline="true"
          >
            <source src={this.props.videos[0]} type="video/webm" />
            <source src={this.props.videos[1]} type="video/mp4" />
          </video>
          
          <div 
            className="GameThumbnailPreload"
            style={{ 
              backgroundColor: this.props.backgroundColor,
            }}
            ref={loadElement => this.loadElement = loadElement}
          >
            {this.props.name}
          </div>
        </div>

      </Link>
    )
  }
}

export default GameThumbnail