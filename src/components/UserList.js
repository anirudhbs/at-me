import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/actions'
import UserCard from './UserCard'

class UserList extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getUsers())
  }

  render () {
    return (
      <div>
        {this.props.users.map(cur =>
          <UserCard key={cur._id} userId={cur.userId} displayName={cur.displayName} />
        )}
      </div>
    )
  }
}

function whatToConnect (state) {
  return {
    users: state.users
  }
}

export default connect(whatToConnect)(UserList)
