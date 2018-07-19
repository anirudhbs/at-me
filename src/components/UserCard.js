import React, { Component } from 'react'

class UserCard extends Component {
  render () {
    return (
      <div>
        userId: @{this.props.userId}
        displayName: @{this.props.displayName}
      </div>
    )
  }
}

export default UserCard
