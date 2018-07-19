import React, { Component } from 'react'

class UserCard extends Component {
  render () {
    return (
      <div>
        userId: @{this.props.userName}
        displayName: {this.props.displayName}
      </div>
    )
  }
}

export default UserCard
