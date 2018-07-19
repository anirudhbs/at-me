import React, { Component } from 'react'
import { connect } from 'react-redux'

class TweetList extends Component {
  render () {
    return (
      <h2>TweetList</h2>
    )
  }
}

function whatToConnect (state) {
  return {
    tweets: state.tweets
  }
}

export default connect(whatToConnect)(TweetList)
