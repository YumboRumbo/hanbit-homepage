import React, { Component } from 'react'
import logo from '../logo.svg'

const logoStyle = {
  animation: 'App-logo-spin infinite 20s linear',
  height: '80px'
}

//TODO Add "Thumbnails" component to "Highlights"

class Highlights extends Component {
  render () {
    return (
      <div>
        <h1>This is a highlight.</h1>
        <div class="row">
          <div className="col-md-3">
            <a href="#" class="thumbnail">
              <img src={logo} alt="logo" style={logoStyle} />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" class="thumbnail">
              <img src={logo} alt="logo" style={logoStyle} />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" class="thumbnail">
              <img src={logo} alt="logo" style={logoStyle} />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" class="thumbnail">
              <img src={logo} alt="logo" style={logoStyle} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Highlights
