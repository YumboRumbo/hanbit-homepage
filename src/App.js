import React, { Component } from 'react'
import Header from './components/Header'
import Backgrounds from './components/Backgrounds'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

import 'bootstrap/less/bootstrap.less'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Backgrounds />
        <Highlights />
        <Footer />
      </div>
    )
  }
}

export default App
