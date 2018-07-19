import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <ul>
        <li><Link to='/users'>users</Link></li>
        <li><Link to='/login'>login</Link></li>
      </ul>
    )
  }
}

export default Header
