import React, { Component } from 'react'

class UserCard extends Component {
  render () {
    return (
      <div>
        displayName: {this.props.displayName}
      </div>
    )
  }
}

export default UserCard
