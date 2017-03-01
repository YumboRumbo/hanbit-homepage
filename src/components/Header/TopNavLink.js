import React, { Component } from 'react'
import { Link } from 'react-router'

class TopNavLink extends Component {
  render () {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/worship">Worship</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/mission">Mission</Link></li>
          <li><Link to="/direction">direction</Link></li>
        </ul>
      </div>
    )
  }
}

export default TopNavLink
