import React, { Component } from 'react'
import logo from '../../logo.svg'
import TopNavLink from './TopNavLink'

const logoStyle = {
  animation: 'App-logo-spin infinite 20s linear',
  height: '80px'
}

class Header extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <img src={logo} alt="logo" style={logoStyle} />
        </div>
        <div className="col-md-8">
          <TopNavLink />
        </div>
      </div>
    )
  }
}

export default Header
