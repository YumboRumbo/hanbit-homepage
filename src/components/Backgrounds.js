import React, { Component } from 'react'
import logo from '../logo.svg'

const logoStyle = {
  animation: 'App-logo-spin infinite 20s linear',
  height: '80px'
}

// QUESTION How do I add Bootstrap-4 functionality?
// IDEA Add this code block to add carousel for background
// <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
//   <div className="carousel-inner" role="listbox">
//     <div className="carousel-item active">
//       <img src={logo} alt="logo" style={logoStyle} />
//     </div>
//     <div className="carousel-item">
//       <img src={logo} alt="logo" style={logoStyle} />
//     </div>
//     <div className="carousel-item">
//       <img src={logo} alt="logo" style={logoStyle} />
//     </div>
//   </div>
// </div>

class Backgrounds extends Component {
  render () {
    return (
      <div>
        <h1>This is a background.</h1>
      </div>
    )
  }
}

export default Backgrounds
