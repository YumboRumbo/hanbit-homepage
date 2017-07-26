import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Direction extends Component {
  render () {
    return (
      <div>
        <Header />
        <h1>This is a direction page.</h1>
        <h3>Address: 4717 Cardin St, San Diego, CA 92111</h3>
        <Footer />
      </div>
    )
  }
}

export default Direction
