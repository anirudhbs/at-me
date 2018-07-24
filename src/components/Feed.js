import React, { Component } from 'react'
import NewTweet from './tweets/NewTweet'
import TweetList from './tweets/TweetList'

class Feed extends Component {
  render () {
    return (
      <React.Fragment>
        <NewTweet />
        <TweetList />
      </React.Fragment>
    )
  }
}

export default Feed
