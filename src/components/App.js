import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import UserList from './UserList'
import Login from './Login'
import '../styles.css'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <h2>Home</h2>} />
          <Route path='/users' component={() => <UserList />} />
          <Route path='/login' component={Login} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
