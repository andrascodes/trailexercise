import React, { Component } from 'react'

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
      );
      this.imageElement.classList.add('show');
      
      this.setState({
        imageLoaded: true
      })
    }
  }

  render() {

    return (
      <div className="GameThumbnail">

        <div className="GameThumbnailContainer">
          <div 
            className="GameThumbnailImageLoaded"
            ref={imageElement => this.imageElement = imageElement}
          >
          </div>
          
          <div 
            className="GameThumbnailPreload"
            style={{ 
              backgroundColor: this.props.backgroundColor,
            }}
          >
          </div>
        </div>

        {/* <div
          className={`GameThumbnailContainer`}
          style={{ 
            backgroundColor: this.props.backgroundColor,
            padding: '24.8% 0'
          }}
          ref={imgContainerElement => this.containerElement = imgContainerElement}
        >
          <img 
            className={`GameThumbnailImage ${this.state.imageLoaded ? 'show' : 'hide'}`}
            ref={imageElement => this.imageElement = imageElement}
            src={this.props.image}
            alt={this.props.name}
          />
        </div> */}

        {/* <div 
            className="GameThumbnailPlaceholderText"
            style={{ display:  this.state.imageLoaded ? 'none' : '' }}
          >
            {this.props.name}
          </div> */}

          {/* <div className="GameThumbnailContent"
            style={{ padding: '28.125% 0' }}
          >
            
          </div> */}


          
          {/* <div className="GameThumbnailContent" 
            style={{ padding: '31.45% 0' }}
            /> 
            style={{ backgroundColor: this.props.backgroundColor }}
            >
            <div className="GameThumbnailContent" 
            style={{ padding: '28.125% 0' }}
          */}

      </div>
    )
  }
}

export default GameThumbnail