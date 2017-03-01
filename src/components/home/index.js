import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Backgrounds from '../Backgrounds'
import Highlights from '../Highlights'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <h1>This is a home page</h1>
        <Backgrounds />
        <Highlights />
        <Footer />
      </div>
    )
  }
}

export default Home
