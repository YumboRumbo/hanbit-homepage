import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/home'
import Worship from './components/worship'
import Community from './components/community'
import Mission from './components/mission'
import Direction from './components/direction'

import 'bootstrap/less/bootstrap.less'

class App extends Component {
  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/worship" component={Worship} />
          <Route path="/community" component={Community} />
          <Route path="/mission" component={Mission} />
          <Route path="/direction" component={Direction} />
        </Router>
      </div>
    )
  }
}

export default App
