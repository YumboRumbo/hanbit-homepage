import React, { Component } from 'react'
import logo from '../../logo.svg'
import TopNavLink from './TopNavLink'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>This is a header.</h1>
        <img src={logo} alt="logo" />
        <TopNavLink />
      </div>
    )
  }
}

export default Header
