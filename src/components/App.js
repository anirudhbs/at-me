import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import UserList from './users/UserList'
import Login from './Login'
import Feed from './Feed'
import '../styles.css'
import { getAccessToken } from '../actions/actions'

class App extends Component {
  render () {
    const isUserLoggedIn = typeof getAccessToken() === 'string'
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/users' component={UserList} />
          <Route path='/' component={isUserLoggedIn ? Feed : Login} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
