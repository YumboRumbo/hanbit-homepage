import React, { Component } from 'react'
import { Link } from 'react-router'

class TopNavLink extends Component {
  render () {
    return (
      <div>
        <ul role="nav" className="nav nav-pills">
          <li role="presentation"><Link to="/">Home</Link></li>
          <li role="presentation"><Link to="/worship">Worship</Link></li>
          <li role="presentation"><Link to="/community">Community</Link></li>
          <li role="presentation"><Link to="/mission">Mission</Link></li>
          <li role="presentation"><Link to="/direction">Direction</Link></li>
        </ul>
      </div>
    )
  }
}

export default TopNavLink
